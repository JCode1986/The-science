import React from 'react'
import Image from 'next/image';
import styles from './statistics.module.css';

export default function Statistics() {
    return (
        <div className={styles.parentContainer}>
            <div className={styles.statisticsText}>
                <h1 className={styles.statisticsHeader}>Elevating the Standard of <br/>Care</h1>
                <div className={styles.statisticsDescription}>
                        <p>
                            The HelioLiver test delivers superior performance <br/>
                            characteristics when compared to traditional blood tests <br/>
                            for hepatocellular carcinoma.
                        </p>
                        <p>
                            Our recent data indicates Helio's HCC-specific test has a <br/>
                            higher sensitivity (77.8%, 95%, CI: 76.1-79.5%) at 95% <br/>
                            specificity for stage-1 HCC than the AFP (44.6%, 95% CI:<br/>
                            38-50.7%) 
                        </p>
                </div>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.gridElements}>
                    <div className={styles.helioLogo}>
                        <Image
                            src="/../public/helio-health.png"
                            width={159}
                            height={60}
                        />
                    </div>
                    <h3 className={styles.ultrasound}>Standard of Care: <br/> Ultrasound</h3>
                    <div className={styles.circle}>
                        <span className={styles.circleTextContainer}>
                            <p className={styles.circleText}>60%</p>
                            <p className={styles.sensitivity}>Sensitivity for <br/>
                            Small Lesions <br/>
                            {"<2cm"}
                            </p>
                        </span>   
                    </div>
                    <div className={styles.circle}>
                        <span className={styles.circleTextContainer}>
                            <p className={styles.circleText}>20%</p>
                            <p>Sensitivity for<br/>
                                Small Lesions <br/>
                                {"<2cm"}
                            </p>
                        </span>   
                    </div>
                    <div className={styles.circle}>
                        <span className={styles.circleTextContainer}>
                            <p className={styles.circleText}>85%</p>
                            <p>Sensitivity for All<br/> Cancers
                            </p>
                        </span>   
                    </div>
                    <div className={styles.circle}>
                        <span className={styles.circleTextContainer}>
                            <p className={styles.circleText}>47%</p>
                            <p>Sensitivity for All<br/>
                            Cancers <br/>
                            </p>
                        </span>   
                    </div>
                </div>
            </div>
        </div>
    )
}
