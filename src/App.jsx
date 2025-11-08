import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Members from "./pages/Members";
import Loans from "./pages/Loans";
import Export from "./pages/Export";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <TopBar />
          <main className="p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/books" element={<Books />} />
              <Route path="/members" element={<Members />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/export" element={<Export />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}