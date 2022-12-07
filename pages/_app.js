import {useState} from "react"
import { ChakraProvider} from "@chakra-ui/react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

function MarineApp({ Component, pageProps }) {
  const [queryClient] =  useState(() => new QueryClient());
  return (
      <QueryClientProvider client={queryClient}>
          <ChakraProvider>
              <Component {...pageProps} />
          </ChakraProvider>
      </QueryClientProvider>
  )
}

export default MarineApp
