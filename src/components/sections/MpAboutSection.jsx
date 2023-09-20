import React, {useRef} from "react";
import MpInfoList from "../common/lists/MpInfoList";
import MpCheckImageWebp from "../../hooks/MpCheckImageWebp";
import MpAddClassScroll from "../../hooks/MpAddClassScroll";
import { MpLicenseItems, MpEducationItems, MpVolunteerActivities } from "../../assets/data/MpInfoItem.js";
import styles from "../../styles/components/sections/MpAboutSection.module.scss";

function MpAboutSection() {
    const isWebPSupport = MpCheckImageWebp();
    const targetRef = useRef(null);
    const isTitle = MpAddClassScroll(targetRef,  100);
    const isImage = MpAddClassScroll(targetRef,  500);

    return (
        <>
            <section id="about" className="section mp-about-area" ref={targetRef}>
                <h2 className={`section-title ${isTitle ? 'animate' : ''}`}>About</h2>
                <div className="mp-section-wrap">
                    <div className="mp-image-area">
                        <div className={`mp-image ${isImage ? 'animate' : ''} ${isWebPSupport ? 'support-webp' : ''}`}></div>
                    </div>
                    <div className="mp-content-area">
                        <ul className={styles['mp-about-list']}>
                            <li className={styles['mp-about-item']}><strong>김민지</strong></li>
                            <li className={styles['mp-about-item']}>1992. 04. 15</li>
                            <li className={styles['mp-about-item']}>마크업 개발자</li>
                        </ul>
                        <p className={styles['mp-about-text']}>
                            <strong>"화려한 꽃보다 튼튼한 줄기가 되자."</strong> 이것이 오래도록 지켜가야 한다고 생각했던 저의 신조입니다. 외적인 아름다움도 중요하지만, 내적인
                            튼튼함이 없다면 무의미하다고 생각합니다. 웹표준, 웹접근성에 관심이 있으며 현재에도 지속적으로 학습을 병행하면서 앞으로 나아가는 중입니다. <a
                            href="https://mjae404.github.io/" target="-blank" rel="noreferrer">깃허브 블로그</a>를 운영하며 공부한 것은 꾸준히 업로드하고 있습니다.
                        </p>
                        <p className={styles['mp-about-skills']}>
                            <strong className={styles['point']}>skills</strong> HTML, CSS, SCSS, media query, React, storybook, git, gulp, photoshop, illustrator
                        </p>
                        <MpInfoList items={MpLicenseItems} />
                        <MpInfoList items={MpEducationItems} />
                        <MpInfoList items={MpVolunteerActivities} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default MpAboutSection;