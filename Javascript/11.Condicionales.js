//if(si) else(y si no)

let frio = true;

if(frio){
    console.log('Me pondre el abrigo')
}else{
    console.log('No me pongo el abrigo')
}

//if(si) else-if(y sino si) else(si noo)

let oferta;
let hora = 19;

if(hora >= 8 && hora <= 10){
    console.log('El cafe esta en oferta')
}else if(hora>10 && hora<12){
    console.log('Los bocadillos estan en oferta')
}else if(hora>12 && hora<=14){
    console.log('La cerveza esta en oferta')
}else if(hora>14 && hora<=16){
    console.log('Los menus estan en oferta')
}else if(hora)