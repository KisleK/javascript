// function firstTask() {
//   console.log('First Task Finished!');
// }

// function secondTask() {
//   console.log('Fisnished Second Task!');
// }

// function thirdTask() {
//   console.log('Third task completed!!');
// }

// setTimeout(firstTask, 2000);
// setTimeout(secondTask, 4000);
// setTimeout(thirdTask, 6000);


setTimeout(function() {
  console.log('First Task Done!');
  setTimeout(function() {
    console.log('Second Task Done!');
    setTimeout(function() {
      console.log('Third Task Done!');
    }, 2000);
  }, 2000);
}, 2000);








