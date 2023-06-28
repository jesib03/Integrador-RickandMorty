export default function Validate (userData, errors, setErrors) {

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!userData.email) setErrors({...errors, email: 'Email is required'})
    else if (!regexEmail.test(userData.email)) setErrors({...errors, email: 'Email is invalid'})
    else if(userData.email.length > 35) setErrors({...errors, email: 'Email is too long'})
    else setErrors({...errors, email: ''});

    const passwordRegex = /^(?=.*[0-9])/;

    if (!userData.password) setErrors({...errors, password: 'Password is required'})
    else if (!passwordRegex.test(userData.password)) 
    setErrors({...errors, password: 'Password require at least one number'})
    else if (userData.password.length < 6 || userData.password.lenght > 10) 
    setErrors({...errors, password: 'Password should be at least 6 characters long and less than 10 characters long'});
    else setErrors({...errors, password: ''});
}