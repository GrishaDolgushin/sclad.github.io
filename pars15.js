(function f1() {
   var app = "https://script.google.com/macros/s/AKfycbxm4h3qsh9W2qIhnCVwZBygZZCKtCA2mGpntyATqZsQWcK1dE1waYvye0thMflKo8y-hg/exec", //ссылка на таблицу
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
		if (output=='') { document.getElementById('el15').innerHTML = "Свободное место";} else
		document.getElementById('el15').innerHTML = output ;
        } catch(e) {}


     }

   }

   xhr.send()
})()
