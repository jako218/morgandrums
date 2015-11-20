function init() {
    $('#sidebar').css('left', $('#rhs').offset().left);
    
    $('#sidebar a').each(function(page) {
        $(this).click(function() {
            $('#sidebar a').each(function() {
                $(this).removeClass('focus');
            });
            $(this).addClass('focus');
        });
    });

    $('#sidebar a').each(function() {
        $(this).hover(function() {
            $(this).addClass('hovered'); //Add class on mouseover
        }, function() {
            $(this).removeClass('hovered'); //Remove class on mouseout
        });
    });
    
    $(window).resize(function () {
        $('#rhs').width($('#wrapper').width() - $('#sidebar').width() - 50);
        $('#sidebar').css('left', $('#rhs').offset().left);
    });
}

function init_gallery() {
    console.log("WIDTHS:");
    $('#slider img').each(function() {
        console.log($(this)[0].naturalWidth);
    });
    console.log("HEIGHTS:");
    $('#slider img').each(function() {
        console.log($(this)[0].naturalHeight);
    });
}