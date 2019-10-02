
$(document).ready(function () {
	function main () {
		var addItemButton = $("#add-item");
		var inputField = $("#textfield");
		addItemButton.click(function (event) {
			if (inputField.text() === " ") {
				return;
			};
			event.preventDefault();
			$("#shopping-list").append(
				'<li class="shop-item">'
					+inputField.val()
					+'<div><button class="checkbtn">Check</button><button class="rmvbtn">Remove</button><div>'
				+'</li>');
			$("#shopping-list").on( "click",'.shop-item div .rmvbtn', function( event ) {
				event.preventDefault();
				$(event.target).parents('.shop-item').remove();
			});
			$("#shopping-list").on( "click",'.shop-item div .checkbtn', function( event ) {
				event.preventDefault();
				console.log('hi');
				$(event.target).parents('.shop-item').css("text-decoration","line-through");
			});
		});
		
	};
	main();
});