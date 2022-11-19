import React, { FC } from 'react';
import { Skill } from '../../data/cv';
import { i18n } from '../../i18n/i18n';

import style from './Skill.module.css';

type SkillProps = {
    skill: Skill;
    tag?: keyof JSX.IntrinsicElements;
};

export const SkillComponent: FC<SkillProps> = ({ skill, tag }) => {
    const CustomTag = tag ?? 'li';
    return (
        <CustomTag key={skill.sectionLang}>
            <h3>{i18n.t(skill.sectionLang)}</h3>
            <ul>
                {skill.tech?.map((techItem) => (
                    <li
                        className={`${style.Tech} ${techItem.classList}`}
                        key={techItem.name}
                    >
                        {techItem.name}
                    </li>
                ))}
            </ul>
        </CustomTag>
    );
};