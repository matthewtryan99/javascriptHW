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
//Question 6
function printBox(num1, num2)
{
    var topBot = "";
    for(var i = 0; i < num1; i++)
    {
        topBot += "*";
    }

    var middle = "*";
    for(var i = 0; i < (num1-2); i++)
    {
        middle += " ";
    }
    middle += "*";

    console.log(topBot);
    for(var i = 0; i < (num2 - 2); i++)
    {
        console.log(middle);
    }
    console.log(topBot);
}
//Question 7
function printBanner(string)
{
    var topBot = "";
    for(var i = 0; i < (string.length + 2); i++)
    {
        topBot += "*";
    }
    console.log(topBot);
    console.log("*" + string + "*");
    console.log(topBot);
}
//Question 8
function leetspeak(string)
{
    var array = string.split('');
    for(var i = 0; i < array.length; i++)
    {
        switch(array[i])
        {
            case 'A':
            case 'a':
                array[i] = '4';
                break;
            case 'E':
            case 'e':
                array[i] = '3';
                break;
            case 'G':
            case 'g':
                array[i] = '6';
                break;
            case "I":
            case 'i':
                array[i] = '1';
                break;
            case "O":
            case 'o':
                array[i] = '0';
                break;
            case "S":
            case 's':
                array[i] = '5';
                break;
            case "T":
            case 't':
                array[i] = '7';
                break;
        }
    }
    var newString = array.join('');
    return newString;
}

function main()
{
    // console.log(madlib('matt', 'math'));
    // console.log("if your service was good you should tip " + tipAmount(75, 'good'));
    // console.log("Your total with tip will cost " + totalAmount(75, 'good'));
    // console.log("if your service was fair you should tip " + tipAmount(75, 'fair'));
    // console.log("Your total with tip will cost " + totalAmount(75, 'fair'));
    // console.log("if your service was bad you should tip " + tipAmount(75, 'bad'));
    // console.log("Your total with tip will cost " + totalAmount(75, 'bad'));
    // printNumbers(9);
    // printSquare(10);
    // printBox(5, 8);
    // printBanner('This has a banner')
    console.log(leetspeak('leet'));
}


main();