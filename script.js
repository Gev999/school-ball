function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      for (let i = 0; i< 6; i++) {
        $('.topnav a:nth-of-type(' + i + ')').css({display: "block"});
    }
    } else {
      x.className = "topnav";
      checkSize();
    }
  }

window.onload = ()=>{
    checkSize();
};

$(window).resize(()=>{
    checkSize();
})

checkSize = ()=> {
    const width = $(window).width();
    const itemsCount = 5;
    let index;
    if (width > 940) {
        index = itemsCount + 1;
        for (let i = 0; i< index; i++) {
            $('.topnav a:nth-of-type(' + i + ')').css({display: "block"});
        }
    }
    if (width>=860 && width<=940) {
        hideElements(itemsCount, itemsCount);
    }
    if (width >=690 && width < 860) {
        hideElements(itemsCount, itemsCount - 1);
    }
    if (width >=470 && width < 690) {
        hideElements(itemsCount, itemsCount - 2);
    }
    if (width < 470) {
        hideElements(itemsCount, itemsCount - 3);
    }
}

hideElements = (itemsCount, index)=> {
    for (let i=index; i <= itemsCount; i++) {
        $('.topnav a:nth-of-type(' + i + ')').css({display: "none"});
    }
    for (let i = 0; i< index; i++) {
        $('.topnav a:nth-of-type(' + i + ')').css({display: "block"});
    }
}