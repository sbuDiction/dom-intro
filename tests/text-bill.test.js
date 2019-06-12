describe('Text bill' , function(){
    it('should return the cost price for one call if the add button is clicked' , function(){
        var instanceOne = TextBillTotal();

        instanceOne.enter("call");
        assert.equal(instanceOne.totalOne(),2.75);

    });
    it('should return the cost price for one sms if the add button is clicked' , function(){
        var instanceOne = TextBillTotal();

        instanceOne.enter("sms");
        assert.equal(instanceOne.totalTwo(),0.75);

    });

});