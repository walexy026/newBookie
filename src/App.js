import React from "react";
import { Route, Routes } from "react-router-dom";
import BooksPage from "./pages/AllBooks/BooksPage";
import Buybooks from "./pages/buy-books/Buybooks";
import Landingpage from "./pages/LandingPage/Landingpage";
import Savemoneypage from "./pages/savemoneypage/Savemoneypage";
import Savings from "./Components/Savings/Savings";
import AccountSettings from './Components/AccountSettings/AccountSettings'
import SecuritySettings from './Components/SecuritySettings/SecuritySettings'
import Sidebars from "./Components/Sidebars/Sidebars";
import Wallet from "./Components/Wallet/Wallet";
import Refferal from "./Components/Refferal/Refferal";
import Profiles from "./Components/Profiles/Profiles";
// import Dashboard from "./Pages/Dashboard/Dashboard"p
import Overview from "./Components/Overview/Overview";
import SignUp from "./pages/UserReg/SignUp";
import Login from "./pages/UserReg/Login";
import ForgetPassword from "./pages/UserReg/ForgetPassword";
// import SettingsLayout from "./layout/SettingsLayout";
import ReactOtpInput from "./pages/UserReg/ReactOtpInput";
import Settings from "./Components/Settings/Settings";
import PaystackAcct from "./Components/Paystacck/PaystackAcct";
// import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/pay" element={<PaystackAcct />} />
        
        <Route path="/allbooks" element={<BooksPage />} />
        <Route path="/savemoney" element={<Savemoneypage />} />
        <Route path="/buybooks" element={<Buybooks />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<ReactOtpInput />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/dashboard" element={<Sidebars />}>
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/dashboard/Savings" element={<Savings />} />
          <Route path="/dashboard/Profiles" element={<Profiles />} />
          <Route path="/dashboard/Refferal" element={<Refferal />} />
          <Route path="/dashboard/Wallet" element={<Wallet />} />
          <Route path="/dashboard/settings" element={<Settings />}>
            <Route path="/dashboard/settings/" element={<AccountSettings/>} />
            {/* <Route path="/dashboard/accountsettings" element={<AccountSettings/>} /> */}
            <Route path="/dashboard/settings/securitysettings" element={<SecuritySettings/>} />
          </Route>
        </Route>

  
      </Routes>
        
    </div>
  );
}
export default App;
