const mostVisitedPages = document.getElementById('visited');
fetch("/mostVisited")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        data.forEach((element) => {
            const listElement = document.createElement("li");
            listElement.textContent = element;
            mostVisitedPages.appendChild(listElement);
        });
        if (data.length===0) {
            const noElements = document.createElement("li");
            noElements.textContent = "noch keine Seiten besucht :(";
            mostVisitedPages.appendChild(noElements);
        }

    })
    .catch((e) => alert(e));

