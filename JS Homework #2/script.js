// // Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

// Formula for Chinese Zodiac calculation: (year - 4) % 12. Possible values:

// 0-Rat      3-Rabbit   6-Horse   9-Rooster
// 1-Ox       4-Dragon   7-Goat    10-Dog
// 2-Tiger    5-Snake    8-Monkey  11-Pig

let yearBirth = parseInt(prompt("Enter your birth year"));
let chineseZodiac = (yearBirth - 4 ) % 12;

if((yearBirth >= 1924 && yearBirth <= 2031) && chineseZodiac == 0) {
    console.log("Based on your entry,your Zodiac sign is :Rat");
}
else if ((yearBirth >= 1924 && yearBirth <= 2031) && chineseZodiac == 1){
    console.log("Based on your entry,your Zodiac sign is : Ox");
}
else if ((yearBirth >= 1924 && yearBirth <= 2031) && chineseZodiac == 2){
    console.log("TBased on your entry,your Zodiac sign is : Tiger");
}
else if ((yearBirth >= 1924 && yearBirth <= 2031) && chineseZodiac == 3){
    console.log("Based on your entry,your Zodiac sign is : Rabbit");
}
else if ((yearBirth >= 1924 && yearBirth <= 2031) && chineseZodiac == 4){
    console.log("Based on your entry,your Zodiac sign is : Dragon ");
}
else if ((yearBirth >= 1924 && yearBirth <= 2031) && chineseZodiac == 5){
    console.log("Based on your entry,your Zodiac sign is : Snake");
}
else if ((yearBirth >= 1924 && yearBirth <= 2031) && chineseZodiac == 6){
    console.log("Based on your entry,your Zodiac sign is : Horse");
}
else if ((yearBirth >= 1924 && yearBirth <= 2031) && chineseZodiac == 7){
    console.log("Based on your entry,your Zodiac sign is : Goat");
}
else if ((yearBirth >= 1924 && yearBirth <= 2031) && chineseZodiac == 8){
    console.log("Based on your entry,your Zodiac sign is : Monkey");
}
else if ((yearBirth >= 1924 && yearBirth <= 2031) && chineseZodiac == 9){
    console.log("Based on your entry,your Zodiac sign is : Rooster");
}
else if ((yearBirth >= 1924 && yearBirth <= 2031) && chineseZodiac == 10){
    console.log("Based on your entry,your Zodiac sign is : Dog");
}
else if ((yearBirth >= 1924 && yearBirth <= 2031) && chineseZodiac == 11){
    console.log("Based on your entry,your Zodiac sign is : Pig");
}

//With two prompts i can type in two values and get result from both ways, i can comment one or not,it works both ways...

//Izgubiv nekoe vreme na case-ovite bidejki mi bea podredeni od case 1 natamu(a treba od case 0 bidejki Rat mi e 0 ,mislam deka e toa gledajki po toa deka uspea), i celo vreme sporedbite mi bea za edno podole mislam ,a treba da dobijam isti rezultati od dvata prompta...:)


let yearBirth1 = parseInt(prompt("Enter your year"));
let chineseZodiac1 = (yearBirth1 - 4 ) % 12;
switch  (chineseZodiac1){
    case 0:
         console.log("Based on your entry,your Zodiac sign is :Rat");
         break;
    case 1:
        console.log("Based on your entry,your Zodiac sign is : Ox");
        break;
    case 2 :
         console.log("Based on your entry,your Zodiac sign is : Tiger");
         break;
     case 3 : 
        console.log("Based on your entry,your Zodiac sign is : Rabbit");
        break;
     case 4 : 
        console.log("Based on your entry,your Zodiac sign is : Dragon ");
        break;
     case 5: 
        console.log("Based on your entry,your Zodiac sign is : Snake");
        break;
     case 6 :
        console.log("Based on your entry,your Zodiac sign is : Horse");
        break;
     case 7 : 
         console.log("Based on your entry,your Zodiac sign is : Goat");
         break;
     case 8 : 
         console.log("Based on your entry,your Zodiac sign is : Monkey");
         break; 
     case 9 : 
         console.log("Based on your entry,your Zodiac sign is : Rooster");
         break;  
     case 10 : 
         console.log("Based on your entry,your Zodiac sign is : Dog");
         break;
     case 11 : 
         console.log("Based on your entry,your Zodiac sign is : Pig");
         break;          
                
}