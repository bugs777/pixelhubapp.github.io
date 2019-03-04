var app = angular.module("hustApp", []);
app.directive("hustRoot", function() {
    return {
        template : '<div class="stars"></div><div class="sun-moon"><div class="sun"></div><div class="moon"></div></div><div id="js-hills" class="background hills"></div><div id="js-country" class="background country"></div><div id="js-foreground" class="background foreground"></div><div class="error-content">Ваш сайт успешно создан.<br>Войдите в панель управления, чтобы загрузить свои файлы</div><a href="https://hustbeefree.tk/ru?utm_campaign=husterror-404&utm_medium=referral&utm_source=hust-created&b=index2.html" class="button-home">HustBee Panel</a> <div class="code"><span></span><span></span><span></span></div>'
    };
});
