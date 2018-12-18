# Workshop 2018

Repository per i seminari del 14/12/2018 e del 18/12/2018 su Git, Polymer e NodeJS nel corso di Programmazione Avanzata

Le slide sono disponibili [qua](http://for.unipi.it/federico_galatolo/teaching/)

## TODO

- [x] Utilizzare ```dom-repeat``` in ```todo-list```
- [x] Integrare ```app-header-layout``` ed eliminare il CSS attuale in ```webapp-app```
- [x] Creare un custom element con il dialog per l'inserimento di nuovi todo
- [x] Integrare il custom element con il dialog nella UI principale
- [ ] Scaricare la lista dal webserver al caricamento della pagina
- [ ] Propagare rimozione e inserimento di nuove note al webserver
- [ ] Introdurre la possibilita' di modificare le note
- [ ] Inviare le modifiche delle note al webserver

## Funzionamento webserver

```GET /list``` : ritorna la lista dei todo

```POST /list``` : aggiunge un nuovo todo, il valore va passato nel corpo della richiesta come

        {
            todo: {
                value: "prova 1"
            }
        }
```DELETE /todo/:id``` : rimuove un todo aggiunto precedentemente, il secondo "parametro" e' l'indice nella lista 

```PUT /todo/:id``` : modifica un todo aggiunto precedentemente, il nuovo valore va passato nel corpo (come con il POST)

## Contributors

- @mirko-laruina