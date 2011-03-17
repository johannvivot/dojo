function log_delayed(){
    for ( var i = 0; i < 4; i++ ) {
        (function(i) {
            setTimeout(function(){ 
                console.log(i); 
            }, i * 500); 
        })(i);
    }
}

log_delayed();
