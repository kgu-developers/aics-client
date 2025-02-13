import { Route, Routes } from 'react-router';
import SplashPage from '~/pages/splash/splash';

export default function Router() {
  return (
    <Routes>
      <Route>
        <Route index element={<SplashPage />} />
      </Route>
    </Routes>
  );
}
