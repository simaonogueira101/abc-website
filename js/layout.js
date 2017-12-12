var firstTimer = 0;

$(function() {

  var WIN = $(window);
  var sections = $('.js-section');
  var spiral = $('.js-spiral')

  var _winW;
  var _winH;
  var smallScreen;
  var landscape;
  var aspect = .618033;
  var axis = .7237;
  var spiralOrigin;

  var rotation = -180;
  var sectionCount = sections.length;
  var currentSection = 0;
  var touchStartY = 0;
  var touchStartX = 0;
  var moved = 0;
  var animRAF;
  var animating = false;
  var scrollTimeout;

  var userAgent = window.navigator.userAgent.toLowerCase(),
      firefox = userAgent.indexOf('firefox') != -1 || userAgent.indexOf('mozilla') == -1,
      ios = /iphone|ipod|ipad/.test( userAgent ),
      safari = (userAgent.indexOf('safari') != -1 && userAgent.indexOf('chrome') == -1) || ios,
      linux = userAgent.indexOf('linux') != -1,
      windows = userAgent.indexOf('windows') != -1;

  resizeHandler();

// EVENTS
/////////

  WIN.on('resize',resizeHandler);
  WIN.on('scroll',function(e){
    e.preventDefault();
  })

  WIN.on('wheel', function(e) {
    var deltaY = -e.originalEvent.deltaY;
    if (windows || linux) {
      deltaY = e.deltaY * 5;
    }
    moved = -deltaY || 0;
    rotation += moved/-10;
    rotation = trimRotation();
    e.preventDefault();
    startScrollTimeout()
    cancelAnimationFrame(animRAF);
    scrollHandler();
  });

  WIN.on('touchstart', function(e) {
    e.preventDefault()
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    moved = 0;
    touchStartX = touch.pageX;
    touchStartY = touch.pageY;
    cancelAnimationFrame(animRAF);
  })
  WIN.on('touchmove', function(e) {
    e.preventDefault()
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    moved = ((touchStartY - touch.pageY)+(touchStartX - touch.pageX)) * 3;
    touchStartX = touch.pageX;
    touchStartY = touch.pageY;
    rotation += moved/-10;
    rotation = trimRotation();
    startScrollTimeout();
    cancelAnimationFrame(animRAF);
    scrollHandler()
  });
  WIN.on('touchend', function(e) {
    animateScroll()
  })

  WIN.on('keydown',function(e) {
    if (e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 32) {
      cancelAnimationFrame(animRAF);
      animateScroll((currentSection + 1) * -90,rotation)
    } else if (e.keyCode === 37 || e.keyCode === 38) {
      cancelAnimationFrame(animRAF);
      animateScroll((currentSection - 1) * -90,rotation)
    }
    scrollHandler()
  })

  sections.on('click',function() {
    cancelAnimationFrame(animRAF)
    animateScroll($(this).index() * -90,rotation);
  })

  // Testing links withing the page
  $('#project-info').on('click',function(e){
    //console.log(currentSection);
    var calcSection = 0 - currentSection;
    animateScroll((currentSection + calcSection) * -90,rotation)
    currentSection = 0;
    e.stopPropagation()
    //console.log(currentSection);
  })
  $('#contacts').on('click',function(e){
    //console.log(currentSection);
    var calcSection = 1 - currentSection;
    animateScroll((currentSection + calcSection) * -90,rotation)
    currentSection = 1;
    e.stopPropagation()
    //console.log(currentSection);
  })
  $('#home').on('click',function(e){
    //console.log(currentSection);
    var calcSection = 2 - currentSection;
    animateScroll((currentSection + calcSection) * -90,rotation)
    currentSection = 2;
    e.stopPropagation()
    //console.log(currentSection);
  })
  $('#about, #exit-about').on('click',function(e){
    //console.log(currentSection);
    var calcSection = 3 - currentSection;
    animateScroll((currentSection + calcSection) * -90,rotation)
    currentSection = 3;
    e.stopPropagation()
    //console.log(currentSection);
  })
  $('#happening, #exit-happening').on('click',function(e){
    //console.log(currentSection);
    var calcSection = 4 - currentSection;
    animateScroll((currentSection + calcSection) * -90,rotation)
    currentSection = 4;
    e.stopPropagation()
    //console.log(currentSection);
  })
  $('#greenery, #exit-greenery').on('click',function(e){
    //console.log(currentSection);
    var calcSection = 5 - currentSection;
    animateScroll((currentSection + calcSection) * -90,rotation)
    currentSection = 5;
    e.stopPropagation()
    //console.log(currentSection);
  })
  $('#legume, #exit-legume').on('click',function(e){
    //console.log(currentSection);
    var calcSection = 6 - currentSection;
    animateScroll((currentSection + calcSection) * -90,rotation)
    currentSection = 6;
    e.stopPropagation()
    //console.log(currentSection);
  })
  $('#gardens, #exit-gardens').on('click',function(e){
    //console.log(currentSection);
    var calcSection = 7 - currentSection;
    animateScroll((currentSection + calcSection) * -90,rotation)
    currentSection = 7;
    e.stopPropagation()
    //console.log(currentSection);
  })


// FUNCTIONS
////////////

  function scrollHandler() {
    if(rotation < 120) {
      requestAnimationFrame(function(){
        var scale = Math.pow(aspect,rotation/90);
        currentSection = Math.min(sectionCount + 2,Math.max(-sectionCount,Math.floor((rotation-30)/-90)));
        spiral.css({
          transform: 'rotate(' + rotation + 'deg) scale(' + scale + ')',
        })
        sections.removeClass('active')
        if( firstTimer == 0 ){
          setTimeout(function(){
            sections.eq(currentSection).addClass('active')
            firstTimer = 1;
          }, 0);
        } else {
          sections.eq(currentSection).addClass('active')
        }
      })
    }
  }

  function animateScroll(targR,startR,speed) {
    var distance = startR - targR;
    var mySpeed = speed || 0.5;
    if (((targR || Math.abs(targR) === 0) && Math.abs(targR - rotation) > .1) || Math.abs(moved) > 1) {
      if (targR || Math.abs(targR) === 0) {
        rotation += mySpeed * (targR - rotation);
      } else {
        moved *= .98;
        rotation += moved/-10;
      }
      rotation = trimRotation();
      scrollHandler();
      animRAF = requestAnimationFrame(function(){
        animateScroll(targR,startR,speed)
      });
    } else if (targR || Math.abs(targR) === 0) {
      cancelAnimationFrame(animRAF)
      rotation = targR;
      rotation = trimRotation();
      scrollHandler();
    }
  }

  function buildSpiral() {
    // rotate around this point
    spiralOrigin = Math.floor($(window).height() / aspect * axis) + 'px ' + Math.floor($(window).height() * axis) +'px';
    var w = $(window).height() + 'px';
    var h = w; // they're squares
    if (smallScreen && !landscape) { // flip it 90deg if it's a portrait phone
      spiralOrigin = Math.floor(($(window).width() / aspect) * aspect * ( 1 - axis)) + 'px ' + Math.floor(($(window).width() / aspect) * axis) +'px';
      w = $(window).width() + 'px';
      h = w;
    }
    // HACK to smooth out Chrome vs Safari/Firefox
    var translate = '';
    if (safari || firefox) {
      translate = 'translate3d(0,0,0)'
    }
    // END HACK

    spiral.css({
      transformOrigin: spiralOrigin,
      backfaceVisiblity: 'hidden'
    })
    sections.each(function(i){
      var myRot = Math.floor(90*i);
      var scale = Math.pow(aspect, i);
      $(this).css({
        width: w,
        height: h,
        transformOrigin: spiralOrigin,
        backfaceVisiblity: 'hidden',
        transform: 'rotate(' + myRot + 'deg) scale(' + Math.pow(aspect, i) + ') ' + translate
      })
    })
    scrollHandler();
  }

  function resizeHandler () { // Set the size of images and preload them
    _winW = window.innerWidth/(1000/window.innerHeight);
    _winH = window.innerHeight;
    smallScreen = _winW < 960;
    landscape = _winH < _winW;
    buildSpiral()
  }

  // keep it from getting too small or too big
  function trimRotation() {
    return Math.max(-1500, Math.min(1200, rotation))
  }

  // if no scrolling happens for 200ms, animate to the closest section
  function startScrollTimeout () {
    clearTimeout(scrollTimeout)
    if (currentSection > -1 && currentSection < sectionCount) {
      scrollTimeout = setTimeout(function(){
        cancelAnimationFrame(animRAF);
        animateScroll(currentSection * -90,rotation,.15);
      },100);
    }
  }
})
