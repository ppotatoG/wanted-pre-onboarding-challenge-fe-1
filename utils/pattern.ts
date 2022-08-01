export const EmailPattern : RegExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i);
export const PasswordPattern : RegExp = new RegExp(/[A-Za-z\d]{8,}$/);

export default { EmailPattern, PasswordPattern };