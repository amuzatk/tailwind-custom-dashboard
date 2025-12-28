// // src/App.jsx
import DashboardLayout from './components/layout/DashboardLayout';

const App = () => {
  return <DashboardLayout />;
};

export default App;




// // src/App.jsx
// import React from 'react';
// import DashboardLayout from './components/layout/DashboardLayout';

// const App = () => {
//   return (
//     <DashboardLayout>
//       <div className='rounded-xl bg-white p-6 shadow-sm'>
//         <h2 className='text-xl font-semibold'>Dashboard Content</h2>
//         <p className='text-slate-500'>
//           This content will change per page.
//         </p>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default App;






// //src/App.jsx
// import React from 'react';
// import Sidebar from './components/layout/Sidebar';
// import Header from './components/layout/Header';

// const App = () => {
//   // const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
//   const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
//   const [currentPage, setCurrentPage] = React.useState('dashboard');

//   return (
//     <div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 transition-all duration-500 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900'>
//       <div className='flex h-screen overflow-hidden'>
//         <Sidebar
//           sidebarCollapsed={sidebarCollapsed}
//           onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
//         {/* Main content area */}
//         <div className='flex flex-1 flex-col overflow-hidden'>
//           <Header
//             sidebarCollapsed={sidebarCollapsed}
//             onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
