$(document).ready(function() {
    
    $("#speed").buttonset();
    $("#pitch").buttonset();
    $("#amp").buttonset();
    $(".lang").buttonset();

    //$("#id_message").focus();
    TEXT = 'Insert text HERE and press [ENTER] or SPEAK button. Press the SETTINGS button below for more options.'
    $("#id_message").val(TEXT);

    $("#id_message").focus(function() {
        if($("#id_message").val() == TEXT) {
          $("#id_message").val('');
        }
    });

    $("#id_message").blur(function() {
        if($("#id_message").val() == '') {
          $("#id_message").val(TEXT);
        }
    });


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
    });

    $("input[name='pitch']").change(function(){
        $("#id_pitch").val($(this).attr('id'));
    });

    $("input[name='amp']").change(function(){
        $("#id_amp").val($(this).attr('id'));
    });

    $("input[name='lang']").change(function(){
        $("#id_lang").val($(this).attr('id'));
    });

    $('#top').toggle(function(){
        $('#mid').slideDown();
    }, function(){
        $('#mid').slideUp();
    });

    $('#speak').click(function() {
	message = $("#id_message").val();
	if(!message) {
            alert('Message can not be blank.');
            return false; 
	}

        if(message.length > 200) {
	    alert('Message must be under 200 characters long.');
            return false;
	}
    });

    $("#id_message").keyup(function(event){
        if(event.keyCode == 13){
            $("#speak").click();
        }
    });

});
