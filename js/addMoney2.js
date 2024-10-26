document.getElementById('btn-add-money')
    .addEventListener('click', function (event){
        event.preventDefault();

        let addMoney = getInputFieldValueId('amount-id')
        let pinNumber = getInputFieldValueId('pin-id')
        if(pinNumber === 1234){
            let balance = getTextFieldValueId('main-balance');
            let newBalance = balance + addMoney;
            document.getElementById('main-balance').innerText = newBalance;


        }
        else{
            alert('Wrong password')
        }
    })
       