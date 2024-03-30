import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Home from '../home'
const Hangman = lazy(() => import('@/hangman'))


function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hangman" element={
                <Suspense fallback={'loading...'}>
                    <Hangman />
                </Suspense>
            } />
        </Routes>
    )
}

export default Navigation
