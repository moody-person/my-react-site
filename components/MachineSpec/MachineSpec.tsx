import React, { FC } from 'react'
import { MyMachine } from '../../data/about';
import { i18n } from '../../i18n/i18n';

type MachineSpecProps = {
    machine: MyMachine;
}

export const MachineSpec: FC<MachineSpecProps> = ({ machine }) => {
    return (
        <div>
            <h3>{machine.name}</h3>
            <div>
                <h4>{i18n.t('about.spec')}</h4>
            </div>
        </div>
    )
}
