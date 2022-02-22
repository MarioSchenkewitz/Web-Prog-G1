# Cookies
Http Cookies ermöglichen Implementierung von Sitzungen zwischen Client und Server.  
## Eigenschaften von Cookies
![Eigenschaften von Cookies](/Vorlesung7/public/eigenschaften.png)  

## Beschränkungen von Cookies
![Beschränkungen von Cookies](/Vorlesung7/public/beschraenkungen.PNG)  

## Daten als Cookie-Wert verwenden
- Daten in cookies sind reine Strings  
- in der Praxis bestehen Cokie-Werte oft aus komplexen Datenstrukturen (z.B. JSON)  
- Daten sind i.d.R. kodiert  
  
[Beispiel für Cookies](/Vorlesung7/Beispiel1/index.js)  

# REST, Representational State Transfer
## Zusatndslosigkeit
- Nachrichten enthalten alle INformationen, die für den Server bzw. Client notwendig sind, um die Nachricht zu verstehen.  
- Weder Server noch die Anwendung soll Zustandsinformationen zwischen zwei Nachrichten speichern; daher zustandslos (englisch: stateless)  

## Ressourcen und Elemente
- Ressource: /**studenten**/hannes-1
- Elemente /studenten/**hannes-1**
- URI: http:://localhost:8080/hannes-1

## HTTP-Methoden
- Anfragen mit der **POST**-Methode können Daten zur weiteren Verarbeitung zum Server senden  
- Anfragen mit der **GET**-Methode können Daten (z.B. Dateien) vom Server anfordern  
- Anfragen mit der **PUT**-Methode können Daten eines Elements verändern.
- Anfragen mit der **DELETE**-Methode können Elemente löschen.

Beispiel:
**POST** /tiere - fügt ein neues Tier-Element zur Ressource "tiere" hinzu.  
oder:  
**PUT**  /tiere/1 - ersetzt das Tier-Element mit der ID 1.  

[Beispiel für REST](/Vorlesung7/Beispiel2/index.js)