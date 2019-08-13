let calculateBtn = document.querySelector(".calculateBtn");
let billTotalElement = document.querySelector(".billTotal");
let billStringField = document.querySelector(".billString");
    

let instanceOne = Calculate();

function calculateBtnClicked() {

    instanceOne.check(billStringField.value);
    billTotalElement.innerHTML = instanceOne.bill();

    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("danger")

    if (instanceOne.change() === "alert") {
        billTotalElement.classList.add("warning");
        billTotalElement.classList.remove("danger")
    }
    else if (instanceOne.change() === "stop!") {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.add("danger");
    }
}
calculateBtn.addEventListener('click', calculateBtnClicked);