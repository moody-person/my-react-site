import React, { FC } from 'react';
import { RepoStructure } from '../../features/projects';
import { Project } from '../Project/Project';

import style from './ProjectsList.module.css';

type ProjectsListProps = {
    projects: RepoStructure[],
};

export const ProjectsList: FC<ProjectsListProps> = ({ projects }) => {
    return (
        <ul className={style.ProjectsList}>
            {projects.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </ul>
    );
};
