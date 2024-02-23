import React from 'react';
import styles from './loginPage.module.scss';
import LoginForm from '../../components/loginForm';
const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <LoginForm />
        </div>
    );
};

export default Login;
