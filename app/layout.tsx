"use client"

import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { metadata } from "./metadata";

const fig = Figtree({ subsets: ["latin"] });

const data = metadata;

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fig.className}>
        <Sidebar>
        <QueryClientProvider client={queryClient} > 
          {children}
        </QueryClientProvider>
          </Sidebar>
      </body>
    </html>
  );
}
