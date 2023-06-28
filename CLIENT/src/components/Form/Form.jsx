import React from "react";
import { useState } from "react";
import style from '../Form/Form.component.css';
import Validate from '../Form/Validations.js';

function Form ({login}) {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});



    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        Validate({...userData, [property]: value}, errors, setErrors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
        // const errorsArray = Object.values(errors);
        // if (errorsArray.length === 0) {
        //     alert('Complete')
        //     setUserData({
        //         email: '',
        //         password: '',
        //     })
        //     setErrors({})
        // } else {
        //     alert('You should try again')
        // }
    };


    return (
        <div>
            <div class='wrapper fadeInDown' >
                <div className={style.formContent}>
                    <h2 className="tag">LOG IN</h2>
                    <div class="fadeIn first">
                     <img className='img' src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/YHAUBUYW75FZVLG4Z4WL5S6LMY.jpg" id="icon" alt="User Icon" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input className='fadeIn second' 
                               name='email' 
                               type="text" 
                               placeholder="Write a valid email"
                               value={userData.email}
                               onChange={handleChange}
                               ></input>
                        <br />
                        <span className="span">{errors.email}</span>
                        <br />
                        <label htmlFor="password" className="form-label">Password</label>
                        <input className="fadeIn third" 
                               name="password" 
                               type="text" 
                               placeholder="Here your password"
                               value={userData.password}
                               onChange={handleChange}
                               ></input>
                        <br />
                        <span className="span">{errors.password}</span>
                        <br />
                        <button className="fadeIn fourth" 
                                type="submit"
                                >SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Form;