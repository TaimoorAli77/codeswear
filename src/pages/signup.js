import React from 'react';
import Link from 'next/link';

const Signup = () => {
  return (
    <>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-15 w-25 h-25" src="/logo.png" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-pink-900">Signup in to your account</h2>
          <p className='mt-2 text-center  text-sm text-gray-600 '> Or
            <Link href={'/login'} className="hover:text-pink-500 text-pink-600 font-medium"> Login</Link>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={'/'} method="POST">
          <div>
              <label for="name" className="block text-sm font-medium leading-6 text-pink-900">Name</label>
              <div className="mt-2">
                <input id="email" name="name" type="text" autocomplete="name" required className="block w-full rounded-md border-0 py-1.5 text-pink-900 shadow-sm ring-1 ring-inset ring-pink-300  p-2 placeholder:text-pink-400 focus:ring-2 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <label for="email" className="block text-sm font-medium leading-6 text-pink-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-pink-900 shadow-sm ring-1 ring-inset ring-pink-300  p-2 placeholder:text-pink-400 focus:ring-2 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label for="password" className="block text-sm  font-medium leading-6 text-pink-900">Password</label>
                
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full px-2 rounded-md border-0 py-1.5 text-pink-900 shadow-sm ring-1 ring-inset ring-pink-300 placeholder:text-pink-400  focus-visible:ring-pink-500 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Sign up</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-pink-500">
            Not a member?
            <Link href={'/signup'} className="font-semibold leading-6 text-pink-600 hover:text-pink-500">  Signup to enjoy</Link>
          </p>
        </div>
      </div>

    </>

  );
}

export default Signup;
