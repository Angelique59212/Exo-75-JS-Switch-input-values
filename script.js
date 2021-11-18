
let perm = document.getElementById("switch");

perm.addEventListener("click", function (){
    let result = document.getElementById("input1").value;
    document.getElementById("input1").value = document.getElementById("input2").value;
    document.getElementById("input2").value = result;
})