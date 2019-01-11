window.onload = function() {
    const calcText = document.getElementById("calc-result");
    let calcValue = 0;
    let operation = "";
    function addInput(value) {
        let currentText = calcText.innerText;
        console.log(currentText.length);
        if (currentText.length == 1 && currentText == 0) {
            let toAdd = value;
            calcText.innerText = toAdd;
        } else {
            let toAdd = `${currentText}${value}`
            calcText.innerText = toAdd;
        }
    }

    function clearScreen() {
        calcText.innerText = 0;
    }

    function clearAll() {
        calcText.innerText = 0;
        calcValue = 0;
        operation = "";
    }

    function divide() {
        console.log("divide function");
        calcValue = calcText.innerText;
        operation = "/";
        clearScreen();
    }

    function multiply() {
        console.log("multiply function");
        calcValue = calcText.innerText;
        operation = "*";
        clearScreen();
    }

    function add() {
        console.log("multiply function");
        calcValue = calcText.innerText;
        operation = "+";
        clearScreen();
    }

    function subtract() {
        console.log("multiply function");
        calcValue = calcText.innerText;
        operation = "-";
        clearScreen();
    }
    function doOperation() {
        console.log("executing operation")
        if (operation == "/") {
            let tmp = calcText.innerText;
            output = Math.round((calcValue/tmp) * 10000) / 10000;
            calcText.innerText = output;
        }
        if (operation == "*") {
            let tmp = calcText.innerText;
            output = Math.round((calcValue*tmp) * 10000) / 10000;
            calcText.innerText = output;
        }
        if (operation == "+") {
            let tmp = calcText.innerText;
            output = Math.round((parseFloat(calcValue)+parseFloat(tmp)) * 10000) / 10000;
            calcText.innerText = output;
        }
        if (operation == "-") {
            let tmp = calcText.innerText;
            output = Math.round((parseFloat(calcValue)-parseFloat(tmp)) * 10000) / 10000;
            calcText.innerText = output;
        }
    }

    window.addEventListener("keydown", function(e){
        //clear button
        if (e.keyCode == 27 || e.keyCode == 46) {
            clearAll();
        }
        //0-9 on keyboard
        if (e.keyCode == 96 || e.keyCode == 48) {
            addInput(0);
        }
        if (e.keyCode == 49 || e.keyCode == 97) {
            addInput(1);
        }
        if (e.keyCode == 50 || e.keyCode == 98) {
            addInput(2);
        }
        if (e.keyCode == 51 || e.keyCode == 99) {
            addInput(3);
        }
        if (e.keyCode == 52 || e.keyCode == 100) {
            addInput(4);
        }
        if (e.keyCode == 53 || e.keyCode == 101) {
            addInput(5);
        }
        if (e.keyCode == 54 || e.keyCode == 102) {
            addInput(6);
        }
        if (e.keyCode == 55 || e.keyCode == 103) {
            addInput(7);
        }
        if (e.keyCode == 56 || e.keyCode == 104) {
            addInput(8);
        }
        if (e.keyCode == 57 || e.keyCode == 105) {
            addInput(9);
        }
        if (e.keyCode ==  110 || e.keyCode == 190) {
            addInput(".");
        }
        //operators on the keyboard
        //enter button
        if (e.keyCode == 13) {
            doOperation();
        }
        //mathmatical
        if (e.keyCode == 111) {
            divide();
        }
        if (e.keyCode == 106) {
            multiply();
        }
        if (e.keyCode == 107) {
            add();
        }
        if (e.keyCode == 109) {
            subtract();
        }
    });
};