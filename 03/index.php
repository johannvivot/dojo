<?php
	header('P3P:CP="CAO PSA OUR"');
?>
<html>
<head>
<script>
	//3.1
	//document.cookie = 'ceretoTeste=x; path=/;';

	//3.2
	function setCookie(){
		var ps, q;

		ps = document.location.href.split('?');

		if(ps[1].indexOf('&') >= 0){
			q = ps[1].split('&');
			console.log(q);
			for(var i = 0; i < q.length; i++){
				document.cookie = q[i] + '; path=/;';
			}
		}else{
			q = ps[1];
			document.cookie = q + '; path=/;';
		}
	}

	setCookie();
</script>
</head>
<body>
<h1>Exercício 3 - DOJO</h1>
</body>
</html>
