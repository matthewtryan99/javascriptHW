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
//Question 9
function longLongVowels(string)
{
    var newString = ""
    for(var i = 0; i < string.length; i++)
    {
        if(string[i] == string[i + 1])
        {
            switch(string[i])
            {
                case 'a':
                case 'A':
                case 'e':
                case 'E':
                case 'i':
                case 'I':
                case 'o':
                case 'O':
                case 'u':
                case 'U':
                    return newString = string.slice(0,i) + string[i] + string[i] + string[i] + string.slice(i)
            }
        }
    }
    return string;
}
//Question 10
function positiveNumbers(ary)
{
    var newAry = [];
    for(var i = 0; i < ary.length; i++)
    {
        if(ary[i] >= 0)
        {
            newAry.push(ary[i]);
        }
    }
    return newAry;
}

function cipher(msg, offset)
{
    var msgAry = msg.split('');
    var msgNums = [];
    var newMsgAry = [];
    for(var i = 0; i < msgAry.length; i++)
    {
        switch(msgAry[i])
        {
            case 'a':
            case 'A':
                msgNums.push(1 + offset)
                break;
            case 'b':
            case 'B':
                msgNums.push(2 + offset)
                break;
            case 'c':
            case 'C':
                msgNums.push(3 + offset)
                break;
            case 'd':
            case 'D':
                msgNums.push(4 + offset)
                break;
            case 'E':
            case 'e':
                msgNums.push(5 + offset)
                break;
            case 'f':
            case 'F':
                msgNums.push(6 + offset)
                break;
            case 'g':
            case 'G':
                msgNums.push(7 + offset)
                break;
            case 'h':
            case 'H':
                msgNums.push(8 + offset)
                break;
            case 'i':
            case 'I':
                msgNums.push(9 + offset)
                break;
            case 'j':
            case 'J':
                msgNums.push(10 + offset)
                break;
            case 'k':
            case 'K':
                msgNums.push(11 + offset)
                break;
            case 'l':
            case 'L':
                msgNums.push(12 + offset)
                break;
            case 'm':
            case 'M':
                msgNums.push(13 + offset)
                break;
            case 'n':
            case 'N':
                msgNums.push(14 + offset)
                break;
            case 'o':
            case 'O':
                msgNums.push(15 + offset)
                break;
            case 'p':
            case 'P':
                msgNums.push(16 + offset)
                break;
            case 'q':
            case 'Q':
                msgNums.push(17 + offset)
                break;
            case 'r':
            case 'R':
                msgNums.push(18 + offset)
                break;
            case 's':
            case 'S':
                msgNums.push(19 + offset)
                break;
            case 't':
            case 'T':
                msgNums.push(20 + offset)
                break;
            case 'u':
            case 'U':
                msgNums.push(21 + offset)
                break
            case 'v':
            case 'V':
                msgNums.push(22 + offset)
                break;
            case 'w':
            case 'W':
                msgNums.push(23 + offset)
                break;
            case 'x':
            case 'X':
                msgNums.push(24 + offset)
                break;
            case 'y':
            case 'Y':
                msgNums.push(25 + offset)
                break;
            case 'z':
            case 'Z':
                msgNums.push(26 + offset)
                break;
            default:
                msgNums.push(0);
                break;
        }
    }
    console.log(msgNums);
    for(var i = 0; i < msgNums.length; i++)
    {
        if (msgNums[i] > 26)
        {
            msgNums[i] = msgNums[i] - 26;
        }
    }
    for(var i = 0; i < msgAry.length; i++)
    {
        switch(msgNums[i])
        {
            case 0:
                newMsgAry.push(' ');
                break;
            case 1:
                newMsgAry.push('a');
                break;
            case 2:
                newMsgAry.push('b');
                break;
            case 3:
                newMsgAry.push('c');   
                break;
            case 4:
                newMsgAry.push('d');
                break;
            case 5:
                newMsgAry.push('e');
                break;
            case 6:
                newMsgAry.push('f');
                break;
            case 7:
                newMsgAry.push('g');
                break;
            case 8:
                newMsgAry.push('h');
                break;
            case 9:
                newMsgAry.push('i');
                break;
            case 10:
                newMsgAry.push('j');
                break;
            case 11:
                newMsgAry.push('k');
                break;
            case 12:
                newMsgAry.push('l');
                break;
            case 13:
                newMsgAry.push('m');
                break;
            case 14:
                newMsgAry.push('n');
                break;
            case 15:
                newMsgAry.push('o');
                break;
            case 16:
                newMsgAry.push('p');
                break;
            case 17:
                newMsgAry.push('q');
                break;
            case 18:
                newMsgAry.push('r');
                break;
            case 19:
                newMsgAry.push('s');
                break;
            case 20:
                newMsgAry.push('t');
                break;
            case 21:
                newMsgAry.push('u');
                break;
            case 22:
                newMsgAry.push('v');
                break;
            case 23:
                newMsgAry.push('w');
                break;
            case 24:
                newMsgAry.push('x');
                break;
            case 25:
                newMsgAry.push('y');
                break;
            case 26:
                newMsgAry.push('z');
                break;
        }
        console.log(newMsgAry);
        var newMsg = newMsgAry.join('');
        return newMsg;
    }
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
    // console.log(leetspeak('leet'));
    // console.log(longLongVowels('Cheese'));
    // console.log(longLongVowels('Good'));
    // console.log(longLongVowels('Man'));
    // console.log(positiveNumbers([1, -3, 5, -3, 0]));
    console.log(cipher('Genius without education is like silver in the mine', 13));
}


main();