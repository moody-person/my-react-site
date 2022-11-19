import Image from 'next/image';
import React, { FC } from 'react';

import style from './MyImage.module.css';

export type MyImageType = {
    src?: string;
    alt: string;
    width: number;
    height: number;
}

type MyImageProps = MyImageType;

export const MyImage: FC<MyImageProps> = ({ src, alt, width, height }) => {
    if (src) {
        return (
            <div className={style.MyImage}>
                <Image
                    className={style.MyImageElement}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </div>
        );
    }
    return <div className={style.MyImagePlaceholder}></div>
};
