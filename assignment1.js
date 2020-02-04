//Question 1

function madlib(name, subject)
{
    return name + "'s favorite subject in school is " + subject;
}

function tipAmount(amount, review)
{
    switch(review)
    {
        case 'good':
            return amount * 0.2;
        case 'fair':
            return amount * 0.15;
        case 'bad':
            return amount * 0.1;
    }
}

function totalAmount(amount, review)
{
    return tipAmount(amount, review) + amount;
}

function main()
{
    console.log(madlib('matt', 'math'));
    console.log("if your service was good you should tip " + tipAmount(75, 'good'));
    console.log("if your service was fair you should tip " + tipAmount(75, 'fair'));
    console.log("if your service was bad you should tip " + tipAmount(75, 'bad'));
}


main();