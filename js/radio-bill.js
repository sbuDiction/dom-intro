const Radio_Bill = () => {
    let smsData = 0;
    let callData = 0;

    const bill_Check = (type) => {
        if (type === "sms") {
            smsData += 0.75;
        }
        else if (type === "call") {
            callData += 2.75;
        }
    }

    const display_Sms = () => smsData.toFixed(2)

    const display_call = () => callData.toFixed(2)

    const display_Total = () => {
        let totalData = smsData + callData;
        return totalData.toFixed(2);
    }

    const isDangerOrWarning = () => {
        if (display_Total() >= 30 && display_Total() <= 50) {
            return "alert"
        } else if (display_Total() >= 50) {
            return "stop"
        }
    }

    return {
        bill: bill_Check,
        sms_Total: display_Sms,
        call_Total: display_call,
        total: display_Total,
        color: isDangerOrWarning,
    }
}








// var callsTotalTwo = 0;
// var smsTotalTwo = 0;

// function checkedRadioBtn() {

//     var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
//     if (checkedRadioBtn) {
//          billItemType = checkedRadioBtn.value;

//     }
//     if (billItemType === "callData") {
//         callsTotalTwo += 2.75;
//     } else if (billItemType === "smsData") {
//         smsTotalTwo += 0.75;
//     }

//     //update the totals that is displayed on the screen.
//     totalCostCalls.innerHTML = callsTotalTwo.toFixed(2);
//     totalCostSms.innerHTML = smsTotalTwo.toFixed(2);
//     var totalCost = callsTotalTwo + smsTotalTwo;
//     totalCostElement.innerHTML = totalCost.toFixed(2);

//     if (totalCost >= 50) {
//         // adding the danger class will make the text red
//         totalCostElement.classList.add("danger");
//     }
//     else if (totalCost >= 30) {
//         totalCostElement.classList.add("warning");
//     }
// }

// radioBillBtn.addEventListener('click', checkedRadioBtn);