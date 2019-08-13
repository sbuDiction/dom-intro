describe('Text bill', function () {
    it('should return the cost price for one call if the add button is clicked', function () {
        var instanceOne = TextBillTotal();

        instanceOne.bill("call");
        assert.equal(instanceOne.totalOne(), 2.75);

    });

    it('should return the cost price for one sms if the add button is clicked', function () {
        var instanceOne = TextBillTotal();

        instanceOne.bill("sms");
        assert.equal(instanceOne.totalTwo(), 0.75);

    });

    it('should return the cost price if two sms were sent and two calls made ', function () {
        var instanceOne = TextBillTotal();

        instanceOne.bill("sms");
        instanceOne.bill("call");
        instanceOne.bill("call");
        instanceOne.bill("sms");
        assert.equal(instanceOne.totalBill(), 7.00);

    });

});