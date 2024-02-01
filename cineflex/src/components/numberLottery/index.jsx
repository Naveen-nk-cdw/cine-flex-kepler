import React, { useEffect, useState } from 'react'
import styles from './numberLottery.module.scss'
import { CONSTANTS } from '../../constants/constants'
import Button from '../button'
const NumberLottery = () => {
    const [phoneNumber,setPhoneNumber] = useState('');
    const [phoneNumberError,setPhoneNumberError] = useState(false);
    const [lotteryWinner,setLotteryWinner] = useState(false);
    const handleNumberInput = (event) => {
        setPhoneNumber(event.target.value);
    }
    useEffect(()=>{
        setPhoneNumberError( phoneNumber?.length!==0 && !CONSTANTS.NUMBER_LOTTERY.PHONE_NUMBER_REGEX.test(phoneNumber));
    },[phoneNumber])
    const checkPrizeWinner = () => {
        if(parseInt(phoneNumber)%2===0){
            setLotteryWinner(true)
        } 
        else{
            throw new Error("oops");
        }
    }
  return (
    <div className={styles.container}>
        {lotteryWinner ? 
        <div className={styles.winnerMessage}>
            {CONSTANTS.NUMBER_LOTTERY.WIN_PRIZE}
        </div>
        :
        <>
            <div className={styles.participateMessage}>
                {CONSTANTS.NUMBER_LOTTERY.PARTICIPATE_PRIZE}
            </div>
            <input className={`${styles.phoneNumberInput} ${phoneNumberError&& styles.error}`} type='number' placeholder={CONSTANTS.NUMBER_LOTTERY.INPUT_PLACEHOLDER} onChange={handleNumberInput} />
            <Button label={CONSTANTS.NUMBER_LOTTERY.SUBMIT_BUTTON_LABEL} onClick={checkPrizeWinner} type={'prize'} disabled={phoneNumberError}/>
        </>
        }
    </div>
  )
}

export default NumberLottery