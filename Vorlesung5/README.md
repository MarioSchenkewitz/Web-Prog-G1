# JavaScript
## Dynamische Inhalte im Frontend
### Basics
Ermöglicht dynamische Inhalte in HTML  
Abstrahiert die Dokumentenstruktur im DOM  
Einbindung mittels <script> im <head> oder <body>  
Dateiendung .js  

### Übung
Aufgabe 1:  
Erstellen Sie ein HTML-Dokument mit einem Grundgerüst.  
Erstellen sie eine leere Javascript-Datei.  
Binden sie die Javascript-Datei in ihr HTML-Dokument ein.  
Lassen sie mit console.log den String "Hello World!" auf der Konsole der ENtwickler-Werkzeuge ihres Browsers ausgeben.  

Aufgabe 2:  
- Verschaffen Sie sich einen kurzen Überblick über die Grundlagen von JavaScript (Variable, Funktionsaufrufe, etc.)  
- Erstellen Sie eine Funktion die einen Parameter annimmt und diesen auf der KOnsole (dev tools) ausgibt.  
**code** *logItem*("Hello World!")  
**Ausgabe auf der Konsole:** *Info*: Hello World!  
[index.html](/Vorlesung5/Aufgabe1-3/script.js)

### Document Object Model (DOM)
- DOM ist eine Schnittstelle zwischen JavaScript und HTML-Dokumenten
- Der Name Document Object Model gründet sich auf das ihr zugrundeliegende Objektmodell  
- Einzelnen Elementen werden in einer Baumstruktur als Unterobjekte de globalen Document-Objekts dargestellt  
![DOM](/Vorlesung5/public/DOM.PNG)

### Übung
Aufgabe 3:
- Erstellen Sie in ihrem HTML-Dokument ein neues Listenelement (<ol> id="liste" />)  
- Verändern Sie ihren JavaScript-Code so, dass 15 neue Listenelemente mit Eintragsnummer hinzugefügt werden.  
[index.html](/Vorlesung5/Aufgabe1-3/index.html)  

### AJAX
- **A**synchronous **J**avaScript **A**nd **X**ml  
- Ermöglicht Daten vom Server zu erhalten oder zu senden ohne, dass ein HTML-Dokument neu geladen wird.  
- Daten könnne durch XMLhttpRequest oder die fetch-API abgefragt werden.  
![AJAX](/Vorlesung5/public/AJAX.png)  

### Übung
Aufgabe 4:  
- Erstellen sie auf https://codesandbox.io/ eine Sandbox Umgebung von einem Node.js Template.
- Erstellen sie mit Express.js einen Server, der einen Endpunkt "/data" hat und der per HTTP-Get-Anfrage auf diesen Endpunkt mit dem JSON "["Eintrag 1", "Eintrag 1", "Eintrag 1"]" antwortet.  

Aufgabe 5:
- Verändern Sie ihren JavaScrip-Code so, dass die Einträge aus den Empfangenen JSON-Daten in eine Liste hinzugefügt werden. Definition im HTML-Dokument: <\ol id="liste" />
[page2.html](/Vorlesung5/Aufgabe4/page2.html) 