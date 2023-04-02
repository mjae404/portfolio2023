import React from "react";
import styles from "../../../styles/components/sections/MpExperienceSection.module.scss";
import MpExperienceItem from "./items/MpExperienceItem";

function MpExperienceList({ items }) {

    return (
        <dl className={styles['mp-detail-list']}>
            {
                items.map((item, index) => (
                    <MpExperienceItem key={index}
                                      startDate={item.startDate}
                                      endDate={item.endDate}
                                      company={item.company}
                                      field={item.field}
                                      team={item.team}
                                      description={item.description}
                                      skills={item.skills}
                    />
                ))
            }
        </dl>
    );
}

export default MpExperienceList;