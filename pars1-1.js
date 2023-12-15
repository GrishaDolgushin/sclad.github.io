(function f1() {
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
		 		for (var i = 0; i<result.length; i=i+2) {
		if (result [i] == 0)
			{
		        output +='';
			}
			else
			{
			output += result [i]+ " " + result [i+1] + "<br/>";
			}
		}
		document.getElementById('el1-1').innerHTML = output ;
        } catch(e) {}


     }

   }

   xhr.send()
})()
