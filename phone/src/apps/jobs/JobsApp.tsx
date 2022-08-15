import React, { useState } from 'react';
import { AppWrapper } from '@ui/components';
import { AppContent } from '@ui/components/AppContent';
import { AppTitle } from '@ui/components/AppTitle';
import { useApp } from '@os/apps/hooks/useApps';
import JobList from './list/JobList';
import { JobsThemeProvider } from './providers/JobsThemeProvider';
import { Route } from 'react-router-dom';
import { LoadingSpinner } from '@ui/components/LoadingSpinner';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Fab } from '@mui/material';
import useStyles from '@apps/jobs/jobs.styles';

export const JobsApp: React.FC = () => {
  const classes = useStyles();
  const jobsApp = useApp('JOBS');
  const [reload, setReload] = useState(false);

  let handleClick = () => {
    setReload(!reload);
  };
  return (
    <JobsThemeProvider>
      <AppWrapper id="jobs-app">
        <AppTitle app={jobsApp} />
        <AppContent>
          <React.Suspense fallback={<LoadingSpinner />}>
            <Route path="/jobs">
              <JobList onreload={reload} />
            </Route>
          </React.Suspense>
        </AppContent>
        <Fab className={classes.absolute} onClick={handleClick} color="primary">
          <RefreshIcon />
        </Fab>
      </AppWrapper>
    </JobsThemeProvider>
  );
};
