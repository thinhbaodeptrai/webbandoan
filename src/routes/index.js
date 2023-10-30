import HomeAdmin from '@/Pages/Admin/Home';
import Userlist from '@/Pages/Admin/Userlist';
import Personnellist from '@/Pages/Admin/Personnellist';
import Login from '@/Pages/Admin/Login';
import Voucher from '@/Pages/Admin/VouCher';
import Order from '@/Pages/Admin/Order';
import Product from '@/Pages/Admin/Product';
import Category from '@/Pages/Admin/Category';

//User
import HomeUser from '@/Pages/User/HomeUser';
import { DefaultLayoutUser } from '@/components/User/Layout';

const publicRoutes = [
    // Admin
    { path: '/admin', component: Login, layout: null },
    { path: '/admin/userlist', component: Userlist },
    { path: '/admin/personnel', component: Personnellist },
    { path: '/admin/voucher', component: Voucher },
    { path: '/admin/order', component: Order },
    { path: '/admin/product', component: Product },
    { path: '/admin/category', component: Category },
    //fkjdkjfdkfe
    //User
    { path: '/', component: HomeUser, layout: DefaultLayoutUser },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
