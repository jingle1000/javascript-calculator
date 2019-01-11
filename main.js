window.onload = function() {
    const calcText = document.getElementById("calc-result");
    const keys = document.querySelectorAll('.btn');
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

    function processClick(e) {
        if (e.target.getAttribute('data-key') == null) {
            let parent = e.target.parentNode;
            processEvent(parent.getAttribute('data-key'));
            //var value = e.parentNode.getAttribute('data-key');
        } else {
            var value = e.target.getAttribute('data-key');
            processEvent(value);
            console.log(value);
        }
    }

    function processEvent(key) {
        if (key == 27 || key == 46) {
            clearAll();
        }
        //0-9 on keyboard
        if (key == 96 || key == 48) {
            addInput(0);
        }
        if (key == 49 || key == 97) {
            addInput(1);
        }
        if (key == 50 || key == 98) {
            addInput(2);
        }
        if (key == 51 || key == 99) {
            addInput(3);
        }
        if (key == 52 || key == 100) {
            addInput(4);
        }
        if (key == 53 || key == 101) {
            addInput(5);
        }
        if (key == 54 || key == 102) {
            addInput(6);
        }
        if (key == 55 || key == 103) {
            addInput(7);
        }
        if (key == 56 || key == 104) {
            addInput(8);
        }
        if (key == 57 || key == 105) {
            addInput(9);
        }
        if (key ==  110 || key == 190) {
            addInput(".");
        }
        //operators on the keyboard
        //enter button
        if (key == 13) {
            doOperation();
        }
        //mathmatical
        if (key == 111) {
            divide();
        }
        if (key == 106) {
            multiply();
        }
        if (key == 107) {
            add();
        }
        if (key == 109) {
            subtract();
        }
        if (key == "#") {
            let value = calcText.innerText;
            value = value * -1;
            calcText.innerText = value;
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

    keys.forEach(key => key.addEventListener("click", processClick));

    window.addEventListener("keydown", function(e){
        processEvent(e.keyCode);
    });
};