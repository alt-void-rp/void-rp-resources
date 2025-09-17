

if (window.alt === undefined) {
    window.alt = {
        emit: () => { },
        on: () => { },
    };
}


export function onClickLoginButton() {
    const login = document.getElementById('login_field').value.trim();
    const password = document.getElementById('password_field').value.trim();

    const data = {
        username: login,
        password: password
    };

    const jsonData = JSON.stringify(data);
    alt.emit("auth:loginUser", jsonData);
}
