num=prompt("Enter any number");
num=parseFloat(num);
if(num>0)
{
    document.write("Your entered number is positive");
}
else if(num<0)
{
    document.write("Your entered number is negative");
}
else 
{
    document.write("The number you have entered is zero.")
}