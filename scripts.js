

function calc(){
  // e.preventDefault();
  let yourName= document.getElementById('your-name');
  let country = document.getElementById('county');
  let arrivalDate = document.getElementById('arriavl-date');
  let departDate = document.getElementById('departure-date');
  // let singleRoom = document.getElementById('room');
  let singleRoom = document.querySelector('input[name="roomt"]:checked');
  // let doubleRoom = document.getElementById('double-room');
  // let sweet = document.getElementById('sweet');

  let wifiService = document.getElementById('wifi-service');
  let breakfastService = document.getElementById('breakfast-service');
  let poolService = document.getElementById('pool-service');
  let gymService = document.getElementById('gym-service');
  let sum =0;
  // console.log(singleRoom);
const welcome= document.getElementById("welcome");
welcome.innerHTML = "<h1>Thank for your interst</h1>"
console.log(welcome.innerHTML);


//   console.log(yourName.value);
//   console.log(country.value);
//   console.log(arrivalDate.value);
//   console.log(departDate.value);
//   console.log(singleRoom.value);
//   // console.log(doubleRoom.value);
//   // console.log(sweet.value);
//   console.log(wifiService.value);
//   console.log(breakfastService.value);
//   console.log(poolService.value);
//   console.log(gymService.value);
//   // console.log(yourName.value);
//   // return false;

//   function calculateDaysBetween(date1, date2) {
//   // Convert string input to Date objects
//   const d1 = new Date(date1);
//   const d2 = new Date(date2);

//   // Ensure time is set to midnight for accurate day difference
//   d1.setHours(0, 0, 0, 0);
//   d2.setHours(0, 0, 0, 0);

//   // Calculate the difference in milliseconds
//   const diffTime = d2 - d1;

//   // Convert milliseconds to days and round the result
//   const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

//   return diffDays;
// }

// console.log("the days count is :"+calculateDaysBetween(arrivalDate.value,departDate.value));

  // alert(country.value*singleRoom.va);
}





