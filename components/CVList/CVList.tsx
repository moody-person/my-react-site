import React, { FC } from 'react';
import {
    Education,
    isEducationList,
    isJobList,
    Job,
} from '../../data/cv';
import { EducationComponent } from '../Education/Education';
import { JobComponent } from '../Job/Job';

import style from './CVList.module.css';

type CVListProps = {
    cvList: Job[] | Education[];
};

export const CVList: FC<CVListProps> = ({ cvList }) => {
    if (isJobList(cvList)) {
        return (
            <ul className={style.CVList}>
                {cvList.map((job, i) => (
                    <JobComponent key={`${job.company}${i}`} job={job} />
                ))}
            </ul>
        );
    }
    if (isEducationList(cvList)) {
        return (
            <ul className={style.CVList}>
                {cvList.map((education, i) => (
                    <EducationComponent
                        key={`${education.universityLang}${i}`}
                        education={education}
                    />
                ))}
            </ul>
        );
    }
    return null;
};
