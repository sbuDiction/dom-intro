describe('calculateBtnClicked' , function(){
    it('should return the cost if only 1 sms is sent' , function(){
        var instanceOne = calculateBtnClicked();

        instanceOne.check("sms");
        assert.equal(instanceOne.bill(),"R0.75");

        
    });


    it('should return the cost if 1 call is made' , function(){
        var instanceTwo = calculateBtnClicked();

        instanceTwo.check("call");
        assert.equal(instanceTwo.bill(),"R2.75");
    });


    it('should return the cost if 5 calls are made' , function(){
        var instanceTwo = calculateBtnClicked();

        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        assert.equal(instanceTwo.bill(),"R13.75");    
    });


    it('should return the cost for if 20 sms are sent' , function(){
        var instanceOne = calculateBtnClicked();

        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        assert.equal(instanceOne.bill(),"R15");

        
    });
    it('should return the cost if 5 sms are sent and 5 calls are made' , function(){
        var instanceOne = calculateBtnClicked();
        var instanceTwo = calculateBtnClicked();

        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceOne.check("sms");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        assert.equal(instanceOne.bill(),"R4.5");

        
    });
    it('should return 0 if no calls were made and no sms were sent' , function(){
        var instanceOne = calculateBtnClicked();

        instanceOne.check("");
        assert.equal(instanceOne.bill(),"R0");

        
    });
    it('should return the cost if 50 calls are made' , function(){
        var instanceTwo = calculateBtnClicked();

        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        instanceTwo.check("call");
        
        assert.equal(instanceTwo.bill(),"R107.25");

        
    });

});