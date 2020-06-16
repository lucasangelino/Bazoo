import md5 from 'md5';

const gravatar = (email) => {
    const base = 'https://gravatar.com/avatar/';
    const formatedEmail = email.trim().toLowerCase();
    const hash = md5(formatdeEmail, {encode: 'binary'});
    console.log(`${base}${hash}`)
    return `${base}${hash}`
}

export default gravatar;