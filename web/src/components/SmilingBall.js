import styles from './SmilingBall.module.css'
import eyes from '../assets/ball-face/Vector-1.png'
import mouth from '../assets/ball-face/Vector-2.png'


export function SmilingBall ({additionalStyle} ){
    return (
        <div id={styles.vector}  style={ additionalStyle } >
                <div id={styles.eyesAndMouth}>
                    <img className={styles.eyes} src={eyes} alt="eyes" />
                    <img className={styles.eyes} src={eyes} alt="eyes" />
                    <img className={styles.mouth} src={mouth} alt="mouth" />
            
                </div>
        </div>
    )
}