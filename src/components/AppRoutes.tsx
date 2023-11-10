import { Route, Routes } from 'react-router-dom';

import App from '../App';
import Details from './Details';
import NotFound from './NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<App />}>
        <Route path=":id" element={<Details />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
