import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import AboutPage from './components/HomePage';
import HomePage from './components/About';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route exact path="/" element={HomePage} />
          <Route path="/about" element={AboutPage} />
        </Routes>
      </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;