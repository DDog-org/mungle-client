import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '../tab';
import { tabHeader, wrapper, tabContent, tabContentItem } from './index.styles';

interface Tab {
  id: string;
  label: string;
}

interface Props {
  tabs: Tab[];
  renderContent: (activeTabId: string) => ReactNode;
}

export function Tabs({ tabs, renderContent }: Props) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id ?? '');
  const [direction, setDirection] = useState<number>(0);

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  const handleTabChange = (id: string) => {
    const newIndex = tabs.findIndex((tab) => tab.id === id);
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveTab(id);
  };

  return (
    <div css={wrapper}>
      <div css={tabHeader}>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => handleTabChange(tab.id)}
          />
        ))}
      </div>

      <div css={tabContent}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeTab}
            custom={direction}
            initial={{ x: direction === 1 ? 100 : -100 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            css={tabContentItem}
          >
            {renderContent(activeTab)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
