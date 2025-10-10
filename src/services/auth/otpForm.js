export function otpValidate(ele) {
    console.log(ele.value);
    ele.value = ele.value.replace(/[^0-9]/g, "");
    if (ele.value == "") return;
    let d_value = ele.value.toString();
    if (d_value.length == 1) {
        document.getElementById("d2").focus();
    } else {
        let d_input = document.querySelectorAll(".t-otp input");
        for (let i = 0; i < d_value.length; i++) {
            d_input[i].value = d_value.substring(i, i + 1);
        }
        d_input[d_value.length - 1].focus();
    }
};


export function digitValidate(ele) {
    ele.value = ele.value.replace(/[^0-9]/g, "");
    let d_value = ele.value.toString();
    if (d_value.length > 1) {
        ele.value = d_value.substring(0, 1);
    }
};
export function tabChange(val) {
    let ele = document.querySelectorAll(".t-otp > .otp-input");
    if (ele[val - 1].value != "") {
        if (val != 6) ele[val].focus();
    } else if (ele[val - 1].value == "") {
        var key = event.keyCode || event.charCode;
        if (key == 8) {
            //backspace pressed
            ele[val - 2].focus();
        }
    }
};
