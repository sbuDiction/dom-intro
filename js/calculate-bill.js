//references
var calculateBtn = document.querySelector(".calculateBtn");

var billTotalElement = document.querySelector(".billTotal");

var billStringField = document.querySelector(".billString");


//function
function calculateBtnClicked(){
    
    var billString = billStringField.value;
    
    var billItems = billString.split(",");
    
    var billTotal = 0;
    
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    

    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
}
//adding evant
calculateBtn.addEventListener('click', calculateBtnClicked);