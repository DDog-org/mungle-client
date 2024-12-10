import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '../tab';
import { tabContent, tabContentItem, tabHeader, wrapper } from './index.styles';

interface Props {
  tabs: Array<{
    id: string;
    label: string;
    content: ReactNode;
  }>;
}

export function Tabs({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id);
  const [direction, setDirection] = useState(0);

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  const handleTabChange = (id: string) => {
    const newIndex = tabs.findIndex((tab) => tab.id === id);
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveTab(id);
  };

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

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
            {activeContent}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
