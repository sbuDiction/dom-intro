



// function textBillTotal() {


//     // get the value entered in the billType textfield
//     var billTypeEntered = billTypeText.value.trim();
//     // update the correct total


//     //update the totals that is displayed on the screen.
//     callsTotalElem.innerHTML = callsTotal.toFixed(2);
//     smsTotalElem.innerHTML = smsTotal.toFixed(2);
//     var totalCost = callsTotal + smsTotal;
//     totalCostElem.innerHTML = totalCost.toFixed(2);

//     if (totalCost >= 50) {
//         // adding the danger class will make the text red
//         totalCostElem.classList.add("danger");
//     }
//     else if (totalCost >= 30) {
//         totalCostElem.classList.add("warning");
//     }
// }
//textTotalAddBtn.addEventListener('click', textBillTotal);

var callsTotal = 0;
var smsTotal = 0;

var TextBillTotal = function () {

    function totalBill(checking) {
        callsTotal = 0;
        smsTotal = 0;

        if (checking === "call") {
            callsTotal += 2.75;
        }
        else if (checking === "sms") {
            smsTotal += 0.75;
        }
    }
    function returnTotalOne() {
        return callsTotal;
    }
    function returnTotalTwo() {
        return smsTotal;
    }
    function displayTotal() {

    }
    return {
        enter: totalBill,
        totalOne: returnTotalOne,
        totalTwo: returnTotalTwo,
        colour: displayTotal,
    }
}