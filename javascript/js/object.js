/*window객체는 생략 가능 (window.document => document.)*/
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
/*
addEventListener : 클릭 이벤트가 일어났을 때 ()가 일어남 
    true : 버블링을 허용
    flase : 버블링 허용X 
    버블링을 많이 다뤄야 할 때 addEventListener을 사용한다.
    
button.addEventListener("click", () => {
    
}, true);
*/
/*onclic : */



/*
Array 사용해야한다.
검사하기를 눌렀을 때 모든 input에 값이 입력되어 있어야만
검사완료 메세지를 보여준다.

만약 하나라도 입력되어있지 않으면 순서대로 입력되지않았습니다. 메세지 출력

*/

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

