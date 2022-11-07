import JobsService from './jobs.service';
import { jobsLogger } from './jobs.utils';
import { onNetPromise } from '../lib/PromiseNetEvents/onNetPromise';
import { JobItem, JobsEvents } from '@typings/jobs';

onNetPromise<void, JobItem[]>(JobsEvents.FETCH_ALL_JOBS, (reqObj, resp) => {
  JobsService.handleFetchJobs(reqObj, resp).catch((e) => {
    jobsLogger.error(`Error occurred in fetch job event (${reqObj.source}), Error:  ${e.message}`);
    resp({ status: 'error', errorMsg: 'UNKNOWN_ERROR' });
  });
});
