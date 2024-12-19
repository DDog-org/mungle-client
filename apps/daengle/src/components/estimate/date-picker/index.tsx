import { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker as MuiDatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { box, dateSelect } from './index.styles';
import 'dayjs/locale/ko';
import dayjs, { Dayjs } from 'dayjs';

interface Props {
  onChange: (date: string | null) => void;
}

export function DatePicker({ onChange }: Props) {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  const handleTimeChange = (newValue: Dayjs | null) => {
    setSelectedTime(newValue);
  };

  useEffect(() => {
    onChange(`${selectedDate?.format('YYYY-MM-DD')} ${selectedTime?.format('HH:mm:ss')}`);
  }, [selectedDate, selectedTime]);

  return (
    <div css={box}>
      <div css={dateSelect}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
          <MuiDatePicker
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
