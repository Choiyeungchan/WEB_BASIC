const inputs = document.querySelectorAll("input");
const addbutton = document.querySelector("button");


let userList = new Array();

addbutton.onclick = () => {
    adduser();
    loadList();
}


function adduser() {

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

    userList.forEach((user, index) => {
        tbody.innerHTML +=`
            <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
            </tr>
        `
    });

}

function inputIsEmpty(str) {
    return str == null || str == "" || str == undefined;
}