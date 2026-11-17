// Motor comum das propostas.
// Teclas: → Espaço PageDown avançam (revelam fragmentos antes); ← PageUp voltam;
// Home e End; F tela cheia; N notas na tela; P notas do apresentador em outra janela.
(function () {
    const stage = document.querySelector('.stage');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const total = slides.length;
    let current = 0;
    let presenter = null;
    let startedAt = null;

    if (new URLSearchParams(location.search).has('thumb')) document.body.classList.add('thumb');

    document.body.insertAdjacentHTML('beforeend',
        '<nav class="controls" aria-label="Navegação dos slides">' +
        '<button type="button" data-act="prev" aria-label="Anterior" title="Anterior (←)">←</button>' +
        '<span class="counter" aria-hidden="true"></span>' +
        '<button type="button" data-act="next" aria-label="Próximo" title="Próximo (→)">→</button>' +
        '<button type="button" data-act="presenter" aria-label="Notas do apresentador" title="Notas do apresentador (P)">🗒</button>' +
        '<button type="button" data-act="fullscreen" aria-label="Tela cheia" title="Tela cheia (F)">⛶</button>' +
        '</nav>' +
        '<div class="progress" aria-hidden="true"><div></div></div>' +
        '<div class="sr-only" aria-live="polite"></div>' +
        '<section class="notes-panel" aria-label="Notas do slide" hidden></section>');

    const counter = document.querySelector('.controls .counter');
    const bar = document.querySelector('.progress div');
    const live = document.querySelector('[aria-live]');
    const notesPanel = document.querySelector('.notes-panel');

    function fit() {
        stage.style.setProperty('--scale', Math.min(window.innerWidth / 1600, window.innerHeight / 900));
    }

    function titleOf(i) { return slides[i].dataset.title || ('Slide ' + (i + 1)); }
    function notesOf(i) { const n = slides[i].querySelector('.notes'); return n ? n.innerHTML : '<p>Sem notas.</p>'; }
    function frags(i) { return Array.from(slides[i].querySelectorAll('.frag')); }

    function go(n, fragState, announce) {
        n = Math.max(0, Math.min(total - 1, n));
        slides.forEach(function (s, i) {
            const on = i === n;
            s.classList.toggle('active', on);
            s.setAttribute('aria-hidden', on ? 'false' : 'true');
            s.inert = !on;
        });
        frags(n).forEach(function (f) { f.classList.toggle('on', fragState === 'end'); });
        current = n;
        counter.textContent = (n + 1) + ' / ' + total;
        bar.style.width = ((n + 1) / total * 100) + '%';
        if (announce !== false) live.textContent = 'Slide ' + (n + 1) + ' de ' + total + ': ' + titleOf(n);
        const hash = '#' + (n + 1);
        if (location.hash !== hash) history.replaceState(null, '', location.pathname + location.search + hash);
        if (!notesPanel.hidden) renderNotes();
        updatePresenter();
    }

    function next() {
        const hidden = frags(current).find(function (f) { return !f.classList.contains('on'); });
        if (hidden) { hidden.classList.add('on'); updatePresenter(); return; }
        if (current < total - 1) go(current + 1, 'start');
    }

    function prev() {
        const shown = frags(current).filter(function (f) { return f.classList.contains('on'); });
        if (shown.length) { shown[shown.length - 1].classList.remove('on'); updatePresenter(); return; }
        if (current > 0) go(current - 1, 'end');
    }

    function renderNotes() {
        notesPanel.innerHTML = '<h4>Notas · ' + (current + 1) + ' / ' + total + ' · ' + titleOf(current) + '</h4>' + notesOf(current);
    }

    function toggleNotes() {
        notesPanel.hidden = !notesPanel.hidden;
        if (!notesPanel.hidden) renderNotes();
    }

    function toggleFullscreen() {
        if (!document.fullscreenElement) { if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen(); }
        else if (document.exitFullscreen) document.exitFullscreen();
    }

    function elapsed() {
        if (!startedAt) return '00:00';
        const s = Math.floor((Date.now() - startedAt) / 1000);
        return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
    }

    function updatePresenter() {
        if (!presenter || presenter.closed) return;
        const d = presenter.document;
        const set = function (id, html) { const el = d.getElementById(id); if (el) el.innerHTML = html; };
        const f = frags(current);
        const shown = f.filter(function (x) { return x.classList.contains('on'); }).length;
        set('p-pos', (current + 1) + ' / ' + total + (f.length ? ' · revelados ' + shown + ' de ' + f.length : ''));
        set('p-title', titleOf(current));
        set('p-notes', notesOf(current));
        set('p-next', current < total - 1 ? 'Próximo: ' + titleOf(current + 1) : 'Último slide');
        set('p-timer', elapsed());
    }

    function openPresenter() {
        if (presenter && !presenter.closed) { presenter.focus(); return; }
        presenter = window.open('', 'apresentador', 'width=980,height=720');
        if (!presenter) { alert('Permita pop-ups nesta página para abrir as notas do apresentador.'); return; }
        if (!startedAt) startedAt = Date.now();
        const d = presenter.document;
        d.open();
        d.write('<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Notas do apresentador</title><style>' +
            'body{margin:0;background:#101218;color:#fff;font:19px/1.55 system-ui,sans-serif;padding:24px 30px}' +
            'header{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #888;padding-bottom:12px;margin-bottom:16px}' +
            '#p-title{font-size:26px;font-weight:800}#p-pos{opacity:.7;font-weight:600}#p-timer{font:700 32px ui-monospace,Consolas,monospace}' +
            '#p-notes{font-size:22px}#p-notes li{margin:0 0 10px 24px}#p-next{margin-top:18px;opacity:.6}' +
            '.bar{display:flex;gap:12px;margin-top:22px}button{font:600 17px system-ui,sans-serif;padding:10px 18px;border-radius:10px;border:1px solid #888;background:#22252e;color:#fff;cursor:pointer}' +
            '</style></head><body><header><div><div id="p-pos"></div><div id="p-title"></div></div><div id="p-timer">00:00</div></header>' +
            '<div id="p-notes"></div><div id="p-next"></div>' +
            '<div class="bar"><button id="p-prev">← Voltar</button><button id="p-nextbtn">Avançar →</button><button id="p-reset">Zerar cronômetro</button></div>' +
            '</body></html>');
        d.close();
        d.addEventListener('keydown', onKey);
        d.getElementById('p-prev').addEventListener('click', prev);
        d.getElementById('p-nextbtn').addEventListener('click', next);
        d.getElementById('p-reset').addEventListener('click', function () { startedAt = Date.now(); updatePresenter(); });
        updatePresenter();
    }

    setInterval(function () {
        if (presenter && !presenter.closed) {
            const el = presenter.document.getElementById('p-timer');
            if (el) el.textContent = elapsed();
        }
    }, 1000);

    function onKey(e) {
        const k = e.key;
        const onControl = e.target && e.target.closest && e.target.closest('a, button');
        if (k === 'ArrowRight' || k === 'ArrowDown' || k === 'PageDown' || k === ' ' || (k === 'Enter' && !onControl)) {
            e.preventDefault(); next();
        } else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp' || k === 'Backspace') {
            e.preventDefault(); prev();
        } else if (k === 'Home') {
            e.preventDefault(); go(0, 'start');
        } else if (k === 'End') {
            e.preventDefault(); go(total - 1, 'end');
        } else if (k === 'f' || k === 'F') {
            toggleFullscreen();
        } else if (k === 'n' || k === 'N') {
            toggleNotes();
        } else if (k === 'p' || k === 'P') {
            openPresenter();
        } else if (k === 'Escape' && !notesPanel.hidden) {
            notesPanel.hidden = true;
        }
    }

    document.addEventListener('keydown', onKey);
    document.querySelector('[data-act="prev"]').addEventListener('click', prev);
    document.querySelector('[data-act="next"]').addEventListener('click', next);
    document.querySelector('[data-act="presenter"]').addEventListener('click', openPresenter);
    document.querySelector('[data-act="fullscreen"]').addEventListener('click', toggleFullscreen);

    let touchX = null;
    document.addEventListener('touchstart', function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
    document.addEventListener('touchend', function (e) {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) { if (dx < 0) next(); else prev(); }
        touchX = null;
    }, { passive: true });

    window.addEventListener('resize', fit);
    window.addEventListener('hashchange', function () {
        const n = parseInt(location.hash.slice(1), 10);
        if (!isNaN(n) && n - 1 !== current) go(n - 1, 'start');
    });

    fit();
    const start = parseInt(location.hash.slice(1), 10);
    go(isNaN(start) ? 0 : start - 1, 'start', false);
})();
