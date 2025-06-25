import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

interface SliderProps {
  showLabel?: boolean;
  disabled?: boolean;
  showMarks?: boolean;
}

const marks = [
  { value: 0, label: '0' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 75, label: '75' },
  { value: 100, label: '100' },
];

function valueText(value: number) {
  return `${value}`;
}

export const BasicSlider = ({
  showLabel = false,
  disabled = false,
  showMarks = false,
}: SliderProps) => {
  const [value, setValue] = useState(30);

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        value={value}
        onChange={(e, val) => typeof val === 'number' && setValue(val)}
        min={0}
        max={100}
        valueLabelDisplay={showLabel ? 'auto' : 'off'}
        disabled={disabled}
        marks={showMarks ? marks : false}
        sx={{
          color: 'green',

          '&.Mui-disabled': {
            color: 'gray',
          },

          '&.Mui-disabled .MuiSlider-thumb': {
            borderColor: 'gray',
          },

          '& .MuiSlider-thumb': {
            width: 12,
            height: 12,
            backgroundColor: 'white',
            border: '2px solid green',
            boxSizing: 'border-box',
          },

          '&.Mui-disabled .MuiSlider-track': {
            backgroundColor: 'gray',
          },

          '& .MuiSlider-track': {
            backgroundColor: 'green',
          },

          '&.Mui-disabled .MuiSlider-rail': {
            backgroundColor: '#e0e0e0',
          },

          '& .MuiSlider-rail': {
            backgroundColor: '#a5d6a7',
          },

          '& .MuiSlider-valueLabel': {
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '4px',
            fontSize: '12px',
          },
        }}
      />
    </Box>
  );
};

export const RangeSlider = ({
  showLabel = false,
  disabled = false,
  showMarks = false,
}: SliderProps) => {
  const [range, setRange] = useState<[number, number]>([20, 80]);

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        value={range}
        onChange={(e, val) => Array.isArray(val) && setRange(val as [number, number])}
        min={0}
        max={100}
        valueLabelDisplay={showLabel ? 'auto' : 'off'}
        disabled={disabled}
        marks={showMarks ? marks : false}
        disableSwap
        sx={{
          color: 'green',

          '&.Mui-disabled': {
            color: 'gray',
          },

          '&.Mui-disabled .MuiSlider-thumb': {
            borderColor: 'gray',
          },

          '& .MuiSlider-thumb': {
            width: 12,
            height: 12,
            backgroundColor: 'white',
            border: '2px solid green',
            boxSizing: 'border-box',
          },

          '&.Mui-disabled .MuiSlider-track': {
            backgroundColor: 'gray',
          },

          '& .MuiSlider-track': {
            backgroundColor: 'green',
          },

          '&.Mui-disabled .MuiSlider-rail': {
            backgroundColor: '#e0e0e0',
          },

          '& .MuiSlider-rail': {
            backgroundColor: '#a5d6a7',
          },

          '& .MuiSlider-valueLabel': {
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '4px',
            fontSize: '12px',
          },
        }}
        getAriaValueText={valueText}
      />
    </Box>
  );
};
