
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

    colourUpdate();

    if(totalCostSettings >= critical)
    {
        radioElement.disabled = true; 
    }
    else if (totalCostSettings < critical)
    {
        radioElement.disabled = false;
    }
    
}

function updateSettings()
{
    settingsUpdateBtn = document.querySelector(".updateSettings");

    CostCall = Number(callCostElememts.value);
    SmsCost = Number(smsCostElement.value);
    warning = Number(warningLev.value);
    critical = Number(criticalLev.value);

    allCallsTotal.innerHTML = inputCall.toFixed(2);
    allSmssTotal.innerHTML = inputSms.toFixed(2);
    var totalCostSettings = inputCall + inputSms;
    settingsTotal.innerHTML = totalCostSettings.toFixed(2);
    
    colourUpdate();

    if(totalCostSettings >= critical)
    {
        radioElement.disabled = true; 
    }
    else if (totalCostSettings < critical)
    {
        radioElement.disabled = false;
    }
}

function colourUpdate()
{
    allCallsTotal.innerHTML = inputCall.toFixed(2);
    allSmssTotal.innerHTML = inputSms.toFixed(2);
    var totalCostSettings = inputCall + inputSms;
    settingsTotal.innerHTML = totalCostSettings.toFixed(2);

    if (totalCostSettings >= critical)
    {
        settingsTotal.classList.add("danger");
    }
    else if (totalCostSettings >= warning)
    {
        settingsTotal.classList.add("warning");
    }
}

settingsUpdateBtn.addEventListener('click', updateSettings);//update button
radioElement.addEventListener('click', checkedRadioBtnSettings);//radio button