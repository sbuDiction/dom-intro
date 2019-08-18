let billTypeText = document.querySelector(".billTypeText");
let addBtn = document.querySelector(".addToBillBtn");
var templateData = document.querySelector(".userTemplate").innerHTML;
var template = Handlebars.compile(templateData);
var userDataElem = document.querySelector(".userDataTextBill");
let instance = TextBillTotal();

addBtn.addEventListener("click", function () {
    instance.bill(billTypeText.value);
})
//custom helpers :-)
Handlebars.registerHelper("warning", function () {
    if (instance.level() === "alert") {
        return true;
    }
})
Handlebars.registerHelper("danger", function () {
    if (instance.level() === "stop") {
        return true;
    }
})
window.addEventListener("load", function () {
    let userData = {
        callData: "R" + instance.totalOne(),
        smsData: "R" + instance.totalTwo(),
        totalData: "R" + instance.totalBill()
    };

   let userDataHTML = template(userData);
    userDataElem.innerHTML = userDataHTML;
})
window.addEventListener("click", function () {
    let userData = {
        callData: "R" + instance.totalOne(),
        smsData: "R" + instance.totalTwo(),
        totalData: "R" + instance.totalBill()
    };

    let userDataHTML = template(userData);
    userDataElem.innerHTML = userDataHTML;
})