# Thema: Docker
Nicht Prüfungsrelevant, aber für Projekt benötigt.  

Erzeugen einer isolierten Umgebung (wie Virtuelle Maschine) die dann portierbar auf anderen Plattformen laufen kann, z.B. einer Cloud  

## Building a Dockerimage
->in Console
> docker build -t example1-image .  

## Dockerfile
Dockerfile contents:
```
# syntax=docker/dockerfile:1  
FROM node:12-alpine  
RUN apk add --no-cache python2 g++ make  
COPY . .  
RUN yarn install --production  
CMD ["node", "src/index.js"]  
```

## Running an Image
-> in Console
> docker run example1-image

## Binding Ports
-> in Console
> docker run -p 3000:3000 example1-image
oder
> docker run -p 8080:3000 example1-image
-p localeport:vmport  

Es können auch mehrere Instanzen des selbem Images gestartet werden.  
Die Flag -d (detached) sorgt dafür, dass die Console nicht blockiert wird.  
>docker run -d -p 8080:3000 example1-image

# Thema Express JS
POST /hasutiere
GET /haustiere/hund
PUT /haustiere/hund
DELETE /hautiere/hund

## Request handling
HTTP-Methoden  
- Anfragen mit der **POST**-Methode können Daten zur weiteren Verarbeitung zum Server senden  
- Anfragen mit der **GET**-Methode können Daten (z.B. Dateien) vom Server anfordern  
- Anfragen mit der **PUT**-Methode können Daten auf einem Server aktualisieren  
- Anfragen mit der **DELETE**-Methode löscht die angegebenen Daten auf dem Server  

## Unterschied PUT und POST
Definition in der Informatik:  
"... Ein wichtiger Spezialfall sind idempotente Funktionen bezüglich der Hintereinanderausführung. Analog dazu wird in der Informatik ein Stück Programmcode, das mehrfach hintereinander ausgeführt das gleiche Ergebnis wie bei einer einzigen Ausführung liefert, als idempotent bezeichnet." 
- Jeremy Gunawardena: An introduction to idempotency 

**PUT** impliziert das Setzen einer Ressource, wobei alles ersetzt wird, was sich bei der angegebenen URI befindet. Eine **Put**-Anfrage ist per Definition idempotent, so wie x=1 idempotent ist.  

**POST** aktualisiert eine Ressource, fügt ein Element hinzu bzw. verändert eine Ressource. Eine **POST**-Anfrage ist somit __nicht__ idempotent, so wie x++ nicht idempotent ist.  

=> **PUT** wird verwendet, wenn die URI eines Elements bekannt ist.  
=> **POST** kann zum erstellen von Ressourcen verwendet werden, wenn die URI __nicht__ bekannt ist.  

**Beispiel**  
**POST**  /tiere - fügt ein neues Tier-Element zur Ressource "tiere" hinzu  
oder:  
**PUT** /tiere/1 - ersetzt das Tier-Element mit der ID 1.  

## Beispiel
[Express JS HTTP Methoden Beispiel](/Vorlesung4/index.js)
[gelieferte HTML](/Vorlesung4/public/index.html)
[Express JS HTTP Loesung](/Vorlesung4/loesung.js)