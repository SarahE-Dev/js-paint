/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 20;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square white';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

const paintColors = document.querySelectorAll('.palette-color');
const squares = document.querySelectorAll('.square');
const paintbrush = document.querySelector('.current-brush');


/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/
paintSquares()
paintColors[0].addEventListener('click', ()=>{
  paintbrush.classList.remove(paintbrush.classList[1]);
  paintbrush.classList.add('red');
  paintSquares()
})
paintColors[1].addEventListener('click', ()=>{
  paintbrush.classList.remove(paintbrush.classList[1]);
  paintbrush.classList.add('orange');
  paintSquares()
})
paintColors[2].addEventListener('click', ()=>{
  paintbrush.classList.remove(paintbrush.classList[1]);
  paintbrush.classList.add('yellow');
  paintSquares()
})
paintColors[3].addEventListener('click', ()=>{
  paintbrush.classList.remove(paintbrush.classList[1]);
  paintbrush.classList.add('green');
  paintSquares()
})
paintColors[4].addEventListener('click', ()=>{
  paintbrush.classList.remove(paintbrush.classList[1]);
  paintbrush.classList.add('blue');
  paintSquares()
})
paintColors[5].addEventListener('click', ()=>{
  paintbrush.classList.remove(paintbrush.classList[1]);
  paintbrush.classList.add('purple');
  paintSquares()
})
paintColors[6].addEventListener('click', ()=>{
  paintbrush.classList.remove(paintbrush.classList[1]);
  paintbrush.classList.add('black');
  paintSquares()
})
paintColors[7].addEventListener('click', ()=>{
  paintbrush.classList.remove(paintbrush.classList[1]);
  paintbrush.classList.add('white');
  paintSquares()
})
function paintSquares(){
for(let i=0; i<squares.length; i++){
  squares[i].addEventListener('click', ()=>{
    squares[i].classList.remove(squares[i].classList[1])
    squares[i].classList.add(paintbrush.classList[1])
  })}
for(let i=0; i<squares.length; i++){
  squares[i].addEventListener('mouseenter', ()=>{
    if(isMousedown === true){ squares[i].classList.remove(squares[i].classList[1])
    squares[i].classList.add(paintbrush.classList[1])}
  

})}}

// document.querySelector('button').addEventListener('click', ()=>{
//   if()
// })



// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.

let isMousedown = false;
document.querySelector('.app').addEventListener('mouseup', ()=>{
  isMousedown = false;
})

document.querySelector('.app').addEventListener('mousedown', ()=>{
  isMousedown = true;
})


