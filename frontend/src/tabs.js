// <------------ CREATE / VIEW TABS ------------->

function openPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tablinks = document.getElementsByClassName('tablink')
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('mainactive');
    } 
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Show the specific tab content
    elmnt.classList.add('mainactive')
    document.getElementById(pageName).style.display = "block";
  
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  // <------------ PICTURE SELECT TABS ------------->

  function openPicPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
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
  
    // Show the specific tab content
    elmnt.classList.add('active')
    document.getElementById(pageName).style.display = "block";
  
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("picDefaultOpen").click();