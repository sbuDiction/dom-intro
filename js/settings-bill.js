// 
// 
// 
//settings reference
// var CostCall = 0;
// var SmsCost = 0;
// var warning = 0;
// var critical = 0;
// 
//check button function variables
// var inputCall = 0;
// var inputSms = 0;
// 
//variables for the settings
// 
// 
// function checkedRadioBtnSettings() {
// 
    // var checkedRadioBtnSettings = document.querySelector("input[name='radioType']:checked");
    // if (checkedRadioBtnSettings) 
        // {
        // var radioType = checkedRadioBtnSettings.value;
// 
    // 
    // if (radioType === "call")
    // {
        // inputCall += CostCall;
    // } 
    // else if (radioType === "sms")
    // {
        // inputSms += SmsCost;
    // }
// }
// 
   // update the totals that is displayed on the screen.
    // allCallsTotal.innerHTML = inputCall.toFixed(2);
    // allSmssTotal.innerHTML = inputSms.toFixed(2);
    // var totalCostSettings = inputCall + inputSms;
    // settingsTotal.innerHTML = totalCostSettings.toFixed(2);
// 
    // colourUpdate();
// 
    // if(totalCostSettings >= critical)
    // {
        // radioElement.disabled = true; 
    // }
    // else if (totalCostSettings < critical)
    // {
        // radioElement.disabled = false;
    // }
    // 
// }
// 
// function updateSettings()
// {
    // settingsUpdateBtn = document.querySelector(".updateSettings");
// 
    // 
    // 
    // 
    // 
// 
    // allCallsTotal.innerHTML = inputCall.toFixed(2);
    // allSmssTotal.innerHTML = inputSms.toFixed(2);
    // var totalCostSettings = inputCall + inputSms;
    // settingsTotal.innerHTML = totalCostSettings.toFixed(2);
    // 
    // colourUpdate();
// 
    // if(totalCostSettings >= critical)
    // {
        // radioElement.disabled = true; 
    // }
    // else if (totalCostSettings < critical)
    // {
        // radioElement.disabled = false;
    // }
// }
// 
// function colourUpdate()
// {
    // allCallsTotal.innerHTML = inputCall.toFixed(2);
    // allSmssTotal.innerHTML = inputSms.toFixed(2);
    // var totalCostSettings = inputCall + inputSms;
    // settingsTotal.innerHTML = totalCostSettings.toFixed(2);
// 
    // if (totalCostSettings >= critical)
    // {
        // settingsTotal.classList.add("danger");
        // settingsTotal.classList.remove("warning");
    // }
    // else if (totalCostSettings >= warning)
    // {
        // settingsTotal.classList.add("warning");
        // settingsTotal.classList.remove("danger");
    // }
    // else 
    // {
        // settingsTotal.classList.remove("danger");
        // settingsTotal.classList.remove("warning");
    // }
// }
// 
//settingsUpdateBtn.addEventListener('click', updateSettings);//update button
//radioElement.addEventListener('click', checkedRadioBtnSettings);//radio buttog


//factory function
var CheckedRadioBtnSettings = function(){
    var smsTotalSettings = 0;
    var callTotalSettings = 0;
        
    function logic(input){
        if(input === "sms"){
            smsTotalSettings += SmsCost;
        }
        else if(input === "call"){
            callTotalSettings += CostCall;
        }
    }

    function displaySms(){
        return smsTotalSettings;
    }

    function displayCall(){
        return callTotalSettings;
    }
    function updateSettings(){

    }

    return{
        log : logic,
        sms : displaySms,
        call : displayCall,
        update : updateSettings,
    }
}