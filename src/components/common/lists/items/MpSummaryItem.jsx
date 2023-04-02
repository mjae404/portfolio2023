import React from "react";
import styles from "../../../../styles/components/common/lists/MpSummaryItem.module.scss";

function MpSummaryItem({summaryIndex, num, name, item}) {

    return (
        <li className={styles['mp-intro-item']} key={summaryIndex}>
            <span className={styles['mp-intro-number']}>{num}</span>
            <strong className={styles['mp-intro-title']}>{name}</strong>
            <ul className={styles['mp-intro-sub-list']}>
                {item.map((item, index) => (
                    <li className={styles['mp-intro-sub-item']} key={index}>{item}</li>
                ))}
            </ul>
        </li>
    );
}

export default MpSummaryItem;