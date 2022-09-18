let tabHeaders = document.querySelectorAll(".tabs .tab-header > div");
let tabContents = document.querySelectorAll(".tabs .tab-content > div");

for (let i = 0; i < tabHeaders.length; i++) {
  tabHeaders[i].addEventListener("click", function () {
    document
      .querySelector(".tabs .tab-header > .active")
      .classList.remove("active");
    tabHeaders[i].classList.add("active");
    document
      .querySelector(".tabs .tab-content > .active")
      .classList.remove("active");
    tabContents[i].classList.add("active");
  });
}

var button = document.querySelector("button");
var fox = document.getElementById("foxies");

button.addEventListener("click", function () {
  //Animation
  setTimeout(function () {
    fox.innerHTML = `<iframe src="https://giphy.com/embed/aFTt8wvDtqKCQ" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/meme-shiba-inu-aFTt8wvDtqKCQ">`;
  }, 500);

  //Naujas intervalas
  var myInterval = setInterval(function () {
    if (fox.childElementCount > 15) {
      clearInterval(myInterval);
    }
    var span = document.createElement("span");
    span.innerText = "🦊";
    span.style.float = "left";
    span.style.fontSize = "25px";
    span.style.margin = "20px";
    document.getElementById("foxies").appendChild(span);
  }, 1000);
});
