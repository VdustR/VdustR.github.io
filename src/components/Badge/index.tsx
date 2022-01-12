import clsx from 'clsx';
import React, { memo, useMemo } from 'react';
import style from './style.module.css';

console.log(style);

export type BadgeProps = {
  text: string;
  type?: 'tip' | 'warning' | 'error';
  vertical?: 'top' | 'middle';
};

export default memo(function Badge({
  text,
  type = 'tip',
  vertical = 'top',
}: BadgeProps) {
  const cls = useMemo(
    () =>
      clsx(
        style.badge,
        vertical === 'top' && style.top,
        type === 'tip'
          ? style.tip
          : type === 'warning'
          ? style.warning
          : style.error
      ),
    []
  );
  return <div className={cls}>{text}</div>;
});
