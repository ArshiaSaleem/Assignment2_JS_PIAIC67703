correct_pwd= "Uet2303";
user_pwd=prompt("Enter your password");
if(user_pwd!="")
{
    if(user_pwd==correct_pwd)
    {document.write("Correct! The password you entered matches the original password");}
    else{
        document.write("Incorrect Password");
    }
}
else{
    document.write("Plese enter your password");
}

