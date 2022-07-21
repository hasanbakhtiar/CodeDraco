// $(document).ready(function() {
//     $('ne ile').nece(function() {
//         $('neyi').edek();
//     })
// });

// $(document).ready(function() {
//     $('button').click(function() {
//         $('h1').hide();
//     })
// });
// SELECTORS
// $("*")	Selects all elements
// $(this)	Selects the current HTML element
// $("p.intro")	Selects all <p> elements with class="intro"
// $("p:first")	Selects the first <p> element
// $("ul li:first")	Selects the first <li> element of the first <ul>
// $("ul li:first-child")	Selects the first <li> element of every <ul>
// $("[href]")	Selects all elements with an href attribute
// $("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"
// $("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"
// $(":button")	Selects all <button> elements and <input> elements of type="button"
// $("tr:even")	Selects all even <tr> elements
// $("tr:odd")	Selects all odd <tr> elements

// EVENTS
// click	    keypress	submit	    load
// dblclick	    keydown	    change	    resize
// mouseenter	keyup	    focus	    scroll
// mouseleave	blur	    unload

// $(function() {
//     $('button').dblclick(function() {
//         $('[class="test"]').toggle(1000);
//     })
// });

$(function () {
  $("button").click(function () {
    // $('h1').hide(1000);
    // $('h1').show(1000);
    // $('h1').toggle();
    // $('h1').fadeIn("slow");
    // $('h1').fadeOut(3000);
    // $('h1').fadeToggle();
    // $('h1').fadeTo(1000,0.1)
    // $('h1').slideDown(1000)
    // $('h1').slideUp(1000)
    // $('h1').slideToggle(1000)
    // $('h1').css('color','blue')
    // $('h1').css({'color':'blue','fontSize':'100px'})
    // $('h1').addClass('b');
    // $('h1').removeClass('b');
    // $('h1').toggleClass('b');
    // $('h1').animate({
    //     left: '250px',
    //     opacity: '0.5',
    //     height: '+=150px',
    //     width: '150px'
    //   },()=>{
    //     alert('success')
    //   });
    // $('h1').hide(1000,()=>{document.querySelector('p').innerHTML = "Hellomiya"})
    // $('h1').css("color", "red").slideUp(2000).slideDown(2000);
    // document.querySelector('p').innerHTML = $('h1').text();
    // document.querySelector('p').innerHTML = $('h1').html();
    // document.querySelector('p').innerHTML = $('input').val();
    // $('p').text($('input').val()) 
    // $('p').text('<b>hello</b>');
    // $('p').html('<b>hello</b>');
    // $('input').val('<b>hello</b>');
    // $('p').append('hello');
    // $('p').prepend('hello');
    // $('p').before('hello');
    $('p').after('hello');



  });
});
