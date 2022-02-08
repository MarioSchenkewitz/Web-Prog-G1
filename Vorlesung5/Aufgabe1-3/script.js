function helloWorld(){
    console.log("Hello World!")
}

function logItem(string){
    console.log("Info: " + string)
}

logItem("Hello World!")

function addListItem(){
    const ol = document.getElementById("liste");
    for (let i = 0; i < 16; i++) {
        var li = document.createElement("li");
        li.innerHTML = "Hallo " + i;
        ol.appendChild(li);
    }

}

addListItem();