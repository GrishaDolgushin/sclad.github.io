function openForm1() {
    document.getElementById("myForm1").style.display = "block";

	   var app = "https://script.google.com/macros/s/AKfycbyumcFR3Lj6HBrsOdeekJmiyIfcFJuL2k65pebDnSn1vTk3qEPxLSaJdnDV6OnUFmHqRQ/exec",
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

        } catch(e) {}


     }

   }

   xhr.send()


}
