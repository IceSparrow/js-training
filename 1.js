function chislo(num){
    if (num % 3 == 0 && num % 5 == 0){
    console.log ('FizzBuzz')
    } else if (num % 3 == 0){
    console.log('Fizz');
    } else if (num % 5 == 0){
    console.log('Buzz');
    } else console.log('Юзер, ты дурак, твое число не делится ни на 3, ни на 5 воообщееее' )
    }
chislo (3);
chislo (5);
chislo (15);
chislo (2);