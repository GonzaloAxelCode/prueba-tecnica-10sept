import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

const HomePage = lazy(() => import('./pages/home'));
const View1Page = lazy(() => import('./pages/view1'));
const View2Page = lazy(() => import('./pages/view2'));

function App() {
  return <BrowserRouter>
    <Suspense fallback={<div>Loading full...</div>}>
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
