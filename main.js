// Add your javascript here
// Feel free to import frontend libraries and packages such as jquery, react, angular, etc...
var jobCount = document.getElementById("job-count")
jobCountNum = 0
var html = ""
var items = []
jobCount.innerHTML = jobCountNum
var newItemBtn = document.getElementById("new-card")
var inputForm = document.getElementById("new-form")
var jobCards = document.getElementById("job-cards")
var continueBtn = document.getElementById("continue-btn")
var companyNameInput = document.getElementById("company-name-input")
var jobTitleInput = document.getElementById("job-title-input")
var companyName = document.getElementById("company-name")
var jobName = document.getElementById("job-title")
var deleteBtnForm = document.getElementById("delete-btn-form")
var deleteBtn = document.getElementById("delete-btn")
var error = document.getElementById("error")
var restOfBody = document.getElementById("blackout")
var resetBtn = document.getElementById("reset")
var resetConfirmation = document.getElementById("reset-confirmation")
var yesBtn = document.getElementById("yes")
var noBtn = document.getElementById("no")

inputForm.style.display = "none"
newItemBtn.addEventListener("click", function() {
   inputForm.style.width = "50%"
   inputForm.style.display = "flex"
   restOfBody.style.display = "inline"
   inputForm.style.position = "absolute"
})
deleteBtnForm.addEventListener("click", function() {
   inputForm.style.display = "none"
   restOfBody.style.display = "none"
})

continueBtn.addEventListener("click", function() {
   // console.dir(jobCards);

   error.innerHTML = ""
   if (companyNameInput.value === "") {
      error.innerHTML = "Enter Company Name"
      return
   }
   if (jobTitleInput.value === "") {
      error.innerHTML = "Enter Job Title"
      return
   }
   jobCards.style.display = "block"

   items.push({ Name: companyNameInput.value, Title: jobTitleInput.value })
   //    console.log(items)
   jobCards.innerHTML = ""
   items.map(function(x, i) {
      jobCards.innerHTML =
         jobCards.innerHTML +
         `<li class="job-card">
       <h4 id="company-name"> ${x.Name}</h4>
       <h4 id="job-title">${x.Title}</h4>
       </li>
       `
      console.log(x)
   })

   //    html += ' <li class="job-card"> '
   //    html += '<h4 id="company-name"> ' + companyNameInput.value + " </h4>"
   //    html += '<h4 id="job-title"> ' + jobTitleInput.value + " </h4> "
   //    //html += '<h5 id="delete-btn"> X </h5>' ;
   //    html += "</li>"
   //    jobCards.innerHTML += html
   jobCountNum += 1
   jobCount.innerHTML = jobCountNum

   companyNameInput.value = ""
   jobTitleInput.value = ""
   inputForm.style.display = "none"
   restOfBody.style.display = "none"
})

// deleteBtn.addEventListener('click', function(){
//         //delete the card entry from the array
//         // jobCards.style.display = "none"; //for now
//         // jobCountNum -= 1;
//         // jobCount.innerHTML = jobCountNum;
//         console.log("d");
//     });

resetBtn.addEventListener("click", function() {
   resetConfirmation.style.display = "block"
   restOfBody.style.display = "block"
})
noBtn.addEventListener("click", function() {
   resetConfirmation.style.display = "none"
   restOfBody.style.display = "none"
})
yesBtn.addEventListener("click", function() {
   jobCards.style.display = "none"
   jobCountNum = 0
   jobCount.innerHTML = jobCountNum
   resetConfirmation.style.display = "none"
   restOfBody.style.display = "none"
   items = []
})

// // Set up our HTTP request
// var xhr = new XMLHttpRequest();

// // Setup our listener to process completed requests
// xhr.onload = function () {

// 	// Process our return data
// 	if (xhr.status >= 200 && xhr.status < 300) {
// 		// What do when the request is successful
// 		console.log('success!', xhr);
// 	} else {
// 		// What do when the request fails
// 		console.log('The request failed!');
// 	}

// 	// Code that should run regardless of the request status
// 	console.log('This always runs...');
// };

// // Create and send a GET request
// // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// // The second argument is the endpoint URL
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// xhr.send();
