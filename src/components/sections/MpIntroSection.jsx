import React from "react";
import styles from "../../styles/components/common/lists/MpSummaryItem.module.scss";
import MpSummaryList from "../common/lists/MpSummaryList";
import MpSummaryItemData from "../../assets/data/MpSummaryItemData.js";

function MpIntroSection() {

    return (
        <>
            <section id="intro" className={styles['mp-intro-area']}>
                <h2 className="blind">Intro</h2>
                <MpSummaryList items={MpSummaryItemData} />
            </section>
        </>
    );
}

export default MpIntroSection;