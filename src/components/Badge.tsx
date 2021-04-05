import { css, cx } from '@emotion/css';
import React, { memo, useMemo } from 'react';

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
      cx(
        css`
          display: inline-block;
          font-size: 14px;
          height: 18px;
          line-height: 18px;
          border-radius: 3px;
          padding: 0 6px;
          color: #fff;
          & + & {
            margin-left: 5px;
          }
        `,
        vertical === 'top' &&
          css`
            vertical-align: top;
          `,
        type === 'tip'
          ? css`
              background-color: #42b983;
            `
          : type === 'warning'
          ? css`
              background-color: #e7c000;
            `
          : css`
              background-color: #da5961;
            `
      ),
    []
  );
  return <div className={cls}>{text}</div>;
});
