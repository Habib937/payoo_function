document.getElementById('btn-add-money')
    .addEventListener('click', function (event){
        event.preventDefault();

        let addMoney = getInputFieldValueId('amount-id')
        let pinNumber = getInputFieldValueId('pin-id')

        if(isNaN(addMoney)){
            alert('add money failed')
            return;
        }
        if(pinNumber === 1234){
            let balance = getTextFieldValueId('main-balance');
            let newBalance = balance + addMoney;
            document.getElementById('main-balance').innerText = newBalance;

            // add to transition history
            let p = document.createElement('p')
            p.innerText = `Added ${addMoney} tk. New Balance ${newBalance}`

            document.getElementById('transaction-container').appendChild(p)


        }
        else{
            alert('Wrong password')
        }
    })
       