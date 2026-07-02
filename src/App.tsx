import type { RouteRecord } from "vite-react-ssg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Navigate } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "./pages/HomePage";
import HowToUsePage from "./pages/HowToUsePage";
import TipsGuidePage from "./pages/TipsGuidePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <SiteHeader />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "discount-codes", element: <Navigate to="/" replace /> },
      { path: "how-to-use", element: <HowToUsePage /> },
      { path: "tips-guide", element: <TipsGuidePage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
