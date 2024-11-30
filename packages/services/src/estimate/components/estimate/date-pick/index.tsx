import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { datePicker } from './index.styles';

interface Props {
  onChange: (dateTime: Date) => void;
  placeholderText?: string;
}

const DatePick = ({ onChange, placeholderText }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const now = new Date();
  const startOfDay = new Date();
  startOfDay.setHours(10, 0, 0, 0);

  const endOfDay = new Date();
  endOfDay.setHours(19, 0, 0, 0);

  const isTodayValid = now.getHours() < 19 || (now.getHours() === 19 && now.getMinutes() === 0);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      onChange(date);
    }
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="시간"
        dateFormat="yyyy.MM.dd HH:mm"
        minDate={isTodayValid ? now : new Date(now.getTime() + 24 * 60 * 60 * 1000)}
        minTime={
          selectedDate?.toDateString() === now.toDateString()
            ? now.getHours() >= 10 && now.getHours() < 19
              ? now
              : startOfDay
            : startOfDay
        }
        maxTime={endOfDay}
        placeholderText={placeholderText || '날짜를 선택해주세요'}
        css={datePicker}
      />
    </div>
  );
};

export default DatePick;
