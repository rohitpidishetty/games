function mark(id) {
  let marker = localStorage.getItem("marker");

  if (document.getElementById(id).getAttribute("value") == "false") {
    document.getElementById(id).innerHTML = marker;
    localStorage.setItem("marker", (marker == "x") ? "o" : "x");
    document.getElementById(id).setAttribute("value", "true");
    var curr_i = id.charAt(0);
    var curr_j = id.charAt(1);
    var curr_v = document.getElementById(id).innerText;
    var horizontalScore = 0;
    for (var j = 0; j < 3; j++) {
      if (document.getElementById(curr_i + "" + j).innerText == curr_v)
        horizontalScore++;
    }
    var verticalScore = 0;
    for (var i = 0; i < 3; i++) {
      if (document.getElementById(i + "" + curr_j).innerText == curr_v)
        verticalScore++;
    }

    if (horizontalScore == 3 || verticalScore == 3) {
      alert(curr_v + " has won");
      refresh();
    }
    /**
     * 0,0 - 1,1 - 2,2
     * 0,2 - 1,1 - 2,0
     */

    if (id == "00" || id == "11" || id == "22" || id == "02" || id == "20") {


      if (
        (document.getElementById("00").innerText.length != 0 &&
          document.getElementById("11").innerText.length != 0 &&
          document.getElementById("22").innerText.length != 0) &&
        ((((document.getElementById("00").innerText == document.getElementById("11").innerText) &&
          (document.getElementById("11").innerText == document.getElementById("22").innerText)) &&
          document.getElementById("00").innerText == document.getElementById("22").innerText)) == true) {
        alert(curr_v + " has won")
        refresh();
      }


      else if ((document.getElementById("02").innerText.length != 0 &&
        document.getElementById("11").innerText.length != 0 &&
        document.getElementById("20").innerText.length != 0) &&
        (((((document.getElementById("02").innerText == document.getElementById("11").innerText) &&
          (document.getElementById("11").innerText == document.getElementById("20").innerText)) &&
          document.getElementById("02").innerText == document.getElementById("20").innerText)) == true)) {
        alert(curr_v + " has won")
        refresh();
      }
    }
  }
}


function refresh() {
  setTimeout(() => {
    window.location.reload();
  }, 3000)
}