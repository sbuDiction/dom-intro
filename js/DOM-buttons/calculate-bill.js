// //references
// //this is the button 
// var calculateBtn = document.querySelector(".calculateBtn");
// //this is where our total will be displayed
// var billTotalElement = document.querySelector(".billTotal");
// //this is where we inter sring "sms" or "call"
// var billStringField = document.querySelector(".billString");
// //this is where we call the function to work in the dom
// var currentInstance = calculateBtnClicked();

 
// //  if (billTotal >= 30){
        
// //     billTotalElement.classList.add("danger");
// // }
// // else if (billTotal >= 20){
// //     billTotalElement.classList.add("warning");
// // }   
// // else
// // {
// //     billTotalElement.classList.remove("danger");
// //     billTotalElement.classList.remove("warning");
// // }



// calculateBtn.addEventListener('click', calculateBtnClicked);

// function calculateBtnClicked(){
//     // get the text from the textarea in the DOM
//     currentInstance.check(billStringField.value);
//     var billString; 
//     // call the function that calculate the total
//     var totalBill = calculateBill(value); // unit test this function 
//     // display the 
// if(currentInstance.whatLvl === "warning"){
//     billTotalElement.classList.add("warning")
// }
// if(currentInstance.whatLvl === "critical"){
//     billTotalElement.classList.add("danger")
// }

//     billTotalElement.innerHTML = currentInstance.bill();

// }

// calculateBtn.addEventListener('click', calculateBtnClicked);

var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");
var billStringField = document.querySelector(".billString");
var instanceOne = Calculate();
var instanceTwo = Calculate();

function calculateBtnClicked(){

    instanceOne.check(billStringField.value);
    billTotalElement.innerHTML = instanceOne.bill();
    
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("danger")
    

    if (instanceOne.change() === "alert"){
        billTotalElement.classList.add("warning");
        billTotalElement.classList.remove("danger")
    
    }
    else if(instanceOne.change() === "stop!"){
        billTotalElement.classList.remove("warning");
        console.log("stop!");
        
        billTotalElement.classList.add("danger");
    }


}
    calculateBtn.addEventListener('click', calculateBtnClicked);