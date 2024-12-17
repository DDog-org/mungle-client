import { motion } from 'framer-motion';
import { bar, wrapper } from './index.styles';
import { Text } from '../../text';

interface Props {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function Tab({ label, isActive, onClick }: Props) {
  return (
    <div css={wrapper} onClick={onClick}>
      {isActive ? (
        <Text tag="h2" typo="subtitle1" color="black100">
          {label}
        </Text>
      ) : (
        <Text tag="h2" typo="subtitle3" color="gray400">
          {label}
        </Text>
      )}
      {isActive && <motion.div layoutId="underline" css={bar} />}
    </div>
  );
}
