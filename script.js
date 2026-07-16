const inputValue = document.getElementsByTagName("input")[0];
const kgSpan = document.getElementById("kg");

inputValue.addEventListener("keydown" , function(e){
    kgSpan.innerHTML = (+(inputValue.value) / 2.2 ).toFixed(2);
});
