import { acceptButton } from './index.styles';

interface Props {
  label: string;
  onClick?: () => void;
}

const AcceptButton = ({ label, onClick }: Props) => {
  return (
    <button css={acceptButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default AcceptButton;
