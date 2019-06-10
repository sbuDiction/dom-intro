
// // //function
// // function calculateBtnClicked(){

// //     var billString = billStringField.value;

// //     var billItems = billString.split(",");

// //     var billTotal = 0;

// //     for (var i=0;i<billItems.length;i++){
// //         var billItem = billItems[i].trim();
// //         if (billItem === "call"){
// //             billTotal += 2.75;
// //         }
// //         else if (billItem === "sms"){
// //             billTotal += 0.75;
// //         }
// //     }


// //     var roundedBillTotal = billTotal.toFixed(2);


// // }
// // //adding evant
// var calculateBtnClicked = function () {

//     var billString = billStringField.value;
//     var billItems = billString.split(",");
//     var billTotal = 0;

//     function billCheck() {

//         for (var i = 0; i < billItems.length; i++) {
//             var billItem = billItems[i].trim()
//         }
//         if (billItem === "call") {
//             billTotal += 2.75;
//         }
//         else if (billItem === "sms") {
//             billTotal += 0.75;
//         }

//     }
//     function displayBill(){
//         var bilTotalElement = billTotal.toFixed(2);
//         return bilTotalElement;
//     }
//     function priceColour(){
//         if(billTotal >= 30){
//             return "warning";
//         }
//         else if(billTotal >= 50){
//             return "danger";
//         }
//     }


//     return {
//         check: billCheck,
//         bill : displayBill,
//         call: priceColour,
//     }
// }


//factory function 
var Calculate = function(){
    var billTotal = 0;
    var lvl;
    function Billtotal(billItem){
        billTotal = 0;
        var str = billItem.split(",");

        for(var i = 0; i < str.length; i++){

            if(str[i].trim() === "sms"){
                billTotal += 0.75;
            }
            else if(str[i].trim() === "call"){
                billTotal += 2.75;
            }
        }
                
    }
    
    function displayTotal(){
        
        return billTotal.toFixed(2);
    }
    //this is the function that changes the colour of the total
        function criticalLvl(){ 
            console.log(billTotal)
            if(billTotal >= 20 && billTotal <= 30){
                return "alert";
                
            }
            if(billTotal >= 30 ){
                return "stop!";;
            }   
            
        }

    return{
        check : Billtotal,
        bill : displayTotal,
        change : criticalLvl,
    }
}
