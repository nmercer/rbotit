$(document).ready(function() {

});

$(function() {
    //XXX: Create path to MP3, static links need to be fixed, these files are on the same host as the damn js file.
    mp3 = "http://192.168.1.13/sound/" + window.location.pathname.replace(/\//g, '');
    swf_path = "http://192.168.1.13/js/";

    $("#speak_play").hide();

    $("#jplayer").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: mp3,
            }).jPlayer("play");
            $("#speak_static").hide();
            $("#speak_play").show();
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

});
