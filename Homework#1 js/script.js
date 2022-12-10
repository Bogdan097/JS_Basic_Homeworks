//Calculate the price of 30 phones where the price of one is $119.95 and the tax rate is 5%

var phone = 119.95;//$
var tax = 5; //%

//converting tax

var converterTax = 0.05 * 119.95 ;
console.log(`The tax for one phone is: ${converterTax.toFixed(3)} dollars`)
console.log(converterTax.toFixed(3));

//with decimal formatting
// converterTax.toFixed(5);
// console.log(converterTax.toFixed(5));


var converterTax = 0.05 * 119.95 ;
console.log(`The following value of ${converterTax.toFixed(4)} dollars is the tax value of one phone`);
console.log(converterTax.toFixed(4));
// converterTax.toFixed(4);
// console.log(converterTax.toFixed(4));


//value for one phone with tax 

var phone = converterTax + 119.95;
console.log("Market value for one phone with tax is:")
console.log(phone);
// phone.toFixed(3);
// console.log(phone.toFixed(3));

var phone = converterTax + 119.95;
console.log(`The value of: ${phone} dollars is the market value of this phone`);
console.log(phone);
// phone.toFixed(2);
// console.log(phone.toFixed(2));

//value for 30 phones without tax


var phones = phone * 30;
console.log("The value for all phones without tax  is:");
console.log(phones);
// phones.toFixed(3);
// console.log(phones.toFixed(3));

var phones = phone * 30;
console.log(`The value for all phones without tax is : ${phones} dollars `);
console.log(phones);
// converterTax.toFixed(3;
// console.log(converterTax.toFixed(3));


//value for 30 phones with tax

var PhonesWithTax = phones*(converterTax);
console.log("Value for all phones with tax:");
console.log(PhonesWithTax.toFixed(2));
// converterTax.toFixed(5);
// console.log(PhonesWithTax.toFixed(5));

var PhonesWithTax = phones*(converterTax);
console.log(`The following value of ${PhonesWithTax.toFixed(3)} dollars,is the sum of all phones with tax`);
console.log(PhonesWithTax.toFixed(3));
// PhonesWithTax.toFixed(3);
// console.log(PhonesWithTax.toFixed(3));

