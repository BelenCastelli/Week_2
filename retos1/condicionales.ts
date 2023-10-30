
// Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
// La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)

function signoZodiaco(day:number, month:number):string {
    if((day >=20 && month == 1) || (day <= 18 && month == 2)){
        return "Tu signo del Zodiaco es Acuario"
}   else if ((day >= 19 && month == 2) || (day <= 20 && month == 3)){
        return "Tu signo del Zodiaco es Piscis"
} else if ((day >= 21 && month == 3) || (day <= 19 && month == 4)){
        return "Tu signo del Zodiaco es Aries"
} else if ((day >= 20 && month == 4) || (day <= 20 && month == 5)){
        return "Tu signo del Zodiaco es Tauro"
} else if ((day >= 21 && month == 5) || (day <= 20 && month == 6)){
    return "Tu signo del Zodiaco es Géminis"
} else if ((day >= 21 && month == 6) || (day <= 22 && month == 7)){
    return "Tu signo del Zodiaco es Cáncer"
} else if ((day >= 23 && month == 7) || (day <= 22 && month == 8)){
    return "Tu signo del Zodiaco es Leo"
} else if ((day >= 23 && month == 8) || (day <= 22 && month == 9)){
    return "Tu signo del Zodiaco es Virgo"
} else if ((day >= 23 && month == 9) || (day <= 22 && month == 10)){
    return "Tu signo del Zodiaco es Libra"
} else if ((day >= 23 && month == 10) || (day <= 21 && month == 11)){
    return "Tu signo del Zodiaco es Escorpio"
} else if ((day >= 22 && month == 11) || (day <= 21 && month == 12)){
    return "Tu signo del Zodiaco es Sagitario"
} else if ((day >= 22 && month == 12) || (day <= 19 && month == 1)){
    return "Tu signo del Zodiaco es Capricornio"
} else {return "Signo no encontrado"}
}

console.log(signoZodiaco(29,6));

// Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// estás. (Max 5 países por continente).
// La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)

function continent(country:string):void{
    if ((country == "España")|| (country == "Francia") || (country == "Alemania") || (country == "Portugal") || (country == "Italia")) {
        console.log("Estás en Europa");
    } else if ((country == "China") || (country == "Japon") || (country == "India")|| (country == "Vietnam") || (country == "Taiwan")){
        console.log("Estás en Asia");
    } else if ((country == "Marruecos") || (country == "Tunez") || (country == "Etiopia")|| (country == "Sudáfrica") || (country == "Madagascar")){
        console.log("Estás en Africa");
    } else if ((country == "Argentina") || (country == "Chile") || (country == "Brasil")|| (country == "Colombia") || (country == "Venezuela")){
        console.log("Estás en América");
    } else if ((country == "Australia") || (country == "Nueva Zelanda") || (country == "Tonga")|| (country == "Micronesia") || (country == "Papúa Nueva Guinea")){
        console.log("Estás en Oceania");
    } else {
        console.log("No se ha encontrado el país");
    }
}

console.log(continent("Argentina"));

// Realizar una función que te imprima por consola el siguiente mensaje:
// - “El numero es par”, si el numero introducido como parámetro de entrada es par
// - “El numero es impar”, si el numero introducido como parámetro de entrada es impar
// La cabecera de la función tendrá el siguiente aspecto: function isEven(number)

function isEven(number:number):string {
    if(number % 2 == 0) {
        return "El número es par"
    } else {
        return "El número es impar"
    }
}

console.log(isEven(12));
console.log(isEven(9));

