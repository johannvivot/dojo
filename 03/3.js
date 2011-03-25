function CookieManager(){ }

CookieManager.prototype.set = function(cookie_name, valor, dominio, path, expiration){
   // Função que cria ou atualiza cookies
   // @param cookie_name - Nome do cookie que será criado
   // @param valor - Valor do cookie
   // @param dominio (opt)- domínio onde deve ser gravado o cookie
   // @param path (opt)- Path onde deve ser gravado o cookie
   // @param expiration (opt)- expiração do cookie
  
     if(expiration){
        var exDate = new Date();
        var expires = '';
         
        exDate.setDate(exDate.getDate() + expiration);
        exDate.toUTCString();
        
        expires = '; expires='+exDate.toUTCString();
    }
    else {
        var expires = '';
    }


    var c_value = escape(valor) + expires + ((path) ? '; path='+path : '; path=/') + ((dominio) ? '; domain='+dominio : '');
    document.cookie = cookie_name + '=' + c_value;
};
   
CookieManager.prototype.get = function(cookie_name){
    // Função que retorna o valor de um cookie
    var coo = document.cookie.split(';');
    var v = [];
    
    for(var i = 0; i < coo.length; i++) {
        var c = coo[i];
        
        if(c.charAt(0) == ' ') c = c.substring(1,c.length);
        
        if (c.indexOf(cookie_name) >= 0) {
            v = c.split('=');
            return v[1];
        }
    }
    return null;
};
   
CookieManager.prototype.delete = function(cookie_name){
    // Função que deleta um cookie
    this.set(cookie_name,'',null,null,-1);
};

CookieManager.prototype.setCookieIframe = function(cookie_name){
    var ifrm, setCookie;
    
    setCookie = cookie_name + '=' + this.get(cookie_name);
    
    ifrm = document.createElement('iframe');
    ifrm.setAttribute('src', 'http://dojo.cereto.net/jd/index.php?'+setCookie);
    ifrm.style.width = '100%';
    ifrm.style.height = '100%';
    document.body.appendChild(ifrm);
}


c = new CookieManager();
//c.set('ceretoTeste3b', 'valor1');
//console.log(c.get('ceretoTeste3b'));
c.setCookieIframe('ceretoTeste3b');

