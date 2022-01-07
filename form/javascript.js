function clicar(){
    let entradaName=document.querySelector('id#nome')
    let cadastrar=(entradaName.value)    

    if(cadastrar.length<10){
        window.alert('erro')
    }
    else{
        window.alert('certo')
    }
}