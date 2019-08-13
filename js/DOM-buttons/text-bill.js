let billTypeText = document.querySelector(".billTypeText");
let textTotalAddBtn = document.querySelector(".addToBillBtn");
let callsTotalElem = document.querySelector(".callTotalOne");
let smsTotalElem = document.querySelector(".smsTotalOne");
let totalCostElem = document.querySelector(".totalOne");
let addBtn = document.querySelector(".addToBillBtn");
var templateData = document.querySelector(".userTemplate").innerHTML;
var template = Handlebars.compile(templateData);
var userDataElem = document.querySelector(".userDataTextBill");
//let dataTemp = document.querySelector(".")


let instance = TextBillTotal();

addBtn.addEventListener("click", function () {
    instance.bill(billTypeText.value);
    // callsTotalElem.innerHTML = instance.totalOne()
    // smsTotalElem.innerHTML = instance.totalTwo()
    // totalCostElem.innerHTML = instance.totalBill()
    console.log(billTypeText.value);

    // totalCostElem.classList.remove("warning");
    // totalCostElem.classList.remove("danger")


    // if (instance.level() === "alert") {
    //     totalCostElem.classList.add("warning");
    //     totalCostElem.classList.remove("danger")

    // }
    // else if (instance.level() === "stop") {
    //     totalCostElem.classList.remove("warning");
    //     console.log("stop");

    //     totalCostElem.classList.add("danger");
    // }


})

window.addEventListener("load", function () {
    var userData = {
        callData: "R" + instance.totalOne(),
        smsData: "R" + instance.totalTwo(),
        totalData: "R" + instance.totalBill()
    };

    var userDataHTML = template(userData);
    userDataElem.innerHTML = userDataHTML;
})


window.addEventListener("click", function () {
    var userData = {
        callData: "R" + instance.totalOne(),
        smsData: "R" + instance.totalTwo(),
        totalData: "R" + instance.totalBill()
    };

    var userDataHTML = template(userData);
    userDataElem.innerHTML = userDataHTML;
})