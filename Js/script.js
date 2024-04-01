   //Simple Alert
function simple() {
    let fname="This is a Simple Alert Message";
    alert(fname)
    document.getElementById("output").innerHTML=fname;
}
  //Print Name
function printName() {
    let myName = document.getElementById("input").value;

    if (!myName) {
        alert("Please Enter Your Name First")
        return;
    }
    document.getElementById("output").innerHTML = myName;
}

let arr = ["Faisalabad", "Lahore", "Karachi", "Multan","Islamabad","Burewala"]
    //Print City
function printCity() {
    document.getElementById("output").innerHTML ="";
    for (i = 0; i < arr.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ')' + arr[i] + "</br>";
    }
}
       //Clear Input
document.getElementById("btn-1").onclick = function () {
    document.getElementById("input").value = "";

}
      //Clear Output
document.getElementById("btn-2").onclick = function () {
    document.getElementById("output").innerHTML = "";

}

    //Add City
function addcity() {
    let city = document.getElementById("input").value;
    if (!city) {
        alert("Please Enter Your City")
        return;
    }
    for (i = 0; i < arr.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ')' + arr[i] + "</br>";
    }
    arr.push(city)
    document.getElementById("output").innerHTML = '<span style="color:green;font-size:20px;">"' + city + '"</span> has been Succesfully added.';


}
        //Orignal Statement
document.getElementById("orignal").innerHTML = "1) Faisalabad &nbsp;2) Lahore &nbsp; 3) Karachi &nbsp;4) Islamabad &nbsp; 5) Burewala &nbsp; 6) Sheikhupura &nbsp;7) Kashmir";

       //Generate Table
function generatetable(){
    document.getElementById("output").innerHTML = "";
    let num=document.getElementById("input").value
    let j=prompt("Enter a Number to Print a Length of Table:")
    for(i=1;i<=j;i++){
       let n=num*i
       document.getElementById("output").innerHTML +=num+"x"+i+"="+n +"<br/>";
    }
}