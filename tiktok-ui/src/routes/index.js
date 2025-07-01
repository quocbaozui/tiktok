import routesConfig from '~/config/routes';

// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// public routes
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  // @ là kí tự cố định được map khi trên trình duyệt có cái path @
  // còn sau dấu : nickname là route parameter (tham số định tuyến) nó có thể thay đổi không cố định
  // khi có dấu @ là đều lọt vào trang profile
  { path: routesConfig.prfile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
