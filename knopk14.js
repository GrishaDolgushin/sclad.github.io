// Функция окрывающая форму
function openForm14() {
	window.scrollTo(0,0);
    document.getElementById("myForm1").style.display = "block";
	var app = "https://script.google.com/macros/s/AKfycbzjn6OLBNeF5y1FUjyQjo_A8KoJNmZE6Nkh8NsOGNWkLz9-SpEoK9KYbpbx9mbio4Po5g/exec",
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
		
	let myInput4 = document.getElementById("myInput4");
        myInput4.value = result [6];
		if (myInput4.value == 0){
		document.getElementById("div4").style.display = "none";}
		
	let myInput5 = document.getElementById("myInput5");
        myInput5.value = result [8];
		if (myInput5.value == 0){
		document.getElementById("div5").style.display = "none";}
		
	let myInput6 = document.getElementById("myInput6");
        myInput6.value = result [10];
		if (myInput6.value == 0){
		document.getElementById("div6").style.display = "none";}

	let myInput7 = document.getElementById("myInput7");
        myInput7.value = result [12];
		if (myInput7.value == 0){
		document.getElementById("div7").style.display = "none";}
		
	let myInput8 = document.getElementById("myInput8");
        myInput8.value = result [14];
		if (myInput8.value == 0){
		document.getElementById("div8").style.display = "none";}
		
	let myInput9 = document.getElementById("myInput9");
        myInput9.value = result [16];
		if (myInput9.value == 0){
		document.getElementById("div9").style.display = "none";}
		
	let myInput10 = document.getElementById("myInput10");
        myInput10.value = result [18];
		if (myInput10.value == 0){
		document.getElementById("div10").style.display = "none";}
		
	let myInput11 = document.getElementById("myInput11");
        myInput11.value = result [20];
		if (myInput11.value == 0){
		document.getElementById("div11").style.display = "none";}
		
	let myInput12 = document.getElementById("myInput12");
        myInput12.value = result [22];
		if (myInput12.value == 0){
		document.getElementById("div12").style.display = "none";}

        } catch(e) {}


     }

   }

   xhr.send()


}
