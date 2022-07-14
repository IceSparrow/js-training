// function calculator (num1, num2, operation){
   // if (operation == 'plus'){
   //     const sum1 = num1+num2
   //     console.log (sum1)
    //} else if (operation == 'minus'){
   //     const sum2 = num1-num2
    //    console.log (sum2)
    //} else if (operation == 'umnozhit'){
    //    const sum3 = num1*num2
    //    console.log (sum3)
    //} else if (operation == 'razdelit'){
    //    const sum4 = num1/num2
    //    console.log (sum4)
    //    }
    //}

    function calculator (num1, num2, operation){
        switch (operation){
            case 'plus':
                const sum1 = num1+num2
                console.log(sum1)
                break
            case 'minus':
                const sum2 = num1-num2
                console.log(sum2)
                break
            case 'umnozhit':
                const sum3 = num1*num2
                console.log(sum3)
                break
            case 'razdelit':
                const sum4 = num1/num2
                console.log(sum4)
                break
        }
    }

calculator (5,2,'razdelit')