const userContainer = document.querySelector(".userContainer");

function getUSer(URL) {
    fetch(URL)
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            data.forEach((user) => {
                displayUser(user);
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

getUSer("https://jsonplaceholder.typicode.com/users");

function displayUser(user) {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="user-info">
            <h1>${user.name}</h1>
            <p>${user.username}</p>
        </div>
        <div class="button">
            <button class="delete-btn">Button</button>
        </div>
    `;
    userContainer.appendChild(li);
}
