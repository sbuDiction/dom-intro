const TextBillTotal = () => {
    let callsTotal = 0;
    let smsTotal = 0;

    const totalBill = (billType) => {

        if (billType === "call") {
            callsTotal += 2.75;
        }
        else if (billType === "sms") {
            smsTotal += 0.75;
        }
    };

    const callData = () => callsTotal.toFixed(2)

    const smsData = () => smsTotal.toFixed(2)

    const displayTotal = () => {
        let billTotal = smsTotal + callsTotal;
        return billTotal.toFixed(2)
    }

    const whichLevel = function () {
        if (displayTotal() >= 30 && displayTotal() <= 50) {
            return "alert";
        }
        if (displayTotal() >= 50) {
            return "stop";
        }
    }

    return {
        bill: totalBill,
        totalOne: callData,
        totalTwo: smsData,
        totalBill: displayTotal,
        level: whichLevel,
    }
}