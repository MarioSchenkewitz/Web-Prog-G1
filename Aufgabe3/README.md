# How to use the Dockerfile
navigate to Web-Prog-G1 folder
```
docker build -t aufgabe3 .
docker run -p 8080:8080 aufgabe3
```
In case there is a cached data of an old repository version:
```
docker build --no-cache -t aufgabe3neu .
```