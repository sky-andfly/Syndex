var doc = $(document);
var mask = $('#mask');


function hidePopup(elem){
	mask.addClass('hide');
	mask.removeClass('open');
	elem.addClass('hide');
}

function showPopup(elem){
	hidePopup($('.popup'));

	mask.removeClass('hide');
	mask.addClass('open');
	elem.removeClass('hide');
}
/* LOGIN */
var login = $('#login');

doc.on('click', '.log', function(){
	showPopup(login);
});

login.on('click', function(e) {
  if (e.target !== this)
    return;
  
  	hidePopup(login);
});
/**/

/* REGISTRATION */
var reg = $('#reg');

doc.on('click', '.sign', function(){
	showPopup(reg);
});

reg.on('click', function(e) {
  if (e.target !== this)
    return;
  
  	hidePopup(reg);
});
/**/

/* RESTORE */
var rest = $('#restore');
var forgot = $('#forgot-pwd');

forgot.on('click', function(){
	showPopup(rest);
});

rest.on('click', function(e) {
  if (e.target !== this)
    return;
  
  	hidePopup(rest);
});
/**/