
// var response = $.get('https://data.cityofchicago.org/resource/9rg7-mz9y.json', function(body) {
//   console.log(body);
// });





// function getData() {
//   var employeesDiv = document.getElementById('employees');

//   $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(employees) {


//     var htmlString = "";

//     for (var i = 0; i < employees.length; i++) {
//       var employee = employees[i];
//       htmlString += '<div class="employee" onclick="changeEmployee(this)">'
//         htmlString += '<h2>' + employee.name + '</h2>';
//         htmlString += '<p>Jobtitle:' + employee.job_titles + '</p>';
//         htmlString += '<p>Department:' + employee.department + '</h2>';
//         htmlString += '<p>Salary:' + employee.annual_salary + '</p>';
//         htmlString += '</br>';
//       htmlString += '</div>'
//     }

//     employeesDiv.innerHTML = htmlString;
//   });
// }
// function changeEmployee(employeeDiv) {
//   if (employeeDiv.style.color === 'lightgray') {
//     employeeDiv.style.color = '';
//   } else {
//   employeeDiv.style.color = 'lightgray';
//   }
// }

// function showAll() {
//   var employees = document.getElementsByClassName('employee');

//   for (var i = 0; i < employees.length; i++){
//     var employee = employees[i];
//     employee.classList.remove('hidden');
//   }
// }

// function showPolice() {
//   var employees = document.getElementsByClassName('employee');

//   for (var i = 0; i < employees.length; i++) {
//     var employee = employees[i];
//     if (employee.innerHTML.indexOf('POLICE') != -1) {
//       employee.classList.remove('hidden');
//     } else {
//         employee.classList.add('hidden');
//     }
//   }
// }





function getData() {
  var districtsDiv = document.getElementById('districts');

  $.get('https://data.cityofchicago.org/resource/9rg7-mz9y.json', function(districts) {

    var htmlString = "";

    for (var i = 0; i < districts.length; i++) {
      var district = districts[i];
      htmlString += '<div class="district" onclick=changeDistrict(this)">'
        htmlString += '<h2>District:' + district.district_name + '</h2>';
        htmlString += '<p>Address:' + district.address + '</p>';
        htmlString += '<p>Zip Code:' + district.zip + '</p>';
        htmlString += '</br>';
      htmlString += '</div>';
      
    }

    districtsDiv.innerHTML = htmlString;
  });
}

function changeDistrict(districtDiv) {
  if (districtDiv.style.color === 'lightgray') {
    districtDiv.style.color = '';
  } else {
  districtDiv.style.color = 'lightgray';
  }
}


function showAll() {
  var districts = document.getElementsByClassName('district');

  for (var i = 0; i < districts.length; i++){
    var district = districts[i];
    district.classList.remove('hidden');
  }
}

function showPark() {
  var districts = document.getElementsByClassName('district');

  for (var i = 0; i < districts.length; i++) {
    var district = districts[i];
    if (district.innerHTML.indexOf('Park') != -1) {
      district.classList.remove('hidden');
    } else {
        district.classList.add('hidden');
    }
  }
}





