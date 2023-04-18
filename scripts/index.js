//Recebe qual valor que está no input radio
function trocarBtn(val){

    //Relativamente esconde um form e mostrando outro inversamente
    if(val==1){
        document.getElementById('btnLua').style.display='none';
        document.getElementById('btnSol').style.display='block';


        document.getElementById("btnSol").style.transition='2s';
        document.getElementById("btnSol").style.marginLeft='35px';
        
        document.getElementById("btnLua").style.marginLeft='35px';
        document.getElementById("btnLua").style.transition='2s';
    }
    if(val==2){
        document.getElementById('btnLua').style.display='block';
        document.getElementById('btnSol').style.display='none';

        
        document.getElementById("btnLua").style.marginLeft='5px';
        document.getElementById("btnSol").style.marginLeft='5px';
        document.getElementById("btnLua").style.transition='2s';
        document.getElementById("btnSol").style.transition='2s';
    }
}

function dropdownList(val=val+1){
    if (val%2==0) {
        document.getElementById('dropItens').style.display='none';
    }else{
        document.getElementById('dropItens').style.display='block';
    }
}