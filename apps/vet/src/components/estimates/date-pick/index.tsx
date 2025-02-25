import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface Props {
  onChange: (dateTime: Dayjs) => void;
  placeholderText?: string;
}

export function DatePick({ onChange, placeholderText }: Props): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const now = dayjs();
  const startOfToday = now.startOf('day').hour(10).minute(0);
  const endOfToday = now.startOf('day').hour(19).minute(0);
  const maxDate = now.add(1, 'year').endOf('day');

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
    if (date) {
      onChange(date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        value={selectedDate}
        onChange={handleDateChange}
        minDate={now.startOf('day')}
        maxDate={maxDate}
        minTime={
          selectedDate?.isSame(now, 'day')
            ? now.isBefore(startOfToday)
              ? startOfToday
              : now.isAfter(endOfToday)
                ? endOfToday
                : now
            : startOfToday
        }
        maxTime={selectedDate?.startOf('day').hour(19).minute(0)}
        ampm={false}
        slotProps={{
          textField: {
            placeholder: placeholderText || '날짜를 선택해 주세요',
            fullWidth: true,
            InputProps: {
              sx: {
                borderRadius: '20px',
                input: { color: '#000000' },
                fontSize: '14px',
              },
            },
          },
        }}
        slots={{
          textField: TextField,
        }}
      />
    </LocalizationProvider>
  );
}
