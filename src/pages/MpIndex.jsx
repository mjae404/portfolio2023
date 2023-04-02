import React from "react";

import MpVisualSection from "../components/sections/MpVisualSection";
import MpIntroSection from "../components/sections/MpIntroSection";
import MpAboutSection from "../components/sections/MpAboutSection";
import MpExperienceSection from "../components/sections/MpExperienceSection";
import MpWorkSection from "../components/sections/MpWorkSection";

function MpIndex() {

    return (
        <>
            <MpVisualSection />
            <MpIntroSection />
            <MpAboutSection />
            <MpExperienceSection />
            <MpWorkSection />
        </>
    );
}

export default MpIndex;