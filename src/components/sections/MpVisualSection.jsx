import React from "react";
import MpCheckImageWebp from "../../hooks/MpCheckImageWebp";
import "../../styles/MpStyle.scss";
import styles from "../../styles/components/sections/MpVisualSection.module.scss";

function MpVisualSection() {
    const isWebPSupport = MpCheckImageWebp();

    return (
        <>
            <section id="main" className={styles['mp-visual-area']}>
                <div className={`${styles['mp-visual-image']} ${isWebPSupport ? styles['support-webp'] : ''}`}></div>
                <h2 className={styles['mp-visual-title']}>
                    <span className={styles['mp-visual-title-text']}>Mjae</span>
                    <span className={styles['mp-visual-title-text']}>Portfolio</span>
                </h2>
                <div className={styles['scroll-btn']}>
                    <a className={styles['scroll-btn-link']} href="#intro">
                        <span className={styles['mouse']}>
                            <span></span>
                        </span>
                    </a>
                    <p className={styles['scroll-btn-text']}>scroll me</p>
                </div>
            </section>
        </>
    );
}

export default MpVisualSection;