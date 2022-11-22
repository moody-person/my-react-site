import React, { FC } from 'react';
import { Skill } from '../../data/cv';
import { i18n } from '../../i18n/i18n';
import { Chip } from '../Chip/Chip';

import style from './Skill.module.css';

type SkillProps = {
    skill: Skill;
    tag?: keyof JSX.IntrinsicElements;
};

// TODO remove li tag, use div
export const SkillComponent: FC<SkillProps> = ({ skill, tag }) => {
    const CustomTag = tag ?? 'li';
    return (
        <CustomTag className={style.Skill} key={skill.sectionLang}>
            <h3>{i18n.t(skill.sectionLang)}</h3>
            <ul className={style.SkillList}>
                {skill.tech?.map((techItem) => (
                    <li
                        key={techItem.name}
                    >
                        <Chip className={techItem.classList}>
                            {techItem.name}
                        </Chip>
                    </li>
                ))}
            </ul>
        </CustomTag>
    );
};