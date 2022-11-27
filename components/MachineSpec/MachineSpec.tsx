import React, { FC } from 'react';
import { MyMachine } from '../../data/about';
import { i18n } from '../../i18n/i18n';

import style from './MachineSpec.module.css';

type MachineSpecProps = {
    machine: MyMachine;
};

export const MachineSpec: FC<MachineSpecProps> = ({ machine }) => {
    return (
        <div>
            <h4>Мой ноут</h4>
            <p className={style.MachineSpecName}>{machine.name}</p>
            <div className={style.MachineSpecInfo}>
                <p className={style.MachineSpecTitle}>{i18n.t('about.spec')}:</p>
                <ul className={style.MachineSpecList}>
                    {Object.entries(
                        machine.spec(i18n.t('about.herz'), i18n.t('about.gb'))
                    ).map(([key, value]) => (
                        <li key={key}>
                            <span className={style.MachineSpecKey}>{key}: </span>
                            <span>{value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
