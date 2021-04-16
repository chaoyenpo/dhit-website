import React from 'react'

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="relative bg-gray-900">
      <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
          alt=""
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
      <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
            下一步是什麼？
        </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">我們在這裡為您提供幫助</p>
          <p className="mt-3 text-lg text-gray-300">
            想做點什麼嗎？與我們的專家聊聊天吧！
        </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                聯繫我們
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
