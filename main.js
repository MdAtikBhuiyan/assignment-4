
function getSeatNumber(seatId){
    const seat = document.getElementById(seatId);
    const seatNumber = parseInt(seat.value);
    return seatNumber;
}

// seat count

function updateSeatCount(seatInputId, isIncreasing){
    let seatNumber = getSeatNumber(seatInputId);
    if (isIncreasing == true){
        seatNumber = seatNumber + 1;
    }
    if (isIncreasing == false && seatNumber > 0){
        seatNumber = seatNumber - 1;
    }
    document.getElementById(seatInputId).value = seatNumber;
    calculateTotal();
}

// total bill 

function calculateTotal(){
    const firstClassSeat = getSeatNumber("firstClassInput");
    const economyClassSeat = getSeatNumber("economyClassInput");

    const subTotal = (firstClassSeat * 150) + (economyClassSeat * 100);
    document.getElementById("sub-total").innerText = subTotal;

    const taxBill = Math.round(subTotal/10);
    document.getElementById("tax").innerText = taxBill;

    const total = subTotal + taxBill;
    document.getElementById("total").innerText = total;

}

// confirmation message after clicking book now button

function confirmationMessage(){
    document.getElementById('all-content').style.display = 'none';
    document.getElementById('confirmation-box').style.display = 'block';

    const firstClassSeat = getSeatNumber("firstClassInput");
    document.getElementById("forFirstClassSeatMesage").innerText = firstClassSeat;

    const economyClassSeat = getSeatNumber("economyClassInput");
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

        