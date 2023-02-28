import { ClockIcon } from '@heroicons/react/24/outline';
import React, { FC } from 'react'

interface IPageComponent {
  title: string;
  buttons?: any;
  children: any
}

const PageComponent: FC<IPageComponent> = ({ title, buttons = '', children }) => {
  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num);
  }
  return (
    <>
      <header className="bg-white">
        <div className="flex justify-between items-center mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
          {buttons}
        </div>
        <div className='space-y-1 container m-auto'>
          <hr className='border-gray-400' />
          <div className='flex justify-between text-base font-light'>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
          </div>
          <hr className='border-gray-400' /><hr className='border-gray-400' />
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </>
  )
}

export default PageComponent