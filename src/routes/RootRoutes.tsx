import { Route, Routes } from 'react-router-dom';
import { LandingView } from '../pages/landing/LandingView';
import { Main } from '../pages/main/Main';
import { SignView } from '../pages/sign/SignInView';
export const RootRoutes = () => {
    return(
        <Routes>
        <Route path='/' element={<LandingView/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/signin' element={<SignView/>}/>
      </Routes>
    )
}