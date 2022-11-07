import { jobsLogger } from './jobs.utils';
import { PromiseEventResp, PromiseRequest } from '../lib/PromiseNetEvents/promise.types';
import JobsDB, { _JobsDB } from './jobs.db';
import { JobItem } from '../../../typings';

class _JobsService {
  private readonly jobsDB: _JobsDB;

  constructor() {
    this.jobsDB = JobsDB;
    jobsLogger.debug('Jobs service started');
  }

  async handleFetchJobs(reqObj: PromiseRequest<void>, resp: PromiseEventResp<JobItem[]>) {
    try {
      const jobs = await this.jobsDB.fetchJobs();
      resp({ status: 'ok', data: jobs });
    } catch (e) {
      jobsLogger.error(`Error in handleFetchJobs, ${e.message}`);
      resp({ status: 'error', errorMsg: 'GENERIC_DB_ERROR' });
    }
  }
}

const JobsService = new _JobsService();
export default JobsService;
