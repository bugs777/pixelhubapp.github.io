
var templateScript = $('#app').html();
var template = Handlebars.compile(templateScript);
$(document.body).append(template(config));

 var request = new XMLHttpRequest();

request.open('GET', config['apiUrl']+'getlimit?token='+config['token'], true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
 	var data = JSON.parse(request.responseText);
     if(data['limit'] == "yes") { 
        top.location.href=window.location+"?by=system";
      }
     //document.getElementById("create_a").innerHTML +='';
  } else {
    // error
  }
};

request.send();


jQuery.get('views/header', function(data){
		elem = document.getElementById("load_sites");
   elem.innerHTML = data;
});

$( "#cpanel" ).click(function() {
   top.location.href=window.location;
});

function gravatar() {
        top.location.href="https://ru.gravatar.com/";
    }
function error(etext) {
	Snackbar.show({
		text: etext,
		pos: 'bottom-center',
		showAction: false,
		actionText: "Dismiss",
		duration: 3000,
		textColor: '#fff',
		backgroundColor: '#383838'
	}); 
}
