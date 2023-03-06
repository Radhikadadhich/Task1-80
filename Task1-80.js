// Task 1
$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
//   Task 2
$(document).on("contextmenu",function(e){
    e.preventDefault();
});
// Task 3
function blink_text() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}
setInterval(blink_text, 1000);
// Task 4
$(document).ready(function(){
    $("tr:odd").addClass("zebra");
});
// Task 5
$('a.printPage').click(function(){
    window.print();
    return false;
});
// Task 6
$('p').each(function(){
    var pdata = $(this);
    pdata.html( pdata.text().replace(/(^\w+)/,'$1') );
});
// Task 7
function new_div() {
    $(document).ready(function() {
      var test = {
        id: "div",
        class: "divclass",
        css: {
          "color": "Green"

        }
      };
      var $div = $("<div>", test);
      $div.html("Magiccccccc");
      $("body").append($div);
    });
    }
    // Task 8
    function moveButton(elem){
        if( $(elem).parent().attr("id") == "nonSelected" ){
            $(elem).detach().appendTo('#selected');
        }
        else{
            $(elem).detach().appendTo('#nonSelected'); 
        }
    }
    // Task 9
    function new_element(){
        $("#header ul").append('<li>Facebook</li>');
        }
// Task 10
function Remove_options()
{
$('#myColor')
    .empty()
    .append('<option selected="selected" value="test">Sujal</option>');
}
// Task 11
$('p').each(function() {

    var text_words = $(this).text().split(' ');

        $(this).empty().html(function() {

            for (i = 0; i < text_words.length; i++) {
                if (i === 0) {
                    $(this).append('<span>' + text_words[i] + '</span>');
                } else {
                    $(this).append(' <span>' + text_words[i] + '</span>');
                }
            }

        });

    });
    // Task 12
    function remove_classes()
{
$("#item").removeClass();
}
// Task 13
function remove_style() {
    $("#MyInput").css("border", "0");
}
    // Task 14
    $(document).on("contextmenu", ".element", function(e){
        console.log('Right Mouse Clicked!');
        return false;
     });

     $(document).on('click', '.element', function(){
      console.log('Left Mouse Clicked!');
     });
    //  Task 15
    $(document).keypress(function(e) {
        if(e.which == 13) {
            console.log('You pressed enter!');
        }
    });
    // Task 16
    $.fn.rowCount = function() {
        return $('tr', $(this).find('tbody')).length;
    };

    $.fn.columnCount = function() {
        return $('th', $(this).find('tbody')).length;
    };
    var

    rowctr = $('#table1').rowCount();
    var colctr = $('#table1').columnCount();

    console.log('No of Rows:'+rowctr);
    console.log('No of Columns:'+colctr);
    // Task 17
    var text = $('textarea#mytextarea').val();  
    console.log(text);
    // Task 18
    $('#myForm').submit(function() {
        var values = $(this).serialize();
        console.log(values);
      });
    //   Task 19
    var left_position = $("#name2").offset().left - $(document).scrollTop();
console.log('Left: '+left_position);

var top_position = $("#name2").offset().top - $(document).scrollTop();
console.log('Right: '+top_position);
// Task 20 no
// Task 21
$('#GFG_UP')
.text('Click the button to serialize the object to query string');
var data = {
param1: 'val_1',
param2: 'val_2',
param3: 'val_3'
};
$('#GFG_UP2').text(JSON.stringify(data));
$('button').on('click', function() {
var result = $.param(data);
$('#GFG_DOWN').text(result);
});
// Task 22
$('#name1').on('input', function() {
    console.log('New First name added');
    });
    // Task 23
    var y = ['Red', 'Green', 'White', 'black', 'Yellow'];
var remove_Item = 'White';

console.log('Array before removing the element = '+y);
y = $.grep(y, function(value) {
  return value != remove_Item;
});
console.log('Array after removing the element = '+y);
// Task 24
$("#button1").prop('value', 'Save');
// Task 25
var myOptions = {
    val1 : 'Blue',
    val2 : 'Orange'
};
var mySelect = $('#myColors');
$.each(myOptions, function(val, text) {
    mySelect.append(
        $('<option></option>').val(val).html(text)
    );
});
// Task 26
css('background-image',
 'url("https://www.w3resource.com/includes/jquery-images/jquery.gif")');
