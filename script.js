var likeCount = 0;
var likeSpan;


function setup() {
  likeSpan = document.getElementById("likeCounter");

  likeSpan.innerHTML = likeCount;
}


function increaseLike() {
  likeCount++;
  likeSpan.innerHTML = likeCount;
}