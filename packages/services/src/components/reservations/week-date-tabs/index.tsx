import { Text } from '@daengle/design-system';
import { dateTab, dateTabs, gap, wrapper } from './index.styles';

interface Props {
  selectedDate: string | undefined;
  onSelectDate: (date: string) => void;
  dates: { id: number; day: string; label: string; fullDate: string }[];
}

export function WeekDateTabs({ selectedDate, onSelectDate, dates }: Props) {
  return (
    <div css={wrapper}>
      <Text typo="title2">{`${selectedDate?.slice(5, 7)}월`}</Text> {/* 동적 월 표시 */}
      <div css={dateTabs}>
        {dates.map((date) => (
          <div
            key={date.id}
            css={dateTab(selectedDate === date.fullDate)}
            onClick={() => onSelectDate(date.fullDate)}
          >
            <Text typo="body8" color={selectedDate === date.fullDate ? 'green200' : 'gray500'}>
              {date.label}
            </Text>
            <div css={gap}></div>
            <Text typo="title2" color={selectedDate === date.fullDate ? 'green200' : 'black'}>
              {date.day}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
