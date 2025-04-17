// Select all banner elements inside the container
const banners = document.querySelectorAll(".banners-container .banner");

// Make each banner draggable
banners.forEach((banner) => {
  dragElement(banner);
});

// Main function that attaches drag handlers to a given element
function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // When the user presses down on the element, begin the drag sequence
  elmnt.onmousedown = dragMouseDown;

    // Called when mouse button is pressed down on the element
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    elmnt.style.zIndex = "1000"; // bring to front

    // Record starting cursor coordinates
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
