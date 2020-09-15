import { StandardProps } from "@material-ui/core";
import * as React from "react";

export interface ToggleIconProps
  extends StandardProps<
    React.HTMLAttributes<HTMLDivElement>,
    ToggleIconClassKey
  > {
  on: boolean;
  onIcon: JSX.Element;
  offIcon: JSX.Element;
}

export type ToggleIconClassKey = "root" | "offIcon" | "onIcon";

export default function ToggleIcon(props: ToggleIconProps): JSX.Element;
