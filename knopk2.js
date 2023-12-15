// Функция окрывающая форму
function openForm2() {
    document.getElementById("myForm1").style.display = "block";
	var app = "https://script.google.com/macros/s/AKfycbwPF12ZQ6D82aEL1bb7CSdMsSvrjfFM57sHXRbs3Fec7FeJHWaaA-PftoeVEfayHkRsxA/exec",
	output = '',
	xhr = new XMLHttpRequest();
   	xhr.open('GET', app);
   	xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;
     if (xhr.status == 200) {
        try {
        	var r = JSON.parse(xhr.responseText);
        	var   result = r["result"];

		let myInput1 = document.getElementById("myInput1");
        	myInput1.value = result [0];
		if (myInput1.value == 0){
			document.getElementById("div1").style.display = "none";}

		let myInput2 = document.getElementById("myInput2");
        	myInput2.value = result [2];
		if (myInput2.value == 0){
			document.getElementById("div2").style.display = "none";}

		let myInput3 = document.getElementById("myInput3");
        	myInput3.value = result [4];
		if (myInput3.value == 0){
			document.getElementById("div3").style.display = "none";}

        } catch(e) {}


     }

   }

   xhr.send()


}
