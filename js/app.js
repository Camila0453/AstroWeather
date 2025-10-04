//console.log("hola")

  document.addEventListener("DOMContentLoaded",()=>{

  let inputFecha= document.getElementById("datoFecha");

  let linkbuscar= document.getElementById("linkBus");

console.log("hola la fecha es"+ inputFecha);
  inputFecha.addEventListener('change',()=>{
      console.log("hola la fecha es"+ inputFecha);
     let inputFechaValue= document.getElementById("datoFecha").value;
     if(inputFecha){
     let url=" https://api.meteomatics.com/"+inputFechaValue+"T00:00:00ZP1D:PT1H/t_2m:C,relative_humidity_2m:p/47.4245,9.3767/html?model=mix&request_type=GET"
      linkbuscar.href= url;
     }
  })
  })
  
