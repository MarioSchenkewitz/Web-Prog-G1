setInterval(() => {
    setTimeout(() => {
      document.getElementsByTagName("span")[0].innerText =
        "Dies ist ein anderer Text A.";
    }, 1000);
  
    setTimeout(() => {
      document.getElementsByName("test1")[0].innerText =
        "Dies ist ein anderer Text B.";
    }, 2000);
  
    setTimeout(() => {
      document.getElementById("test2").innerText = "Dies ist ein anderer Text C.";
    }, 3000);
  }, 3000);