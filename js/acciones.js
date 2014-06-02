// JavaScript Document
	var panel ='<div data-role="panel" id="mipanel" data-theme="a" data-display="push"><div class="panel-content" align="center"><img src="imagenes/menu.jpg" width="200" height="150"> <h3>Menu</h3> <div data-role="controlgroup"> <a data-role="button" href="#page">Principal</a> <a data-role="button" href="#page2">Banshee</a>  <a data-role="button" href="#page3">Hadas</a> <a data-role="button" href="#page4">Duendes</a><a data-role="button" href="#page5">Brujas</a><a data-role="button" href="#page6">Acerca de...</a> </div> </div> </div>';
		
		$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
});

$(document).ready(function(e) {
	
	 $('#logo img').tap(function(e){	
    $('#logo img').toggleClass('clicked');
	$('#vista img').toggleClass('clicked');
});//click 

    $('#vista img').tap(function(e){	
	 $("#camara")[0].play();	
	 $.mobile.navigate( "#page" );
	});
	
	document.addEventListener("deviceready",function(){
  $('#bien').tap(function(){
    navigator.notification.vibrate(500);
    navigator.notification.beep(2);
  });
 },false); //deviceready
 
}); //document ready