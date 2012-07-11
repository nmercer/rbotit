$(document).ready(function() {

});

$(function() {
    mp3 = "/static/sound/" + window.location.pathname.replace(/\//g, '') + ".mp3";
    swf_path = "/static/js/";

    $("#speak_play").hide();
    $("#speak_static").hide();
   
    $("#jplayer").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: mp3,
            });
        },
        ended: function() {
            $("#speak_play").hide();
            $("#speak_static").show();
        },
        solution: "flash, html",
        swfPath: swf_path,
        supplied: "mp3"
    });

    $("#replay").click(function() {
        $("#speak_static").hide();
        $("#speak_play").show();
    });

    $("#mobile_play").click(function() {
        $("#mobile_play").hide();
        $("#speak_play").show();
    });

});
