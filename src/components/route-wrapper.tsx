import { Route, Routes } from "react-router";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { OrderList } from "../pages/Order/order-list";
import { PrivateRoute } from "./private-route";
import { DeliveryManList } from "../pages/Deliveryman/deliveryman-list";
import { RecipientList } from "../pages/Recipient/recipient-list";
import { IssueList } from "../pages/Issue/issue-list";
import { SignUp } from "../pages/signup";

export function RouteWrapper() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard>{null}</Dashboard>
          </PrivateRoute>
        }
      />
      <Route
        path="/order"
        element={
          <PrivateRoute>
            <Dashboard><OrderList /></Dashboard>
          </PrivateRoute>
        }
      />
       <Route
        path="/deliveryman"
        element={
          <PrivateRoute>
            <Dashboard><DeliveryManList /></Dashboard>
          </PrivateRoute>
        }
      />
       <Route
        path="/recipient"
        element={
          <PrivateRoute>
            <Dashboard><RecipientList /></Dashboard>
          </PrivateRoute>
        }
      />
      <Route
        path="/issues"
        element={
          <PrivateRoute>
            <Dashboard><IssueList /></Dashboard>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
