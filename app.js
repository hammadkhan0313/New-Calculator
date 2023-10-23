// input me jo value i he ye use show karta he
function getNumber(num){
    var result = document.getElementById('result')
    result.value += num;
}
// input ko clear karta he
function inputClear(){
    var result = document.getElementById('result')
    result.value = ""
}

// result laake deta he
function evalEquation(){
    var result = document.getElementById('result')
    result.value = eval(result.value)
}
function currentDisplay() {

    var result = document.getElementById('result'); 
    result.value = result.substring(0, result.length - 1);
}
