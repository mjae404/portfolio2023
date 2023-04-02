import React from "react";
import styles from "../../../styles/components/common/lists/MpWorkItem.module.scss";
import MpWorkItem from "./items/MpWorkItem";

function MpWorkList ({ items }) {
    return (
        <ul className={styles['mp-gallery-list']}>
            {
                items.map((item, index) => (
                    <MpWorkItem
                        key={index}
                        workName={item.workName}
                        workClass={item.workClass}
                        workDate={item.workDate}
                        url={item.url}
                        target={item.target}
                        contents={item.contents}
                    />
                ))
            }
        </ul>
    );
}

export default MpWorkList;
