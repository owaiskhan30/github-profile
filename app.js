let userName = document.querySelector("#user_input");
let btn = document.querySelector("#btn");
let userBox = document.querySelector(".container");


function findUser() {

    if(userName.value === "") {
        alert("Enter Your Username First");
    } else {
        fetch(`https://api.github.com/users/${userName.value}`)

        .then((res) => {
            if (!res.ok) {
                throw new Error(`User not found: ${res.status}`);
            }
            return res.json()
        })
        .then((res) => {
            userBox.innerHTML = `
                <div class="userBox">
                    <div class="user_img">
                        <img src='${res.avatar_url}'>
                    </div>
                    <div class="use_Info">
                        <h1>${res.name}</h1>
                        <p>User Name : ${res.login}</p>
                        <p>Total Follower : ${res.followers}</p>
                        <p>Total Repositories : ${res.public_repos}</p>
                        <p>Location : ${res.location}</p>
                        <p>ID : ${res.id}</p>
                    </div>
                </div>
            `
            
        })
        .catch((err) => {
            userBox.innerHTML = `${err.message}`; 
        }) 
        userName.value = "";
    }
}

btn.addEventListener('click', findUser);
