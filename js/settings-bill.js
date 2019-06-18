//# factory function
var CheckedRadioBtnSettings = function () {
    var sms = 0;
    var call = 0;
    var callCost = 0;
    var smsCost = 0;
    var warning = 0;
    var critical = 0;
    function logic(input) {
        if (input === "sms") {
            sms += smsCost;
        }
        if (input === "call") {
            call += callCost;
        }
    }

    function displaySms() {
        return sms.toFixed(2);
    }

    function displayCall() {
        return call.toFixed(2);
    }

    function displayTotal(bill) {
        var bill = sms + call;
        return bill.toFixed(2);
    }

    function updateSettings(input1, input2, input3, input4) {
        callCost = Number(input1);
        smsCost = Number(input2);
        warning = Number(input3);
        critical = Number(input4);

    }

    function updateColor() {
        if (displayTotal() >= warning && displayTotal() <= critical) {
            return "alert";
        }
        if (displayTotal() >= critical) {
            return "stop";
        }
    }

    return {
        check: logic,
        smss: displaySms,
        calls: displayCall,
        total: displayTotal,
        update: updateSettings,
        level: updateColor,
    }
}