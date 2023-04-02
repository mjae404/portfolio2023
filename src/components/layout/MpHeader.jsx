import React, { useState } from "react";
import styles from "../../styles/components/layout/MpHeader.module.scss";
import MpHeaderNavItem from "../../assets/data/MpHeaderNavItem.js";

function MpHeader() {
    const [ headerMenu, setHeaderMenu ] = useState(false);

    const handleShowMobileMenu = () => {
        setHeaderMenu(true);
        document.body.style.overflow = 'hidden';
    };

    const handleHideMobileMenu = () => {
        setHeaderMenu(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <header className={styles["header"]}>
                <div className={styles["header-logo-area"]}>
                    <a href="/" className={`${styles["header-logo-link"]}`}>Mjae</a>
                </div>
                <nav className={`${styles["header-nav-area"]} ${headerMenu ? styles["on"] : ""}`} id="headerNav">
                    <button type="button" id="navButton" className={styles["header-nav-button"]} onClick={handleShowMobileMenu}>
                        <span className="blind">메뉴 열기 버튼</span>
                    </button>
                    <div id="dimmed" className={styles["dimmed"]}></div>
                    <ul className={styles["header-nav-list"]}>
                        {
                            MpHeaderNavItem.map((navItem, index) => {
                                return (
                                    <li className={styles["header-nav-item"]} key={index}>
                                        <a href={navItem.link} className={styles["header-nav-link"]}>
                                            <span className={styles["header-nav-num"]}>{navItem.num}</span>
                                            <span className={styles["header-nav-text"]}>{navItem.name}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button type="button" id="closeButton" className={styles["header-nav-close-button"]} onClick={handleHideMobileMenu}>
                        <span className="blind">메뉴 닫기 버튼</span>
                    </button>
                </nav>
            </header>
        </>
    );
}

export default MpHeader;