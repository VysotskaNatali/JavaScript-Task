// 1.Створіть програму, яка обчислює факторіал натурального числа n,
//  яке користувач введе з клавіатури.

let n =+prompt(`Write number here...`);
for(let i = 1; i<=n;i++){
     
   document.write(`<h2> ${i}</h2>`);  
}


// 2.Створіть програму, 
// що виводить на екран всі чотиризначні числа послідовності 
// 1000 1003 1006 1009 1012 1015 … 9999

for(let i=1000; i<=9999; i=i+3){
    document.write(`<h2> ${i}</h2>`);
}

// 3.Створіть програму, 
// що виводить на екран перші 55 елементів 
// послідовності 1 3 5 7 9 11 13 15 17…


for(let i=1; i<=110; i+=2){
    
     document.write(`<h2> ${i}</h2>`);
   
}

// 4.Створіть програму, що виводить на екран всі невід'ємні 
// елементи послідовності 90 85 80 75 70 65 60…

for( let i =90; i>=0;i-=5){
    document.write(`<h2> ${i}</h2>`); 
}

// 5.Створіть програму, що виводить на екран 
// перші 20 елементів послідовності 2 4 8 16 32 64 128…

let num=1;
for(i=0;i<20; i++){
    num=num*2;
    document.write(`<h2> ${num}</h2>`);
}

// 6. Виведіть на екран всі числа в послідовності 2a-1(крок зміни лічильника),
//  де початкове значення a = 2 та які менше 10000.

for(let a=2; a<10000; a=a*2 - 1){
    document.write(`<h2> ${a}</h2>`);
}

// 7.Виведіть на екран всі двозначні члени послідовності 2a+200(крок зміни лічильника),
//  де початкове значення змінної a = -166.

for(let a=-166; a<=100; a=a*2 + 200){
    if(a>=-99 && a<=99){
    document.write(`<h2> ${a}</h2>`);
 }
}

// 8.Написати програму що обчислює піднесення до степеня. 
// В 1й промпт вводиться число,а в 2й промпт степінь. Умови: Степінь може бути додатня,
//  від'ємна або 0. Обрахувати всі можливі варіанти циклом for.
//   Задачу бажано виконати використовуючи 1 цикл! 

// a^b = a*a b раз;

// a^-b= 1/a^b;

// a^0 = 1;

let a = +prompt('Введіть число');
let b = +prompt('Введіть степінь');
let result = 1;
for( let i = 1; i <=b || i <=-b; i++){
    result *=a
    if(-b>0){
        for( let i = 1; i <=b || i <=-b; i++){
        result *=1/a
     }
 }
}
document.write(`<h2> ${result}</h2>`);


