// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
var radioBtn = document.querySelector(".billItemTypeWithSettings");
var addBtn = document.querySelector(".radioAddBtn");
var callTotalDisplay = document.querySelector(".callTotalSettings");
var smsTotalDisplay = document.querySelector(".smsTotalSettings");
var totalBill = document.querySelector(".totalSettings");

var smssTotal = 0;
var callsTotals = 0;
var allTotal = 0;

function settingsBill() {

    var checkedRadioBtn = document.querySelector("input[name='radioBtn']:checked");
    if (checkedRadioBtn) {
        var radioBtn = checkedRadioBtn.value;

    }
    if (radioBtn === "call") {
        callsTotals += 2.75;
    } else if (radioBtn === "sms") {
        smssTotal += 0.75;
    }

    //update the totals that is displayed on the screen.
    callTotalDisplay.innerHTML = callsTotals.toFixed(2);
    smsTotalDisplay.innerHTML = smssTotal.toFixed(2);
    var totalCost = callsTotal + smssTotal;
    totalBill.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50) {
        // adding the danger class will make the text red
        totalCostElement.classList.add("danger");
    }
    else if (totalCost >= 30) {
        totalCostElement.classList.add("warning");
    }
}

addBtn.addEventListener('click', settingsBill);