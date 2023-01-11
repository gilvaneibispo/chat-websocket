# Chat Websocket

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)
<!-- ![Badge Finalizado](https://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=red&style=for-the-badge) -->

### Resumo do projeto

Esta aplicação foi criada em minha introdução ao WebSocket e Programação assícrona com PHP. Usa a Ratchet no back-end
e CSS e JavaScript puros no front-end. Mais detalhes serão implementados posteriormente.

### Tecnologias utilizadas

- `Ratchet PHP [WebSocket]`

### Acesso ao projeto

Clone este projeto por meio de SSH ou link HTTPS, ou ainda, baixe o código compactado.

#### Carregar as dependências
Após clonar o projeto seguindo um dos passos acima, inici o composer.

```
composer install
```

#### Rode o servidor
```
cd server/bin
```

```
php chat-serve.php
```

#### Rode o cliente

```
cd client
```

```
php -S localhost:8080
```

Abra duas janelas do cliente na URL `localhost:8080`.
<br/><br/>
O servidor roda na porta `9300`, para trocar substitua o valor da variável `$port` no script `bin/chat-server.php`.
Não esqueça de informar a nova porta no cliente e reiniciar o servidor.