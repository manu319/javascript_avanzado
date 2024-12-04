    const tipoPag = document.getElementById("base");
    const plazoMes = document.getElementById("plazo");

    const opciones = document.querySelectorAll("#extras>input"); 

    const preTotal = document.getElementById("total");


    let sumaTotal = 0;
    
    let suma = () => {
        
        sumaTotal = parseInt(tipoPag.value);

        switch (plazoMes.value) {
            case "1":
                sumaTotal += 100; 
                break;
            case "2":    
                sumaTotal += 80;
                break;
            case "3":
                sumaTotal += 40; 
                break;
            case "4":    
                sumaTotal += 0; 
                break;
        
            default:
                sumaTotal += 0;
                break;
        }

        opciones.forEach(element => {
            if(element.checked){
                sumaTotal += parseInt(element.value);
            }    
        });

        preTotal.value = sumaTotal;

    }

        opciones.forEach(element => {
            element.addEventListener("change", suma)
        });
        tipoPag.addEventListener("change", suma);
        plazoMes.addEventListener("change",suma);