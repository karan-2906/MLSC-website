import mlscLogo from '../assets/mlsclogo.png'
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <>
            <div className={styles.footer_section}>
                <div className={styles.footer_container}>
                    <div className={`flex_center | ${styles.footer_content}`}>
                        <div className={styles.footer_logo}>
                            <img src={mlscLogo} alt="MLSC VCET" />
                        </div>
                        <div className={styles.footer_social}>
                            <div className={`flex_center | ${styles.social_media}`}>
                                <ul className={styles.social_media_content}>
                                    <li className={styles.flex_li}><a href='https://twitter.com/'><h3><span><FontAwesomeIcon icon="fa-solid fa-square-full" /></span>Twitter</h3></a></li>
                                    <li className={styles.flex_li}><a href='https://github.com/Microsoft-Learn-Students-Club'><h3><span><FontAwesomeIcon icon="fa-solid fa-square-full" /></span>Github</h3></a></li>
                                    <li className={styles.flex_li}><a href='https://codingadda.hashnode.dev/'><h3><span><FontAwesomeIcon icon="fa-solid fa-square-full" /></span>Hashnode</h3></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.footer_social}>
                            <div className={`flex_center | ${styles.social_media}`}>
                                <ul className={`${styles.social_media_content}`}>
                                    <li className={styles.flex_li}><a href='https://www.instagram.com/mlsc_vcet/'><h3><span><FontAwesomeIcon icon="fa-solid fa-square-full" /></span>Instagram</h3></a></li>
                                    <li className={styles.flex_li}><a href='https://www.youtube.com/@coding_adda'><h3><span><FontAwesomeIcon icon="fa-solid fa-square-full" /></span>Youtube</h3></a></li>
                                    <li className={styles.flex_li}><a href='https://www.linkedin.com/company/mlsc-vcet/'><h3><span><FontAwesomeIcon icon="fa-solid fa-square-full" /></span>Linkedin</h3></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`flex_center | ${styles.footer_contact}`}>
                            <div className={styles.footer_email}>
                                <p>Email :</p>
                                <p>mlsc@vcet.edu.in</p>
                            </div>
                            <div className={styles.footer_credits}>
                                <p>Handcrafted :</p>
                                <p>Team MLSC with ❤️</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer