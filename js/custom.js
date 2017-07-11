
$( document ).ready(function($) {

	$('.open-popup-link').magnificPopup({
	  type:'inline',
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	// $('.open-popup-link').magnificPopup({
	//   items: {
	//       src: '#test-popup1',
	//       type: 'inline'
	//   }
	// }) ;

	// $('.open-popup-link').click( function() {
	// 	console.log('Clicked');
	// 	alert( "Handler for .click() called." );
	// }) ;
    
});


console.log("loaded");