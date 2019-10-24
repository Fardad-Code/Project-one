// ------------------------------------------ Test for later ------------------------------------------
function openmenu(){
    document.getElementById('navigation').style.display="block";
    document.getElementById('menu-btn').style.display="none";
    document.getElementById('close-btn').style.display="block";
}
function closemenu(){
    document.getElementById('navigation').style.display="none";
    document.getElementById('menu-btn').style.display="block";
    document.getElementById('close-btn').style.display="none";
}

// ---------------------------------------- Search Button JS Codes -------------------------------------
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
};
searchBtn.addEventListener("click", expand);

// ---------------------------------------- Active Navber ------------------------------------------

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btnzade");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activezade");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" activezade", "");
  }
  this.className += " activezade";
  });
}

// ---------------------------------------- Form Confirmation Message ------------------------------------------

function confirmSubmit() {
  if (confirm("Are you sure you want to submit the form?")) {
    document.getElementById("FORM_ID").submit();
  }
  return false;
}
 