/** Zoom Buttons
 * code from https://stackoverflow.com/questions/47635341/zooming-in-out-an-image-by-clicking-zoom-buttons-javascript
 

function zoomin() {
  var myImg = document.getElementById("zoomimg");
  var currWidth = myImg.clientWidth;
  if (currWidth == 2500) return false;
  else {
    myImg.style.width = (currWidth + 100) + "px";
  }
}

function zoomout() {
  var myImg = document.getElementById("zoomimg");
  var currWidth = myImg.clientWidth;
  if (currWidth == 100) return false;
  else {
    myImg.style.width = (currWidth - 100) + "px";
  }
}

*/

/**
 * @fileoverview dragscroll - scroll area by dragging
 * @version 0.0.8
 * 
 * @license MIT, see http://github.com/asvd/dragscroll
 * @copyright 2015 asvd <heliosframework@gmail.com> 
 */


 (function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
      factory(exports);
  } else {
      factory((root.dragscroll = {}));
  }
}(this, function (exports) {
  var _window = window;
  var _document = document;
  var mousemove = 'mousemove';
  var mouseup = 'mouseup';
  var mousedown = 'mousedown';
  var EventListener = 'EventListener';
  var addEventListener = 'add'+EventListener;
  var removeEventListener = 'remove'+EventListener;
  var newScrollX, newScrollY;

  var dragged = [];
  var reset = function(i, el) {
      for (i = 0; i < dragged.length;) {
          el = dragged[i++];
          el = el.container || el;
          el[removeEventListener](mousedown, el.md, 0);
          _window[removeEventListener](mouseup, el.mu, 0);
          _window[removeEventListener](mousemove, el.mm, 0);
      }

      // cloning into array since HTMLCollection is updated dynamically
      dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
      for (i = 0; i < dragged.length;) {
          (function(el, lastClientX, lastClientY, pushed, scroller, cont){
              (cont = el.container || el)[addEventListener](
                  mousedown,
                  cont.md = function(e) {
                      if (!el.hasAttribute('nochilddrag') ||
                          _document.elementFromPoint(
                              e.pageX, e.pageY
                          ) == cont
                      ) {
                          pushed = 1;
                          lastClientX = e.clientX;
                          lastClientY = e.clientY;

                          e.preventDefault();
                      }
                  }, 0
              );

              _window[addEventListener](
                  mouseup, cont.mu = function() {pushed = 0;}, 0
              );

              _window[addEventListener](
                  mousemove,
                  cont.mm = function(e) {
                      if (pushed) {
                          (scroller = el.scroller||el).scrollLeft -=
                              newScrollX = (- lastClientX + (lastClientX=e.clientX));
                          scroller.scrollTop -=
                              newScrollY = (- lastClientY + (lastClientY=e.clientY));
                          if (el == _document.body) {
                              (scroller = _document.documentElement).scrollLeft -= newScrollX;
                              scroller.scrollTop -= newScrollY;
                          }
                      }
                  }, 0
              );
           })(dragged[i++]);
      }
  }

    
  if (_document.readyState == 'complete') {
      reset();
  } else {
      _window[addEventListener]('load', reset, 0);
  }

  exports.reset = reset;
}));

/**Zoom on Wheel Scroll
 * from https://dev.to/stackfindover/zoom-image-point-with-mouse-wheel-11n3
 * 
 * 
  

      var scale = 1,
          panning = false,
          pointX = 0,
          pointY = -500,
          start = { x: 0, y: 0 },
          zoom1 = document.getElementById("zoom1"),
          zoom2 = document.getElementById("zoom2");

      function setTransform1() {
          zoom1.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
        }

      function setTransform2() {
          zoom2.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
        }
      

      zoom1.onmousedown = function (e) {
        e.preventDefault();
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
        panning = true;
      }

      zoom2.onmousedown = function (e) {
        e.preventDefault();
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
        panning = true;
      }

      zoom1.onmouseup = function (e) {
        panning = false;
      }

      zoom2.onmouseup = function (e) {
        panning = false;
      }

      zoom1.onmousemove = function (e) {
        e.preventDefault();
        if (!panning) {
          return;
        }
        pointX = (e.clientX - start.x);
        pointY = (e.clientY - start.y);
        setTransform1();
      }

      zoom2.onmousemove = function (e) {
        e.preventDefault();
        if (!panning) {
          return;
        }
        pointX = (e.clientX - start.x);
        pointY = (e.clientY - start.y);
        setTransform2();
      }

      zoom1.onwheel = function (e) {
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale,
          ys = (e.clientY - pointY) / scale,
          delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;

        setTransform1();
      }

      zoom2.onwheel = function (e) {
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale,
          ys = (e.clientY - pointY) / scale,
          delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;

        setTransform2();
      }

*/

/** Zoom OnClick
 
 var i = 0;
 var myImg = document.getElementById("zoomimg");
 function zoomin(){
    i++;
    myImg.style.transform = "scale(1."+ i +")";
 }
 function zoomout(){
    i--;
    myImg.style.transform = "scale(1."+ i +")";
 }
 
 */