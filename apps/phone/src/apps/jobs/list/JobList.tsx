import React, { useEffect, useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { useTranslation } from 'react-i18next';
import fetchNui from '@utils/fetchNui';
import { ServerPromiseResp } from '@typings/common';
import { JobItem, JobsEvents } from '@typings/jobs';
import LogDebugEvent from '@os/debug/LogDebugEvents';

const useStyles = makeStyles((theme: Theme) => ({
  noNotes: {
    color: theme.palette.text.secondary,
  },
}));

const JobList = ({ onreload }) => {
  const classes = useStyles();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchNui<ServerPromiseResp<JobItem[]>>(JobsEvents.FETCH_ALL_JOBS).then((resp) => {
      LogDebugEvent({ action: 'FetchJobs', data: resp.data });
      setJobs(resp.data);
    });
  }, [onreload]);

  const [t] = useTranslation();

  if (jobs && jobs.length)
    return (
      <List disablePadding>
        {jobs
          .slice()
          .sort((a, b) => (a.job > b.job ? 1 : b.job > a.job ? -1 : 0))
          .map((job) => (
            <ListItem key={job.id} divider>
              <ListItemText>
                {job.job}:{' '}
                {job.open ? (
                  <span style={{ color: 'yellow' }}>Abierto</span>
                ) : (
                  <span style={{ color: 'red' }}>Cerrado</span>
                )}
              </ListItemText>
            </ListItem>
          ))}
      </List>
    );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100%"
      className={classes.noNotes}
    >
      <Typography color="inherit" variant="h6" style={{ fontWeight: 300 }}>
        {t('JOBS.FEEDBACK.NO_JOBS')}
      </Typography>
    </Box>
  );
};

export default JobList;
