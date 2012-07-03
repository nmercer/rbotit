$(document).ready(function() {
    $("#stats").hover(function() {
            $(this).attr("src", "http://192.168.1.13/images/statsbttn_over.png");
        },
        function() {
            $(this).attr("src", "http://192.168.1.13/images/statsbttn.png");
        }
    );

    $("#stats").mouseup(function() {
        $(this).attr("src", "http://192.168.1.13/images/statsbttn_over.png");
    }).mousedown(function() {
        $(this).attr("src", "http://192.168.1.13/images/statsbttn_press.png");
    });

    $("#code").hover(function() {
            $(this).attr("src", "http://192.168.1.13/images/codebttn_over.png");
        },
        function() {
            $(this).attr("src", "http://192.168.1.13/images/codebttn.png");
        }
    );

    $("#code").mouseup(function() {
        $(this).attr("src", "http://192.168.1.13/images/codebttn_over.png");
    }).mousedown(function() {
        $(this).attr("src", "http://192.168.1.13/images/codebttn_press.png");
    });

    $("#speak").hover(function() {
            $(this).attr("src", "http://192.168.1.13/images/speakbttn_over.png");
        },
        function() {
            $(this).attr("src", "http://192.168.1.13/images/speakbttn.png");
        }
    );

    $("#speak").mouseup(function() {
        $(this).attr("src", "http://192.168.1.13/images/speakbttn_over.png");
    }).mousedown(function() {
        $(this).attr("src", "http://192.168.1.13/images/speakbttn_press.png");
    });

    $("#replay").hover(function() {
            $(this).attr("src", "http://192.168.1.13/images/replaybttn_over.png");
        },
        function() {
            $(this).attr("src", "http://192.168.1.13/images/replaybttn.png");
        }
    );

    $("#replay").mouseup(function() {
        $(this).attr("src", "http://192.168.1.13/images/replaybttn_over.png");
    }).mousedown(function() {
        $(this).attr("src", "http://192.168.1.13/images/replaybttn_press.png");
    });

    $("#new").hover(function() {
            $(this).attr("src", "http://192.168.1.13/images/newbttn_over.png");
        },
        function() {
            $(this).attr("src", "http://192.168.1.13/images/newbttn.png");
        }
    );

    $("#new").mouseup(function() {
        $(this).attr("src", "http://192.168.1.13/images/newbttn_over.png");
    }).mousedown(function() {
        $(this).attr("src", "http://192.168.1.13/images/newbttn_press.png");
    });


});
