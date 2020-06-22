
//*******FUNCTIONS */
function applyScroll(){
    
   $(function(){    
    

    //Variable declarations
    let currentScroll=0,
    mainMenuH = $('.header-items').outerHeight(),
    prevScroll= mainMenuH,
    outofMainMenu=false;

        $('.header-items').clone().prependTo('body').addClass('scroll-menu');

        //SCROLL effects UP&Down for popup menu
        $(document).on('scroll',function(){

                currentScroll = $(this).scrollTop();
                //CSS scroll change effects
                if(currentScroll > prevScroll){
                    if(outofMainMenu){
                        // console.log('going DOWN');
                        $('.scroll-menu').slideDown(300,"swing").css({

                            'display':'flex',
                            'opacity':1
                        });
                        $('.fa-home').css({
                            'visibility':'hidden'
                        });
                    }
                    outofMainMenu=false;
                    prevScroll = currentScroll;
                }
                else{
                    // console.log('up UP UP');
                        $('.scroll-menu').fadeOut(200,"swing").css({
                            'opacity':0.3
                        });
                        $('.fa-home').fadeIn(500).css({
                            'visibility':'visible'
                        });
                    outofMainMenu=true;
                    prevScroll = currentScroll;
                }
                if(currentScroll > mainMenuH){
                    prevScroll=currentScroll -1;
                    outofMainMenu=true;
                }
                else{
                    outofMainMenu=false;
                    prevScroll=0;
                    $('.fa-home').css({
                        'visibility':'hidden'
                    });
                }
            
            

            
        });
   });

}
function applyMoneyFormat(){
    $(function(){
        $('.product-price').formatCurrency();
        $('.carousel-cell').append('<button class="btn-to-cart">Add to Cart</button>');
    });
}
function applyHomeBtn(){
    //<i class="fa fa-home"></i>
    $('body').prepend('<i class="fa fa-home"></i>');
}

function clickHomeBtn(){
    $('.fa-home').on('click',function(){
        $(window).scrollTop(0);
    })
}

function filterSubscription(){
    let theValue = document.getElementById('txtEmail').value;

    $('.btnSubscribe').on('click',function(){
        if(theValue==="" ){
            $('#txtEmail').focus();
            alert('please fill the blank!');
        }
        else{
            alert('Thank you for subscribing on us! \n We are exciting to reach you soon ' + theValue );
            location.reload();
        }
        
    });
}


$(document).ready(function()
{
    
    applyMoneyFormat();

    //filter for site's breakpoint
    if($(window).width()>=1100){
        return;
    }
    else{
        applyScroll();
        applyHomeBtn();
    }
    


    clickHomeBtn();

    filterSubscription();

});