var app = angular.module("myApp", []);
app.directive("hustRoot", function() {
    return {
        template : '<div class="stars"></div><div class="sun-moon"><div class="sun"></div><div class="moon"></div></div><div id="js-hills" class="background hills"></div><div id="js-country" class="background country"></div><div id="js-foreground" class="background foreground"></div><div class="error-content"> Данный сервер временно недоступен. Попробуйте, пожалуйста,позже.</div><a href="https://hustbeefree.tk/ru?utm_campaign=husterror-404&utm_medium=referral&utm_source=hust-errors&b=404.html" class="button-home">Бесплатный хостинг</a> <div class="code"><span>5</span><span>x</span><span>x</span></div>'
    };
});
