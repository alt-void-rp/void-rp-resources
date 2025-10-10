import { ref } from 'vue';

export const isOtp = ref(false);
export const newPassword = ref(false);

if (window.alt === undefined) {
    window.alt = {
        emit: () => { },
        on: () => { },
    };
}


/**`
 *
 * @param {int} amount
 * @param {*} currency
 * @param {*} thousandSeparator
 * @returns
 */
export function formatMoney(amount, currency = '', thousandSeparator = ' ')  {
    if (typeof amount !== 'number') {
        return `0${currency ? ` ${currency}` : ''}`;
    }

    // Округляем до ближайшего целого (можно использовать Math.floor, Math.ceil — по желанию)
    const integerPart = Math.round(amount);

    // Форматируем с разделителем тысяч
    const formatted = integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);

    // Добавляем валюту, если указана
    return currency ? `${formatted} ${currency}` : formatted;
}

function validatePassword(new_password, repeat_new_password) {
    const errors = [];

    // Проверка на пустоту
    if (!new_password) {
        errors.push("Пароль не может быть пустым.");
    }

    // Проверка совпадения паролей
    if (new_password !== repeat_new_password) {
        errors.push("Пароли не совпадают.");
    }

    // Минимальная длина (например, 8 символов)
    if (new_password.length < 8) {
        errors.push("Пароль должен содержать не менее 8 символов.");
    }

    // Проверка на наличие хотя бы одной заглавной буквы
    if (!/[A-ZА-ЯЁ]/.test(new_password)) {
        errors.push("Пароль должен содержать хотя бы одну заглавную букву.");
    }

    // Проверка на наличие хотя бы одной строчной буквы
    if (!/[a-zа-яё]/.test(new_password)) {
        errors.push("Пароль должен содержать хотя бы одну строчную букву.");
    }

    // Проверка на наличие хотя бы одной цифры
    if (!/\d/.test(new_password)) {
        errors.push("Пароль должен содержать хотя бы одну цифру.");
    }

    // Проверка на наличие хотя бы одного специального символа
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(new_password)) {
        errors.push("Пароль должен содержать хотя бы один специальный символ (!@#$%^&* и т.д.).");
    }

    // Возвращаем результат
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

function showErrorBox(message, id_block_error, id_error_message) {
    let block_error = document.getElementById(id_block_error);
    let message_error = document.getElementById(id_error_message);
    block_error.style.display = "block";

    message_error.innerHTML = message;
}

function showSuccessBox(message, id_block_success, id_success_message) {
    let block_success = document.getElementById(id_block_success);
    let message_success = document.getElementById(id_success_message);
    block_success.style.display = "block";

    message_success.innerHTML = message;
}



function successAuthUser(data) {
    window.location.href += "/profiles/";
    console.log(data);
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
    window.alt.emit("auth:loginUser", jsonData);
}


export function onClickResetPasswordButton() {
    const email = document.getElementById('email_field').value.trim();
    const data = {
        email: email
    };

    const jsonData = JSON.stringify(data);
    window.alt.emit("auth:resetPasswordUser", jsonData);
}

export function switchOtpForm() {
    isOtp.value = !isOtp.value;
}

export function submitOtpForm() {
    const data = {
        otp_code: Array.from(document.querySelectorAll('.otp-input')).map(element => element.value.trim()).join('')
    };

    const jsonData = JSON.stringify(data);
    window.alt.emit("auth:otpValidate", jsonData);
}

export function switchNewPasswordForm() {
    newPassword.value = !newPassword.value;
}

export function setNewPassword() {
    const new_password = document.getElementById('new_password_field').value.trim();
    const repeat_new_password = document.getElementById('repeat_new_password_field').value.trim();

    const validation = validatePassword(new_password, repeat_new_password);

    if (validation.isValid) {


        // отправить запрос
        switchNewPasswordForm();
        switchOtpForm();
        setTimeout(() => {
            showSuccessBox("Вы успешно поменяли пароль!", "reset-pass-block-success", "reset-pass-success-message");
        }, 1000);

    } else {
        validation.errors.forEach(error => showErrorBox(error, 'new-password-block-error', 'new-password-error-message'));
    }

}

//auth

window.alt.on('auth:successAuthUser', (data) => {
    successAuthUser(data);
})


window.alt.on('auth:failAuthUser', () => {
    showErrorBox('Неверный логин или пароль!', 'block-error', 'error-message');
})

// reset password
window.alt.on('auth:failResetPasswordUser', (data) => {
    if (data.reason == "password-reset-email-no-found") {
        showErrorBox(data.message, 'reset-pass-block-error', 'reset-pass-error-message');
    }
});


window.alt.on('auth:successResetPasswordUser', (data) => {
    if (!data.success) {
        return;
    }

    isOtp.value = true;
});

// otp

window.alt.on('auth:novalidOtpUser', (data) => {
    if (data.reason == "otp-code-novalid") {
        showErrorBox(data.message, 'otp-block-error', 'otp-error-message');
    }
});

window.alt.on('auth:successOtpUser', (data) => {
    if (!data.success) {
        return;
    }

    newPassword.value = true;
});


