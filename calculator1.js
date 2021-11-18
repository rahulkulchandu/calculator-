clear = document.getElementById('clear');
del = document.getElementById('del');
per = document.getElementById('per');
division = document.getElementById('division');

clear.addEventListener('click', () => {
    output.value = "";
});
del.addEventListener('click',()=>{
    output.value = output.value.slice(0,-1);
});
per.addEventListener('click', ()=>{
    output.value +="%";
});
division.addEventListener('click',()=>{
    output.value += "/";
});


seven = document.getElementById('seven');
eight = document.getElementById('eight');
nine = document.getElementById('nine');
mul = document.getElementById('mul');

seven.addEventListener('click',()=>{
    output.value += "7";
});
eight.addEventListener('click',()=>{
output.value += "8";
});
nine.addEventListener('click',()=>{
    output.value += "9";
});
mul.addEventListener('click', ()=>{
    output.value += "*";
});


four = document.getElementById('four');
five = document.getElementById('five');
six = document.getElementById('six');
sub = document.getElementById('sub');

four.addEventListener('click',()=>{
    output.value += "4";
});
five.addEventListener('click',()=>{
    output.value += "5";
});
six.addEventListener('click',()=>{
    output.value += "6";
});
sub.addEventListener('click',()=>{
    output.value +="-";
});


one = document.getElementById('one');
two = document.getElementById('two');
three = document.getElementById('three');
add = document.getElementById('add');

one.addEventListener('click',()=>{
    output.value += "1";
});
two.addEventListener('click',()=>{
    output.value += "2";
});
three.addEventListener('click',()=>{
    output.value += "3";
});
add.addEventListener('click', () => {
    output.value += "+";
});


dot = document.getElementById('dot');
zero = document.getElementById('zero');
eql = document.getElementById('eql');

dot.addEventListener('click',()=>{
    output.value += ".";
});
zero.addEventListener('click',()=>{
    output.value += "0";
});
eql.addEventListener('click', () => {
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

});