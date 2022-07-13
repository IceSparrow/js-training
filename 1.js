function chislo(num){
    if (num % 3 == 0 && num % 5 == 0){
    console.log ('FizzBuzz')
    } else if (num % 3 == 0){
    console.log('Fizz');
    } else if (num % 5 == 0){
    console.log('Buzz')
    }
}
chislo (3);
chislo (5);
chislo (15);