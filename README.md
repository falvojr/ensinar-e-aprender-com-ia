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
2. **Mapear** (2020): 185 estudos sobre tecnologia no ensino com línguas de sinais mostram muitas soluções pontuais e poucos ambientes integrados.
3. **Arquitetar** (doutorado): a Speech2Learning, uma arquitetura que usa reconhecimento de fala para tornar Aulas em vídeo acessíveis, com o serviço de fala como peça trocável.
4. **Medir** (2022 a 2024): no meio do caminho chegam o Whisper e o ChatGPT. Entre cinco serviços testados com Aulas reais, o Whisper fica na frente e vira o padrão sem reescrever a arquitetura.
5. **Ouvir** (2024 a 2026): intérpretes de Libras mostram que precisão não é compreensão. A tese termina apontando para agentes de IA na arquitetura.
6. **Agir** (hoje): na indústria, de transcrever a escrever, encadear e agir com agentes e harness. O que a pesquisa ensinou à prática: reusar, desacoplar, medir e validar.
7. **Próximo** (futuro): um agente intermediário para Libras, validado por intérpretes e Estudantes surdos, e agentes na indústria com uma pessoa no circuito.

Cerca de 40 minutos, mais perguntas. As notas de cada slide trazem ganchos para improvisar, e não um roteiro.

## 📚 Referências

Numeradas na ordem em que aparecem nos slides. Nos slides, cada número entre colchetes leva à publicação.

1. [**Variability-based Improvement of M-Learning Applications Development**](https://doi.org/10.3897/jucs.90663). V. FalvoJr, A. S. Marcolino, N. F. Duarte Filho, E. OliveiraJr e E. F. Barbosa. *Journal of Universal Computer Science (J.UCS)*, 2022.
2. [**Tecnologias Aplicadas ao Ensino e Aprendizagem com Línguas de Sinais: Um Mapeamento Sistemático Sob as Perspectivas Nacional e Internacional**](https://doi.org/10.22456/1679-1916.110217). V. FalvoJr, C. Martins Falvo, L. P. Scatalon e E. F. Barbosa. *Revista Novas Tecnologias na Educação (RENOTE)*, v. 18, n. 2, 2020.
3. [**Speech2Learning: Uma Arquitetura de Software Baseada em Reconhecimento de Fala para Promover a Acessibilidade de Objetos de Aprendizagem**](https://doi.org/10.11606/T.55.2024.tde-15012025-095523). V. FalvoJr. *Tese de Doutorado, ICMC, Universidade de São Paulo*, 2024.
4. [**Lexical Analysis of Automatic Transcriptions Using Speech-to-Text Services: A Statistically Evaluated Case Study**](https://hdl.handle.net/10125/107023). V. FalvoJr, A. S. Marcolino, D. R. Bruno, C. H. Martins Falvo, F. S. Osório e E. F. Barbosa. *Proc. 57th Hawaii International Conference on System Sciences (HICSS)*, 2024.
5. **Qualitative Evaluation of Automatic Speech Recognition Integrated with Sign Language Avatars in Accessible Video Players: Interpreter Perspectives**. V. FalvoJr, T. C. Valverde, F. S. Oliveira, C. H. Martins Falvo, A. S. Marcolino e E. F. Barbosa. *IEEE Frontiers in Education Conference (FIE)*, 2026.
6. [**Building effective agents**](https://www.anthropic.com/engineering/building-effective-agents). Anthropic. *Engineering*, dez. 2024.
7. [**Building agents with the Claude Agent SDK**](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk). Anthropic. *Engineering*.
8. [**Equipping agents for the real world with Agent Skills**](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills). Anthropic. *Engineering*, out. 2025.

## 🔗 Links

- [Participe da pesquisa Speech2Learning](https://forms.gle/hkWZNrKs1uwhjwUS8): buscamos pessoas ouvintes fluentes em Português e Libras (TILS, CODAs e ouvintes sinalizantes) para uma entrevista por Google Meet de até 30 minutos. Pesquisa aprovada pelo CEP/EACH-USP, CAAE 78381524.3.0000.5390.
- [IA e Carreiras do Futuro](https://github.com/falvojr/dio-carreiras-futuro), a palestra anterior

## 🛠️ Sobre o Desenvolvimento

Estrutura, conteúdo e design dos slides foram construídos com Claude Code (Claude Opus 5.5), a partir da tese, dos artigos e da palestra anterior. Os conceitos de agente, harness e skill seguem as definições das referências 6 a 8. Cada número dos slides foi conferido na fonte antes de entrar.

```
ensinar-e-aprender-com-ia/
├── index.html    # Slides, estilos, notas do apresentador e navegação
└── README.md     # Resumo, roteiro e referências
```
