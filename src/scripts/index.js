import '../styles/index.scss';
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if(window.innerWidth > 768){
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 72)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }    
        }
    });



    window.onload = function() {
        $('.navbar-collapse').collapse('hide');

        //ANIMATION TEXT LIKE TYPING EFFECT
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS BORDER TYPING
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #ff5922 }";
        document.body.appendChild(css);

        jQuery.fn.highlight = function(str, className) {
            var regex = new RegExp(str, "gi");

            return this.each(function() {
                this.innerHTML = this.innerHTML.replace(regex, function(matched) { return "<span class=\"" + className + "\">" + matched + "</span>"; });
            });
        };

        $(".txt-rotate .wrap").highlight("<br>", "highlight");
    };
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });
   
    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 50) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // noticias destacadas
    
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    .then(function (response) {
        return response.json()
    }).then(function (data) {
            let html = '';
            data.forEach(function(post){
                html += `
                    <div class="card col-sm-4 col-12" style="width: 18rem;">
                        <img src="src/img/385x374.png" class="card-img-top">
                        <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                        <a href="/noticia/${post.id}" class="read-more">Leer más  ⮞</a>
                        </div>
                    </div>
                    `;
                // document.getElementById('news-featured').innerHTML = html;
                $('#news-featured').append(html)
            });        
    });    

//programas (prueba)   


fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
.then(function (response) {
    return response.json()
}).then(function (data) {
        var html = '';
        data.forEach(function(post){
            html += `
            <a href="programa.html" class="programas-card card p-4 text-white col-12 col-sm-4">
                <img src="src/img/385x374.png" class="card-img" >
                <div class="card-img-overlay">
                  <h5 class="card-title text-right pr-3">${post.title}</h5>
                  <span class="card-date">${post.id}/07/2020</span>
                </div>
            </a>            
            `;            
            // document.getElementById('list-programas-content').innerHTML = html;
            $('#list-programas-content').append(html)
        });
});    


//asda

// (function() {
//     let nextPage = 1;
//     const content = document.querySelector('.contentss');
//     const loading = document.querySelector('.loadings');
  
//     function renderUsers(users) {
//       users.results.map(user => {
//         const element = document.createElement('div');
//         element.classList.add('user');
//         element.innerHTML = user.email;
//         content.appendChild(element);
//       });
//     }
  
//     async function getUsers(page) {
//       const users = await (
//         await fetch(`https://randomuser.me/api/?page=${page}&results=50`)
//       ).json();
//       return users;
//     }
  
//     async function loadMoreUsers() {
//       const { scrollTop, clientHeight, scrollHeight } = content;      
//       if (scrollHeight - scrollTop === clientHeight) {
//         loading.classList.add('show');
//         const users = await getUsers(nextPage);
//         renderUsers(users);
//         loading.classList.remove('show');
//         nextPage += 1;
//       }
//     }
  
//     loadMoreUsers();
//     nextPage += 1;
  
//     // Event listeners
//     content.addEventListener('scroll', loadMoreUsers);
//   })();

//asda

    //programas
    
    $("#ano-dd").on("change", function() {
        var value = $(this).val().toLowerCase();        
        $("#list-programas-content .programas-card .card-date").text().filter(function() {
            let year = $(this).split('/');            
            year[2].indexOf(value) > -1
        });
    });

    //Interna TES

    $('.thumbnail-img').click(function(){
        $('.big-img').attr('src',$(this).attr('src'))        
    });

    $(".set > a").on("click", function() {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".content")
            .slideUp(200);
          $(".set > a i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
        } else {
          $(".set > a i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
          $(this)
            .find("i")
            .removeClass("fa-plus")
            .addClass("fa-minus");
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(200);
          $(this)
            .siblings(".content")
            .slideDown(200);
        }
      });

      //formulario      
      $(".onlyLetters").keypress(function(event){
        var inputValue = event.charCode;        
        if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)){
            event.preventDefault();
        }
    });

    $('#nombre,#apellido').keyup(function(){
        if($(this).val().length < 4){
            $(this).css('color', 'red');
            $(this).css('border','1px solid red');
        }else{
            $(this).css('color', '#000');
            $(this).css('border','1px solid #ced4da');  
        }
    });

    var FirstLetterIsNine = function(value) {
        var TelPattern = /^([9]{1})([0-9]{1})/;
        return TelPattern.test(value);
    }

    $('#telefono').keyup(function(){      
        var value = $(this).val();
        var IfFirstLetterIsNine = FirstLetterIsNine(value);  
        if($(this).val().length == 9 && IfFirstLetterIsNine){
            $(this).css('color', '#000');
            $(this).css('border','1px solid #ced4da');  
        }else{
            $(this).css('color', 'red');
            $(this).css('border','1px solid red');
        }
    });
    $('.onlyNumbers').keypress(function(e){        
        if (/\D/g.test(this.value)){        
            this.value = this.value.replace(/\D/g, '');
        }
    });    

    
    
    var validateEmail = function(elementValue) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(elementValue);
    }
    
    
    
    $('#email').keyup(function() {    
        var value = $(this).val();
        var valid = validateEmail(value);
    
        if (!valid) {        
            $(this).css('color', 'red');
            $(this).css('border','1px solid red');
            $(this).addClass('notValid');
        } else {        
            $(this).css('color', '#000');
            $(this).css('border','1px solid #ced4da');    
            $(this).removeClass('notValid');
        }
    });
    $('#nombre,#email,#apellido,#telefono').keyup(function(){
        if($('#nombre').val().length > 3 && $('#apellido').val().length > 3 && $('#telefono').val().length == 9 && !$('#email').hasClass('notValid')){            
            $('.donate-btn').prop('disabled', false);
            $('.donate-btn').removeClass('disabled');            
        }else{
            $('.donate-btn').prop('disabled', true);
            if(!$('.donate-btn').hasClass('disabled')){
                $('.donate-btn').addClass('disabled');
            }
        }
    })
    $('.donate-btn').click(function(){
        if($('#nombre').val().length > 3 && $('#apellido').val().length > 3 && $('#telefono').val().length == 9 && !$('#email').hasClass('notValid')){            
            $('.error').removeClass('hide');
            Swal.fire({
                title: 'GRACIAS POR TU DONACIÓN!',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed o eiusmod tempor incididunt ut labore et ',  
                confirmButtonText: 'Aceptar'
              });
        }else{
            if(!$('.error').hasClass('hide')){
                $('.error').addClass('hide');
            }
        }
    })

})(jQuery); // End of use strict