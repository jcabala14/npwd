import DbInterface from '../db/db_wrapper';
import { JobItem } from '../../../typings';

export class _JobsDB {
  async fetchJobs(): Promise<JobItem[]> {
    const query = 'SELECT * FROM view_npwd_jobs';
    const [result] = await DbInterface._rawExec(query);
    return <JobItem[]>result;
  }
}

const JobsDB = new _JobsDB();

export default JobsDB;
