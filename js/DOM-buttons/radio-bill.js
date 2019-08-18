let addButtonElement = document.querySelector(".radioBillAddBtn");
let data = document.querySelector(".Data").innerHTML
let radioTemp = Handlebars.compile(data);
let billData = document.querySelector(".radioData");

let instance3 = Radio_Bill();

addButtonElement.addEventListener("click", function () {
    var radioBtn = document.querySelector("input[name='billItemType']:checked");
    instance3.bill(radioBtn.value)
    console.log(radioBtn.value);
    loadElements()
})

window.addEventListener("load", function () {
    loadElements();
})

Handlebars.registerHelper("warning", function () {
    if (instance3.color() === "alert") {
        return true;
    }
});

Handlebars.registerHelper("danger", function () {
    if (instance3.color() === "stop") {
        return true;
    }
});

const loadElements = () => {
    let data = {
        callData: "R" + instance3.call_Total(),
        smsData: "R" + instance3.sms_Total(),
        totalData: "R" + instance3.total()
    };

    let user = radioTemp(data);
    billData.innerHTML = user;
}