//Question 1
function madlib(name, subject)
{
    return name + "'s favorite subject in school is " + subject;
}
//Question 2
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
//Question 3
function totalAmount(amount, review)
{
    return tipAmount(amount, review) + amount;
}
//Question 4
function printNumbers(num)
{
    for(var i = 0; i < num; i++)
    {
        console.log(i + 1);
    }
}
//Question 5
function printSquare(num)
{
    for(var i = 0; i < num; i++)
    {
        var square = ""
        for(var inner = 0; inner < num; inner++)
        {
            square += '*'
        }
        console.log(square);
    }
}


function main()
{
    console.log(madlib('matt', 'math'));
    console.log("if your service was good you should tip " + tipAmount(75, 'good'));
    console.log("Your total with tip will cost " + totalAmount(75, 'good'));
    console.log("if your service was fair you should tip " + tipAmount(75, 'fair'));
    console.log("Your total with tip will cost " + totalAmount(75, 'fair'));
    console.log("if your service was bad you should tip " + tipAmount(75, 'bad'));
    console.log("Your total with tip will cost " + totalAmount(75, 'bad'));
    printNumbers(9);
    printSquare(10);
}


main();