import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import AuthLayout from './layouts/AuthLayout';
import AppLayout from './layouts/AppLayout';
import LinkTreeView from './views/LinkTreeView';
import ProfileView from './views/ProfileView';
import PublicUserView from './views/PublicUserView';
import NotFoundView from './views/NotFoundView';
import HomeView from './views/HomeView';
import AuthProvider from './context/AuthProvider';
import Header from './components/Header/Header';
import AccountView from './views/AccountView';
import Footer from './components/Footer';

export default function Router() {
    return(
        <BrowserRouter>
        <AuthProvider>
            <Header/>
            <Routes>
                <Route element={<AuthLayout/>}>
                    <Route path='/auth/login' element={<LoginView/>} />
                    <Route path='/auth/register' element={<RegisterView/>} />
                </Route>

                <Route path='/admin'  element={<AppLayout/>}>
                    <Route index={true} element={<LinkTreeView/>} />
                    <Route path='profile' element={<ProfileView/>} />
                    <Route path='account' element={<AccountView/>} />
                </Route>

                <Route path='/' element={<HomeView/>}/>

                <Route path='/:username' element={<AuthLayout/>}>
                    <Route index={true} element={ <PublicUserView />}/>
                </Route>

                <Route path='/404' element={<AuthLayout/>}>
                    <Route index={true} element={<NotFoundView/>}/>
                </Route>
            </Routes>
            <Footer/>
        </AuthProvider>
        </BrowserRouter>
    )
}