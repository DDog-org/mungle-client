import { Text } from '@daengle/design-system';
import { wrapper, plan, date } from './index.styles';

export function PartnersCard({
  designerName,
  shopName,
  schedule,
}: {
  designerName: string;
  shopName: string;
  schedule: { date: string; time: string };
}) {
  return (
    <div css={wrapper}>
      <Text typo="subtitle1">{designerName}</Text>
      <Text typo="body9" color="gray400">
        {shopName}
      </Text>
      <div css={plan}>
        <Text typo="body4" color="gray400">
          일정
        </Text>
        <div css={date}>
          <Text typo="body4">{schedule.date}</Text>
          <Text typo="body4">{schedule.time}</Text>
        </div>
      </div>
    </div>
  );
}
