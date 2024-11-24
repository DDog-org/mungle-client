import { HTMLAttributes, ReactNode } from 'react';
import { colors, typography } from '../../foundation';
import { jsx, css } from '@emotion/react';
import { TEXT_TAGS } from './tags';

export const TAGS = TEXT_TAGS;

type KeyOfTags = keyof typeof TEXT_TAGS;
type KeyOfTypography = keyof typeof typography;
type KeyOfColors = keyof typeof colors;

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  tag?: KeyOfTags;
  color?: KeyOfColors;
  typo: KeyOfTypography;
  children: ReactNode;
}

export function Text({ tag = 'span', color = 'black100', typo, children, ...rest }: Props) {
  return jsx(
    tag,
    {
      css: css`
        color: ${colors[color]};
        ${typography[typo]};
      `,
      ...rest,
    },
    [children]
  );
}
