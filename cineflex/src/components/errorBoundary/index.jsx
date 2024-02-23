import React from 'react';
import styles from '../numberLottery/numberLottery.module.scss';
import { CONSTANTS } from '../../constants/constants';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    //State gets erro on occurence of error
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    //wraps the passed component and returns, on error fallback is been used
    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.container}>
                    <div className={styles.winnerMessage}>
                        {CONSTANTS.NUMBER_LOTTERY.LOSE_PRIZE}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
export default ErrorBoundary;
