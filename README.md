jquery-simple-checkbox
======================


Transform your regular checkbox input into a two state slider.

To use this script, include jquery.js, jquery.checkbox.js and jquery.checkbox.css into your <head> tag.

Demo file :
<html>
	<head>
		<title>demo page</title>
		<link rel="stylesheet" href="jquery.checkbox.css" />
		<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
		<script type="text/javascript" src="jquery.checkbox.js"></script>
	</head>

	<body>
		<input type="checkbox" id='chk1'/>
		<input type="checkbox" id='chk2'/>	
		<input type="checkbox"/>		
		<script type="text/javascript">
			$(document).ready(function(event) {
				$("#chk1").checkbox()
				$('#chk2').checkbox({
					'on_text': ":)",
					'off_text' : ":("
				})
			});
		</script>
	</body>
</html>