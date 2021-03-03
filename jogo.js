var altura;
var largura;
var vidas = 1
var tempo = 10

var tempoMosquito=1500
var dificuldade = window.location.search
dificuldade = dificuldade.replace('?', '')
if(dificuldade == 'medio'){
     tempoMosquito = 1500

}
else if(dificuldade == 'dificil'){
     tempoMosquito = 1000
     

}
else if(dificuldade === 'fodao'){
       tempoMosquito= 0850

}

function ajustarTamanho(){
 altura = window.innerHeight
 largura = window.innerWidth
 console.log(altura, largura)

}
ajustarTamanho()

function positionRandomic(){

if(document.getElementById('mosquito')){ 
     document.getElementById('mosquito').remove()
     if(vidas >=3){

          window.location.href='gameover.html'
     }
     
     document.getElementById(`v${vidas}`).src=("assets/coracao_vazio.png")
    vidas++
}
var positionx = Math.floor(Math.random() * largura - 90) 
var positiony = Math.floor(Math.random() * altura -90) 

positionx = positionx < 0 ? 0 : positionx
positiony = positiony < 0 ? 0 : positiony
//criando mosquito

var mosquito = document.createElement('img')
mosquito.src='assets/mosca.png'
mosquito.className = tamanhoMosquito()+' '+ladoAleatorio()
mosquito.style.left = positionx + 'px'
mosquito.style.top= positiony + 'px'
mosquito.style.position = 'absolute'
mosquito.id="mosquito"
mosquito.onclick = ()=>{
    document.getElementById('mosquito').remove()
}

document.body.appendChild(mosquito)



}

function tamanhoMosquito(){
     var classe = Math.floor(Math.random()*3)
     
     switch(classe){
        case 0:
             return 'mosquito'
       case 1:
           return  'mosquito1'
        case 2:
            return 'mosquito2'
     
     }
}
/********lado q o mosquito aparece****** */
function ladoAleatorio(){
     var classe = Math.floor(Math.random()*3)
     
     switch(classe){
          case 0:
               return 'mosquitoa'
          case 1:
               return  'mosquitob'
          case 2:
               return 'mosquitoc'
      
}
}
/*******cronometro*********/ 

var x = setInterval(function(){
          if(tempo === 0){
               clearInterval(x)
               clearInterval(criaMosquito)
              window.location.href="vitoria.html"
          }
         
          document.getElementById('tempo').innerHTML=tempo
          tempo--
          
     },1000)






