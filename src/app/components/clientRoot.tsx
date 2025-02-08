"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "app/authContext"; 
import LoginHeader from "./layout/loginHeader";
import Header from "./layout/header";
import FooterContact from "./layout/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const [authState, setAuthState] = useState(isAuthenticated);

  useEffect(() => {
    setAuthState(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <>
      <header>{authState ? <Header /> : <LoginHeader />}</header>
      <main>{children}</main>
      <FooterContact />
    </>
  );
};



// ClientRoot wraps the app in AuthProvider and Layout
export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return (
 
      <Layout>{children}</Layout>
   
  );
}