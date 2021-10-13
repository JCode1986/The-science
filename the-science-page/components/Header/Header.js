import React from 'react'
import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <ul className={styles.contents}>
                    <div className={styles.helioLogo}>
                        <Image
                            src="/../public/helio-health.png"
                            width={159}
                            height={60}
                        />
                    </div>
                        <li className={styles.list}>
                            The Helio Liver Test
                        </li> 
                        <li className={styles.list}>
                            Clinical Evidence
                        </li> 
                        <li className={styles.list}>
                            Resources
                        </li> 
                    <div>
                        <button className={styles.button} id={styles.orderNowButton}>
                            <p className={styles.buttonText} id={styles.orderNowButtonText}>
                                Order Now
                            </p>
                        </button> 
                        <button className={styles.button} id={styles.logInButton}>
                            <p className={styles.buttonText} id={styles.logInButtonText}>
                                Log In
                            </p>
                        </button> 
                    </div>
                </ul>
            </header>
        </div>
    )
}
