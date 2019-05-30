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
var radioType = document.querySelector(".billItemTypeWithSettings");
var radioElement = document.querySelector(".radioAddBtnSettings");
var allCallsTotal = document.querySelector(".callTotalSettings");
var allSmssTotal = document.querySelector(".smsTotalSettings");
var settingsTotal = document.querySelector(".totalSettings");

//settings reference
var CostCall = 0;
var SmsCost = 0;
var warning = 0;
var critical = 0;

//check button function variables
var inputCall = 0;
var inputSms = 0;

//variables for the settings
var callCostElememts = document.querySelector(".callCostSetting");
var smsCostElement = document.querySelector(".smsCostSetting");
var warningLev = document.querySelector(".warningLevelSetting");
var criticalLev = document.querySelector(".criticalLevelSetting");
var settingsUpdateBtn = document.querySelector(".updateSettings");

function checkedRadioBtnSettings() {

    var checkedRadioBtnSettings = document.querySelector("input[name='radioType']:checked");
    if (checkedRadioBtnSettings) 
{
        var radioType = checkedRadioBtnSettings.value;

    
    if (radioType === "call")
    {
        inputCall += CostCall;
    } 
    else if (radioType === "sms")
    {
        inputSms += SmsCost;
    }
}

    //update the totals that is displayed on the screen.
    allCallsTotal.innerHTML = inputCall.toFixed(2);
    allSmssTotal.innerHTML = inputSms.toFixed(2);
    var totalCostSettings = inputCall + inputSms;
    settingsTotal.innerHTML = totalCostSettings.toFixed(2);

    if (totalCostSettings >= 50) {
        // adding the danger class will make the text red
        settingsTotal.classList.add("danger");
    }
    else if (totalCostSettings >= 30) {
        settingsTotal.classList.add("warning");
    }
    
}

function updateSettings()
{
    settingsUpdateBtn = document.querySelector(".updateSettings");

    CostCall = Number(callCostElememts.value);
    SmsCost = Number(smsCostElement.value);
    warning = Number(warningLev.value);
    critical = Number(criticalLev.value);

    if(settingsTotal >= critical)
    {
        radioElement.disabled = true 
    }
}


settingsUpdateBtn.addEventListener('click', updateSettings);//update button
radioElement.addEventListener('click', checkedRadioBtnSettings);//radio button