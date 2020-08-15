//Menu
//	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
$(document).ready(function() {
	$('.header-top__burger').click(function(event) {
		$('.header-top__burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
  