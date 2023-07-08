import { Button, CloseIcon } from "./ButtonClose.styled";

const ButtonClose = ({ ...props }) => {
  return (
    <Button {...props} className="closeButton">
      <CloseIcon />
    </Button>
  );
};
export default ButtonClose;
