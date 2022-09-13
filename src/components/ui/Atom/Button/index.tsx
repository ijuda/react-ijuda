import PrimaryButton from "./Primary";
import SecondaryButton from "./secondary";
import TertiaryButton from "./Tertiary";

type Props = {
  content: string;
  type: "primary" | "secondary" | "tertiary";
};

const Button = ({ type, content }: Props) => {
  switch (type) {
    case "primary":
      return <PrimaryButton children={content} />;
    case "secondary":
      return <SecondaryButton children={content} />;
    case "tertiary":
      return <TertiaryButton children={content} />;
    default:
      return <span>No Buttons</span>;
  }
};

export default Button;
