import React from 'react';
import { AppWrapper } from '@ui/components';
import { AppContent } from '@ui/components/AppContent';
import { AppTitle } from '@ui/components/AppTitle';
import { useApp } from '@os/apps/hooks/useApps';
import JobList from './list/JobList';
import { JobsThemeProvider } from './providers/JobsThemeProvider';
import { Route } from 'react-router-dom';
import { LoadingSpinner } from '@ui/components/LoadingSpinner';

export const JobsApp: React.FC = () => {
  const jobsApp = useApp('JOBS');

  return (
    <JobsThemeProvider>
      <AppWrapper id="jobs-app">
        <AppTitle app={jobsApp} />
        <AppContent>
          <React.Suspense fallback={<LoadingSpinner />}>
            <Route path="/jobs" component={JobList} />
          </React.Suspense>
        </AppContent>
      </AppWrapper>
    </JobsThemeProvider>
  );
};
