import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import {
  PageContainer,
  PageHeader,
  PageHeaderToolbar,
} from '@toolpad/core/PageContainer';
import { Image } from 'react-bootstrap';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';


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

function CustomPageToolbar() {
  return (
    <PageHeaderToolbar>
      <Stack direction="row" spacing={1} alignItems="center">
        <Button
          variant="outlined"
          size="small"
          color="neutral"
          startIcon={<DownloadIcon fontSize="inherit" />}
        >
          Download
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="neutral"
          startIcon={<PrintIcon fontSize="inherit" />}
        >
          Print
        </Button>
      </Stack>
    </PageHeaderToolbar>
  );
}

function CustomPageHeader() {
  return <PageHeader slots={{ toolbar: CustomPageToolbar }} />;
}

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
            <Grid size={5} />
            <Grid size={12}>
            </Grid>
            <Grid size={12}>
                <Image source={"/Home"} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
                <Paper>
                    Title
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
