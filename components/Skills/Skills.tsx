import React, { FC } from 'react';
import { Skill } from '../../data/cv';
import { SkillComponent } from '../Skill/Skill';

import style from './Skills.module.css';

type SkillsProps = {
    skills: Skill[];
};

export const Skills: FC<SkillsProps> = ({ skills }) => {
    return (
        <ul className={style.Skills}>
            {skills.map((skill) => (
                <SkillComponent key={skill.sectionLang} skill={skill} />
            ))}
        </ul>
    );
};
