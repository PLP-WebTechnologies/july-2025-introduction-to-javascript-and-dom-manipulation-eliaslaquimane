 // initializing the variable
 const block = document.getElementById("block");
    let size = 100;
    let position = 0;

    // change the color to
    function changeColor() {
      block.style.backgroundColor = block.style.backgroundColor === "red" ? "blue" : "red";
    }

    // increase the size of the block
    function upTheSize() {
      size = size + 20;
      block.style.width = size + "px";
      block.style.height = size + "px";
    }

    // moving the block to the right
    function moveRight() {
      position += 20;
      block.style.marginLeft = position + "px";
    }

    // resting the block of the block
    function defaultBlock() {
      size = 100;
      position = 0;
      block.style.width = "100px";
      block.style.height = "100px";
      block.style.marginLeft = "0px";
      block.style.backgroundColor = "blue";
    }