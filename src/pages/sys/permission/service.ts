import request from '@/utils/request';
import { TableListParams } from './data.d';
import { APIV1 } from '../../../utils/config';

export async function queryRule(params: TableListParams) {
  return request('/api/permission', {
    params,
  });
}

export async function removeRule(params: TableListParams) {
  return request('APIV1/permission', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListParams) {
  return request('https://localhost:44349/api/Permission', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
