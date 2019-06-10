describe('FruitEater' , function(){
    it('should return how many apples were eaten' , function(){
        var instanceOne = fruitEater();

        instanceOne.eat("apple");
        instanceOne.eat("apple");
        instanceOne.eat("apple");
        assert.equal(instanceOne.apple(),3);

    });

});