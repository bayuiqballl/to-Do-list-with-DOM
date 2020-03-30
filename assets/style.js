function newList() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);


    document.getElementById("list").appendChild(li);
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");

    span.appendChild(txt);
    li.appendChild(span);


}