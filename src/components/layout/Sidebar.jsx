import {
  BarChart3,
  Calendar,
  Settings,
  ShoppingBag,
  Zap,
  CreditCard,
  FileText,
  MessageSquare,
  LayoutDashboard,
  Users,
  ChevronDown,
  Package,
} from 'lucide-react';
import React from 'react';

const menuItems = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
    active: true,
    badge: 'New',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    label: 'Analytics',
    submenus: [
      { id: 'overview', label: 'Overview' },
      { id: 'reports', label: 'Reports' },
      { id: 'insights', label: 'Insights' },
    ],
    // active: true,
    // badge: 'New',
  },
  {
    id: 'users',
    icon: Users,
    label: 'Users',
    count: '2.4k',
    submenus: [
      { id: 'all-users', label: 'All Users' },
      { id: 'roles', label: 'Roles & Permissions' },
      { id: 'activity', label: 'Activity' },
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    label: 'E-Commerce',
    submenus: [
      { id: 'products', label: 'Products' },
      { id: 'orders', label: 'Orders' },
      { id: 'customers', label: 'Customers' },
    ],
    // active: true,
    // badge: 'New'
  },
  {
    id: 'inventory',
    icon: Package,
    label: 'Inventory',
    count: '647',
  },
  {
    id: 'transactions',
    icon: CreditCard,
    label: 'Transactions',
  },
  {
    id: 'messages',
    icon: MessageSquare,
    label: 'Messages',
    badge: '12',
  },
  {
    id: 'calendar',
    icon: Calendar,
    label: 'Calendar',
  },
  {
    id: 'reports',
    icon: LayoutDashboard,
    label: 'Reports',
  },
  {
    id: 'settings',
    icon: Settings,
    label: 'Settings',
  },
];

const Sidebar = ({
  sidebarCollapsed,
  onToggleSidebar,
  currentPage,
  onPageChange,
}) => {
  const [expandedMenus, setExpandedMenus] = React.useState(
    new Set(['analytics'])
  );

  const toggleExpandedMenu = (menuId) => {
    const newExpandedMenus = new Set(expandedMenus);

    if (newExpandedMenus.has(menuId)) {
      newExpandedMenus.delete(menuId);
    } else {
      newExpandedMenus.add(menuId);
    }
    setExpandedMenus(newExpandedMenus);
  };

  return (
    <div
      className={`${sidebarCollapsed ? 'w-20' : 'w-72'} relative z-10 flex flex-col border-r border-slate-200/50 bg-white/80 transition-all duration-300 ease-in-out backdrop:blur-xl dark:border-slate-700/50 dark:bg-slate-900/80`}
    >
      {/*Logo */}
      <div className='border-b border-slate-200/50 p-6 dark:border-slate-700/50'>
        <div className='flex items-center space-x-3'>
          <div className='flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-purple-600 shadow-lg'>
            <Zap className='h-6 w-6 text-white' />
          </div>

          {/*Conditionals */}
          {!sidebarCollapsed && (
            <div>
              <h2 className='text-xl font-bold text-slate-500 dark:text-white'>
                Kazmatics
              </h2>
              <p className='text-xs text-slate-500 dark:text-slate-400'>
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/*Navigations for dynamic content */}
      <nav className='flex-1 space-y-2 overflow-y-auto p-4'>
        {menuItems.map((item) => {
          const Id = item.id;
          const Icon = item.icon;
          const Label = item.label;
          const Badge = item.badge;
          const Count = item.count;
          const Active = item.active;

          return (
            <div key={Id}>
              <button
                className={`flex w-full items-center justify-between rounded-xl p-3 transition-all duration-200 ${
                  currentPage === Id || Active
                    ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50'
                }`}
                onClick={() => {
                  if (item.submenus) {
                    toggleExpandedMenu(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
              >
                <div className='flex items-center space-x-3'>
                  <Icon className={`h-5 w-5`} />
                  {/* Conditional Rendering */}
                  {!sidebarCollapsed && (
                    <>
                      <span className='ml-2 font-medium'>{Label}</span>

                      {Badge && (
                        <span className='rounded-full bg-red-500 px-2 py-1 text-xs text-white'>
                          {Badge}
                        </span>
                      )}

                      {Count && (
                        <span className='rounded-full bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300'>
                          {Count}
                        </span>
                      )}
                    </>
                  )}
                </div>

                {item.submenus && !sidebarCollapsed && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200`}
                  />
                )}
              </button>

              {/* Submenus */}
              {item.submenus &&
                !sidebarCollapsed &&
                expandedMenus.has(item.id) && (
                  <div className='mt-2 ml-8 space-y-1'>
                    {item.submenus.map((subitmen) => {
                      return (
                        <button className='w-full rounded-lg p-2 text-left text-sm text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200'>
                          {subitmen.label}
                        </button>
                      );
                    })}
                  </div>
                )}
            </div>
          );
        })}
      </nav>

      {/*Profile */}
      {!sidebarCollapsed && (
        <div className='border-t border-slate-200/50 p-4 dark:border-slate-700'>
          <div className='flex items-center space-x-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50'>
            <img
              src='/images/Passport.jpeg'
              alt='Profile Photo'
              className='h-10 w-10 rounded-full ring-2 ring-blue-500'
            />
            <div className='min-w-0 flex-1'>
              <p className='truncate text-sm font-medium text-slate-800 dark:text-white'>
                Amuzat Kazeem
              </p>
              <p className='truncate text-xs text-slate-500 dark:text-slate-400'>
                Administrator
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
