import React, {useRef} from "react";
import MpWorkList from "../common/lists/MpWorkList";
import MpWorkItemData from "../../assets/data/MpWorkItemData";
import MpAddClassScroll from "../../hooks/MpAddClassScroll";

function MpWorkSection() {
    const targetRef = useRef(null);
    const isTitle = MpAddClassScroll(targetRef,  100);

    return (
        <>
            <section id="work" className="section mp-work-area area" ref={targetRef}>
                <h2 className={`section-title ${isTitle ? 'animate' : ''}`}>Work</h2>
                <MpWorkList items={MpWorkItemData} />
            </section>
        </>
    );
}

export default MpWorkSection;