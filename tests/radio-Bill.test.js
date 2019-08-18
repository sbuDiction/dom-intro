describe('Radio Bill function   ', function () {
    it('should return the cost price for one call if the add button is clicked', function () {
        var instanceOne = Radio_Bill();

        instanceOne.bill("call");
        assert.equal(instanceOne.call_Total(), 2.75);

    });

    it('should return the cost price for one sms if the add button is clicked', function () {
        var instanceOne = Radio_Bill();

        instanceOne.bill("sms");
        assert.equal(instanceOne.sms_Total(), 0.75);

    });

    it('should return the cost price if two sms were sent and two calls made ', function () {
        var instanceOne = Radio_Bill();

        instanceOne.bill("sms");
        instanceOne.bill("call");
        instanceOne.bill("call");
        instanceOne.bill("sms");
        assert.equal(instanceOne.total(), 7.00);

    });

});