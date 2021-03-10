import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { blue } from '@material-ui/core/colors';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const imagepath = [
  {
    imgPath:"https://www.dmn3.com/wp-content/uploads/2018/01/healthcare-marketing-dmn3.jpg",
  },

  {
    imgPath: 'https://easternalley.com/wp-content/uploads/2019/10/healthcare-trends.jpg',
  },

  {
    imgPath:'https://i2.wp.com/patondigitalmarketing.com/wp-content/uploads/2019/05/healthcare-digital-marketing-trends.jpg?fit=1254%2C836&ssl=1',
  },

  {
    imgPath: 'https://assets-global.website-files.com/5eff9c5e4dba181f8aa2d1e0/5f3155b7f273cf36a0a19c1e_Patient-Experience-Blog.jpeg',
  },

  {
    imgPath:'https://futurehealthcaretoday.com/wp-content/uploads/2017/10/shutterstock_561360403.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      flexGrow: 1,
      width: '100%',
    },
   
    img: {
      height: '100vh',
      display: 'block',
      maxWidth: 'Fullscreen',
      overflow: 'hidden',
      width: '100%',
    },
    paper: {
      margin: theme.spacing(0,0),
      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
      backgroundColor: blue[400],
    },
    form: {
      width: '60%',
      height: '100%',
      marginTop: theme.spacing(0),
      backgroundColor: blue[400],
      color: blue[50],
    },
    stepper: {
      backgroundColor:  blue[200],
    }
  }));

function SwipeableTextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = imagepath.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };

    return (
        <div className={classes.root}>
          <Paper square elevation={0}>
            <Typography>{imagepath[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {imagepath.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img className={classes.img} src={step.imgPath} alt={step.label} alt="text" />
                ) : null}
                <span>{imagepath.text}</span>
              </div>
            ))}
          </AutoPlaySwipeableViews>

          <MobileStepper className={classes.stepper}
            steps={maxSteps}
            variant="dots"
            steps={5}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          
              </Button>
            }
          />
          </div>
          );
}

export default SwipeableTextMobileStepper;
