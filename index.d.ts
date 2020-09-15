import { StandardProps } from '@material-ui/core';
import * as React from 'react';

export interface ToggleIconProps extends StandardProps {
  on: boolean;
  onIcon: JSX.Element;
  offIcon: JSX.Element;
  color?: string;
  hoverColor?: string;
  style?: React.CSSProperties;
}

declare const ToggleIcon: React.ComponentType<ToggleIconProps>;

export default ToggleIcon;
