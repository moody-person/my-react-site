import React, { FC } from 'react';
import { RepoStructure } from '../../features/projects';
import { MyImage } from '../MyImage/MyImage';

import style from './Project.module.css';

type ProjectProps = {
    project: RepoStructure;
};

// TODO: do not forget to update copyright year in 2023
export const Project: FC<ProjectProps> = ({ project }: ProjectProps) => {
    return (
        <div className={style.Project}>
            <MyImage
                height={project.image?.height ?? 500}
                width={project.image?.width ?? 500}
                src={project.image?.src ?? ''}
                alt={project.description}
            />
            <div>
                <h3>{project.title}</h3>
                <div>{project.description}</div>
                <div>repo: {project.link}</div>
            </div>
        </div>
    );
};
