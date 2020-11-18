// <------------ CREATE / VIEW TABS ------------->

function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tablinks = document.getElementsByClassName('tablink')
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('mainactive');
    } 
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    elmnt.classList.add('mainactive')
    document.getElementById(pageName).style.display = "block";
  }
  
  document.getElementById("defaultOpen").click();

  // <------------ PICTURE SELECT TABS ------------->

  function openPicPage(pageName, elmnt) {
    elmnt.classList.add('active')
    var i, pictabcontent, tablinks;
    tablinks = document.getElementsByClassName("pictablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }
    pictabcontent = document.getElementsByClassName("pictabcontent");
    for (i = 0; i < pictabcontent.length; i++) {
      pictabcontent[i].style.display = "none";
    }
  
    elmnt.classList.add('active')
    document.getElementById(pageName).style.display = "block";
  }
  
  document.getElementById("picDefaultOpen").click();