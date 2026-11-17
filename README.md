# Educação na Era dos Agentes de IA: Oportunidades e Desafios

Muito se fala em agentes de IA, mas o que muda na prática para quem ensina e para quem aprende? Nesta palestra, compartilho experiências reais da Edtech DIO, dos primeiros usos de IA generativa até a evolução atual para agentes e harness, como o Claude Code em projetos super automatizados, mostrando sem hype onde essas ferramentas ajudam de verdade e onde ainda ficam devendo. A conversa conecta essa vivência técnica com a pesquisa que venho desenvolvendo em IA aplicada à educação.

> Relato pessoal: as opiniões são minhas e não representam a DIO.

## 📊 Apresentação

**Slides disponíveis em:** [falvojr.github.io/ensinar-e-aprender-com-ia](https://falvojr.github.io/ensinar-e-aprender-com-ia)

Um único `index.html`, sem build. Para apresentar:

- **→, Espaço ou PageDown** revelam o próximo item e depois avançam; **←** volta.
- **P** abre as notas do apresentador em outra janela, com cronômetro. Deixe essa janela no segundo monitor e compartilhe só a dos slides.
- **N** mostra as notas na própria tela, para ensaiar.
- **F** liga a tela cheia. **Ctrl+P** gera um PDF com um slide por página, como plano B offline.

## 🧭 A História em Sete Capítulos

Duas trilhas, a pesquisa em Engenharia de Software aplicada à educação e a atuação na indústria, que se encontram quando Aulas reais viram estudo de caso. Uma barra no topo dos slides mostra em que capítulo a história está.

1. **Reusar** (mestrado): como construir apps de aprendizagem móvel sem começar do zero? Uma linha de produto de software.
2. **Mapear** (2020): 185 estudos sobre tecnologia no ensino com línguas de sinais mostram muita solução pontual e poucos ambientes integrados.
3. **Arquitetar** (doutorado): a Speech2Learning, uma arquitetura que usa reconhecimento de fala para tornar Aulas em vídeo acessíveis, com o serviço de fala como peça trocável.
4. **Medir** (2022 a 2024): no meio do caminho chegam o Whisper e o ChatGPT. Entre cinco serviços testados com Aulas reais, o Whisper fica na frente e vira o padrão sem reescrever a arquitetura.
5. **Ouvir** (2024 a 2026): intérpretes de Libras mostram que precisão não é compreensão. A tese termina apontando para agentes de IA na arquitetura.
6. **Agir** (hoje): na indústria, de transcrever a escrever, encadear e agir com agentes e harness. O que a pesquisa ensinou à prática: reusar, desacoplar, medir e validar.
7. **Próximo** (futuro): um agente intermediário para Libras, validado por intérpretes e Estudantes surdos, e agentes na indústria com uma pessoa no circuito.

Cerca de 40 minutos, mais perguntas. As notas de cada slide trazem ganchos para improvisar, e não um roteiro.

## 📚 Publicações Citadas

**Mestrado**

- **IEEE FIE 2017.** Soad, G.; Fioravanti, M.; FalvoJr, V.; Marcolino, A.; Duarte Filho, N.; Barbosa, E. F. *ReqML-catalog: The Road to a Requirements Catalog for Mobile Learning Applications.* [doi.org/10.1109/FIE.2017.8190718](https://doi.org/10.1109/FIE.2017.8190718)
- **J.UCS 2022.** FalvoJr, V.; Marcolino, A.; Duarte Filho, N.; OliveiraJr, E.; Barbosa, E. F. *Variability-based Improvement of M-Learning Applications Development.* Journal of Universal Computer Science. [doi.org/10.3897/jucs.90663](https://doi.org/10.3897/jucs.90663)

**Doutorado e depois**

- **RENOTE 2020.** FalvoJr, V.; Martins Falvo, C.; Scatalon, L. P.; Barbosa, E. F. *Tecnologias Aplicadas ao Ensino e Aprendizagem com Línguas de Sinais: Um Mapeamento Sistemático Sob as Perspectivas Nacional e Internacional.* [seer.ufrgs.br/renote/article/view/110217](https://seer.ufrgs.br/renote/article/view/110217/0)
- **HICSS 2024.** FalvoJr, V.; Marcolino, A. S.; Bruno, D. R.; Martins Falvo, C. H.; Osório, F. S.; Barbosa, E. F. *Lexical Analysis of Automatic Transcriptions Using Speech-to-Text Services: A Statistically Evaluated Case Study.* [hdl.handle.net/10125/107023](https://hdl.handle.net/10125/107023)
- **IEEE FIE 2024.** FalvoJr, V.; Marcolino, A. S.; Bruno, D. R.; Martins Falvo, C. H.; Osório, F. S.; Barbosa, E. F. *Enhancing Learning Objects Accessibility Through Speech-To-Text Based Architecture: A Comprehensive Triangulation Study.* [doi.org/10.1109/FIE61694.2024.10893453](https://doi.org/10.1109/FIE61694.2024.10893453)
- **Tese 2024.** FalvoJr, V. *Speech2Learning: Uma Arquitetura de Software Baseada em Reconhecimento de Fala para Promover a Acessibilidade de Objetos de Aprendizagem.* Tese (Doutorado), ICMC-USP. [doi.org/10.11606/T.55.2024.tde-15012025-095523](https://doi.org/10.11606/T.55.2024.tde-15012025-095523)
- **IEEE FIE 2026.** FalvoJr, V.; Valverde, T. C.; Oliveira, F. S.; Martins Falvo, C. H.; Marcolino, A. S.; Barbosa, E. F. *Qualitative Evaluation of Automatic Speech Recognition Integrated with Sign Language Avatars in Accessible Video Players: Interpreter Perspectives.*

## 🔗 Links

- [Player acessível v2 (demo)](https://falvojr.github.io/speech2learning/player/v2)
- [IA e Carreiras do Futuro](https://github.com/falvojr/dio-carreiras-futuro), a palestra anterior

## 🛠️ Sobre o Desenvolvimento

Estrutura, conteúdo e design dos slides foram construídos com Claude Code (Claude Opus 5.5), a partir da tese, dos artigos e da palestra anterior. Antes da versão final vieram três propostas com ângulos diferentes, que ficaram em [`propostas/`](propostas/) para quem quiser ver o processo. Cada número dos slides foi conferido na fonte antes de entrar.

```
ensinar-e-aprender-com-ia/
├── index.html    # Slides, estilos, notas do apresentador e navegação
└── propostas/    # As propostas que levaram à versão final
```
