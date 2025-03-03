import { css } from '@emotion/react';
import { theme } from '../../foundation';
import { Service, Variant } from './index.types';

export const wrapper = ({ variant, service }: { variant: Variant; service: Service }) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;
  padding: 4px 10px;
  border-radius: 30px;

  ${variant === 'solid' && solid({ service })};
  ${variant === 'line' && line({ service })};
  ${variant === 'ghost' && ghost};
`;

export const solid = ({ service }: { service: Service }) => css`
  background: ${service === 'daengle' ? theme.colors.blue100 : theme.colors.green100};
`;

export const line = ({ service }: { service: Service }) => css`
  border: 1px solid
    ${service === 'daengle'
      ? theme.colors.blue200
      : service === 'partner'
        ? theme.colors.green200
        : theme.colors.white};

  background: ${service === 'search' && theme.colors.whiteOpacity};
  color: ${service === 'search' && theme.colors.white} !important;
`;

export const ghost = css`
  background: ${theme.colors.gray200};
`;
