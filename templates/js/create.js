$(document).ready(function() {
    
    $("#speed").buttonset();
    $("#pitch").buttonset();
    $("#amp").buttonset();
    $(".lang").buttonset();

    $("#id_message").focus();

    //XXX: Should pull these with jquery.
    $("#id_speed").val('speed3');
    $("#id_pitch").val('pitch3');
    $("#id_amp").val('amp3');
    $("#id_lang").val('en/en-us');

});

$(function() {

    var obj = {
        id    : 'myid',
        token : 'sometoken'
    };

    $("input[name='speed']").change(function(){
        $("#id_speed").val($(this).attr('id'));
        $("#id_message").focus();
    });

    $("input[name='pitch']").change(function(){
        $("#id_pitch").val($(this).attr('id'));
        $("#id_message").focus();
    });

    $("input[name='amp']").change(function(){
        $("#id_amp").val($(this).attr('id'));
        $("#id_message").focus();
    });

    $("input[name='lang']").change(function(){
        $("#id_lang").val($(this).attr('id'));
        $("#id_message").focus();
    });

    $('#top').toggle(function(){
        $('#mid').slideDown();
        $("#id_message").focus();
    }, function(){
        $('#mid').slideUp();
        $("#id_message").focus();
    });

});
