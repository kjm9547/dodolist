import { Route, Routes } from 'react-router-dom';
import { LandingView } from '../pages/landing/LandingView';
import { Main } from '../pages/main/Main';
import { SignInView,  } from '../pages/sign/SignInView';
import { SignUpView } from '../pages/sign/SignUpView';
export const RootRoutes = () => {
    return(
        <Routes>
        <Route path='/' element={<LandingView/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/signin' element={<SignInView/>}/>
        <Route path='/signup' element={<SignUpView/>}/>
      </Routes>
    )
}