import React from 'react'
import Image from 'next/image';
import styles from './evidence.module.css';

export default function Header() {
    return (
        <div className={styles.container}>
            <span className={styles.evidenceContainer}>
               <h1 className={styles.evidenceHeader}>
                   Clinical Evidence
                </h1>
               <p className={styles.evidenceText}> 
                   The HelioLiver test delivers superior performance charactersitics when <br/>
                   compared to traditional testing for HCC
                </p>
            </span>
            <div className={styles.microscope}>
            <Image
                src="/microscope.png"
                alt="microscope"
                width={582.14}
                height={382.09}
            />
            </div>
        </div>
    )
}