import React from 'react'
import Image from 'next/image';
import styles from './advisors.module.css';

export default function Advisors() {
    return (
        <div>
            <h1 className={styles.title}>
                    Our Scientific Advisors
            </h1>
            <div className={styles.container} >
                <div className={styles.advisorImage}>
                    <Image
                        src="/../public/image1.png"
                        width={170}
                        height={170}
                    />
                    <span className={styles.advisors}>
                        <p className={styles.advisorsName}>Richard Van Etten, MD, PhD </p>
                        <p className={styles.advisorsTitle}>Chief Medical Officer</p>
                    </span>
                </div>
                <div className={styles.advisorImage}>
                    <Image
                        src="/../public/image2.png"
                        width={170}
                        height={170}
                    />
                    <span className={styles.advisors}>
                        <p className={styles.advisorsName}>Richard Van Etten, MD, PhD </p>
                        <p className={styles.advisorsTitle}>Chief Medical Officer</p>
                    </span>
                </div>
                <div className={styles.advisorImage}>
                    <Image
                        src="/../public/image3.png"
                        width={170}
                        height={170}
                    />
                    <span className={styles.advisors}>
                        <p className={styles.advisorsName}>Richard Van Etten, MD, PhD </p>
                        <p className={styles.advisorsTitle}>Chief Medical Officer</p>
                    </span>
                </div>
                <div className={styles.advisorImage}>
                    <Image
                        src="/../public/image4.png"
                        width={170}
                        height={170}
                    />
                        <span className={styles.advisors}>
                        <p className={styles.advisorsName}>Richard Van Etten, MD, PhD </p>
                        <p className={styles.advisorsTitle}>Chief Medical Officer</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
