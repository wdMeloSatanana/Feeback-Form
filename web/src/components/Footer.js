import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SmilingBall} from './SmilingBall'
import styles from './Footer.module.css' 

export function Footer(){
    return (
        <footer className={styles.footer} >
            <div className={styles.footerItems} >
                <SmilingBall id={styles.ball1} additionalStyle={{ background: " "}} />
            </div>
            <div className={styles.footerItems}> 
                <div id={styles.socialMediaIcons}>
                    <a href="https://www.linkedin.com/company/zenbit-tech/"><FontAwesomeIcon icon={['fab', 'linkedin'] }/></a>
                    <a href="https://twitter.com/zen_bit"><FontAwesomeIcon icon={['fab', 'twitter'] }/></a>
                    <a href="https://facebook.com/zenBitTech/"><FontAwesomeIcon icon={['fab', 'facebook-f'] }/></a>
                    <a href="https://pinterest.com/zenbit/"><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></a>
                </div>
            </div>   
        </footer>
    )
}