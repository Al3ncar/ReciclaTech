
export interface IButton {
  type: "default" | "outline";
  label: string | number;
  hasIcon?: boolean;
}

export type TBtnVariables = {
  label: IButton["label"];
  hasIcon?: IButton["hasIcon"];
};
