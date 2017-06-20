function firstTask() {
  console.log('First Task Done!');
}




setTimeout(firstTask, 2000)

console.log('Done did second task!');




setTimeout(function() {
  console.log('First Task Done!');
}, 2000);
console.log('Done did second task!');