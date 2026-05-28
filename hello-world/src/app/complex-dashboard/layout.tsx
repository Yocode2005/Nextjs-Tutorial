import UserAnalytics from "path/to/UserAnalytics";
import RevenueMatrics from "path/to/RevenueMetrics";
import Notifications from "path/to/Notifications";

export default function ComplexDashboardLayout({
    children,
}: {
    children: React.ReactNode
}){
    return (
        <>
         <div>{children}</div> {/*Content form page.tsx */}
        <UserAnalytics /> {/* Component for user analytics */ }
        <RevenueMatrics /> {/* Component for revenue metrics */ }
        <Notifications /> {/* Component for notifications */ } 
        </>
    );
}