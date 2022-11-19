import React, { FC } from 'react';
import { Job } from '../../data/cv';
import { i18n } from '../../i18n/i18n';

import style from './Job.module.css';

type JobProps = {
    job: Job;
};

export const JobComponent: FC<JobProps> = ({ job }) => {
    return (
        <li>
            <h3>{i18n.t(job.company)}</h3>
            <div>
                {job.description?.map((descriptionItem, i) => (
                    <p key={i}>{i18n.t(descriptionItem.textLang)}</p>
                ))}
            </div>
        </li>
    );
};
