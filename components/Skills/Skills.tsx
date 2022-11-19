import React, { FC } from 'react';
import { Skill } from '../../data/cv';
import { i18n } from '../../i18n/i18n';

import style from './Skills.module.css';

type SkillsProps = {
    skills: Skill[];
};

export const Skills: FC<SkillsProps> = ({ skills }) => {
    return (
        <div className={style.Skills}>
            {skills.map((skill) => (
                <li key={skill.sectionLang}>
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
                </li>
            ))}
        </div>
    );
};
