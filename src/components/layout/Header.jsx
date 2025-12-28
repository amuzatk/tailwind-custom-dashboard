//src/components/layout/Header.jsx
import React from 'react';
import {
  Filter,
  Menu,
  Search,
  Plus,
  Sun,
  Bell,
  Settings,
  ChevronDown,
} from 'lucide-react';

const Header = ({ sidebarCollapsed, onToggleSidebar }) => {
  return (
    <div className='dark:bg-white-900/80 border-b border-slate-200/50 bg-white/80 px-6 py-4 backdrop-blur-xl dark:border-slate-700/50'>
      <div className='flex items-center justify-between'>
        {/* Left Header Area */}
        <div className='flex items-center space-x-4'>
          <button onClick={onToggleSidebar} className='rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'>
            {/* Menu Icon */}
            <Menu className='h-5 w-5' />
          </button>

          <div className='hidden md:block'>
            <h1 className='text-2xl font-black text-slate-800 dark:text-white'>
              Dashboard
            </h1>
            <p>Welcome back, Kazeem! here's what's happeening today</p>
          </div>
        </div>

        {/* Center Header Area */}
        <div className='mx-8 max-w-md flex-1'>
          <div className='relative'>
            <Search className='absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-slate-400' />
            <input
              type='text'
              className='w-full rounded-xl border border-slate-200 bg-slate-100 py-2.5 pr-4 pl-10 text-slate-800 placeholder-slate-500 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white'
              placeholder='Search Anything'
            />
            <button className='absolute top-1/2 right-2 -translate-y-1/2 transform p-1.5 hover:text-slate-600 dark:hover:text-slate-300'>
              <Filter className=' ' />
            </button>
          </div>
        </div>

        {/* Right Header Areea */}
        <button className='transition-all hidden cursor-pointer items-center space-x-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 px-4 py-2 text-white hover:shadow-lg lg:flex'>
          {/* Quick Actions */}
          <Plus className='h-4 w-4' />
          <span className='text-sm font-medium'>New</span>
        </button>
        {/* Toggle */}
        <button className='cursor-pointer rounded-xl p-2.5 text-slate-600 transition-colors hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-600'>
          <Sun className='h-5 w-5' />
        </button>
        {/* Notification */}
        <button className='relative rounded-xl p-2.5 text-slate-600 transition-colors hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-600'>
          <Bell className='h-5 w-5' />
          <span className='absolute -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
            3
          </span>
        </button>
        {/* Settings */}
        <button className='relative rounded-xl p-2.5 text-slate-600 transition-colors hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-600'>
          <Settings className='h-5 w-5' />
        </button>

        {/*Profile */}
        <div className='flex items-center space-x-3 border-l border-slate-200 pl-3 dark:border-slate-700'>
          <img
            src='/images/Passport.jpeg'
            alt='User'
            className='h-8 w-8 rounded-full ring-2 ring-blue-500'
          />
          <div className='hidden md:block'>
            <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>
              Amuzat Kazeem
            </p>
            <p className='text-xs text-slate-500 dark:text-slate-400'>
              Administrator
            </p>
          </div>
          <ChevronDown className='h-4 w-4 text-slate-400' />
        </div>
      </div>
    </div>
  );
};

export default Header;
