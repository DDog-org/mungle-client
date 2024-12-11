import { box, dateSelect } from './index.styles';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { useState } from 'react';

interface DatePickerComponentProps {
  onDateChange: (date: Dayjs | null) => void;
  onTimeChange: (time: Dayjs | null) => void;
}

export default function DatePickerComponent({
  onDateChange,
  onTimeChange,
}: DatePickerComponentProps) {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    onDateChange(newValue);
  };
  const handleTimeChange = (newValue: Dayjs | null) => {
    setSelectedTime(newValue);
    onTimeChange(newValue);
  };

  return (
    <div css={box}>
      <div css={dateSelect}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
          <DatePicker
            format="YYYY.MM.DD"
            value={selectedDate}
            onChange={handleDateChange}
            slotProps={{
              textField: {
                size: 'small',
                InputProps: {
                  sx: {
                    borderRadius: '30px',
                    input: { color: 'black', textAlign: 'center' },
                    fontSize: '13px',
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      </div>
      <div css={dateSelect}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            value={selectedTime}
            onChange={handleTimeChange}
            slotProps={{
              textField: {
                size: 'small',
                InputProps: {
                  sx: {
                    borderRadius: '30px',
                    input: { color: 'black', textAlign: 'center' },
                    fontSize: '13px',
                  },
                },
              },
            }}
            sx={{ borderRadius: '30px' }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}
