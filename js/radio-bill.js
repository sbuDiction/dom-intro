/*
var billTypeText = document.querySelector(".billItemTypeRadio");
var textTotalAddBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");

var callsTotalTwo = 0;
var smsTotalTwo = 0;

function radioBillTotal(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
        // billItemType will be 'call' or 'sms'
    }
    // get the value entered in the billType textfield
    //var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billItemType === "call"){
        callsTotal += 2.75;
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
}
textTotalAddBtn.addEventListener('click', radioBillTotal);
*/
var billItemType = document.querySelector(".billItemTypeRadio");
var radioBillBtn = document.querySelector(".radioBillAddBtn");
var totalCostCalls = document.querySelector(".callTotalTwo");
var totalCostSms = document.querySelector(".smsTotalTwo");
var totalCostElement = document.querySelector(".totalTwo");

var callsTotalTwo = 0;
var smsTotalTwo = 0;

function checkedRadioBtn() {


    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value;

    }
    if (billItemType === "call") {
        callsTotal += 2.75;
    } else if (billItemType === "sms") {
        smsTotal += 0.75;
    }

  

    //update the totals that is displayed on the screen.
    totalCostCalls.innerHTML = callsTotal.toFixed(2);
    totalCostSms.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElement.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElement.classList.add("warning");
    }
}

/*function checkedRadioBtn(){

    // ... other code here
    
    //update the totals that is displayed on the screen.
    totalCostCalls.innerHTML = callsTotal.toFixed(2);
    totalCostSms.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElement.innerHTML = totalCost.toFixed(2);
    
    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}
*/

radioBillBtn.addEventListener('click', checkedRadioBtn);