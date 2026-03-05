
function copyCode(){
const code = document.getElementById("code").innerText;
navigator.clipboard.writeText(code);
alert("추천 코드가 복사되었습니다: " + code);
}
