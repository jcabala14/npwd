import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import fetchNui from '@utils/fetchNui';
import { ServerPromiseResp } from '@typings/common';
import { JobItem, JobsEvents } from '@typings/jobs';
import LogDebugEvent from '../../../os/debug/LogDebugEvents';
import { isEnvBrowser } from '../../../utils/misc';
import { BrowserJobsData } from '../utils/constants';

const jobItems = atom({
  key: 'jobItem',
  default: selector<JobItem[]>({
    key: 'defaultJobItems',
    get: async () => {
      try {
        const resp = await fetchNui<ServerPromiseResp<JobItem[]>>(JobsEvents.FETCH_ALL_JOBS);
        LogDebugEvent({ action: 'FetchNotes', data: resp.data });
        return resp.data;
      } catch (e) {
        if (isEnvBrowser()) {
          return BrowserJobsData;
        }
        console.error(e);
        return [];
      }
    },
  }),
});

export const useJobsValue = () => useRecoilValue(jobItems);
export const useSetJobs = () => useSetRecoilState(jobItems);
