# HTTP Cookies
## Erstellen und Verwalten von HTTP Sitzungen
- Textinformationen, die im Browser, jeweils zu einer besuchten Webseite, gespeichert werden können  
- Zwei Möglichkeiten für die Übertragung, Zuweisung und Auswertung von Cookies durch eine Website:  
  - Übertragung in den Kopfzeilen (dem Header) von Anfragen und Antworten via HTTP  
  - Lokal durch JavaScript  

![Cookies](/Vorlesung6/public/cookies.PNG)

Aufgabe 1:  
- Lesen sie den Wert eines bestimmten Cookies aus. Erstellen sie hierzu eine Express.js-Anwendung und geben sie bei jeder Anfrage den Wert des Cookies mit der BEzeichnung `username` auf der Node.js-Konsole aus.  
z.B. `username: someuser1`  
[index.js](/Vorlesung6/Aufgabe1/index.js)

Aufgabe 2:  
Antworten Sie in Abhängigkeit zu dem Wert des Cookies `username` mit bestimmten Werten. Verändern sie hierzu ihre Express.js-Anwendung und geben sie bei jeder Anfrage einen bestimmten Satz von Daten (Array), in Abhängigkeit zu dem Wert des Cookies `username`, auf der Node.js-Konsole aus.  
z.B. `username: someuser1 > wert1, wert2, wert3
     username: someuser2 > wert5`  
[loesung.js](/Vorlesung6/Aufgabe2/loesung.js)

## HTTP Redirects
machen Server- wie Client-seitige Umleitungen möglich.  

### Umleiten auf Ressourcen
Http Weiterleitungen werden dazu verwendet, den Aufruf einer URL (z.B. Besuch einer Webseite) zu einer anderen URL umzuleiten  

![redirects](/Vorlesung6/public/redirects.PNG)  
![redirect_codes](/Vorlesung6/public/redirects2.PNG)  

Aufgabe 3:
Leiten Sie auf eine andere URL um. Verändern Sie ihre Express.js-Anwendung.  
Verändern sie den GET-Request-Handler mit dem Pfad /login.  
Beim Aufruf von z.B. `/login?username=someuser1` wird weiterhin der Wert des Cookies username auf den Wert `someuser1` gesetzt.  
Danach wird der Klient (z.B. Browser oder Postman) auf `/index.html` umgeleitet  
[Beispiel.js](/Vorlesung6/Aufgabe2/beispiel.js)  
[index.js](/Vorlesung6/Aufgabe2/index.js)  
[Loesung aus Vorlesung](/Vorlesung6/Aufgabe2/loesung.js)  