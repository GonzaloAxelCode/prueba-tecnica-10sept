import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

const HomePage = lazy(() => import('./pages/home'));
const View1Page = lazy(() => import('./pages/view1'));
const View2Page = lazy(() => import('./pages/view2'));

function App() {
  return <BrowserRouter>
    <Suspense fallback={<div className='w-screen h-screen justify-center items-center'>
      <div className="m-auto">

        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-4 border-t-4 border-green-400 border-solid rounded-full animate-spin"></div>
        </div>
      </div>
    </div>}>
      <main className='flex flex-row min-h-screen min-w-screen relative'>

        <Navigation />
        <div>
          <Sidebar />
        </div>

        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="view1" element={<View1Page />} />
          <Route path="view2" element={<View2Page />} />
        </Routes>
      </main>

    </Suspense>
  </BrowserRouter>
}

export default App;
