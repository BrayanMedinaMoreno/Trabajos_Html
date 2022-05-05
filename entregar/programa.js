let mes= new Date(), elmes=0, año=mes.getFullYear(), dia=mes.getDate();

if(mes.getMonth()==3){
  elmes='Abril';
}

document.getElementById("fechas").innerHTML= 'Mes: <br>'+ elmes+"<br> Año: <br>"+año+'<br> Dia: <br>'+dia

let visitas = localStorage.getItem('visitas');
    if(visitas == null){
        localStorage.setItem('visitas', 1);
    }
    else {
        localStorage.setItem('visitas', parseInt(visitas)+1);
        document.getElementById('visitas').innerHTML = `Cantidad de visitas: ${visitas}`;
    }

    //if(visitasActuales){
        //let aumento= parseInt(visitasActuales)+1;
        //document.getElementById("visitas").innerHTML= aumento;
        //localStorage.setItem("visitas", aumento);
    //}
      //else{
        //localStorage.setItem("visitas", 1);
        //document.getElementById("visitas").innerHTML= 1;
      //}