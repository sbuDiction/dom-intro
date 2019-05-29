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
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var addBtn = document.querySelector(".radioAddBtn");
var callTotalDisplay = document.querySelector(".callTotalSettings");
var smsTotalDisplay = document.querySelector(".smsTotalSettings");
var totalBill = document.querySelector(".totalSettings");
//reference for the input field. 
var callCostRef = document.querySelector(".callCostSetting");
var smsCostRef = document.querySelector(".smsCostSetting");
//reference for the warning levels.
var warningRef = document.querySelector(".warningLevelSetting");
var criticalRef = document.querySelector(".criticalLevelSetting");
//reference for the update btn.
var updateBtn = document.querySelector(".updateSettings");

//variables for settings
var inputCall = 0;
var inputSms = 0;

//total sms and calls var
var callsTotalSet = 0;
var smsTotalSet = 0;
var allCostTotal = 0;

var warnLevel = 0;
var criLevel = 0;

//reference for the radio btns.
var checkBn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

function addBillBtn()
{
    if (checkBn)
    {
        billItemTypeWithSettings = checkBn.value;
    
    if (billItemTypeWithSettings === "call")
    {
        callsTotalSet += 7.20;
    }
    else if (billItemTypeWithSettings === "sms")
    {
        smsTotalSet += 4.50; 
    }
}
    callTotalDisplay.innerHTML = callsTotalSet.toFixed(2);
    smsTotalDisplay.innerHTML = smsTotalSet.toFixed(2);
    allCostTotal = callsTotalSet + smsTotalSet;
    totalBill.innerHTML = allCostTotal.toFixed(2);
}

function UpdateSettings()
{
    
}

addBtn.addEventListener('click', addBillBtn);