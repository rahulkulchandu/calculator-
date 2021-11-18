output = document.getElementById('output');
function display(num) {
    output.value += num;
}
function calculate() {
    try {
        if (output.value == "") {
            alert("Please enter any value");
        }
        else {
            output.value = eval(output.value);
        }
    }
    catch (err) {
        alert("Invalid");
    }
}
function clr() {
    output.value = "";
}
function delt() {
    output.value = output.value.slice(0, -1);
}
