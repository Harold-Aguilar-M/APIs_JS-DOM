const d = document;

let x = 0,
  y = 0;

export function movePointer(e, box, pointer) {
  const $point = d.querySelector(pointer),
    $box = d.querySelector(box),
    limitsPoint = $point.getBoundingClientRect(),
    limitsBox = $box.getBoundingClientRect();

  if (e.code === "ArrowUp") {
    // console.log("up");
    e.preventDefault();
    if (limitsPoint.top > limitsBox.top) y--;
  }
  if (e.code === "ArrowDown") {
    // console.log("down");
    e.preventDefault();
    if (limitsPoint.bottom < limitsBox.bottom) y++;
  }
  if (e.code === "ArrowLeft") {
    // console.log("left");
    e.preventDefault();
    if (limitsPoint.left > limitsBox.left) x--;
  }
  if (e.code === "ArrowRight") {
    // console.log("right");
    e.preventDefault();
    if (limitsPoint.right < limitsBox.right) x++;
  }

//   console.log(limitsBox, limitsPoint);

  $point.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

export function eventsKeyAlt(e) {
  if (e.code === "KeyD" && e.altKey) {
    e.preventDefault();
    alert("Hello World!!");
  }
  if (e.code === "KeyF" && e.altKey) {
    e.preventDefault();
    prompt("¿Cuál es tu nombre?");
  }
}
