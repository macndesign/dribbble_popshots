## Dribbble PopShots
[![Build Status](https://travis-ci.org/macndesign/dribbble_popshots.svg)](https://travis-ci.org/macndesign/dribbble_popshots)
Aplicação client-side que consulta a API do Dribbble e mostra os shots mais populares.

# Instalação para executar os testes
- Instale o NodeJS
- npm install -g karma-cli
- Na raiz da app: npm install
- Execute os testes com: karma start

# Instalação para executar a app
- Na raiz da app: bower install
- Ainda na raiz, se estiver em Linux ou Mac, eles já tem o Python, execute: python -m SimpleHTTPServer
- Acesse em http://localhost:8000

# Publicando no GitHub Pages
- git checkout gh-pages
- git merge master
- git push origin gh-pages
