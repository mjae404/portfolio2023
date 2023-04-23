import React, { useEffect } from "react";
import styles from "../../styles/components/common/MpPopup.module.scss";

function MpPopup({ workName, workClass, workDate, url, target, contents, showPopup, onClose }) {
    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [showPopup]);

    return (
        <section id={workClass} role="dialog" aria-live="polite" aria-labelledby={workClass}
                 aria-modal="true" className={`${styles["mp-modal"]} ${styles[showPopup]}`}>
            <div className={styles["mp-modal-inner"]}>
                <h3 className={styles["mp-modal-title"]}>{workName}</h3>
                <div className={styles["mp-modal-content"]}>
                    <div className={styles["mp-modal-desc-wrap"]}>
                        <div className={styles["mp-modal-desc"]}>
                            <ul className={styles["mp-modal-list"]}>
                                <li className={styles["mp-modal-item"]}>{workDate}</li>
                                <li className={styles["mp-modal-item"]}>퍼블리싱 기여도 {contents.percentage}</li>
                            </ul>
                        </div>
                        {url &&
                            <a href={url} className={styles["mp-modal-link"]} target={target}>visit website</a>
                        }
                    </div>
                    <div className={styles["mp-modal-image-wrap"]}>
                        <p className={styles["mp-modal-text"]}>{contents.description}</p>
                        {contents.images &&
                            contents.images.map((image, index) => (
                                <picture key={index}>
                                    <source srcSet={image.webp} type="image/webp" />
                                    <img src={image.jpg} alt={image.alt} className={styles["mp-modal-image"]} />
                                </picture>
                            ))
                        }
                        {contents.tableCells &&
                            <div className="mp-table-wrap">
                                <table className="mp-table">
                                    <colgroup>
                                        <col style={{ width: "300px" }} />
                                        <col />
                                    </colgroup>
                                    <thead>
                                    <tr>
                                        <th>화면</th>
                                        <th>비고</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        contents.tableCells.map(({name, target, url, etc}, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <a href={url} target={target} className="mp-table-link">{name}</a>
                                                </td>
                                                <td>
                                                    <p className="profolio-table-text">{etc}</p>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>

                        }
                    </div>
                </div>
                <button type="button" className={styles["mp-modal-close"]} onClick={onClose}>
                    <span className="blind">닫기 버튼</span>
                </button>
            </div>
        </section>
    );
}

export default MpPopup;