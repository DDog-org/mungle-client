import { box, dateSelect } from './index.styles';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function DatePickerComponent() {
  return (
    <div css={box}>
      <div css={dateSelect}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
          <DatePicker
            format="YYYY.MM.DD"
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
