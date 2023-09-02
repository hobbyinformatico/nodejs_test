# nodejs_test
nodejs_test per testare l'avvio di un server semplice

## Avvio server
0. nvm install 18.16.0
1. nvm use 18.16.0
2. node main.js

## Serveo (esposizione esterna)
1. Dopo aver avviato tutto "Avvio server"
2. ssh -o ServerAliveInterval=60 -R 80:localhost:3000 serveo.net
3. accedere al link generato dal comando precedente
