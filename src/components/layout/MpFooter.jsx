import React from "react";
import styles from "../../styles/components/layout/MpFooter.module.scss";
import MpFooterIconItem from "../../assets/data/MpFooterIconItem";

function MpFooter() {
    function getCurrentYear() {
        return new Date().getFullYear();
    }

    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-inner"]}>
                <ul className={styles["footer-contact-list"]}>
                    {
                        MpFooterIconItem.map(({link, name, className}, index) => {
                            return (
                                <li className={styles["footer-contact-item"]} key={index}>
                                    <a href={link} target="_blank" rel="noreferrer"
                                       className={`${styles["footer-contact-link"]} ${styles[className]}`}>
                                        <span className="blind">{name}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <small className={styles["footer-copyright"]}>© Copyright 2021 - {getCurrentYear()} Mjae.</small>
            </div>
        </footer>
    );
}

export default MpFooter;