import styles from './Clock.module.scss';
import { useState, useEffect } from 'react';

export default function Clock() {
    const [date, setDate] = useState(new Date());
  
    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
        clearInterval(timerId);
    };
    }, []);

    const today = new Date();
    return (
        <div className={styles.time}>
            <h1>{date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</h1>
            <h3>
                {
                    `${today.toLocaleDateString
                        ('pt-br', 
                            {weekday:"long", month:"long", day:"numeric"}
                        )
                    } de ${date.getFullYear()}`
                }
            </h3>
        </div>
    )
}