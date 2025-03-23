import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Importing pages
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { HelpPage } from "./pages/Help";
import { CustomerPage } from "./pages/Customer";
import { AccountPage } from "./pages/Account";
import { DepositPage } from "./pages/Deposit";
import { PaymentsPage } from "./pages/Payments";
import { CreditCardPage } from "./pages/CreditCard";
import { LoanDetailsPage } from "./pages/LoanDetails";
import { ErrorPage } from "./pages/Error";
import ComingSoon from "./Components/ComingSoon";
import { AccountHolder } from "./pages/Accholder";

// App Layout Component
export const AppLayout = () => {
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    );
};

// Define App Router with all routes
export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: 'AccountHolderPage', element: <AccountHolder /> },
            { path: "about", element: <AboutPage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "help", element: <HelpPage /> },
            { path: "customer", element: <CustomerPage /> },
            { path: "account", element: <AccountPage /> },
            { path: "deposit", element: <DepositPage /> },
            { path: "payment", element: <PaymentsPage /> },
            { path: "credit-cards", element: <CreditCardPage /> },
            { path: "loan-details", element: <LoanDetailsPage /> },
            // Sub-routes for specific pages
            { path: "account/savings", element: <ComingSoon /> },
            { path: "account/salary", element: <ComingSoon /> },
            { path: "account/current", element: <ComingSoon /> },
            { path: "deposit/fixed", element: <ComingSoon /> },
            { path: "deposit/recurring", element: <ComingSoon /> },
            { path: "payment/transfer", element: <ComingSoon /> },
            { path: "payment/loan", element: <ComingSoon /> },
            { path: "payment/credit-bill", element: <ComingSoon /> },
            { path: "payment/contactless", element: <ComingSoon /> },
            { path: "credit-cards/loan", element: <ComingSoon /> },
            { path: "credit-cards/debit", element: <ComingSoon /> },
            { path: "credit-cards/prepaid", element: <ComingSoon /> },
            { path: "loan-details/personal", element: <ComingSoon /> },
            { path: "loan-details/home", element: <ComingSoon /> },
            { path: "loan-details/car", element: <ComingSoon /> },
            { path: "loan-details/smart", element: <ComingSoon /> },
            { path: "customer/care", element: <ComingSoon /> },
            { path: "customer/forms", element: <ComingSoon /> },
            { path: "customer/faqs", element: <ComingSoon /> },
            { path: "customer/report", element: <ComingSoon /> },
            { path: "notifications", element: <ComingSoon /> },
        ],
    },
]);
