import { Routes, Route } from 'react-router-dom';
import Main from './routes/Main';
import UnconrolledForm from './routes/UnconrolledForm';
import HookForm from './routes/HookForm';
import NoMatch from './routes/NoMatch';
import Layout from './routes/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="uncontrolled" element={<UnconrolledForm />} />
        <Route path="hook-form" element={<HookForm />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
