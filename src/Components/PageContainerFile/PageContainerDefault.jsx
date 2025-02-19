import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import {
  PageContainer,
  PageHeader,
  PageHeaderToolbar,
} from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import {Paper, Typography} from '@mui/material';
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
                    <Paper elevation={3} sx={{width: '50%', marginLeft: "auto", display: "flex", alignItems: "center"}}>
                      <Typography>
                        This is hello world
                      </Typography>
                    </Paper>
                  </Grid>
              </Paper>
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
                <Paper>
                    About Me
                </Paper>
                <Paper 
                square={false}
                elevation={0}
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
