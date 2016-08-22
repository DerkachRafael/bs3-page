$(function() {
	//loader
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 1500);

// Check the captcha
function checkCaptcha(value, validator, $field) {
    var items = $('#captchaOperation').html().split(' '),
        sum   = parseInt(items[0]) + parseInt(items[2]);
    return value == sum;
}
 // Generate a simple captcha
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function generateCaptcha() {
        $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));
    }
    generateCaptcha();
//modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});

// create angular app
	var validationApp = angular.module('validationApp', []);

	// create angular controller
	validationApp.controller('mainController', function($scope) {

		// function to submit the form after all validation has occurred			
		$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
				alert('our form is amazing');
			}

		};

	});