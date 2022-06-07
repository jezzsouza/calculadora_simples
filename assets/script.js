function insert(component){
    const display = document.querySelector("#display");
    display.value = display.value + component.value; /*display recebe display + o componente*/
}

function equal(component) {   //retorna o resultado
            let display = document.getElementById("display");
            if (display)
                display.value = eval(display.value);
}

function limparDisplay(){      
            let display = document.getElementById("display");
            display.value = "";
}

function backAction(){  //função voltar
             let display = document.getElementById("display");
             display.value = display.value.substring(0, display.value.length - 1); //"substring()" pegar um texto que tem um valor começando em 0 até o último dígito, subtraindo do último.
}
