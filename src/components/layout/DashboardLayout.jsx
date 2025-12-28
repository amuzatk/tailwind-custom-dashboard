// src/components/layout/DashboardLayout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Analytics from '../../pages/Analytics';
import Users from '../../pages/Users';
import Dashboard from '../../pages/Dashboard';
import Inventory from '../../pages/Inventory';
import Activity from '../../pages/Activity';
import Insights from '../../pages/Insight';
import Overview from '../../pages/Overview';
import Reports from '../../pages/Reports';
import Roles from '../../pages/Roles';

const DashboardLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('dashboard');

const renderPage = (page) => {
  switch (page) {
    case 'overview':
      return <Overview />;
    case 'reports':
      return <Reports />;
    case 'insights':
      return <Insights />;

    case 'all-users':
      return <Users />;
    case 'users-roles':
      return <Roles />;
    case 'users-activity':
      return <Activity />;

    case 'inventory':
      return <Inventory />;

    case 'dashboard':
    default:
      return <Dashboard />;
  }
};


//   const renderPage = (page) => {
//   switch (page) {
//     case 'analytics':
//       return <Analytics />;
//     case 'users':
//       return <Users />;
//     case 'inventory':
//       return <Inventory />;
//     case 'dashboard':
//     default:
//       return <Dashboard />;
//   }
// };

  return (
    <div
    className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900'
    // className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 transition-all duration-500 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900'
    >
      <div className='flex h-screen overflow-hidden'>
        <Sidebar
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />

        <div style={{border:'2px solid red'}} 
        className='flex flex-1 flex-col overflow-hidden'
        >
          <Header
            sidebarCollapsed={sidebarCollapsed}
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          {/* Main Page Content */}
          <main className='flex-1 overflow-y-auto p-4'>
             {renderPage(currentPage)}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
