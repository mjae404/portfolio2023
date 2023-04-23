import React, { useState } from "react";
import styles from "../../../../styles/components/common/lists/MpWorkItem.module.scss";
import MpPopup from "../../MpPopup";
import MpCheckImageWebp from "../../../../hooks/MpCheckImageWebp";

function MpWorkItem( {workName, workClass, workDate, url, target, contents, index} ) {
    const [ showPopup, setShowPopup ] = useState(false);
    const isWebPSupport = MpCheckImageWebp();

    const handlePopup = () => {
        setShowPopup(true);
    };

    const handleClickClose = () => {
        setShowPopup(!showPopup);
    }

    return (
        <li className={styles['mp-gallery-item']} key={index}>
            <button className={`${styles['mp-gallery-link']} ${isWebPSupport ? styles['support-webp'] : ''} ${styles[workClass]}`} aria-haspopup="dialog"
                    aria-controls={workClass} onClick={handlePopup}>
                    <span className={styles['mp-gallery-text-wrap']}>
                        <strong className={styles['mp-gallery-text']}>{workName}</strong>
                        <span className={styles['mp-gallery-date']}>{workDate}</span>
                    </span>
            </button>
            <MpPopup
                workName={workName}
                workClass={workClass}
                workDate={workDate}
                url={url}
                target={target}
                contents={contents}
                showPopup = { showPopup ? "on" : "" }
                onClose={() => handleClickClose(false)}
            />
        </li>
    );
}

export default MpWorkItem;