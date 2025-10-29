
// 1
function multiplicarTresNumeros(num1, num2, num3) {
    return num1 * num2 * num3;
}

// 2
function dividir(dividendo, divisor) {
    if (divisor === 0) {
        return "Não é possível dividir por 0";
    }
    return dividendo / divisor;
}

// 3
function celsiusFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function fahrenheitCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

// 4
function calcularMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

// 5
function contarCaracteres(str) {
    return str.length;
}

// 6
function calculadora(num1, num2, operador) {
    switch (operador) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Não é possível dividir por 0";
            }
            return num1 / num2;
        default: return "Operador inválido";
    }
}

module.exports = {
    multiplicarTresNumeros,
    dividir,
    celsiusFahrenheit,
    fahrenheitCelsius,
    calcularMedia,
    contarCaracteres,
    calculadora,
};