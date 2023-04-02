import React from "react";
import styles from "../../../../styles/components/sections/MpExperienceSection.module.scss";

function MpExperienceItem( { startDate, endDate, company, field, team, description, skills } ) {
    return (
        <>
            <div className={styles['mp-detail-item']}>
                <dt className={styles['mp-detail-title']}>{startDate} - {endDate}</dt>
                <dd className={styles['mp-detail-content']}>
                    <span className={styles['mp-detail-content-title']}>{company}</span>
                    <span className={styles['mp-detail-content-sub-title']}>{field} @{team}</span>
                    <p className={styles['mp-detail-content-text']}>{description}</p>
                    <div className={styles['mp-detail-content-info']}>
                        <strong>[주요기술/업무툴]</strong>
                        <ul className={styles['mp-detail-info-list']}>
                            {skills.map((item, index) => (
                                <li className={styles['mp-detail-info-item']} key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </dd>
            </div>
        </>
    );
}

export default MpExperienceItem;