var imageArrayC = new Array();
    imageArrayC[0] = "images/CBSA/c-1.jpg";
    imageArrayC[1] = "images/CBSA/c-2.jpg";
    imageArrayC[2] = "images/CBSA/c-3.jpg";
    imageArrayC[3] = "images/CBSA/c-4.jpg";
    imageArrayC[4] = "images/CBSA/c-5.jpg";
    imageArrayC[5] = "images/CBSA/c-6.jpg";
    imageArrayC[6] = "images/CBSA/c-7.jpg";


function doC()
    {
    var rand = Math.floor(Math.random()*7);

    var imgPath = "<img src='"+imageArrayC[rand]+"' alt='heder' border='0' align='absmiddle' />";

    document.getElementById("imageC").innerHTML = imgPath;

    }

var imageArrayA = new Array();
    imageArrayA[0] = "images/CBSA/a-1.jpg";
    imageArrayA[1] = "images/CBSA/a-2.jpg";
    imageArrayA[2] = "images/CBSA/a-3.jpg";
    imageArrayA[3] = "images/CBSA/a-4.jpg";
    imageArrayA[4] = "images/CBSA/a-5.jpg";

function doA()
    {
    var rand = Math.floor(Math.random()*5);

    var imgPath = "<img src='"+imageArrayA[rand]+"' alt='heder' border='0' align='absmiddle' />";

    document.getElementById("imageA").innerHTML = imgPath;

    }

var imageArrayB = new Array();
    imageArrayB[0] = "images/CBSA/b-1.jpg";
    imageArrayB[1] = "images/CBSA/b-2.jpg";
    imageArrayB[2] = "images/CBSA/b-3.jpg";
    imageArrayB[3] = "images/CBSA/b-4.jpg";
    imageArrayB[4] = "images/CBSA/b-5.jpg";
    imageArrayB[5] = "images/CBSA/b-6.jpg";

function doB()
    {
    var rand = Math.floor(Math.random()*6);

    var imgPath = "<img src='"+imageArrayB[rand]+"' alt='heder' border='0' align='absmiddle' />";

    document.getElementById("imageB").innerHTML = imgPath;

    }



var imageArrayS = new Array();
    imageArrayS[0] = "images/CBSA/s-1.jpg";
    imageArrayS[1] = "images/CBSA/s-2.jpg";
    imageArrayS[2] = "images/CBSA/s-3.jpg";
    imageArrayS[3] = "images/CBSA/s-4.jpg";
    imageArrayS[4] = "images/CBSA/s-5.jpg";

function doS()
    {
    var rand = Math.floor(Math.random()*5);

    var imgPath = "<img src='"+imageArrayS[rand]+"' alt='heder' border='0' align='absmiddle' />";

    document.getElementById("imageS").innerHTML = imgPath;

    }

doC();
doB();
doS();
doA();
