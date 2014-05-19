function xraySpecs() {
$('.unitToggle').click(function() {
  var unitCode = $(this).parent().children('.xrayhtml').children('.source-panel');
  $(unitCode).toggle(200);
});
}



function markupID() {
	$('code').addClass('language-markup');
};

function XRAY() {
initXRAY();
xraySpecs();
markupID();
Prism.highlightAll();
}