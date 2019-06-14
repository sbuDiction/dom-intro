
//factory function 
var Calculate = function () {
    var billTotal = 0;
    function Billtotal(billItem) {
       billTotal = 0;
        var str = billItem.split(",");

        for (var i = 0; i < str.length; i++) {
            str[i].trim()
            if (str[i] === "sms") {
                billTotal += 0.75;
            }
            else if (str[i] === "call") {
                billTotal += 2.75;
            }

        }
    }

    function displayTotal() {
        return billTotal.toFixed(2);
    }
    //this is the function that changes the colour of the total
    function criticalLvl() {
        console.log(billTotal)
        if (billTotal >= 20 && billTotal <= 30) {
            return "alert";

        }
        if (billTotal >= 30) {
            return "stop!";
        }

    }

    return {
        check: Billtotal,
        bill: displayTotal,
        change: criticalLvl,
    }
}
