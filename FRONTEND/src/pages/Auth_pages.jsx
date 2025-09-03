import React from 'react'
import LoginForm from '../components/Login_form'
import { useState } from 'react';
import Register_form from '../components/Register_form';

const Auth_pages = () => {
  const [Login, setLogin] = useState(false);
 

  return (
<>
   <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
          {Login ? <LoginForm  state={ setLogin } /> : <Register_form state={ setLogin } />}
        </div>
      </div>
    
</>
  )
}

export default Auth_pages