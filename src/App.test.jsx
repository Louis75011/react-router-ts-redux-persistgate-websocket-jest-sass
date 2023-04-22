import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';

describe('App', () => {
  test('renders HomePage component when visiting root URL', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    const homePageElement = getByText(/Welcome to the home page/i);
    expect(homePageElement).toBeInTheDocument();
  });

  test('renders AboutPage component when visiting /about URL', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router initialEntries={['/about']}>
          <Routes>
            <Route path="/about" element={<App />} />
          </Routes>
        </Router>
      </Provider>
    );
    const aboutPageElement = getByText(/About us/i);
    expect(aboutPageElement).toBeInTheDocument();
  });
});