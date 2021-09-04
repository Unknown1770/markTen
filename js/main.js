const billAmount = document.querySelector("#bill-input");
const cashGiven = document.querySelector("#cash-input");
const checkButton = document.querySelector("#btn-check");
const nextButton = document.querySelector("#btn-next");
const givenContainer = document.querySelector(".given");
const changeContainer = document.querySelector(".change");
const message = document.querySelector("#error");
const noOfNotes = document.querySelectorAll(".no_of_notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", () => {
    hideMessage();
    if (billAmount.value > 0 ) {
        givenContainer.style.display="block";
    }
    else {
        showMessage("Please enter valid number");
    }
});

checkButton.addEventListener("click", () => {
    hideMessage();
    if (billAmount.value > 0 ){
        if( Number(cashGiven.value) >= Number(billAmount.value) ){
            changeContainer.style.display="block";
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else{
            showMessage("Bill is more")
        }    
    }
    else {
        showMessage("Please enter valid number");
    }
});

function hideMessage() {
    message.style.display="none";
}

function showMessage(text) {
    message.style.display="block";
    message.innerText = text;
};

function calculateChange(amount) {
    for (let i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(
            amount / availableNotes[i]
        );

        amount %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}; 