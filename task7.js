num1=prompt("Enter first number");
num2=prompt("Enter second number");
operation=prompt("Enter any operatoin from +,-,*,/,%");
num1=parseFloat(num1);
num2=parseFloat(num2);
if(operation=="+")
{
    result=num1+num2;
    document.write("Your calculated result is: "+result);
}
else if(operation=="-")
{
    result=num1-num2;
    document.write("Your calculated result is: "+result);
}
else if(operation=="*")
{
    result=num1*num2;
    document.write("Your calculated result is: "+result);
}
else if(operation=="/")
{
    result=num1/num2;
    document.write("Your calculated result is: "+result);
}
else if(operation=="%")
{
    result=num1%num2;
    document.write("Your calculated result is: "+result);
}
else{
    document.write("Enter correct operation");
}