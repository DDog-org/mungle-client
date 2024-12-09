import { Text, ChipToggleButton } from '@daengle/design-system';
import { SelectUnfoldActive, SelectUnfoldInactive } from '@daengle/design-system/icons';
import { wrapper, keyword, unroll } from './index.styles';

export function KeywordCard({
  tags,
  selectedTags,
  onTagToggle,
  isExpanded,
  toggleExpand,
}: {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  isExpanded: boolean;
  toggleExpand: () => void;
}) {
  return (
    <div css={wrapper}>
      <Text typo="subtitle1">어떤 점이 좋았나요?</Text>
      <Text typo="body11" color="gray500">
        이 곳에 어울리는 키워드를 골라주세요
      </Text>
      <div css={keyword}>
        {tags.map((tag, index) => {
          if (!isExpanded && index >= 3) return null;
          return (
            <ChipToggleButton
              key={tag}
              size="full"
              isSelected={selectedTags.includes(tag)}
              onClick={() => onTagToggle(tag)}
              textColor="gray500"
            >
              {tag}
            </ChipToggleButton>
          );
        })}
        <div css={unroll} onClick={toggleExpand}>
          {isExpanded ? (
            <SelectUnfoldActive width={12} height={6} />
          ) : (
            <SelectUnfoldInactive width={12} height={6} />
          )}
        </div>
      </div>
    </div>
  );
}
