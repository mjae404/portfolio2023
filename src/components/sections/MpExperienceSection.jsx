import React, {useRef} from "react";
import MpExperienceItemData from "../../assets/data/MpExperienceItemData.js";
import MpExperienceList from "../common/lists/MpExperienceList";
import MpCheckImageWebp from "../../hooks/MpCheckImageWebp";
import MpAddClassScroll from "../../hooks/MpAddClassScroll";

function MpExperienceSection() {
    const isWebPSupport = MpCheckImageWebp();
    const targetRef = useRef(null);
    const isTitle = MpAddClassScroll(targetRef,  100);
    const isImage = MpAddClassScroll(targetRef,  500);

    return (
        <>
            <section id="experience" className="section mp-experience-area area" ref={targetRef}>
                <h2 className={`section-title ${isTitle ? 'animate' : ''}`}>Experience</h2>
                <div className="mp-section-wrap">
                    <div className="mp-content-area">
                        <MpExperienceList items={MpExperienceItemData} />
                    </div>
                    <div className="mp-image-area">
                        <div className={`mp-image ${isImage ? 'animate' : ''} ${isWebPSupport ? 'support-webp' : ''}`}></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MpExperienceSection;