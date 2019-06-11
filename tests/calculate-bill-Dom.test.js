describe('calculateBtnClicked' , function(){
    it('should return the cost if only 1 sms is sent' , function(){
        var instanceOne = Calculate();

        instanceOne.check("sms");
        assert.equal(instanceOne.bill(),"0.75");

        
    });


    it('should return the cost if 1 call is made' , function(){
        var instanceOne = Calculate();

        instanceOne.check("call");
        assert.equal(instanceOne.bill(),"2.75");
    });


    it('should return the cost if 5 calls are made' , function(){
        var instanceTwo = Calculate();
        
        instanceTwo.check("call,call,call,call,call")
        assert.equal(instanceTwo.bill(),"13.75");    
    });


    it('should return the cost for if 20 sms are sent' , function(){
        var instanceOne = Calculate();

        instanceOne.check("sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,");
       
        assert.equal(instanceOne.bill(),"15.00");

        
    });
    it('should return the cost if 5 sms are sent and 5 calls are made' , function(){
        var instanceOne = Calculate();
        var instanceTwo = Calculate();

        instanceOne.check("sms,sms,sms,sms,sms,");
        instanceTwo.check("call,call,call,call,call,");
    
        assert.equal(instanceOne.bill(),"3.75");

        
    });
    it('should return 0 if no calls were made and no sms were sent' , function(){
        var instanceOne = Calculate();

        instanceOne.check("");
        assert.equal(instanceOne.bill(),"0.00");

        
    });
    it('should return the cost if 50 calls are made' , function(){
        var instanceTwo = Calculate();

        instanceTwo.check("call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,");
        assert.equal(instanceTwo.bill(),"107.25");

        
    });

});