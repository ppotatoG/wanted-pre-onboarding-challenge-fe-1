export const EmailPattern : RegExp = new RegExp(/[\w\-\.]+\@[\w\-\.]+/g);
export const PasswordPattern : RegExp = new RegExp(/[A-Za-z\d]{8,}$/);

export default { EmailPattern, PasswordPattern };