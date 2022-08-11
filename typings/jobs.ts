export interface BeforeDBJob {
  job: string;
  open: boolean;
}

export interface JobItem extends BeforeDBJob {
  id: number;
  job: string;
  open: boolean;
}

export enum JobsEvents {
  FETCH_ALL_JOBS = 'npwd:fetchAllJobs',
}
