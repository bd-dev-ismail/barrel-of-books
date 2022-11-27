import React from 'react';
import { Link } from 'react-router-dom';
import errorlogo from '../../assets/errorlogo.png';
const ErrorPage = () => {
    return (
      <div>
        <section className="flex bg-primary min-h-screen items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
          <div className="container text-white  flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
            <img src={errorlogo} alt="" />
            <p className="text-3xl font-bold">
              Ops!! Something Wrong! Dont't Worry We are working on it.!
            </p>
            <Link
              rel="noopener noreferrer"
              href="/"
              className="px-8 py-3 font-semibold rounded border   dark:text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </section>
      </div>
    );
};

export default ErrorPage;