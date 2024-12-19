import { motion } from 'framer-motion';
import { Dim } from '../dim';
import { Text } from '../text';
import { menu, menuWrapper, wrapper, titleWrapper } from './index.styles';

interface Menu {
  label: string;
  value?: string | number;
  isSelected?: boolean;
  onClick?: () => void;
}

interface ActionSheetProps {
  title?: string;
  menus: Menu[];
  onClickItem?: (value: string | number) => void;
  onClose: () => void;
}

export function ActionSheet({ title, menus, onClickItem, onClose }: ActionSheetProps) {
  return (
    <>
      <Dim fullScreen onClick={onClose} />

      <motion.div
        css={wrapper}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 50 }}
      >
        {title && (
          <div css={titleWrapper}>
            <Text typo="body4" color="black">
              {title}
            </Text>
          </div>
        )}

        <div css={menuWrapper}>
          {menus.map((item) => (
            <div
              key={item.label}
              onClick={onClickItem ? () => onClickItem(item.value ?? item.label) : item.onClick}
              css={menu}
            >
              <Text typo="body1" color={item.isSelected ? 'blue200' : 'black'}>
                {item.label}
              </Text>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
