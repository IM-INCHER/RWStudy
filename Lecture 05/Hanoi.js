var btn = document.getElementById("reBtn");
var first = document.getElementById("first");

function Init()
{
    while(first.firstChild)
    {
        first.removeChild(first.firstChild);
    }
  
    first.appendChild(document.createTextNode("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥\n"));
    first.appendChild(document.createElement('br'));
    first.appendChild(document.createTextNode("🟨🟨🟨🟨🟨🟨🟨🟨🟨"));
    first.appendChild(document.createElement('br'));
    first.appendChild(document.createTextNode("🟩🟩🟩🟩🟩🟩🟩"));
    first.appendChild(document.createElement('br'));
    first.appendChild(document.createTextNode("🟦🟦🟦🟦🟦"));
    first.appendChild(document.createElement('br'));
    first.appendChild(document.createTextNode("🟪🟪🟪"));
    first.appendChild(document.createElement('br'));
    first.appendChild(document.createTextNode("⬛"));
}

//btn.onclick = Init()
