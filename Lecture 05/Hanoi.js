var btn = document.getElementById("reBtn");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");

var firstBox = document.getElementById("redBox");
var secondBox = document.getElementById("greenBox");
var thirdBox = document.getElementById("blueBox");

var firstArr = [];
var secondArr = [];
var thirdArr = [];

var selectArr;

function Init()
{
    firstArr.length = 0;
    secondArr.length = 0;
    thirdArr.length = 0;
    
    firstArr.push(document.createTextNode("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥"));
    firstArr.push(document.createTextNode("🟨🟨🟨🟨🟨🟨🟨🟨🟨"));
    firstArr.push(document.createTextNode("🟩🟩🟩🟩🟩🟩🟩"));
    firstArr.push(document.createTextNode("🟦🟦🟦🟦🟦"));
    firstArr.push(document.createTextNode("🟪🟪🟪"));
    firstArr.push(document.createTextNode("⬛"));

    Draw();
}

function Draw()
{
    while(first.firstChild)
        first.removeChild(first.firstChild);

    while(second.firstChild)
        second.removeChild(second.firstChild);

    while(third.firstChild)
        third.removeChild(third.firstChild);

    for(var i = 0; i < firstArr.length; i++)
    {
        first.appendChild(firstArr[i]);
        first.appendChild(document.createElement('br'));
    }

    for(var i = 0; i < secondArr.length; i++)
    {
        second.appendChild(secondArr[i]);
        second.appendChild(document.createElement('br'));
    }

    for(var i = 0; i < thirdArr.length; i++)
    {
        third.appendChild(thirdArr[i]);
        third.appendChild(document.createElement('br'));
    }
}

function ClickRedBox()
{
 
    if(selectArr != null)
    {
        if(selectArr == firstArr)
        {
            alert("이미 선택되었습니다")
        }
        else
        {
            firstArr.push(selectArr.pop());
            selectArr = null;
            Draw();
        }
    }
    else
    {
        if(firstArr.length > 0)
        {
            selectArr = firstArr;
        }
        else
            alert("비어있습니다")
    }
            
}

function ClickGreenBox()
{
    if(selectArr != null)
    {
        if(selectArr == secondArr)
        {
            alert("이미 선택되었습니다")
        }
        else
        {
            secondArr.push(selectArr.pop());
            selectArr = null;
            Draw();
        }
    }
    else
    {
        if(secondArr.length > 0)
        {
            selectArr = secondArr;
        }
        else
            alert("비어있습니다")
    }
}

function ClickBlueBox()
{
    if(selectArr != null)
    {
        if(selectArr == thirdArr)
        {
            alert("이미 선택되었습니다")
        }
        else
        {
            thirdArr.push(selectArr.pop());
            selectArr = null;
            Draw();
        }
    }
    else
    {
        if(thirdArr.length > 0)
        {
            selectArr = thirdArr;
        }
        else
            alert("비어있습니다")
    }
}