describe('Settings bill' , function(){
    it('should return the total cost of R5 per call plus R2 per sms' , function(){
        var instanceForBill = CheckedRadioBtnSettings();
        instanceForBill.update("5","2");        
        instanceForBill.check("call");
        instanceForBill.check("call");
        instanceForBill.check("call");
        instanceForBill.check("call");
        instanceForBill.check("sms");
        
        assert.equal(instanceForBill.total(),"22.00");
    });

    it('should return danger if the total cost of the bill is critical or reached critical  ' , function(){
        var instanceForBill = CheckedRadioBtnSettings();
        instanceForBill.update("5","2","","30");
        instanceForBill.check("call");
        instanceForBill.check("sms");
        instanceForBill.check("sms");
        instanceForBill.check("call");
        instanceForBill.check("call");
        instanceForBill.check("call");
        instanceForBill.check("call");
        instanceForBill.check("sms");


        assert.equal(instanceForBill.level(),"stop");

        
    });
    it('should return alert if the total cost of the bill is warning or reached warning level  ' , function(){
    var instanceForBill = CheckedRadioBtnSettings();
        instanceForBill.update("5","2","20","30");
        //instanceForBill.check("call");
        instanceForBill.check("sms");
        instanceForBill.check("sms");
        instanceForBill.check("call");
        //instanceForBill.check("call");
        instanceForBill.check("call");
        instanceForBill.check("call");
        instanceForBill.check("sms");


        assert.equal(instanceForBill.level(),"alert");

        
    });
it('should return 0.00 if there is no cost for either both bills have value or no value is entered' , function(){
    var instanceForBill = CheckedRadioBtnSettings();
    instanceForBill.update("0")
    instanceForBill.check("call");
    instanceForBill.check("call");
    instanceForBill.check("call");
    assert.equal(instanceForBill.total(),"0.00");
});
});