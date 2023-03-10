import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, ThemeSettings, Sidebar, Footer } from './components'
import { Calendar, Kanban, Editor } from './pages'
import './App.css'

import { useStateContext } from './contexts/ContextProvider'

const App = () => {
    const { activeMenu } = useStateContext()
    return (
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                        <TooltipComponent content='Settings' position='Top'>
                            <button type='button' className='text-3xl hover:drop-shadow-xl p-3 
                            hover:bg-light-gray text-white '
                                style={{ background: 'blue', borderRadius: '50%' }}
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {
                        activeMenu ? (
                            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                                <Sidebar />
                            </div>
                        ) : (
                            <div className='w-0 dark:bg-secondary-dark-bg'>
                                <Sidebar />
                            </div>
                        )
                    }
                    <div className={
                        `dark:bg-main-bg w-full bg-main-bg min-h-screen ${activeMenu ? ' md:ml-72' : 'flex-2'}`
                    }>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>
                    </div>
                    <div>
                        <Routes>
                            <Route path='/' element={<Kanban />} />
                            <Route path='/kanban' element={<Kanban />} />
                            <Route path='/editor' element={<Editor />} />
                            <Route path='/calendar' element={<Calendar />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App