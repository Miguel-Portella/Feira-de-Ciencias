function calculateCarbon() {
    var fuelType = document.getElementById("fuelType").value;
    var fuelAmount = parseFloat(document.getElementById("fuelAmount").value);
    var emissionFactor;
    
    switch(fuelType) {
        case "gasolina":
            emissionFactor = 2.31;
            break;
        case "diesel":
            emissionFactor = 2.68;
            break;
        case "etanol":
            emissionFactor = 1.50;
            break;
        case "gnv":
            emissionFactor = 2.75;
            break;
        case "eletricidade":
            emissionFactor = 0.233;
            break;
        case "biodiesel":
            emissionFactor = 2.52;
            break;
        case "hidrogenio":
            emissionFactor = 13.8;
            break;
        default:
            emissionFactor = 0;
    }
    
    var carbonEmission = fuelAmount * emissionFactor;
    document.getElementById("result").innerText = "A emissão de carbono que você produz é aproximadamente " + carbonEmission.toFixed(2) + "  kg por mês.";
    document.getElementById("result").style.color = "Black";
    if (isNaN(fuelAmount)) {
        document.getElementById("result").innerText = "Insira um valor válido na quantidade de combustivel em litros por mês!";
        document.getElementById("result").style.color = "red";
    }
}