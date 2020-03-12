s1_omarks=prompt("Enter marks obtained in subject 1");
s1_tmarks=prompt("Enter total marks of subject 1");
s2_omarks=prompt("Enter marks obtained in subject 2");
s2_tmarks=prompt("Enter total marks of subject 2");
s3_omarks=prompt("Enter marks obtained in subject 3");
s3_tmarks=prompt("Enter total marks of subject 3");

totalmarks = parseFloat(s1_tmarks)+parseFloat(s2_tmarks)+parseFloat(s3_tmarks);
totalobtained = parseFloat(s1_omarks)+parseFloat(s2_omarks)+parseFloat(s3_omarks);
percentage = (totalobtained*100)/totalmarks;
percentage= parseInt(percentage);

document.write("<h1>Marks Sheet</h1>"); 
document.write("<br><br> Total Marks: "+totalmarks);
document.write("<br> Marks Obtained: "+totalobtained);
document.write("<br> Percentage: "+percentage);

if(percentage>=80){
    document.write("<br> Grade: A-one");
    document.write("<br> Remarks: Excellent");
}
else if(percentage>=70){
    document.write("<br>Grade: A");
    document.write("<br> Remarks: Good");
}
else if(percentage>=60){
    document.write("<br> Grade: B");
    document.write("<br> Remarks: You need to improve");
}
else if(percentage<60){
    document.write("<br>Grade: Fail");
    document.write("<br> Remarks: Sorry");
}