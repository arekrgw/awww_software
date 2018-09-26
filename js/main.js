
var menu = function(){
    var hamburger = document.querySelector(".hamburger");
    var ex = document.querySelector('.ex-hide');

    var nav = document.querySelector('.nav');
    hamburger.addEventListener('click', function(){
        nav.style.left = 0;
    });
    ex.addEventListener('click', function(){
        nav.style.left = 100+"%";
    });
};

menu();

var verify = function(){
    var name = document.querySelector('.inp-name'),
        email = document.querySelector('.inp-email'),
        tel = document.querySelector('.inp-tel'),
        topic = document.querySelector('.inp-topic'),
        mess = document.querySelector('.inp-mess');

        name.addEventListener('keyup', function(e){
            var regexp = /[A-Za-z0-9]{3,}/;
            if(regexp.test(name.value))
                name.style.borderColor = "#76ad75";
            else
                name.style.borderColor = "#FF0000";
            
        });
        
        topic.addEventListener('keyup', function(e){
            var regexp = /[A-Za-z0-9]{3,}/;
            if(regexp.test(topic.value))
                topic.style.borderColor = "#76ad75";
            else
                topic.style.borderColor = "#FF0000";
            
        });

        mess.addEventListener('keyup', function(e){
            var regexp = /[A-Za-z0-9]{3,}/;
            if(regexp.test(mess.value))
                mess.style.borderColor = "#76ad75";
            else
                mess.style.borderColor = "#FF0000";
            
        });

        tel.addEventListener('keyup', function(e){
            var regexp = /[0-9]{9}/;
            if(regexp.test(tel.value))
                tel.style.borderColor = "#76ad75";
            else
                tel.style.borderColor = "#FF0000";
            
        });

        email.addEventListener('keyup', function(e){
            var regexp = /^\S+@\S+$/;
            if(regexp.test(email.value))
                email.style.borderColor = "#76ad75";
            else
                email.style.borderColor = "#FF0000";
            
        });
        
};
verify();
var closeMenu = function(){
    var nav = document.querySelector('.nav');
    nav.style.left = 100+"%";
}

var $root = $('html, body');

$('a[href^="#"]').click(function () {
    closeMenu();
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});