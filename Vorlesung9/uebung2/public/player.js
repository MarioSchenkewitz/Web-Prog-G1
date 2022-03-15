function changePlayer(player) {
    fetch("/player", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player)
    }).catch((reason) => console.error(reason));
  }
  
  const videoElement = document.getElementById("videoPlayer1");
  const videoControl = document.getElementById("playpause");
  const videoBackwards = document.getElementById("back");
  const videoForwards = document.getElementById("fwd");
  const videoProgress = document.getElementById("videoProgress");
  
  videoElement.oncanplay = () => {
    videoProgress.max = videoElement.duration;
  };
  
  videoElement.ontimeupdate = () => {
    videoProgress.value = videoElement.currentTime;
  };
  
  videoBackwards.onclick = () => {
    const newTime = videoElement.currentTime - 5;
    changePlayer({
      seek: (videoElement.currentTime = newTime > 0 ? newTime : 0)
    });
  };
  
  videoForwards.onclick = () => {
    const newTime = videoElement.currentTime + 5;
    changePlayer({
      seek: newTime <= videoElement.duration ? newTime : videoElement.duration
    });
  };
  
  videoControl.onclick = () => {
    if (videoElement.paused) {
      changePlayer({ state: "playing" });
    } else {
      changePlayer({ state: "paused" });
    }
  };
  
  videoElement.onpause = () => {
    videoControl.innerHTML = "play";
  };
  
  videoElement.onplay = () => {
    videoControl.innerHTML = "pause";
  };
  
  let lastSeek = 0.0;
  setInterval(() => {
    fetch("/player")
      .then((response) => response.json() || {})
      .then((player) => {
        player.state === "playing" ? videoElement.play() : videoElement.pause();
  
        if (player.seek !== undefined && player.seek !== lastSeek) {
          videoElement.currentTime = player.seek;
          lastSeek = player.seek;
        }
      })
      .catch((reason) => console.error(reason));
  }, 1000);
  