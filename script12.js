
var firstNumber;
var operation;
           


function addNumber(number) {
	document.getElementById("resultSpace").value += number;
    }
    
 function addDot(number) { 
                var b = document.getElementById("resultSpace").value ;  
                        if ( b === '') {                
                                            document.getElementById("resultSpace").value = null;
                                        } else { 
                                                if ( b.indexOf('.') === -1 ){
                                    document.getElementById("resultSpace").value += number;
                                                                            }
           
                                                }
                            }
 function addZero(number) { 
                            var x = document.getElementById("resultSpace").value ;  
                            if ( x === "0" ) {                
                                                 document.getElementById("resultSpace").value = "0";
                            } else { 
                                                            document.getElementById("resultSpace").value += number;
                                   }
                            }
       
                    
function addition() {
	firstNumber = +document.getElementById("resultSpace").value;
      
	operation = "+";
	document.getElementById("resultSpace").value = "";
}
function minus() {
	firstNumber = document.getElementById("resultSpace").value;
	operation = "-";
	document.getElementById("resultSpace").value = "";
}
function multiply() {
	firstNumber = document.getElementById("resultSpace").value;
	operation = "*";
	document.getElementById("resultSpace").value = "";
}
function division() {
	firstNumber = document.getElementById("resultSpace").value;
	operation = "/";
	document.getElementById("resultSpace").value = "";
}
function changeSign() {
	document.getElementById("resultSpace").value *= -1; 
}
function clear() {
    
  
	document.getElementById("resultSpace").value = "";
	firstNumber = null;
    operation = null;
}


function equall() {
    
	switch(operation) {
		case "+":
			document.getElementById("resultSpace").value = firstNumber + +document.getElementById("resultSpace").value;
            operation = null;
			break;
          
		case "-":
			document.getElementById("resultSpace").value = firstNumber - document.getElementById("resultSpace").value;
            operation = null;
            firstNumber = null;
			break;
        
		case "*":	
			document.getElementById("resultSpace").value = firstNumber * document.getElementById("resultSpace").value;
            operation = null;
			break;
            
		case "/":
			if (document.getElementById("resultSpace").value === "0") {
				alert("Деление на ноль - число стремиться к бесконечности");
			} else {
				document.getElementById("resultSpace").value = firstNumber / document.getElementById("resultSpace").value;
                
			}
            operation = null;
			break;	
            
	}
  
}




var radiobuttonResult = 0;              
         

var checkBoxResult = 0;               


function Result() {
	radiobuttonResult = 0;
    checkBoxResult  = 0;
	if (document.getElementById("answer1").checked) {
		radiobuttonResult += 1;	
    }
	if (document.getElementById("answer2").checked) {
		radiobuttonResult += 1;
	}
	if (document.getElementById("answer3").checked) {
		radiobuttonResult += 1;
	}
	if (document.getElementsByName("checkbox1")[0].checked) {
		checkBoxResult -= 0.5;
	}
	if (document.getElementsByName("checkbox1")[1].checked) {
		checkBoxResult += 0.5;
	}
	if (document.getElementsByName("checkbox1")[2].checked) {
		checkBoxResult += 0.5;
	}
	if (document.getElementsByName("checkbox1")[3].checked) {
		checkBoxResult -= 0.5;
	}
	if (checkBoxResult > 0) {
		radiobuttonResult += checkBoxResult;
	}
    
	checkBoxResult  = 0;
	if (document.getElementsByName("checkbox2")[0].checked) {
		checkBoxResult  += 0.5;
	}
	if (document.getElementsByName("checkbox2")[1].checked) {
		checkBoxResult  += 0.5;
	}
	if (document.getElementsByName("checkbox2")[2].checked) {
		checkBoxResult  -= 0.5;
	}
	if (document.getElementsByName("checkbox2")[3].checked) {
		checkBoxResult  -= 0.5;
	}
	if (checkBoxResult > 0) {
		radiobuttonResult += checkBoxResult;
	}
    
	alert("Всего  " + radiobuttonResult + " набрано , верных ответов  " + radiobuttonResult * 20 + "%");

}
