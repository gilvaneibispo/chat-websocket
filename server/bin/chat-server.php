<?php
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use GBispo\Chat\Chat;

require dirname(__DIR__) . '/vendor/autoload.php';

$port = 9300;

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new Chat()
        )
    ),
    $port
);

$server->run();