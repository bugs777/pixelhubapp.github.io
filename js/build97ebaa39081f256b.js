var config = {
	 appName: 'HustBee', 
	 apiUrl: window.location+'api/v1/method/',
	 cdnUrl:'https://upbeat-cori-f6d03c.netlify.com/',
	 token:'<? echo encode($_SESSION["id"]); ?>',
	 panel:'Панель управления',
	 profile:'Настройки',
	 forum:'Форум',
	 forumurl:'<? echo $forumurl; ?>',
	 sitebuilder:'Конструктор сайтов',
	 sitebuilderurl:'<? echo $builderurl; ?>',
	 ifastnet:'iFastNet',
	 ifastneturl:'https://ifastnet.com/portal/aff.php?aff=25986',
	 create:{
	   button2:"Создать бесплатный хостинг-аккаунт",
	   myaccounts:"Мои аккаунты",
       title:"Субдомен",
       tooltip:"Выберите бесплатный поддомен. Вы можете добавить дополнительные домены позже.",
       usefreedomain:"Использовать бесплатный субдомен",
       usefreedomain1:"Вы можете создать бесплатный субдомен в зоне hustbee.gq",
       userourdomain:"Использовать Ваш домен",
       ourdomaintooltip:"Домен должен указывать на серверы имен: ns1.hustbee.tk and ns2.hustbee.tk.",
       nameaccount:"Название аккаунта",
       accpass:"Пароль",
       createbutton:"Создать аккаунт",
       login:"<? echo $login; ?>",
       password:"<? echo $pass; ?>"
	 },
	 user:{
      name:"<? echo $_SESSION["login"]; ?>",
      email:"<? echo $_SESSION["email"]; ?>",
      profileImage:"https://www.gravatar.com/avatar/<? echo md5($_SESSION["email"]); ?>?s=80"
	 },
	 storage: {
	 	logourl:'https://firebasestorage.googleapis.com/v0/b/hustbee-ef687.appspot.com/o/storage%2Fimage-1.png?alt=media&token=d1ca2f0d-f826-4e87-87b0-5e7089af88c4'
	 }
	};  
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
