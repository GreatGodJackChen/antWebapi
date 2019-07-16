import request from '@/utils/request';
import { APIV1 } from '../utils/config';

export async function getMenuData(): Promise<any> {
  return request(`${APIV1}/Menu`);
}
