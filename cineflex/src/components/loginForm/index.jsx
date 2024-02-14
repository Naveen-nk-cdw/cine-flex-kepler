import React, { useContext, useState } from 'react';
import styles from './loginForm.module.scss';
import { CONSTANTS } from '../../constants/constants';
import Button from '../button';
import { AppContext } from '../../App';
const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        emailActive: false,
        password: '',
        passwordActive: false
      });
      const { currentUserDetails, setCurrentUserDetails } = useContext(AppContext);
      
      const handleSubmit = (event) => {
        event.preventDefault();
        setCurrentUserDetails({
            userName:formData.email,
            isLoggedIn:true
        })
      };
    
      const focusHandler = (event) =>{
        const { name } = event.target;
        setFormData({
            ...formData,
            [`${name}Active`]: true
        })
      }

      const blurHandler = (event) =>{
        const { name, value } = event.target;
        if(value.length<=0){
            setFormData({
                ...formData,
                [`${name}Active`]: false
            })
        }
      }


      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    return (
        <div className={styles.loginFormContainer}>
            <div className={styles.heading}>
                {CONSTANTS.LOGIN_FORM.LOGIN_HEADING}
            </div>
            <div className={styles.description}>
                {CONSTANTS.LOGIN_FORM.LOGIN_DESCRIPTION}
            </div>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <div className={styles.emailContainer}>
                    <label className={formData.emailActive ? styles.active : ''}>
                        {CONSTANTS.LOGIN_FORM.EMAIL_LABEL}
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onFocus={focusHandler}
                        onBlur={blurHandler}
                        onChange={handleInputChange}
                        required
                    />
                </div>
               
                <div className={styles.passwordContainer}>
                    <label className={formData.passwordActive ? styles.active : ''}>
                        {CONSTANTS.LOGIN_FORM.PASSWORD_LABEL}
                    </label>
                    <input
                        type="password"
                        name="password"
                        onFocus={focusHandler}
                        value={formData.password}
                        onChange={handleInputChange}
                        onBlur={blurHandler}
                        required
                    /> 
                </div>
                <Button label={CONSTANTS.LOGIN_FORM.SUBMIT_LABEL} onClick={handleSubmit} type={'loginForm'}/>
            </form>
        </div>
    )
}

export default LoginForm