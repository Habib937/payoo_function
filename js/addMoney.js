document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        let inputMoney = document.getElementById('amount-id').value;
        let inputMoneyNum = parseFloat(inputMoney)
        let pinNumber = document.getElementById('pin-id').value;
        console.log(inputMoney,pinNumber)

        if(pinNumber==='1234'){
            let balance =document.getElementById('main-balance').innerText;
            let balanceNum=parseFloat(balance)
            let newBalance = inputMoneyNum + balanceNum;
            document.getElementById('main-balance').innerText = newBalance;
        }
        else{
            alert('Wrong password')
        }

    })