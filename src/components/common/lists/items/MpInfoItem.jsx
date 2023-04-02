import React from "react";
import styles from "../../../../styles/components/common/lists/MpInfoItem.module.scss";

function MpInfoItem ({ date, title, details }) {
    return (
        <div className={styles['mp-detail-item']}>
            <dt className={styles['mp-detail-title']}>{date}</dt>
            <dd className={styles['mp-detail-content']}>
                <span className={styles['mp-detail-content-title']}>{title}</span>
                <span className={styles['mp-detail-content-text']}>{details}</span>
            </dd>
        </div>
    );
}

export default MpInfoItem;
