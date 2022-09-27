const addbutton = document.querySelector("button");

let userList = new Array();

addbutton.onclick = () => {
    adduser();
    loadList();
}



function adduser() {
    const inputs = document.querySelectorAll("input");

    //배열안에 값들을 지정
    let user = {
        name: inputs[0].value,
        address: inputs[1].value,
        phone: inputs[2].value
    }

    userList.push(user);

}

function loadList() {
    const tbody = document.querySelector("tbody");

    tbody.innerHTML = "";

    userList.forEach((user, index) => { // ``를 사용하면 여러줄 입력 가능
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
            </tr>
        `
    });

}