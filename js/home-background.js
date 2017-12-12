var currentBackground = 0;
var backgrounds = [];
backgrounds[0] = 'animation-bits/1.png';
backgrounds[1] = 'animation-bits/2.png';
backgrounds[2] = 'animation-bits/3.png';
backgrounds[3] = 'animation-bits/4.png';
backgrounds[4] = 'animation-bits/5.png';
backgrounds[5] = 'animation-bits/6.png';
backgrounds[6] = 'animation-bits/7.png';
backgrounds[7] = 'animation-bits/8.png';
backgrounds[8] = 'animation-bits/9.png';
backgrounds[9] = 'animation-bits/10.png';
backgrounds[10] = 'animation-bits/11.png';
backgrounds[11] = 'animation-bits/12.png';

function changeBackground() {
    currentBackground++;
    if(currentBackground > 11) currentBackground = 0;

    $('.section_0.active').toggle(0,function() {
        $('.section_0.active').css({
            'background-image' : "url('" + backgrounds[currentBackground] + "')"
        });
        $('.section_0.active').toggle(0);
    });


    setTimeout(changeBackground, 2000);
}

$(document).ready(function() {
    setTimeout(changeBackground, 2000);
});
