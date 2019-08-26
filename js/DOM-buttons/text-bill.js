let billTypeText = document.querySelector(".billTypeText");
let addBtn = document.querySelector(".addToBillBtn");
var templateData = document.querySelector(".userTemplate").innerHTML;
var template = Handlebars.compile(templateData);
var userDataElem = document.querySelector(".userDataTextBill");
let instance = TextBillTotal();

addBtn.addEventListener("click", function () {
    instance.bill(billTypeText.value);
    loadMyTemplate()

})

//custom helpers :-)
Handlebars.registerHelper("wrning", function () {
    if (instance.level() === "alert") {
        return true;
    }
})

Handlebars.registerHelper("dnger", function () {
    if (instance.level() === "stop") {
        return true;
    }
})

window.addEventListener("load", function () {
    loadMyTemplate()
})

// window.addEventListener("click", function () {

const loadMyTemplate = () => {
    let userData = {
        callData: "R" + instance.totalOne(),
        smsData: "R" + instance.totalTwo(),
        totalData: "R" + instance.totalBill(),
    };
    let userDataHTML = template(userData);
    userDataElem.innerHTML = userDataHTML;
}

// })
