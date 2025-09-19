import { ref } from 'vue';

export const isOtp = ref(false);

if (window.alt === undefined) {
    window.alt = {
        emit: () => { },
        on: () => { },
    };
}

function showErrorBox(message, id_block_error, id_error_message) {
    let block_error = document.getElementById(id_block_error);
    let message_error = document.getElementById(id_error_message);
    block_error.style.display = "block";

    message_error.innerHTML = message;
}

function hideErrorBox(id_block_error) {
    let block_error = document.getElementById(id_block_error);
    block_error.style.display = "none";
}

//


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


export function onClickResetPasswordButton() {
    const email = document.getElementById('email_field').value.trim();
    const data = {
        email: email
    };

    const jsonData = JSON.stringify(data);
    alt.emit("auth:resetPasswordUser", jsonData);
}

export function switchOtpForm() {
    isOtp.value = !isOtp.value;
}

alt.on('auth:failAuthUser', (data) => {
    if (data.reason == "password-login-novalid") {
        showErrorBox(data.message, 'block-error', 'error-message');
    }
});



alt.on('auth:failResetPasswordUserUser', (data) => {
    if (data.reason == "password-reset-email-no-found") {
        showErrorBox(data.message, 'reset-pass-block-error', 'reset-pass-error-message');
    }
});


alt.on('auth:successResetPasswordUserUser', (data) => {
    if (!data.success) {
        return;
    }

    isOtp.value = true;
});



