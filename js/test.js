var all_sections4 = document.querySelectorAll(".related")[0].childNodes;
all_sections4 = all_sections4[9];
all_sections4.style.display= "none";

var all_sections5 = document.querySelectorAll(".related")[0].childNodes;
all_sections5 = all_sections5[11];
all_sections5.style.display= "none";

setInterval(function displayRelated() {
            var all_sections4 = document.querySelectorAll(".related")[0].childNodes;
all_sections4 = all_sections4[5];
all_sections4.style.display= "inline-block";

var all_sections5 = document.querySelectorAll(".related")[0].childNodes;
all_sections5 = all_sections5[7];
all_sections5.style.display= "inline-block";
   var all_sections4 = document.querySelectorAll(".related")[0].childNodes;
all_sections4 = all_sections4[9];
all_sections4.style.display= "inline-block";
var all_sections5 = document.querySelectorAll(".related")[0].childNodes;
all_sections5 = all_sections5[5];
all_sections5.style.display= "none";
   
    var all_sections4 = document.querySelectorAll(".related")[0].childNodes;
all_sections4 = all_sections4[7];
all_sections4.style.display= "none";
            }, 5000);

console.log(all_sections);

var s1 = 3;
var s2 = 5;
var s3 = 7;

setInterval(function displayRelated) {
    var all_sections1 = document.querySelectorAll(".related")[0].childNodes;
    all_sections1 = all_sections1[s1];
    all_sections1.style.display= "inline-block";
    s1 = s1 + 2;
    
    var all_sections2 = document.querySelectorAll(".related")[0].childNodes;
    all_sections2 = all_sections1[s2];
    all_sections2.style.display= "inline-block";
    s2 = s2 + 2;
    
    var all_sections3 = document.querySelectorAll(".related")[0].childNodes;
    all_sections3 = all_sections1[s3];
    all_sections3.style.display= "inline-block";
    s3 = s3 + 2;
}