var romanos = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
var arabicos = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
var errorMsg = "Could not convert this value";



var c_roman = {    
    dic_romanToDecimal: {},
    dic_decimalToRoman: {},

    //Inicializando recursos
    init:()=>{
        

        c_roman.buildNumberObject();
    },

    //Constroi o objeto com numeros romanos e arabicos com o mapeamento Roman:Arabian
    buildNumberObject: () =>{
        for(var i = 0; i< romanos.length;i++)
        {
            c_roman.dic_romanToDecimal[romanos[i]] = arabicos[i];
            c_roman.dic_decimalToRoman[arabicos[i]] = romanos[i];
        }
    },

    //Converte de romano para inteiro
    toInt:(roman)=>{
        if (roman==="" || !roman || typeof roman === 'number' ) return 0;
        if (roman.startsWith("M")) return c_roman.dic_romanToDecimal["M"]+ c_roman.toInt(roman.substring(1, roman.length));
        if (roman.startsWith("CM")) return c_roman.dic_romanToDecimal["CM"] + c_roman.toInt(roman.substring(2, roman.length));
        if (roman.startsWith("D")) return c_roman.dic_romanToDecimal["D"]+ c_roman.toInt(roman.substring(1, roman.length));
        if (roman.startsWith("CD")) return c_roman.dic_romanToDecimal["CD"] + c_roman.toInt(roman.substring(2, roman.length));
        if (roman.startsWith("C")) return c_roman.dic_romanToDecimal["C"]+ c_roman.toInt(roman.substring(1, roman.length));
        if (roman.startsWith("XC")) return c_roman.dic_romanToDecimal["XC"] + c_roman.toInt(roman.substring(2, roman.length));
        if (roman.startsWith("L")) return c_roman.dic_romanToDecimal["L"]+ c_roman.toInt(roman.substring(1, roman.length));
        if (roman.startsWith("XL")) return c_roman.dic_romanToDecimal["XL"] + c_roman.toInt(roman.substring(2, roman.length));
        if (roman.startsWith("X")) return c_roman.dic_romanToDecimal["X"]+ c_roman.toInt(roman.substring(1, roman.length));
        if (roman.startsWith("IX")) return c_roman.dic_romanToDecimal["IX"] + c_roman.toInt(roman.substring(2, roman.length));
        if (roman.startsWith("V")) return c_roman.dic_romanToDecimal["V"]+ c_roman.toInt(roman.substring(1, roman.length));
        if (roman.startsWith("IV")) return c_roman.dic_romanToDecimal["IV"] + c_roman.toInt(roman.substring(2, roman.length));
        if (roman.startsWith("I")) return c_roman.dic_romanToDecimal["I"]+ c_roman.toInt(roman.substring(1, roman.length));

        return 0;
    },

    //Converte de inteiro para romano
    toRoman:(number)=>{

        if(number < 4000) {
            if(number === 0) return "";
            if(number >= 1000) return c_roman.dic_decimalToRoman[1000] + c_roman.toRoman(number - 1000);
            if(number >= 900) return c_roman.dic_decimalToRoman[900] + c_roman.toRoman(number - 900);
            if(number >= 500) return c_roman.dic_decimalToRoman[500] + c_roman.toRoman(number - 500);
            if(number >= 400) return c_roman.dic_decimalToRoman[400] + c_roman.toRoman(number - 400);
            if(number >= 100) return c_roman.dic_decimalToRoman[100] + c_roman.toRoman(number - 100);
            if(number >= 90) return c_roman.dic_decimalToRoman[90] + c_roman.toRoman(number - 90);
            if(number >= 50) return c_roman.dic_decimalToRoman[50] + c_roman.toRoman(number - 50);
            if(number >= 40) return c_roman.dic_decimalToRoman[40] + c_roman.toRoman(number - 40);
            if(number >= 10) return c_roman.dic_decimalToRoman[10] + c_roman.toRoman(number - 10);
            if(number >= 9) return c_roman.dic_decimalToRoman[9] + c_roman.toRoman(number - 9);
            if(number >= 5) return c_roman.dic_decimalToRoman[5] + c_roman.toRoman(number - 5);
            if(number >= 4) return c_roman.dic_decimalToRoman[4] + c_roman.toRoman(number - 4);
            if(number >= 1) return c_roman.dic_decimalToRoman[1] + c_roman.toRoman(number - 1);
        }

        return errorMsg;
    },

    subtract: (a, b) => {
        var intA = c_roman.toInt(a);
        var intB = c_roman.toInt(b);

        var result =  intA - intB;
        if(result> 0 && result < 4000 && (a!==(errorMsg) && b!==(errorMsg))) return c_roman.toRoman(result);
        else return "Undefined";

    },

    add: (a, b) => {
       var intA = c_roman.toInt(a);
       var intB = c_roman.toInt(b);

       var result =  intA + intB;
        if(result> 0 && result < 4000 && (a!==(errorMsg) && b!==(errorMsg))) return c_roman.toRoman(result);
        else return "Undefined";

    },

    multiply: (a, b) => {
        var intA = c_roman.toInt(a);
        var intB = c_roman.toInt(b);
 
        var result =  intA * intB;
        if(result> 0 && result < 4000 && (a!==(errorMsg) && b!==(errorMsg))) return c_roman.toRoman(result);
        else return "Undefined";
 
     },




}