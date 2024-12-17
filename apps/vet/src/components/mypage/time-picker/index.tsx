import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { Text } from '@daengle/design-system';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { box, dateSelect, text } from './index.styles';

interface TimePickerComponentProps {
  onStartTimeChange: (date: Dayjs | null) => void;
  onEndTimeChange: (time: Dayjs | null) => void;
  startTime?: Dayjs | null;
  endTime?: Dayjs | null;
}

export default function TimePickerComponent({
  onStartTimeChange,
  onEndTimeChange,
  startTime,
  endTime,
}: TimePickerComponentProps) {
  const [selectedStartTime, setSelectedStartTime] = useState<Dayjs | null>(null);
  const [selectedEndTime, setSelectedEndTime] = useState<Dayjs | null>(null);

  const handleStartTimeChange = (newValue: Dayjs | null) => {
    setSelectedStartTime(newValue);
    onStartTimeChange(newValue);
  };
  const handleEndTimeChange = (newValue: Dayjs | null) => {
    setSelectedEndTime(newValue);
    onEndTimeChange(newValue);
  };
  return (
    <div css={box}>
      <div css={dateSelect}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            value={startTime}
            onChange={handleStartTimeChange}
            slotProps={{
              textField: {
                size: 'small',
                InputProps: {
                  sx: {
                    borderRadius: '10px',
                    input: { color: 'black', textAlign: 'center' },
                    fontSize: '14px',
                  },
                },
              },
            }}
            sx={{ borderRadius: '10px' }}
          />
        </LocalizationProvider>
      </div>
      <div css={text}>
        <Text typo="subtitle3">~</Text>
      </div>
      <div css={dateSelect}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            value={endTime}
            onChange={handleEndTimeChange}
            slotProps={{
              textField: {
                size: 'small',
                InputProps: {
                  sx: {
                    borderRadius: '10px',
                    input: { color: 'black', textAlign: 'center' },
                    fontSize: '14px',
                  },
                },
              },
            }}
            sx={{ borderRadius: '10px' }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}
