export function isValidNationalID(nationalID) {
    const regex = /^[A-Za-z0-9]{6,14}$/;
    return regex.test(nationalID);
}