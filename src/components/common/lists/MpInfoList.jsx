import React from "react";
import styles from "../../../styles/components/common/lists/MpInfoItem.module.scss";
import MpInfoItem from "./items/MpInfoItem";

function MpInfoList ({ items }) {
    return (
        <dl className={styles['mp-detail-list']}>
            {
                items.map((item, index) => (
                    <MpInfoItem key={index} date={item.date} title={item.title} details={item.details} />
                ))
            }
        </dl>
    );
}

export default MpInfoList;
