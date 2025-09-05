import React from 'react'
import UrlForm from './Url_form'
import UserUrl from './UserUrl'

const DahboardPage = () => {
  return (
      <div>
      <div className="min-h-screen  bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
          <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
          <UrlForm/>
          <UserUrl/>
        </div>
      </div>
    </div>)
}

export default DahboardPage