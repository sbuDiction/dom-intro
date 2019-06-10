var fruitEater = function(){
    var appleContainer = 0;
    var orangeContainer = 0;

    function eater(fruitName){

        if(fruitName === "apple"){
            appleContainer ++;
        }
            else if(fruitName === "orange"){
                orangeContainer ++;
            }
    }
    
    function appleReturn(){
        return appleContainer;
    }
    function orangeReturn(){
        return orangeContainer;
    }

    return{
        eat : eater,
        apple : appleReturn,
        orange : orangeReturn,
    }
}

/*var instanceOne = fruitEater();
var instanceTwo = fruitEater();


instanceTwo.count("orange");
instanceTwo.count("orange");

//should return 3
console.log(instanceOne.apple());
//should return 2
console.log(instanceTwo.orange());*/