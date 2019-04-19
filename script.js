let show = true;
showMenuItems = ()=> {
    if (show) {
        $('.menu-block').css({height: "auto"});
        $('.menu-items').css({flexDirection: "column", width: "100%" });
        show = false;
    }
    else {
        $('.menu-block').css({height: "50px"});
        $('.menu-items').css({flexDirection: "row"});
        show = true;
    }
}

let count= 0;
const limit = $('.video-item').length;
$('.arrow-left').click(()=> {
    if (count > 0) {
        $('.video-item').eq(count - 1).css({display: "block"});
        count--;
    }
})

$('.arrow-right').click(()=> {
    if (count < limit - 1) {
        $('.video-item').eq(count).css({display: "none"});
        count++;
    }
})

// window.onload = ()=> {
//     const innerHeight = $('.item1-inner').height();
//     $('.item-1').css({"height": innerHeight});
// }