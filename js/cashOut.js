document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        let cashOut = getInputFieldValueId('cash-out-amount-id');
        let pinNumber = getInputFieldValueId('cash-out-pin-id');

        if(isNaN(cashOut)){
            alert('cash out failed');
            return;
        }

        if(pinNumber === 1234){
            let balance = getTextFieldValueId('main-balance');
            if(balance<cashOut){
                alert('you have not enough money')
                return;
            }
            let newBalance = balance-cashOut
            document.getElementById('main-balance').innerText = newBalance

            // added to transition history

            let div = document.createElement('div')
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
            <h4 class = "text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} tk withdraw. New Balance ${newBalance}</p>
            
            `
            document.getElementById('transaction-container').appendChild(div)
        }
        else{
            alert('no money you have')
        }

    })
    