//  Task 27
$(document).ready(function(){ 
    $('#button1').click(function(){ 
      $("#myTable").find("tr:gt(0)").remove();
    });
  });   
// Tak 28
$(document).ready(function(){ 
    $('#button1').click(function(){ 
     console.log($('#op2').val());
     console.log($('#op4').val());
    console.log($('#ddid :selected').text());
     });
  });
// Task 29
$(document).ready(function(){ 
    $('#button1').click(function(){ 
    $("a").removeAttr('href');    
     });
  });
//   Task 30
$(document).ready(function(){ 
    $('#button1').click(function(){   $('#pid').removeClass('center').addClass('large');       
     });
  });
//   Task 31
$(document).ready(function(){ 
    $('#button1').click(function(){   $('#pid').addClass('large');       
     });
  });
//   Task 32
var count = $("#selected p").length;
console.log(count);
// TAsk 32
$(document).ready(function(){
    $("p").text("The DOM is now loaded and can be manipulated.");
});
// TAsk 34
$(document).ready(function(){
    $("p").click(function(){
        $(this).slideUp();
    });
});
// Task 35
$(document).ready(function(){
    $("p1").dblclick(function(){
        $(this).slideUp();
    });
});
// Task 36
$(document).ready(function(){
    $("p2").hover(function(){
        $(this).addClass("highlight");
    }, function(){
        $(this).removeClass("highlight");
    });
});
// Task 39
$(document).ready(function(){
    var i = 0;
    $('input[type="text"]').keypress(function(){
        $("span").text(i += 1);
        $("p3").show().fadeOut();
    });
});
// Task 40
$(document).ready(function(){
    var i = 0;
    $('input[type="text"]').keydown(function(){
        $("span").text(i += 1);
        $("p4").show().fadeOut();
    });
});
// Task 41
$(document).ready(function(){
    var i = 0;
    $('input[type="text"]').keyup(function(){
        $("span").text(i += 1);
        $("p5").show().fadeOut();
    });
});
// Task 42
$(document).ready(function(){
    $("select").change(function(){
        var selectedOption = $(this).find(":selected").val();
        alert("You have selected - " + selectedOption);
    });
});
// Task 43
$(document).ready(function(){
    $("input").focus(function(){
        $(this).next("span1").show().fadeOut("slow");
    });
});
// Task 44
$(document).ready(function(){
    $("input").blur(function(){
        $(this).next("span").show().fadeOut("slow");
    });
});
// Task 45
$(document).ready(function(){
    $("form").submit(function(event){
        var regex = /^[a-zA-Z]+$/;
        var currentValue = $("#firstName").val();
        if(regex.test(currentValue) == false){
            $("#result").html('<h7 class="error">Not valid!</h7>').show().fadeOut(1000);
            event.preventDefault();
        }
    });
});
// Task 46
$(document).ready(function(){
    $(window).resize(function() {
        $(window).bind("resize", function(){ 
            $("p8").text("Window width: " + $(window).width() + ", " + "Window height: " + $(window).height());
        });
    });
});
// Task 47
$(document).ready(function(){
    $(window).scroll(function() {
        $("p9").show().fadeOut("slow");
    });
});
// Task 49
$(document).ready(function(){
    // Hide displayed paragraphs with different speeds
    $(".hide-btn").click(function(){
        $("p10.normal").hide();
        $("p10.fast").hide("fast");
        $("p10.slow").hide("slow");
        $("p10.very-fast").hide(50);
        $("p10.very-slow").hide(2000);
    })
      // Show hidden paragraphs with different speeds
      $(".show-btn").click(function(){
        $("p10.normal").show();
        $("p10.fast").show("fast");
        $("p10.slow").show("slow");
        $("p10.very-fast").show(50);
        $("p10.very-slow").show(2000);
    });
});
// Task 50
$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-btn").click(function(){
        $("p11").toggle();
    });
});
// TAsk 51
$(document).ready(function(){
    // Toggles paragraphs with different speeds
    $(".toggle-btn").click(function(){
        $("p12.normal").toggle();
        $("p12.fast").toggle("fast");
        $("p12.slow").toggle("slow");
        $("p12.very-fast").toggle(50);
        $("p12.very-slow").toggle(2000);
    });
});
// Task 52
$(document).ready(function(){
    // Fadeing out displayed paragraphs
    $(".out-btn").click(function(){
        $("p13").fadeOut();
    });
    
    // Fading in hidden paragraphs
    $(".in-btn").click(function(){
        $("p13").fadeIn();
    });
});
// TAsk 53
$(document).ready(function(){
    // Fading out displayed paragraphs with different speeds
    $(".out-btn").click(function(){
        $("p13.normal").fadeOut();
        $("p13.fast").fadeOut("fast");
        $("p13.slow").fadeOut("slow");
        $("p13.very-fast").fadeOut(50);
        $("p13.very-slow").fadeOut(2000);
    });
    
    // Fading in hidden paragraphs with different speeds
    $(".in-btn").click(function(){
        $("p13.normal").fadeIn();
        $("p13.fast").fadeIn("fast");
        $("p13.slow").fadeIn("slow");
        $("p13.very-fast").fadeIn(50);
        $("p13.very-slow").fadeIn(2000);
    });
});
// Task 54
$(document).ready(function(){
    // Fade Toggles paragraphs with different speeds
    $(".toggle-btn").click(function(){
        $("p15.normal").fadeToggle();
        $("p15.fast").fadeToggle("fast");
        $("p15.slow").fadeToggle("slow");
        $("p15.very-fast").fadeToggle(50);
        $("p15.very-slow").fadeToggle(2000);
    });
});
// TAsk 55
$(document).ready(function(){
    // Fade Toggles paragraphs with different speeds
    $(".toggle-btn").click(function(){
        $("p16.normal").fadeToggle();
        $("p16.fast").fadeToggle("fast");
        $("p16.slow").fadeToggle("slow");
        $("p16.very-fast").fadeToggle(50);
        $("p16.very-slow").fadeToggle(2000);
    });
});
// Task 56
$(document).ready(function(){
    // Fade to paragraphs with different opacity
    $(".to-btn").click(function(){
        $("p17.none").fadeTo("fast", 0);
        $("p17.partial").fadeTo("slow", 0.5);
        $("p17.complete").fadeTo(2000, 1);
    });
});
// TAsk 57
$(document).ready(function(){
    // Slide up displayed paragraphs
    $(".up-btn").click(function(){
        $("p18").slideUp();
    });
    
    // Slide down hidden paragraphs
    $(".down-btn").click(function(){
        $("p18").slideDown();
    });
});
// TAsk 58
$(document).ready(function(){
    // Toggles paragraphs display with sliding
    $(".toggle-btn").click(function(){
        $("p19").slideToggle();
    });
});
// Task 59
$(document).ready(function(){
    // Toggles paragraphs display with sliding
    $(".toggle-btn").click(function(){
        $("p20").slideToggle();
    });
});
// Task 60
$(document).ready(function(){
    // Toggles paragraphs display with sliding
    $(".toggle-btn").click(function(){
        $("p20").slideToggle();
    });
});
// Task 61
$(document).ready(function(){
    $("button").click(function(){
        $("img").animate({
            left: 300
        });
    });
});
// TAsk 62
$(document).ready(function(){
    $("button").click(function(){
        $(".box").animate({
            width: "300px",
            height: "300px",
            marginLeft: "150px",
            borderWidth: "10px",
            opacity: 0.5
        });
    });
});
// Task 63
$(document).ready(function(){
    $("button").click(function(){
        $(".box1")
            .animate({width: "300px"})
            .animate({height: "300px"})
            .animate({marginLeft: "150px"})
            .animate({borderWidth: "10px"})
            .animate({opacity: 0.5});
    });
});
// TAsk 64
$(document).ready(function(){
    $("button").click(function(){
        $(".box2").animate({            
            top: "+=50px",
            left: "+=50px",
            width: "+=50px",
            height: "+=50px"
        });
    });
});
// TAsk 65
$(document).ready(function(){
    $("button").click(function(){
        $(".box3").animate({
            width: 'toggle'
        });
    });
});
// Task 66
$(document).ready(function(){
    $(".start").click(function(){
        $("p21").animate({width: "100%"}).animate({fontSize: "46px"}).animate({borderWidth: 30});
    });
    $(".reset").click(function(){
        $("p21").removeAttr("style");
    });
});  
// Task 67
$(document).ready(function(){
    $(".start").click(function(){
        $("p23")
            .animate({width: "100%"})
            .animate({fontSize: "46px"})
            .animate({borderWidth: 30});
    });
    $(".reset").click(function(){
        $("p23").removeAttr("style");
    });
}); 
// Task 68
$(document).ready(function(){
    $("button").click(function(){
        // This will work
        $("h1").html("Hello World!").addClass("test").fadeOut(1000);
        
        // This will NOT work
        $("p24").html().addClass("test");
    });
});
// TAsk 69
$(document).ready(function(){
    $("button").click(function(){
        $("p25").slideToggle("slow", function(){
            alert("The slide toggle effect has completed.");
        });
    });   
});
// TAsk 70
$(document).ready(function(){
    $("button").click(function(){
        $("p26").slideToggle("slow", function(){
            alert("The slide toggle effect has completed.");
        });
    });   
});
// Task 71
$(document).ready(function(){
    $("button").click(function(){
        $("h11, p27").slideToggle("slow", function(){
            alert("The slide toggle effect has completed.");
        });
    });   
});
// Task 72
$(document).ready(function(){
    $(".btn-one").click(function(){
        var str = $("p28").text();
        alert(str);
    });
    $(".btn-two").click(function(){
       var str = $("p28:first").text();
       alert(str);
    });
    $(".btn-three").click(function(){
       var str = $("p28.extra").text();
       alert(str);
    });
});
// TAsk 73
$(document).ready(function(){
    $(".btn-one").click(function(){
        $("p29").text("This is demo text.");
    });
    $(".btn-two").click(function(){
        $("p29:first").text("This is another demo text.");
    });
    $(".btn-three").click(function(){
        $("p29.empty").text("This is one more demo text.");
    });
});
// Task 74
$(document).ready(function(){
    $(".btn-one").click(function(){
        var str = $("p30").html();
        alert(str);
    });
    $(".btn-two").click(function(){
        var str = $("#container").html();
        alert(str);
    });
});
// Task 75
$(document).ready(function(){
    $("button2").click(function(){
        $("body").html("<p>Hello World!</p>");
    });
});
// Task 76
$(document).ready(function(){
    $(".btn-one").click(function(){
        var str = $("a").attr("href");
        alert(str);
    });
    $(".btn-two").click(function(){
        var str = $("img#sky").attr("alt");
        alert(str);
    });
});
// Task 77
$(document).ready(function(){
    $("button").click(function(){
        $('input[type="checkbox"]').attr("checked", "checked");
    });
});
// Task 78
$(document).ready(function(){
    $("button2").click(function(){
        $("img").attr({
            "class" : "frame",
            "title" : "Hot Air Balloons"
        });
    });
});
// TAsk 79
$(document).ready(function(){
    $("button.get-name").click(function(){
        var name = $("#name").val();
        alert(name);
    });
    $("button.get-comment").click(function(){
        var comment = $("#comment").val();
        alert(comment);
    });
    $("button.get-city").click(function(){
        var city = $("#city").val();
        alert(city);
    });
});
// Task 80
$(document).ready(function(){
    $("button").click(function(){
        var text = $(this).text();
        $('input[type="text"]').val(text);
    });
});
    