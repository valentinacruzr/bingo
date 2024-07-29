document.addEventListener('DOMContentLoaded', function () {
    let iteraFila;
    let fila = [];
    let iteraColum;
    let operacion;
    let contar = 1;
    let num = [];

    for (iteraFila = 1; iteraFila <= 5; iteraFila++) {
        fila = [];
        for (iteraColum = 0; iteraColum < 5; iteraColum++) {
            operacion = contar * 2;
            fila.push(operacion);
            contar++;
        }
        num.push(fila);
    }

    for (let iteraTabla = 1; iteraTabla <= 8; iteraTabla++) {
        let numTabla = "tabla" + iteraTabla;
        let tabla = document.getElementById(numTabla);

        for (iteraFila = 0; iteraFila < 5; iteraFila++) {
            let producto = "";
            for (iteraColum = 0; iteraColum < 5; iteraColum++) {
                producto += '<li class="list-group-item">' + num[iteraColum][iteraFila] + '</li>';
            }
            console.log(producto);
            tabla.children[0].children[iteraFila].innerHTML = producto;
        }
    }



    let tabla7 = document.getElementById("tabla7")
    for (iteraFila = 0; iteraFila < 5; iteraFila++) {

        for (iteraColum = 0; iteraColum < 5; iteraColum++) {
            if (iteraFila == iteraColum || iteraFila + iteraColum == 4) {
                tabla7.children[0].children[iteraFila].children[iteraColum].classList.add("list-group-item-1");
            }

        }

    }


    let tabla8 = document.getElementById("tabla8")
    for (iteraFila = 0; iteraFila < 3; iteraFila++) {
        for (iteraColum = 0; iteraColum < 3; iteraColum++) {
            if (iteraFila == iteraColum || iteraFila + iteraColum == 2) {
                tabla8.children[0].children[iteraFila].children[iteraColum].classList.add("list-group-item-1");
            }

        }

    }
    for (iteraFila = 0; iteraFila < 5; iteraFila++) {
        for (iteraColum = 0; iteraColum < 3; iteraColum++) {
            if ((iteraFila + iteraColum) % 2 == 0 || iteraFila + iteraColum == 4) {
                tabla8.children[0].children[iteraFila].children[iteraColum].classList.add("list-group-item-1");
            }

        }

    }
    for (iteraFila = 2; iteraFila < 5; iteraFila++) {
        for (iteraColum = 0; iteraColum < 3; iteraColum++) {
            if ((iteraFila + iteraColum) % 2 == 0 || iteraFila + iteraColum == 4) {
                tabla8.children[0].children[iteraColum].children[iteraFila].classList.add("list-group-item-1");
            }

        }

    }

    for (iteraFila = 2; iteraFila < 7; iteraFila++) {
        let numTabla = "tabla" + iteraFila;
        let tabla = document.getElementById(numTabla);
        for (iteraColum = 0; iteraColum < 5; iteraColum++) {
            if(iteraFila == 2 ){
                tabla.children[0].children[iteraFila - 2].children[iteraColum].classList.add("list-group-item-2");
            }else if(iteraFila == 3){
                tabla.children[0].children[iteraFila - 2].children[iteraColum].classList.add("list-group-item-3");
            }else if(iteraFila == 4){
                tabla.children[0].children[iteraFila - 2].children[iteraColum].classList.add("list-group-item-4");
            }else if(iteraFila == 5){
                tabla.children[0].children[iteraFila - 2].children[iteraColum].classList.add("list-group-item-5");
            }else if(iteraFila == 6){
                tabla.children[0].children[iteraFila - 2].children[iteraColum].classList.add("list-group-item-5");
            }
        }

    }


})