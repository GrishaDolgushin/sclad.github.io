(function f1() {
   var app = "https://script.google.com/macros/s/AKfycbxbSKITadGYD05NfFeBO9SvKPvocHT9G_Ll-MCc3r5WW1bnrXj6EAf7YBp_0us5AVk/exec", //ссылка на таблицу
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
		if (output=='') { document.getElementById('el7').innerHTML = "Свободное место";} else
		document.getElementById('el7').innerHTML = output ;
        } catch(e) {}


     }

   }

   xhr.send()
})()
