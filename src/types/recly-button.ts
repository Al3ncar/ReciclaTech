import type { IIcon } from "./recly-icon";

export interface IButton {
  type: "default" | "outline";
  label: string | number;
  color?: "primary" | "secondary"
  hasIcon?: boolean;
  iconName?: IIcon["name"];
}

export type TBtnVariables = {
  label: IButton["label"];
  color?: IButton["color"]
  hasIcon?: IButton["hasIcon"];
  iconName?: IIcon["name"];
};
