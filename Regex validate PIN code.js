// 7 kyu
// Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// eg:
// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

function validatePIN(pin) {
    let count = 0;
    let arr = pin.split('')
    if (arr.length === 4 || arr.length === 6) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].codePointAt(0) >= 48 && arr[i].codePointAt(0) <= 57) {
                count++;
            }
        }
    } else {
        count = 0;
    }
    return count === 4 || count === 6 ? true : false;
}