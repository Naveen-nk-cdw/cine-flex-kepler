import React, { useEffect, useState } from 'react';
import styles from './numberLottery.module.scss';
import { CONSTANTS } from '../../constants/constants';
import Button from '../button';
const NumberLottery = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [lotteryWinner, setLotteryWinner] = useState(null);
    //handles input change
    const handleNumberInput = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length > 10) {
            event.preventDefault();
            return;
        }
        setPhoneNumber(event.target.value);
    };

    if (lotteryWinner === 'loser') {
        throw new Error('oops');
    }
    //handles the error state for the input state
    useEffect(() => {
        setPhoneNumberError(
            phoneNumber?.length !== 0 &&
                !CONSTANTS.NUMBER_LOTTERY.PHONE_NUMBER_REGEX.test(phoneNumber),
        );
    }, [phoneNumber]);
    const checkPrizeWinner = () => {
        if (parseInt(phoneNumber) % 2 === 0) {
            setLotteryWinner('winner');
        } else {
            setLotteryWinner('loser');
        }
    };
    return (
        <div className={styles.container}>
            {lotteryWinner ? (
                <div className={styles.winnerMessage}>{CONSTANTS.NUMBER_LOTTERY.WIN_PRIZE}</div>
            ) : (
                <>
                    <div className={styles.participateMessage}>
                        {CONSTANTS.NUMBER_LOTTERY.PARTICIPATE_PRIZE}
                    </div>
                    <input
                        className={`${styles.phoneNumberInput} ${phoneNumberError && styles.error}`}
                        type='tel'
                        min={0}
                        value={phoneNumber}
                        max={9999999999}
                        placeholder={CONSTANTS.NUMBER_LOTTERY.INPUT_PLACEHOLDER}
                        onChange={handleNumberInput}
                    />
                    <Button
                        label={CONSTANTS.NUMBER_LOTTERY.SUBMIT_BUTTON_LABEL}
                        onClick={checkPrizeWinner}
                        type={'prize'}
                        disabled={phoneNumberError}
                    />
                </>
            )}
        </div>
    );
};

export default NumberLottery;
