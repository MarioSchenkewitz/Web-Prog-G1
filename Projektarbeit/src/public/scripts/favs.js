const favs = document.getElementById('favoriten');
fetch("/favs")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        data.forEach((element) => {
            const listElement = document.createElement("li");
            var a = document.createElement("a");
            a.textContent = element;
            a.setAttribute('href', element);
            listElement.appendChild(a);
            favs.appendChild(listElement)
        });
        if (data.length===0) {
            const noElements = document.createElement("li");
            noElements.textContent = "noch keine Favoriten :(";
            favs.appendChild(noElements);
        }

    })
    .catch((e) => alert(e));