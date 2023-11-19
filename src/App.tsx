import { Outlet } from 'react-router-dom';

import PageCountSelect from './components/PageCountSelect';
import Search from './components/Search';
import Results from './components/Results';
import AppWrapper from './components/AppWrapper';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';

import Header from './components/Header';

const App = () => {
  console.log('test');
  return (
    <ErrorBoundary>
      <AppWrapper>
        <Header>
          <Search />
          <PageCountSelect />
        </Header>
        <Results />
        <ErrorButton />
        <Outlet />
      </AppWrapper>
    </ErrorBoundary>
  );
};

export default App;
