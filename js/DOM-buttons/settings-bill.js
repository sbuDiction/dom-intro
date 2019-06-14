var radioType = document.querySelector(".billItemTypeWithSettings");
var radioElement = document.querySelector(".radioAddBtnSettings");
var allCallsTotal = document.querySelector(".callTotalSettings");
var allSmssTotal = document.querySelector(".smsTotalSettings");
var settingsTotal = document.querySelector(".totalSettings");

 var callCostElememts = document.querySelector(".callCostSetting");
 var smsCostElement = document.querySelector(".smsCostSetting");
 var warningLev = document.querySelector(".warningLevelSetting");
 var criticalLev = document.querySelector(".criticalLevelSetting");
 var settingsUpdateBtn = document.querySelector(".updateSettings");


var CostCall   = 0;
var SmsCost = 0;
var warning = 0;
var critical    = 0;
var instanceForBtn = CheckedRadioBtnSettings();

function addButton(){
var radioBtn = document.querySelector("input[name='radioType']:checked");
if(radioBtn){
    instanceForBtn.log(radioBtn.value);
    allCallsTotal.innerHTML = instanceForBtn.call();
    allSmssTotal.innerHTML = instanceForBtn.sms();
    settingsTotal.innerHTML = instanceForBtn.sms() + instanceForBtn.call();
    }
}

function settingsUpdateButton(){
    CostCall = Number(callCostElememts.value);
    SmsCost = Number(smsCostElement.value);
    warning = Number(warningLev.value);
    critical = Number(criticalLev.value);
    console.log(CostCall);
    
}

settingsUpdateBtn.addEventListener('click', settingsUpdateButton)
radioElement.addEventListener('click', addButton);