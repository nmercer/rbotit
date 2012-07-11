$(document).ready(function() {
    $("#stats").hover(function() {
            $(this).attr("src", "/static/images/statsbttn_over.png");
        },
        function() {
            $(this).attr("src", "/static/images/statsbttn.png");
        }
    );

    $("#stats").mouseup(function() {
        $(this).attr("src", "/static/images/statsbttn_over.png");
    }).mousedown(function() {
        $(this).attr("src", "/static/images/statsbttn_press.png");
    });

    $("#stats").click(function() {
        window.location.href = "/stat/";
    });

    $("#code").hover(function() {
            $(this).attr("src", "/static/images/codebttn_over.png");
        },
        function() {
            $(this).attr("src", "/static/images/codebttn.png");
        }
    );

    $("#code").mouseup(function() {
        $(this).attr("src", "/static/images/codebttn_over.png");
    }).mousedown(function() {
        $(this).attr("src", "/static/images/codebttn_press.png");
    });

    $("#code").click(function() {

        window.location.href = "/code/";
    });

    $("#speak").hover(function() {
            $(this).attr("src", "/static/images/speakbttn_over.png");
        },
        function() {
            $(this).attr("src", "/static/images/speakbttn.png");
        }
    );

    $("#speak").mouseup(function() {
        $(this).attr("src", "/static/images/speakbttn_over.png");
    }).mousedown(function() {
        $(this).attr("src", "/static/images/speakbttn_press.png");
    });

    $("#replay").hover(function() {
            $(this).attr("src", "/static/images/replaybttn_over.png");
        },
        function() {
            $(this).attr("src", "/static/images/replaybttn.png");
        }
    );

    $("#replay").mouseup(function() {
        $(this).attr("src", "/static/images/replaybttn_over.png");
    }).mousedown(function() {
        $(this).attr("src", "/static/images/replaybttn_press.png");
    });

    $("#new").hover(function() {
            $(this).attr("src", "/static/images/newbttn_over.png");
        },
        function() {
            $(this).attr("src", "/static/images/newbttn.png");
        }
    );

    $("#new").mouseup(function() {
        $(this).attr("src", "/static/images/newbttn_over.png");
    }).mousedown(function() {
        $(this).attr("src", "/static/images/newbttn_press.png");
    });

    $("#new").click(function() {
        window.location.href = "/";
    });

    $("#mobile_play").hover(function() {
            $(this).attr("src", "/static/images/mobile_play_hover.png");
        },
        function() {
            $(this).attr("src", "/static/images/mobile_play_hover.png");
        }
    );

    $("#mobile_play").mouseup(function() {
        $(this).attr("src", "/static/images/mobile_play_press.png");
    }).mousedown(function() {
        $(this).attr("src", "/static/images/mobile_play_press.png");
    });

});
