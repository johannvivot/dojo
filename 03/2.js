function maxCookies(){
     var count = 0;
     
     for(var i = 0; i >= 0; i++){
         document.cookie = 'teste'+i+'=x; path=/';
         if(document.cookie.indexOf('teste0=') == -1) break;
        count++;
     }
     
     console.log(count);
}

function maxCookiesSize(){
    var qtd = 'x';
    
    for(var i = 0; i >= 0; i++){
        document.cookie = 'testeSize='+qtd+'; path=/';
        
        var atual = document.cookie.split(';');
        console.log(atual);
        
        for(var j = 0; j < atual.length; j++){
            if(atual[j].indexOf('testeSize=') != -1){
                var val = atual[j].split('=');
            }
        }
        
        if(val[1] != qtd) break;
            
        for(var k = -1; k < i; k++){
            qtd = qtd + 'x';
        }
    }
}

//maxCookies();
//maxCookiesSize();
