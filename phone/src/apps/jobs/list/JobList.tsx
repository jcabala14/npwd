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

// TODO: add search bar later
const JobList = () => {
  const classes = useStyles();
  const jobs = useJobsValue();
  const [t] = useTranslation();

  if (jobs && jobs.length)
    return (
      <List disablePadding>
        {jobs.map((job) => (
          <ListItem key={job.id} divider>
            <ListItemText>
              {job.job} : {job.open ? 'Sí' : 'No'}
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
