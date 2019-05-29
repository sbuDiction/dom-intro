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
        callsTotalTwo += 2.75;
    } else if (billItemType === "sms") {
        smsTotalTwo += 0.75;
    }

    //update the totals that is displayed on the screen.
    totalCostCalls.innerHTML = callsTotalTwo.toFixed(2);
    totalCostSms.innerHTML = smsTotalTwo.toFixed(2);
    var totalCost = callsTotalTwo + smsTotalTwo;
    totalCostElement.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50) {
        // adding the danger class will make the text red
        totalCostElement.classList.add("danger");
    }
    else if (totalCost >= 30) {
        totalCostElement.classList.add("warning");
    }
}

radioBillBtn.addEventListener('click', checkedRadioBtn);