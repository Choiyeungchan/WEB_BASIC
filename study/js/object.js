const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

button.onclick = () => {
    console.log(inputs[0].value);
    console.log(inputs[1]);
    console.log(inputs[2]);
    console.log(inputs[3]);
    console.log(inputs[4]);
}



button.onclick = () => {
    let validStatus = [false,false,false,false,false];

    if(validStatus.includes(false)){
        for(let i=0; i<validStatus.length; i++ ){
            if(!validStatus[i]){
                alert(inputs[i].placeholder + "이 입력되지 않았습니다.");
                break;
            }else{
                alert("검사완료");
            }
        }
    }
/*
    function inputIsEmpty(str) {
        return str == null || str == "" || str ==undefined;
    }
    */
}