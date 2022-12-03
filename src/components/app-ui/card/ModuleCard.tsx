import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

interface Props {
  label: string;
  onClick: (e?: any) => void;
}

const ModuleCard: React.FC<Props> = ({ label, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={[
        {
          px: { lg: 6, xs: 2 },
          py: { lg: 4, xs: 2 },
          borderRadius: '6px',
          background: '#cce3ff',
          transition: 'all 0.5s ease-in-out',
          cursor: 'pointer',
          border: '1px solid #7195c2',
        },
        {
          '&:hover': {
            border: '1px solid #3f5eea',
          },
        },
      ]}
    >
      <Typography>{label}</Typography>
    </Box>
  );
};

export default ModuleCard;
