var Button = { 
  click: function(){
    this.clicked = true;
  }
}; 
 
var elem = {};
elem.onclick = Button.click;


elem.onclick.call(Button); 
console.log( Button.clicked, "Button.clicked é undefined" );
console.log( elem.clicked, "elem.clicked é true" );
