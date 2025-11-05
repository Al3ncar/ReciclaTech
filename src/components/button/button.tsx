import type { IButton, TBtnVariables } from "../../types/recly-button";
import { SlPresent } from "react-icons/sl";

const BtnDefault = ({ label, hasIcon }: TBtnVariables) => {
  return (
    <button className={`btn--default`}>
      {label}
      {hasIcon && <SlPresent />}
    </button>
  );
};
const BtnOutline = ({ label, hasIcon }: TBtnVariables) => {
  return (
    <button className={`btn--outline`}>
      {label}
     {hasIcon && <SlPresent className="thick-icon" />}
    </button>
  );
};

const typeBtn = {
  default: BtnDefault,
  outline: BtnOutline,
};

function RecButton({ type, label, hasIcon }: IButton) {
  const Component = typeBtn[type] || BtnDefault;
  return <Component label={label} hasIcon={hasIcon} />;
}

export default RecButton;
