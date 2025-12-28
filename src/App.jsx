import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

const App = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('dashboard');

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 transition-all duration-500 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        {/* Main content area */}
        <div className='flex flex-1 flex-col overflow-hidden'>
          <Header
            sidebarCollapsed={sidebarCollapsed}
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
