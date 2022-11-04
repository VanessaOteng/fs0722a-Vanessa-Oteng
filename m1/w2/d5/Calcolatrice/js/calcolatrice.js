
function aggiungiNum(element){//funzione per aggiungere il numero premuto sulla Visuale
    
    let clickedElement = element.getAttribute('contenuto');
    document.getElementById('visuale').value += clickedElement;
}

function evalTot(){//Funzione che toglie gli apici alle stringhe e calcola il contenuto nella Visuale.

    document.getElementById('visuale').value;
    visuale.value = eval(visuale.value);
    //console.log(visuale.value);
}

function uovoDiPasqua(){//EaterEgg: per attivare digitare 34+35 sulla visuale e premi =
    let str1 = (visuale.value);
    let str2 = ('34+35');
    let str3 = ('35+34');


    if(str1 == str2 || str1 == str3){
        if (document.getElementById("invisible").style.display = 'none'){
            document.getElementById("invisible").style.display = 'flex';
        
            }else{
                document.getElementById("invisible").style.display = 'none';
            }
        }
}

function aggiungiRadQ(){//funzione per calcolare la Radice Quadrata √

    document.getElementById('visuale').value;
    visuale.value = Math.sqrt(visuale.value);
    
}

function aggiungiQ(){//funzione per calcolare il Quadrato x²

    document.getElementById('visuale').value;
    visuale.value = Math.pow(visuale.value, 2);
    
}

function aggiungiC(){//funzione per calcolare il Cubo x³
    
    document.getElementById('visuale').value;
    visuale.value = Math.pow(visuale.value, 3);
}

function aggiungiLog(){//funzione per calcolare il logaritmo in base 10
    document.getElementById('visuale').value;
    visuale.value = Math.log10(visuale.value);
}

function aggiungiLn(){//funzione per calcolare il logaritmo naturale

    document.getElementById('visuale').value;
    visuale.value = Math.log(visuale.value);
}

function aggiungiPi(){//funzione per calcolare il Pi Greco
    
    visuale.value = Math.PI;
   
}

function aggiungiSin(){//funzione per calcolare il Seno
    
    document.getElementById('visuale').value;
     visuale.value = Math.sin(visuale.value);
}

function aggiungiCos(){//funzione per calcolare il Coseno
    
    document.getElementById('visuale').value;
    visuale.value = Math.cos(visuale.value);
}

function aggiungiTan(){//funzione per calcolare la Tangente
    
    document.getElementById('visuale').value;
    visuale.value = Math.tan(visuale.value);
}

function aggiungiExp(){//funzione per calcolare l'Esponenziale

    document.getElementById('visuale').value;
    visuale.value = Math.exp(visuale.value);
}

function aggiungiFraz(){//funzione per calcolare la Frazione
    
    document.getElementById('visuale').value;
    visuale.value = eval('1/' +visuale.value);
    
}

function Perce(){//funzione per calcolare il Percentuale
    
    document.getElementById('visuale').value;
    visuale.value = eval(visuale.value + '/100');

}

function backSpace(){//Funzione BackSpace
    let bSpace = document.getElementById('visuale').value;
    bSpace = bSpace.slice(0, -1);
    document.getElementById('visuale').value = bSpace;
}


function canc(){//Funzione per eliminare tutta la stringa
    document.getElementById('visuale').value = '';
}

function bigger(){//funzione per Mostrare la div nascosta al click del simbolo
    
        if (document.getElementById("nascondi").style.display == 'none'){
            document.getElementById("nascondi").style.display = 'flex';
            }else{
                document.getElementById("nascondi").style.display = 'none'
            }
    
}


