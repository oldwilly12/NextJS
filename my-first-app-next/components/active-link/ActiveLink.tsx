'use client'

import Link from 'next/link';
import React from 'react';
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({path, text}: Props) => {

const pathName = usePathname();
console.log(pathName);

  return (
    <Link className={clsx(`${style.link}`,
    {'text-blue-500': pathName === path})}
    href={path}>
        {text}
    </Link>
  )
}
