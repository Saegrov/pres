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


function addComment() {
  var inputComment = document.getElementById("commentInput");
  var commentList = document.getElementById("comments");
  var newListElement = document.createElement('li');

  newListElement.innerHTML = inputComment.value;
  commentList.appendChild(newListElement);
  inputComment.value = '';
}