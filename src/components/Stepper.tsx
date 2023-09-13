import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 6,
    left: 'calc(-50%)',
    right: 'calc(50%)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#5558FA',
      
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#5558FA',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 8,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#A6A6A6',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#5558FA',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#5558FA',
      zIndex: 1,
      fontSize: 16,
      padding: 1,
      fontWeight: 'normal'
    },
    '& .QontoStepIcon-circle': {
      width: 16,
      height: 16,
      padding: '5px',
      borderRadius: '50%',
      backgroundColor: 'currentColor',
      zIndex: 1,
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" style={{backgroundColor: '#5558FA', color: '#fff', borderRadius: '100%'}}/>
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}


const steps = ['1', '2', '3'];

export default function CustomizedSteppers(props: any) {
  return (
    <Stack sx={{ width: '1000px' }} spacing={4}>
      <Stepper alternativeLabel activeStep={props.activeStep} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label} >
            <StepLabel StepIconComponent={QontoStepIcon} >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
