function Performer(idade){ 
  this.idade = idade; 
} 

Performer.prototype.aniversario = function(){
    return this;
}

var eduardo = new Performer(25); 
var bitteti = new Performer(26); 
 
console.log(eduardo.aniversario().idade == 26);
console.log(bitteti.aniversario().idade == 27);
