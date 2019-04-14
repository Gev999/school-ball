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