//MOSTRAR PÁGINA CREATE
function autenticarCreate(){
    //Trocar Formulário
    document.getElementById('formCreate').style.display='flex';
    document.getElementById('formLogin').style.display='none';

    //Trocar texto
    document.getElementById('textoCreate').style.display='flex';
    document.getElementById('textoLogin').style.display='none';
}

//MOSTRAR PÁGINA LOGIN
function autenticarLogin(){
    //Trocar Formulário
    document.getElementById('formCreate').style.display='none';
    document.getElementById('formLogin').style.display='flex';

    //Trocar texto
    document.getElementById('textoCreate').style.display='none';
    document.getElementById('textoLogin').style.display='flex';
}