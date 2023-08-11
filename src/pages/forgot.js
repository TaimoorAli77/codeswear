import Link from 'next/link';
import React from 'react';

const Forgot = () => {
  return (
    <>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-15 w-25 h-25" src="/logo.png" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-pink-900">Forgot Password</h2>
          <p className='mt-2 text-center  text-sm text-gray-600 '> Or
            <Link href={'/signup'} className="hover:text-pink-500 text-pink-600 font-medium"> Signin</Link>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={'/'} method="POST">
            <div>
              <label for="email" className="block text-sm font-medium leading-6 text-pink-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-pink-900 shadow-sm ring-1 ring-inset ring-pink-300  p-2 placeholder:text-pink-400 focus:ring-2 sm:text-sm sm:leading-6" />
              </div>
            </div>

              

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Sign in</button>
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

export default Forgot;
