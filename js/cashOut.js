document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        let cashOut = getInputFieldValueId('cash-out-amount-id');
        let pinNumber = getInputFieldValueId('cash-out-pin-id');
        if(pinNumber === 1234){
            let balance = getTextFieldValueId('main-balance');
            let newBalance = balance-cashOut
            document.getElementById('main-balance').innerText = newBalance
        }

    })