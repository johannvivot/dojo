/**
 * Twitter fetcher
 * Utilizei algumas noções de Orientação a Objetos.
 * Notem que nenhuma informação extra pode ser
 * acessada de 'fora' da classe 'TwitterFetcher'
 * o dataStore e o baseUrl estão protegidos.
 */

//Class TwitterFetcher
function TwitterFetcher(maxResult) {
    
    //Private attribute
    //Podemos utilizar o baseUrl em qualquer membro da classe
    //mas não é acessível externamente.
    var baseUrl = 'http://search.twitter.com/search.json?q=';
    
    //Private attribute
    var dataStore;
    
    //Public attribute
    //Este atributo pode ser redefinido a qualquer momento
    //porém, se nunca for definido seu valor default é 10.
    this.rpp = maxResult || 10;
    
    //Public method to fetch result query and store it
    this.fetch = function (term){
        
        var url = baseUrl + escape(term) + '&rpp=' + this.rpp;
    
        return $.ajax({
            url: url,
            context: this,
            async: false,
            type: 'GET',
            dataType: 'jsonp',
            timeout: 1000,
            success: function(data){
                dataStore = data.results;
                this.term = term;
            }
        });
    }
    
    //Public method to assign stored data to an array
    this.toArray = function (){
        var dataArray = []
        $.each(dataStore, function(i, item) {
            dataArray.push('@' + item.from_user + ': ' + item.text);
        });	
        return dataArray;
    }
    
    //Public method to plot stored data in a table
    this.toTable = function (tableId){
        jQuery('#' + tableId).append('<tr><td><b>Usu&aacute;rio</b></td><td><b>Mensagem</b></td></tr>');
        $.each(dataStore, function(i, item) {
            jQuery('#' + tableId).append('<tr><td>@' + item.from_user + '</td><td>' + item.text +'</td></tr>') ;
        });	
    }
}