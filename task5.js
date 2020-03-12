secret= 7;
guess=prompt("Guess the secret number: ");
guess= Number(guess);
if(guess==secret)
{
    document.write("Bingo! Correct answer");
}
if(secret==guess+1)
{
    document.write("Close enough to the correct answer");
}