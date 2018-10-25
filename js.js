
$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false
    });
    $('.reviews').slick();
    $('.reviews').css("display","flex");
    $('.reviews').css("flex-direction","column");
    $('.slick-prev').css("align-self","center");
    $('.slick-prev').css("width","50%");
    $('.slick-next').css("align-self","center");
    $('.slick-next').css("width","50%");

    $('a.contacts').on('click', function(){
    	$('.contacts-modal').css("display","block");
    });
    $('.sizes').on('click', function(){
    	$('.second-list').show();
    	$('img.opened').css("display","block");
    	$('img.open').css("display","none");
    });
    // $('.onbig').on('click', function(){
    // 	$('.card').css("display","none");
    //     $('.big').css("display","block");
    // });
    // $('.onmiddle').on('click', function(){
    // 	$('.card').css("display","none");
    //     $('.middle').css("display","block");
    // });
    // $('.ona').on('click', function(){
    // 	$('.card').css("display","none");
    //     $('.a').css("display","block");
    // });	
    // $('.onsmall').on('click', function(){
    // 	$('.card').css("display","none");
    //     $('.small').css("display","block");
    // });		
    // $('.onsale').on('click', function(){
    // 	$('.card').css("display","none");
    //     $('.sale').css("display","block");
    // });
    $('#sign').on('click',function(){
        $('form').toggleClass("active");
    })
    $('.btn-primary').on('click', function(){
        $('#formsign').css("display","none");
    })
    $('.menu-icon').on("click",function(){
      $('#headernav').toggleClass("active");  
    })
    $('#myModal').modal('toggle');
    $('.play').slick();
    $('.slick-prev').html("<<");
    $('.slick-next').html(">>");



    var goods = [
    {
        name: "Botanical illustration",
        description: "Wild Flowers Chart, Flower Species, Botanical, titles, herbarium, living room, nursery, Printable, instant download",
        size: "16x20, A3, 8x10",
        newprice: "USD 4.20",
        oldprice: "USD 6",
        benefit: "USD 1.80 (30%) You save",
        image: "./images/25.png" 
    },
    {
        name: "Botanical illustration",
        description: "Wild Flowers Chart, Flower Species, Botanical, titles, herbarium, living room, nursery, Printable, instant download",
        size: "11x14, 8x10",
        newprice: "USD 4.20",
        oldprice: "USD 6",
        benefit: "USD 1.80 (30%) You save",
        image: "./images/24.png" 
    },
    {
        name: "Botanical illustration",
        description: "Wild Flowers Chart, Flower Species, Botanical, titles, herbarium, living room, nursery, Printable, instant download",
        size: "16x20, 11x14, A3",
        newprice: "USD 4.20",
        oldprice: "USD 6",
        benefit: "USD 1.80 (30%) You save",
        image: "./images/23.png" 
    },
    {
        name: "Botanical illustration",
        description: "Wild Flowers Chart, Flower Species, Botanical, titles, herbarium, living room, nursery, Printable, instant download",
        size: "16x20, 11x14, A3, 8x10",
        newprice: "USD 4.20",
        oldprice: "",
        benefit: "No Sale",
        image: "./images/22.png" 
    },
    {
        name: "Botanical illustration",
        description: "Wild Flowers Chart, Flower Species, Botanical, titles, herbarium, living room, nursery, Printable, instant download",
        size: "16x20, 11x14, A3, 8x10",
        newprice: "USD 4.20",
        oldprice: "USD 6",
        benefit: "USD 1.80 (30%) You save",
        image: "./images/21.png" 
    },
    {
        name: "Botanical illustration",
        description: "Wild Flowers Chart, Flower Species, Botanical, titles, herbarium, living room, nursery, Printable, instant download",
        size: "16x20, 11x14, A3, 8x10",
        newprice: "USD 4.20",
        oldprice: "USD 6",
        benefit: "USD 1.80 (30%) You save",
        image: "./images/20.png" 
    },
    {
        name: "Botanical illustration",
        description: "Wild Flowers Chart, Flower Species, Botanical, titles, herbarium, living room, nursery, Printable, instant download",
        size: "16x20, 11x14, 8x10",
        newprice: "USD 4.20",
        oldprice: "USD 6",
        benefit: "USD 1.80 (30%) You save",
        image: "./images/11.png" 
    },
    {
        name: "Botanical illustration",
        description: "Wild Flowers Chart, Flower Species, Botanical, titles, herbarium, living room, nursery, Printable, instant download",
        size: "16x20, A3, 8x10",
        newprice: "USD 4.20",
        oldprice: "USD 6",
        benefit: "USD 1.80 (30%) You save",
        image: "./images/18.png" 
    },
    {
        name: "Botanical illustration",
        description: "Wild Flowers Chart, Flower Species, Botanical, titles, herbarium, living room, nursery, Printable, instant download",
        size: "16x20, 11x14, A3, 8x10",
        newprice: "USD 4.20",
        oldprice: "",
        benefit: "No Sale",
        image: "./images/12.png" 
    }
];

for (var i=0; i<goods.length; i++ ){
console.log(goods[i]);
var goodsContainer  = document.createElement('div');
    goodsContainer.className = "card";
    goodsContainer.innerHTML = 
                "<img class=\"card-img-top\" src=" + goods[i].image +" alt=\"Card image cap\">" +
                "<div class=\"card-body\">" +
                "<h5 class=\"card-title\">" + goods[i].name + "</h5>" +
                "<p class=\"card-text\">" + goods[i].description +"</p>" +
                "<p id =\"size\">"  + goods[i].size +"</p>" +
                "<p><span class=\"newprice\" id=\"newprice\">"+ goods[i].newprice + "</span><span class=\"oldprice\" id=\"oldprice\">" + goods[i].oldprice +"</span><br><span class=\"benefit\">"+ goods[i].benefit +"</span></p>" +
                "<a href=\"#\" class=\"btn btn-primary\" onclick=\"add\">add to the cart</a>" +
                "</div>";
$("#goods").append(goodsContainer);
}

    var i=0;
    document.querySelector('#quantity').innerHTML = i;
    $('.btn').on("click",function(event){
        event.preventDefault();
        ++i;
        document.querySelector('#quantity').innerHTML = i;
    });


    

    var errorList;

    $('#formcontact').submit(function(event){
        event.preventDefault();


        errorList = 0;
        $('.alert').remove();

        var form = $(this);
        var sort = form.serializeArray();
        sort.forEach(function(item){
            validate(item.name, item.value);
        });
        
    })

    function validate(name, value) {
        console.log('try validate:', name, value);
        if ( name == 'username') {
            if (value != '') {
                var pattern =/[^а-яА-Яa-zA-Z]/;
                var matches = value.match(pattern);
                if (matches){
                    errorList++;
                   $("input[name="+name+"]").after("<div class='alert alert-success'>Проверте поля</div>");
                }

            } else {
                errorList++;
                $("input[name="+name+"]").after("<div class='alert alert-dark'>Заполните поле</div>");
            
            }
        }

        if (name == 'email'){
            if( value != ''){
                var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var result = pattern.test(value);
                if (!result){
                    errorList++;
                    $("input[name="+name+"]").after("<div class='alert alert-success'>Проверьте Поля</div>");

                }
            } else {
                errorList++;
                $("input[name="+name+"]").after("<div class='alert alert-dark'>Заполните поле</div>");
            }
        }
    }
 
 });






