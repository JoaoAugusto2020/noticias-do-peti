//Recebe qual valor que está no input radio
function trocarBtn(val){
    //Relativamente esconde um form e mostrando outro inversamente
    if(val==1){
        document.getElementById('btnLua').style.display='none';
        document.getElementById('btnSol').style.display='block';
    }
    if(val==2){
        document.getElementById('btnLua').style.display='block';
        document.getElementById('btnSol').style.display='none';
    }
}