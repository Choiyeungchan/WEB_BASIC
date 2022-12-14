const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

let validStatus = [false, false, false, false, false];

let inputObjects = new Array();

button.onclick = () => {
    inputs.forEach((input, index) => {

        let test = 10;

        let inputObj = {
            value:input.value,
            placeholder: input.placeholder,
            print: () => {
                console.log(inputObj.placeholder + "print 메소드 실행 ");
            },
            "test" : test  //변수명과 객체명을 같이 쓰고 싶을 때는 ""사용.
        };

        inputObjects.push(inputObj);

        validStatus[index] = !inputIsEmpty(input.value);
    });

    console.log(inputObjects);


    if(validStatus.includes(false)){
        for(let i= 0; i <validStatus.length; i++) {
            if(!validStatus[i]){
                alert(inputs[i]. placeholder + "이 입력되지 않았습니다.");
                break;
            }
        }
    }else{
        alert("검사완료.");
    }
  
}

function inputIsEmpty(str) {
    return str == null || str == "" || str == undefined;
}

