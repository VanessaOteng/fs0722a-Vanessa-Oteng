
function aggiungiNum(element){

    let clickedElement = element.getAttribute('contenuto');
    document.getElementById('visuale').value += clickedElement;


}


function evalTot(){
    document.getElementById('visuale').value;
    visuale.value = eval(visuale.value);
    //console.log(visuale.value);
    

}

function uovoDiPasqua(){
    let str1 = eval(visuale.value);
    let str2 = eval('34+35');

    if(str1 == str2){
        console.log('NEVA GONNA GIVE YOU UP NEVA GONNA LET YOU DOWN');
        if (document.getElementById("invisible").style.display == 'none'){
            document.getElementById("invisible").style.display = 'flex';
        
            }else{
                document.getElementById("invisible").style.display = 'none'
            }
            

    }
    
}


function aggiungiRadQ(){
    //let clickedSimbolo = simbolo.getAttribute('content');
    document.getElementById('visuale').value;
    
    visuale.value = Math.sqrt(visuale.value);
    
}

function aggiungiQ(){
    //let clickedSimbolo = simbolo.getAttribute('content');
    document.getElementById('visuale').value;
    
    visuale.value = Math.pow(visuale.value, 2);
    
}

function aggiungiC(){
    document.getElementById('visuale').value;
    
    visuale.value = Math.pow(visuale.value, 3);
}

function aggiungiLog(){
    document.getElementById('visuale').value;
    
    visuale.value = Math.log10(visuale.value);
}

function aggiungiLn(){
    document.getElementById('visuale').value;
    
    visuale.value = Math.log(visuale.value);
}

function aggiungiLn(){
    document.getElementById('visuale').value;
    
    //visuale.value = Math.PI();
    document.getElementById('visuale').value = Math.PI;
    console.log(visuale.value);
}

function aggiungiSin(){
    document.getElementById('visuale').value;
    
    visuale.value = Math.sin(visuale.value);
}

function aggiungiCos(){
    document.getElementById('visuale').value;
    
    visuale.value = Math.cos(visuale.value);
}

function aggiungiTan(){
    document.getElementById('visuale').value;
    
    visuale.value = Math.tan(visuale.value);
}
function aggiungiExp(){
    document.getElementById('visuale').value;
    visuale.value = Math.exp(visuale.value);
}
function aggiungiFraz(){
    
    document.getElementById('visuale').value;
    visuale.value = eval('1/' +visuale.value);
    
}




function Perce(){
    document.getElementById('visuale').value;
    visuale.value = eval(visuale.value + '/100');

    
}


//Funzione BackSpace

function backSpace(){
    let bSpace = document.getElementById('visuale').value;
    bSpace = bSpace.slice(0, -1);
    document.getElementById('visuale').value = bSpace;
}


function canc(){
    document.getElementById('visuale').value = '';
}

function bigger(){
    
        if (document.getElementById("nascondi").style.display == 'none'){
            document.getElementById("nascondi").style.display = 'flex';
            }else{
                document.getElementById("nascondi").style.display = 'none'
            }
    
}


