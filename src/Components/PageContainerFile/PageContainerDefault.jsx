import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import {
  PageContainer,
} from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import {Fade, Paper, Typography} from '@mui/material';
import CustomizedTimeline from '../CustomizedTimeline';
import Face from '../../util/Images/face.jpg'
import './PageContainerDefault.css';

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

const introduction = (
    <Paper>
      <Paper className='title-paper'
      elevation={6}
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        backgroundColor: "#1976D2",
        color: "#fff",
      }}>
        <Typography variant='h4' sx={{fontWeight: "bold"}}>
          Welcome! I'm Daniel Bocash
        </Typography>
      </Paper>
      <Paper className='introduction-paper'
        elevation={6}
        sx={{
          padding: 3,
          borderRadius: "16px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          backgroundColor: "#1976D2",
          color: "#fff"
        }}>
        <Typography variant='body1' sx={{padding: "10px", textAlign:"center"}}>
          I'm a passionate software engineer and computer science student at the 
          University of New Hampshire, graduating in May 2025. With a strong foundation in C, Java, Python, and C#, 
          I have experience in software development, embedded systems, and interoperability testing.
        </Typography>
      </Paper>
    </Paper>
);

export default function PageContainerBasic(props) {
  const { window } = props;
  const router = useDemoRouter('/home');
  const theme = useTheme();
  
  // Thinking a picture on the left side that overlaps with the page about me on the right side
  return (
    <AppProvider
        theme={theme}
    >
      <Paper sx={{ p: 2, width: '100%' }}>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid size={12}>
              <Paper sx={{p: 2, width: '100%'}}>
                <Grid item xs={12} sm={8} className="face-wrapper">
                  <img
                    src={Face}
                    alt='Daniel Bocash'
                    className='face-image'
                  />
                  <Fade in={"true"} timeout={2500}>{introduction}</Fade>
                </Grid>
              </Paper>
            </Grid>
            <Grid size={4}> 
              <CustomizedTimeline />
            </Grid>
            <Grid size={8}>
                <Paper elevation={6} className='about-paper'
                sx={{
                  padding: 3,
                  borderRadius: "16px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                  textAlign: "center",
                  backgroundColor: "#1976D2",
                  color: "#fff",
                  fontWeight: 'bold',
                }}
                >
                  <Typography variant='h5'
                  sx={{
                    textAlign: 'center',
                  }}>
                    Education
                  </Typography>
                </Paper>
                <Paper 
                square={false}
                elevation={0}
                className='about-desc-paper'
                sx={{
                  padding: 2,
                  borderRadius: "16px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                  textAlign: "center",
                  backgroundColor: "#1976D2",
                  color: "#fff"
                }}
                >
                    Hello World
                </Paper>
            </Grid>
          </Grid>
        </PageContainer>
      </Paper>
    </AppProvider>
  );
}
