import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Home from '../home'
const Hangman = lazy(() => import('@/hangman'))
const TicTacToe = lazy(() => import('@/tic-tac-toe'))


function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hangman" element={
                <Suspense fallback={'loading...'}>
                    <Hangman />
                </Suspense>
            } />
            <Route path="/tic-tac-toe" element={
                <Suspense fallback={'loading...'}>
                    <TicTacToe />
                </Suspense>
            } />
        </Routes>
    )
}

export default Navigation
