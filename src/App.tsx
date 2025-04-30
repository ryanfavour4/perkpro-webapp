import "@/styles/globals.css";
import "@/styles/tailwind.css";
import "react-phone-input-2/lib/style.css";
import Router from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/theme";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1, // Retry failed queries up to 1 times
            staleTime: 5 * 60 * 1000, // Cache data for 5 minutes after stale fetch
            refetchOnWindowFocus: false, // Prevent unnecessary refetching
        },
    },
});

function App() {
    return (
        <>
            <ThemeProvider>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <Root />
                        <Router />
                    </BrowserRouter>
                </QueryClientProvider>
            </ThemeProvider>
        </>
    );
}

export default App;

function Root() {
    return (
        <>
            <Toaster />
        </>
    );
}

