
$(document).ready(function () {

    // Your JQuery Code Here

    // $('selector').action() // format 
    // $('div').click(); // Click on div

    // $('.wrapper').click(function () {
    // console.log("Clicked");
    // $(this).hide()
    // when Click on div only then execute the function 

    // });

    // <<============================================================>>
    // There are three type of selector in jquery
    // 1. Example of Element Selector
    // $('p').click(function () {
    //     $(this).html('This is first')
    // })


    // // 2. Id Selector
    // $('#second').click(function () {
    //     $(this).html('This is Second')
    // })


    // // 3. Class Selector
    // $('.third').click(function () {
    //     $(this).html('This is Third')
    // })

    // <<============================================================>>
    // Events in JQuery

    // Mouse Event -> onclick, dbClick, mouseEnter , mouseLeave,
    // Keyboard Event -> keyUp, keyDown , KeyPress, MediaKeyStatus
    // Form Event -> Submit , focus, blur, Change
    // Document / Windows Event -> load, resize, scroll , Unload

    // $('p').click(function (e) {
    //     e.preventDefault();
    //     $(this).html('Clicked')
    // });

    // $('p').dblclick(function () {
    //     $(this).html(' Double Clicked')
    // });

    // $('p').mouseenter(function () {
    //     console.log("you Entered your Mouse", this)
    // });

    // $('p').mouseover(function () {
    //     console.log("you Mouse Over down");
    // });


    // On click Method In JQuery
    // $('p').on(
    //     {
    //         click: function () {
    //             console.log("thank You for Click me", this)
    //         },

    //         mouseleave: function () {
    //             console.log("MouseLeave")
    //         },


    //     });

    // <<===================================================>>

    // HIDE AND SHOW  with callback function

    // $('#text_box').hide(1000, function () {
    //     console.log("Now it is hidden");

    // });

    // $('#text_box').show(1000, function () {
    //     console.log("Now it is visible");
    // });

    // <<===================================================>>

    // TOGGLE() BUTTON with Animation (FADE) with argument + callback function (Optional)


    // $('#btn').click(function () {
    //     $('.text').fadeToggle(2000, function () {
    //         console.log("your job is done!");
    //     });
    // });


    // $('#btn').click(function () {
    //     $('#text_box').fadeOut(2000);
    // });

    // $('#btn').click(function () {
    //     $('#text_box').fadeIn(2000)
    // });

    // $('#btn').click(function () {
    //     $('#text_box').fadeToggle(2000)
    // });

    // $('#btn').click(function () {
    //     console.log("clicked", this);
    //     $('#text_box').fadeTo()
    // });

    // <<===================================================>>

    // TOGGLE() BUTTON with Animation (Slide) with argument + callback function (Optional)

    // $('#btn').click(function () {
    //     $('.text').slideToggle(2000, function () {
    //         console.log("your job is done!");
    //     });
    // });

    // $('#btn').click(function () {
    //     $('.text').slideUp(1000)
    // });
    // $('#btn').click(function () {
    //     $('.text').slideDown(1000)
    // });
    // $('#btn').click(function () {
    //     $('.text').slideToggle(1000)
    // });

    // $('#btn').click(function (e) {
    //     e.preventDefault();
    //     console.log("thank You so Mach");
    // });

    // <<===================================================>>

    // Animate Function() in Jquery
    // $('.text').animate({
    //     opacity: "0.3",
    //     width: '150px',
    //     height: "150px",
    // }, 2000)
    // $('.text').animate({ opacity: 0.3 }, 1000);
    // $('.text').animate({ opacity: 0.9 }, 5000);
    // $('.text').animate({ width: "160px" }, 8000);


    // <<===================================================>>
    // JQUERY IN HTML
    // $('p').text("this is paragraph");
    // $('p').html("this is html");
    // $('.text').text();

    // from changes

    // $('#myInp').val('this is harish');
    // $('p').addClass('para');
    // $('p').addClass('Bhoosa');
    // $('p').removeClass('Bhoosa');


});