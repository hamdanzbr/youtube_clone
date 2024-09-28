import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';
import SearchPage from './components/SearchPage';
import Live from './components/Live';
import LiveStream from './components/LiveStream';

function App() {
  const appRouter = createBrowserRouter(
    [
      {
        path: '/',
        element: (
          <>
            <Header /> {/* Header stays fixed and visible */}
            <Body />
          </>
        ),
        children: [
          {
            path: '/',
            element: <MainContainer />,
          },
          {
            path: '/watch',
            element: <Watch />,
          },
          {
            path: '/search',
            element: <SearchPage />,
          },
          {
            path: '/live',
            element: <Live />,
          },
          {
            path: '/livestream',
            element: <LiveStream />,
          },
        ],
      },
    ],
    {
      basename: '/youtube_clone', // Add the basename for GitHub Pages
    }
  );

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
