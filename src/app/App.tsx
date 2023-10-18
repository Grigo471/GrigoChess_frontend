import { Route, Routes } from "react-router-dom"
import AboutPage from "../pages/AboutPage/AboutPage"
import MainPage from "../pages/MainPage/MainPage"
import { Link } from "react-router-dom"
import { Suspense } from "react"
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "src/shared/lib/classNames/classNames"

export const App = () => {

    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />}/>
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense> 
        </div>
    )
}