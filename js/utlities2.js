function getInputFieldValueId(id){
    let inputValue = document.getElementById(id).value;
    let inputNum = parseFloat(inputValue)
    return inputNum;
}

function getTextFieldValueId(id){
    let textValue = document.getElementById(id).innerText;
    let textNum = parseFloat(textValue);
    return textNum;   
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transition section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}