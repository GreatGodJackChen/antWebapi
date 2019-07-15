import { mygetAuthority } from '../../utils/authority';

let Auth: string = '';

type CurrentAuthorityType = string;

const renderAuthorize = (Authorized: string): ((currentAuthority: CurrentAuthorityType) => string) => (
  currentAuthority: CurrentAuthorityType,
): string => {
  if (currentAuthority) {
    Auth = mygetAuthority();
  }
  return Auth;
};
export { Auth };
export default renderAuthorize;


//import { mygetAuthority } from '../utils/authority';
//export interface AuthModelType {
//  namespace: 'checkAuth';
//  state?: string;
//  reducers: {
//    hasAuth: void;
//  };
//}
//const AuthModel: AuthModelType = {
//  namespace: 'checkAuth',
//  state: '',
//  reducers: {
//    hasAuth() {
//      let myAuth = mygetAuthority();
//      if (myAuth == '' || myAuth == 'undefined') {
//        window.location.href = '/user/login'
//      }
//    },
//  }
//}
//export default AuthModel;
