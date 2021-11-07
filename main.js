
var mouse_event="empty";
var lastpositionofx,lastpositionofy;

canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",mouseup);
function mouseup(e)
{
mouse_event="mousedown";
}
canvas.addEventListener("mouseup",mouseleave);
function mouseleave(e)
{
mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",mousedown);
function mousedown(e)
{
mouse_event="mouseleave";
}
canvas.addEventListener("mousemove",mousemove)
function mousemove(e)
{
currentpositionofx=e.clientX-canvas.offsetLeft;
currentpositionofy=e.clientY-canvas.offsetTop;
if(mouse_event=="mousedown")
{
ctx.beginPath();
ctx.strokeStyle="green";
ctx.linewidth="2";
ctx.moveTo(lastpositionofx,lastpositionofy);
ctx.lineTo(currentpositionofx,currentpositionofy);
ctx.stroke();
}
lastpositionofx=currentpositionofx;
lastpositionofy=currentpositionofy;
}