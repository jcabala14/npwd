import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useJobsValue } from '../hooks/state';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  noNotes: {
    color: theme.palette.text.secondary,
  },
}));

const JobList = () => {
  const classes = useStyles();
  const jobs = useJobsValue();
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
