import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protected";

const HomeTenant = lazy(() => import("@/pages/tenant/home"));

import NotFound from "@/layout/not-found";
import { LoadingPopUp } from "@/layout/loading";
import TenantLogin from "@/pages/tenant/login";
import Register from "@/pages/auth/register";
import PropertyDetails from "@/pages/tenant/property-details";
import Search from "@/pages/tenant/search";
import SearchResult from "@/pages/tenant/search/search-result";

export default function Router() {
    return (
        <>
            <Suspense fallback={<LoadingPopUp />}>
                <Routes>
                    <Route path="/" element={<HomeTenant />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="tenant/home" element={<HomeTenant />} />
                    <Route path="/tenant/login" element={<TenantLogin />} />
                    <Route
                        path="/tenant/property-details/:id"
                        element={<PropertyDetails />}
                    />
                    <Route path="/tenant/search" element={<Search />} />
                    <Route
                        path="/tenant/search/results"
                        element={<SearchResult />}
                    />
                    {/* protected route */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
}
