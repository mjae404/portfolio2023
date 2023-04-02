import React from "react";
import styles from "../../../styles/components/common/lists/MpSummaryItem.module.scss";
import MpSummaryItem from "./items/MpSummaryItem";
function MpSummaryList ({ items }) {
    return (
        <ol className={styles['mp-intro-list']}>
            {
                items.map((item, index) => (
                    <MpSummaryItem
                        key={index}
                        summaryIndex={item.summaryIndex}
                        num={item.num}
                        name={item.name}
                        item={item.item}
                    />
                ))
            }
        </ol>
    );
}

export default MpSummaryList;
