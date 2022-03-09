const button = document.getElementById('addfav');
button.addEventListener('click', function (e) {
    console.log('button was clicked');

    const endpoint = window.location.pathname.replace(".html", "") + "/fav"
    console.log(endpoint)
    fetch(endpoint, {
            method: 'POST'
        })
        .then((response) => response.json())
        .then((data) => {
            button.innerText = data;
        })
        .catch(function (error) {
            console.log(error);
        });
});