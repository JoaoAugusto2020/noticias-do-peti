//Recebe qual valor que está no input radio
function trocarBtn(val){

    //Relativamente esconde um form e mostrando outro inversamente
    if(val==1){
        document.getElementById('btnLua').style.display='none';
        document.getElementById('btnSol').style.display='block';

        document.getElementById("btnSol").style.marginLeft='35px';
        document.getElementById("btnLua").style.marginLeft='35px';
    }
    if(val==2){
        document.getElementById('btnLua').style.display='block';
        document.getElementById('btnSol').style.display='none';

        document.getElementById("btnLua").style.marginLeft='5px';
        document.getElementById("btnSol").style.marginLeft='5px';
    }
}

var cont = 0;
function dropdownList(valor){ 
    cont+=valor;
    
    if (cont%2==0) {
        document.getElementById('dropItens').style.visibility='hidden';
        document.getElementById('dropItens').style.height='0px';

        document.getElementById('iconAngle1').style.transform='rotate(00deg)';
        document.getElementById('iconAngle1').style.transition='0.2s';

    }else{
        document.getElementById('dropItens').style.visibility='visible';
        document.getElementById('dropItens').style.height='80px';

        document.getElementById('iconAngle1').style.transform='rotate(-90deg)';
        document.getElementById('iconAngle1').style.transition='0.2s';
    }
}