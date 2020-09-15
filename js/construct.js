// ================ toproll ============

$(window).scroll(function(){

    var dim = $(this).scrollTop();

    // $('#toproll').html(pos);

    if(dim > 600){
        $('#toproll').fadeIn(100);
    }

    else{
        $('#toproll').fadeOut(100);
    }

});

$('#toproll').click(function(){
    $('html,body').animate({scrollTop:0},500);
});




// ========= tab ==========

var i , tabContent , link ;

tabContent = document.getElementsByClassName('tabInfo');

link = document.getElementsByClassName('tablinks');

function openSite(btn,tab){

    for(i = 0 ; i < tabContent.length; i++){
        tabContent[i].style.display = 'none';
    }

    for(let i = 0; i < link.length; i++){
        link[i].style.color = '';
        link[i].style.backgroundColor = '';
    }

    document.getElementById(tab).style.display = 'block';

    // document.getElementById(btn).style.color = "#ffc000";
    document.getElementById(btn).style.backgroundColor = "rgb(48, 255, 48)";
}

//============ Client profile ================

var clientnfo , clientbtn ,display = false;

$('.clientpro').click(function(){
     display = !display ;

    if( display == true){
        $('.clientInfo').fadeIn(300);
        $('.clientpro').html('Close Profile')
    }
    
    else{
        $('.clientInfo').fadeOut(300);
        $('.clientpro').html('Open Profile')
     }
});

// function profile(){

//     display = !display;

//     if(display == true){
//         document.getElementById('clientin').style.display = 'block';
//         document.getElementById('clientbtn').innerHTML = 'Close Profile';
//     }

//     else{
//         document.getElementById('clientin').style.display = 'none';
//         document.getElementById('clientbtn').innerHTML = 'Open Profile';
//     }
// }

