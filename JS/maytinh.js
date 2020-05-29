//nhập số
let str = document.getElementById("screen")
function clickNumber(value) {
    if(str.value == 0){
        str.value = value;
    }
    else {
        str.value += value;
    }
}
//tính toán
   function calculator(x) {
    let result = eval(str.value);
    display(result);
     document.getElementById('percent').innerHTML = 'Math.floor() ';




}
//xóa và reset
function display(value) {
    str.value = value;
}
function clearScreen() {
    str.value = 0;
}
function deleteNumber() {
    let res = str.value.substring(0,str.value.length - 1);
    display(res);
}