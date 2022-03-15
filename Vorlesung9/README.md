# HTML5  
- HTML Datalist  
- Media: Video/Audio, Controls  
- WebWorkers  

## HTML <datalist>-Tag  
Suchvorschläge bereitstellen  
- Problem: bereitstellung von Vorschlägen in Formularelementen  
- Einführung des `<datalist>`-HTML-Elementes mit HTML5  
- identifizierer kann bei z.B. Formularelementen als `list`-Attribut angegeben werden  
- Enthält eine Liste von `Optionen`-HTML-Elementen  
- Bei Eingabe oder Klick wird eine Dropdown-Liste angeboten, die den Werden der `Option`-Elementen entspricht   
  
```
<label for="student">Student ausw&auml;hlen:</label>  
<input list="students1" name="student" id="student" />  
<datalist id="students1">  
    <option value="12345" />  
    <option value="12346" />  
    <option value="12347" />  
    <option value="12348" />  
</datalist>  
```  
[Uebung 1](/Vorlesung9/uebung1/public/index.html)  

## Media: video & Audio, Control  
Video und Audio abspielen und steuern  
- Problem: Bereitstellung von Audio und Video  
- Früher: Bereitstellung mit Hilfe von Plugins wie z.B. Flash  
- in Folge der Standardisierung von HTML5 wurden das <video>- und das <audio>-Html-Element eingeführt  
- Abspielen von Video- und Audio-Dateien und das optionale einblenden von Steuerelementen wurde ermöglicht  
- Steuerung über JS API möglich z.B. `play()`, `pause()`, `currentTime`  
[Uebung 2](/Vorlesung9/uebung2/public/index.html)  

## WebWorkers  
Vorgänge im Hintergrund ausführen  
- Das Problem: nebenläufigkeit von javaScript  
- Pseudo Parallelisierung mithilfe von z.B. `setTimeout()` oder `setInterval()`  
- Ausführung erfolg weiterhin im UI Thread  

![WebWorkers](/Vorlesung9/www/WebWorkers.jpg)  
![WebWorkers](/Vorlesung9/www/WebWorkers2.jpg)  

### Zeigt immer nur den letzten Wert an.  
[Uebung 3](/Vorlesung9/uebung3/index.html)  

### 
[Uebung 3 Complete](/Vorlesung9/uebung3-complete/index.html)  

## Aufgabe
![Aufgabe 1](/Vorlesung9/www/Aufgabe1.jpg)  
[Aufgabe1](/Vorlesung9/aufgabe1/public/index.html)  