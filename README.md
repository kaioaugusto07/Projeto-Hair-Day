# Projeto Hair Day

*Hair Day é um sistema web de Barbearia intuitivo e responsivo que permite agendar e gerenciar seus serviços de forma prática e eficiente.*

## Tecnologias
- *HTML5*
- *CSS3*
- *JavaScript* (ES6+)

### Build & Bundler
- *Webpack* - Empacotador de módulos
- *Webpack CLI* - Interface de linha de comando
- *Webpack Dev Server* - Servidor de desenvolvimento

### Transpiling
- *Babel Core* - Transpilador JavaScript
- *Babel Preset Env* - Configuração de compatibilidade
- *Babel Loader* - Integração Babel com Webpack

### Loaders & Plugins
- *Style Loader* - Injeção de CSS no DOM
- *CSS Loader* - Processamento de CSS
- *HTML Webpack Plugin* - Geração de HTML
- *Copy Webpack Plugin* - Cópia de arquivos estáticos

### Bibliotecas
- *Day.js* - Manipulação de datas e horas
- *JSON Server* - Servidor Mock para API REST


## Pré-requisitos
- Node.js (v18+)
- npm

## 🎯 Como Usar

### Desenvolvimento
```bash
npm run dev
```
Inicia o servidor de desenvolvimento (Webpack Dev Server)
### Servidor
```bash
npm run server
```
Inicia o JSON Server na porta 3333
### Build
```bash
npm run build
```
Gera a versão otimizada para produção.