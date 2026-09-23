let age = +prompt('Enter age : ') ;
let gender = prompt('Enter gender : ') ;
let final_discount ;

if (age<=5)
    {
        final_discount = 100;
    }
else if(gender === 'female' || age<=8)
    {
        final_discount = 50;
    }
else if(gender === 'male' && age>=65)
    {
        final_discount = 30;
    }
else{
        final_discount = 0;
    }
    console.log(`Your final discount is : ${final_discount}`);