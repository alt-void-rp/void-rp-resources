

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


function showErrorBox(message) {
    let block_error = document.getElementById("block-error");
    let message_error = document.getElementById("error-message");
    block_error.style.display = "block";

    message_error.innerHTML = message;
}

/**
 * @param {Object} data - The data received from the server.
 */
alt.on('auth:failAuthUser', (data) => {
    console.log(`Authentication failed: ${data.message}`);
    console.log(`Reason: ${data.reason}`);
    console.log(`Success: ${data.success}`);

    if (data.reason == "password-login-novalid") {
        showErrorBox(data.message);
    }

});
