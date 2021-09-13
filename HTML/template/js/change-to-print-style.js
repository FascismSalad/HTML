//This file switches between the main stylesheet and print stylesheet on supported pages/

var toggled = 0; //This variable keeps track of which stylesheet is currently in use.

//This function checks which stylesheet is currently in use, using the 'toggled'
//variable, and then switches between them.
function changeStyle() {
  var _head = document.getElementsByTagName('head')[0];
  var _link = document.createElement('link');

  if (toggled == 0) {
    _link.type = 'text/css';
    _link.href = '../styles/print-stylesheet.css';
    _link.rel = 'stylesheet';
    _head.appendChild(_link);
    toggled++;
  } else {
    _link.type = 'text/css';
    _link.href = '../styles/main-stylesheet.css';
    _link.rel = 'stylesheet';
    _head.appendChild(_link);
    toggled--;
  }
}