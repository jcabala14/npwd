import { RegisterNuiProxy } from './cl_utils';
import { JobsEvents } from '@typings/jobs';

RegisterNuiProxy(JobsEvents.FETCH_ALL_JOBS);
