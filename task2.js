color=prompt("Enter traffic signal color: ");
if(color=="red")
{document.write("Must Stop");}
else if(color=="yellow")
{document.write("Ready to move");}
else if (color=="green"){
    document.write("Move now");
}
else{
    document.write("Enter correct color (i.e. red, green or yellow)");
}