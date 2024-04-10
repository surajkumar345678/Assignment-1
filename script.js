// function to toggle bold style
function toggleBold(btn) {
  var text = btn.closest(".container").querySelector(".text");
  if (text.style.fontWeight === "bold") {
    // remove bold
    text.style.fontWeight = "normal";
    btn.classList.remove("active");
  } else {
    // apply bold
    text.style.fontWeight = "bold";
    btn.classList.add("active");
  }
}

// function to toggle italic style
function toggleItalic(btn) {
  var text = btn.closest(".container").querySelector(".text");
  if (text.style.fontStyle === "italic") {
    // remove italic
    text.style.fontStyle = "normal";
    btn.classList.remove("active");
  } else {
    // apply italic
    text.style.fontStyle = "italic";
    btn.classList.add("active");
  }
}

// function to toggle underline
function toggleUnderline(btn) {
  var text = btn.closest(".container").querySelector(".text");
  if (text.style.textDecoration === "underline") {
    // remove underline
    text.style.textDecoration = "none";
    btn.classList.remove("active");
  } else {
    // apply underline
    text.style.textDecoration = "underline";
    btn.classList.add("active");
  }
}

// function to change font color
function changeFontColor(input) {
  var color = input.value;
  var text = input.closest(".container").querySelector(".text");
  text.style.color = color;
}

// function to change font size
function changeFontSize(input) {
  var fontSize = input.value + "px";
  var text = input.closest(".container").querySelector(".text");
  text.style.fontSize = fontSize;
}
