// <------------ CREATE / VIEW TABS ------------->

function openPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Show the specific tab content

    document.getElementById(pageName).style.display = "block";
  
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  // <------------ PICTURE SELECT TABS ------------->

  function openPicPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    var i, pictabcontent, tablinks;
    pictabcontent = document.getElementsByClassName("pictabcontent");
    for (i = 0; i < pictabcontent.length; i++) {
      pictabcontent[i].style.display = "none";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("picDefaultOpen").click();