import { box, dateSelect, text } from './index.styles';
import { Text } from '@daengle/design-system';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function DatePickerComponent() {
  return (
    <div css={box}>
      <div css={dateSelect}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
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
