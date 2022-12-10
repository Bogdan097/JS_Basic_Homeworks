// // Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

// Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

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
