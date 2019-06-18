//add button reference
var radioType = document.querySelector(".billItemTypeWithSettings");
var radioElement = document.querySelector(".radioAddBtnSettings");
var allCallsTotal = document.querySelector(".callTotalSettings");
var allSmssTotal = document.querySelector(".smsTotalSettings");
var settingsTotal = document.querySelector(".totalSettings");
// settings box reference
 var callCostElememts = document.querySelector(".callCostSetting");
 var smsCostElement = document.querySelector(".smsCostSetting");
 var warningLev = document.querySelector(".warningLevelSetting");
 var criticalLev = document.querySelector(".criticalLevelSetting");
 var settingsUpdateBtn = document.querySelector(".updateSettings");

var total;
var instanceForBtn = CheckedRadioBtnSettings();

function addButton(){
var radioBtn = document.querySelector("input[name='radioType']:checked");

if(radioBtn){
    var bill = radioBtn.value
}
    instanceForBtn.check(bill);
    allCallsTotal.innerHTML = instanceForBtn.calls();
    allSmssTotal.innerHTML = instanceForBtn.smss();
    settingsTotal.innerHTML = instanceForBtn.total();
    updateColour();    
}

function settingsUpdateButton(){
    instanceForBtn.update(callCostElememts.value, smsCostElement.value, warningLev.value, criticalLev.value);
    updateColour();
}

function updateColour(){
    settingsTotal.classList.remove("warning");
    settingsTotal.classList.remove("danger");


if(instanceForBtn.level() === "alert"){
    settingsTotal.classList.add("warning");
    settingsTotal.classList.remove("danger");
    radioElement.disabled = false;
}

else if(instanceForBtn.level() === "stop"){
    settingsTotal.classList.remove("warning");
    settingsTotal.classList.add("danger");
    radioElement.disabled = true;
    }
 }

settingsUpdateBtn.addEventListener('click', settingsUpdateButton);
radioElement.addEventListener('click', addButton);