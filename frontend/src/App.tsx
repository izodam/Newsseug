import Router from 'Router';
import GlobalStyle from 'styles/global-styles';
import { Helmet } from 'react-helmet-async';
import { useTheme } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  const theme = useTheme();
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <meta name="theme-color" content={theme.bgColor} />
      </Helmet>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
