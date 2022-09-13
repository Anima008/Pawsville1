document.getElementById("defaultOpen").click();
function openPage(event,pageName,color) {
    console.log(pageName,event)
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      /*tablinks[i].style.backgroundColor = "";*/
      tablinks[i].classList.remove("active");
    }
    event.target.classList.add("active");
    console.log(document.getElementById(pageName).style)
    document.getElementById(pageName).classList.add("active");
  }
function dropbutton() {
  var x = document.getElementById("dropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}