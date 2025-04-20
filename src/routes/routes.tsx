import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protected";

const HomeTenant = lazy(() => import("@/pages/tenant/home"));

import NotFound from "@/layout/not-found";
import { LoadingPopUp } from "@/layout/loading";

export default function Router() {
    return (
        <>
            <Suspense fallback={<LoadingPopUp />}>
                <Routes>
                    <Route path="/" element={<HomeTenant />} />
                    {/* protected route */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
}
