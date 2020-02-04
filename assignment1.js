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

function main()
{
    console.log(madlib('matt', 'math'));
}

main();