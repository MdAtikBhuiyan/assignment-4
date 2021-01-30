
function getSeatnumber(seatId){
    const seat = document.getElementById(seatId);
    const seatNumber = parseInt(seat.value);
    return seatNumber;
}

function updateAmount(seatInputId, isIncreasing){
    let seatNumber = getSeatnumber(seatInputId);
    if (isIncreasing == true){
        seatNumber = seatNumber + 1;
    }
    if (isIncreasing == false && seatNumber > 0){
        seatNumber = seatNumber - 1;
    }
    document.getElementById(seatInputId).value = seatNumber;

    let subTotal = 0;

    if (seatInputId == "firstClassInput"){
        subTotal = seatNumber * 150;
    }
    if(seatInputId == "economyClassInput"){
        subTotal = seatNumber * 100;
    }
    document.getElementById("sub-total").innerText = subTotal;
    calculateTotal();
}

function calculateTotal(){
    const firstClassSeat = getSeatnumber("firstClassInput");
    const economyClassSeat = getSeatnumber("economyClassInput");

    const subTotal = (firstClassSeat * 150) + (economyClassSeat * 100);
    document.getElementById("sub-total").innerText = subTotal;

    const taxBill = Math.round(subTotal/10);
    document.getElementById("tax").innerText = taxBill;

    const total = subTotal + taxBill;
    document.getElementById("total").innerText = total;

}

function confirmationMessage(){
    document.getElementById('all-content').style.display = 'none';
    document.getElementById('confirmation-box').style.display = 'block';

    const firstClassSeat = getSeatnumber("firstClassInput");
    document.getElementById("forFirstClassSeatMesage").innerText = firstClassSeat;

    const economyClassSeat = getSeatnumber("economyClassInput");
    document.getElementById("forEconomyClassSeatMesage").innerText = economyClassSeat;

    const subTotalForFirstClass = (firstClassSeat * 150) ;
    document.getElementById("forFirstClassMesageBill").innerText = subTotalForFirstClass;

    const subTotalForEconomyClass = (economyClassSeat * 100);
    document.getElementById("forEconomyClassMesageBill").innerText = subTotalForEconomyClass;

    const subTotal = (firstClassSeat * 150) + (economyClassSeat * 100);
    document.getElementById("forSubtotalMessage").innerText = subTotal;

    const taxBill = Math.round(subTotal/10);
    document.getElementById("forTaxMessage").innerText = taxBill;

    const total = subTotal + taxBill;
    document.getElementById("forTotalMesage").innerText = total;
}


    
        // const flightDetails = document.querySelectorAll(".flight-deatails");
        // const fromFlyingPlace = document.getElementById("fromflyingPlace").value;
        //         const toFlyingPlace = document.getElementById("toflyingPlace").value;
        //         const departureDate = document.getElementById("departureDate").value;
        //         const returnDate = document.getElementById("returnDate").value;
                
        // // for(let i=0; i<flightDetails.length; i++){
        // //     let details = flightDetails [i];
        // //     if((flightDetails[i] != "" && flightDetails[i+1] != "" && flightDetails[i+2] != "" && flightDetails[i+3] != "" )){
                
        // //         calculateTotal();
        // //         console.log(fromFlyingPlace,toFlyingPlace,departureDate,returnDate);
        // //     }
        // //     if(flightDetails[i] == "" || flightDetails[i+1] == "" || flightDetails[i+2] == "" || flightDetails[i+3] == "" ){
        // //         console.log('input please');
        // //     }
            
        // // }
        
        