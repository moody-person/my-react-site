import React, { FC } from 'react';
import { Education } from '../../data/cv';
import { i18n } from '../../i18n/i18n';

import style from './Job.module.css';

type EducationProps = {
    education: Education;
};

// TODO
export const EducationComponent: FC<EducationProps> = ({ education }) => {
    return (
        <li>
            <h3>{i18n.t(education.universityLang)}</h3>
            <div>
                {i18n.t(education.programLang)}
            </div>
        </li>
    );
};
