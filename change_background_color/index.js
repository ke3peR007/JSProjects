// alert("connected");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];

  }
  return color;
}

function setRandomColor() {
  var setColor = getRandomColor();
  document.querySelector(".b").style.backgroundColor = setColor;
document.querySelector(".btn").style.backgroundColor = setColor;
}
