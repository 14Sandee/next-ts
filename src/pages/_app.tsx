import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default function App(props: AppProps) {
  const [query, setQuery] = useState(new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 600 * 1000,
      },
    },
  }))

  const { Component, pageProps } = props;

  return <AppCacheProvider {...props}>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={query}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  </AppCacheProvider>
}
