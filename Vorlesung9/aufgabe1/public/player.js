function changePlayer(player) {
    fetch("/player", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player)
    }).catch((reason) => console.error(reason));
  }
  
  const audioElement = document.getElementById("audioPlayer1");
  
  audioElement.ontimeupdate = () => {
    changePlayer({
      currentTime: audioElement.currentTime,
      duration: audioElement.duration
    });
  };