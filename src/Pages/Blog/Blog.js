import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
      <div>
        <Helmet>
          <title>Blogs -Barrel Of Books</title>
        </Helmet>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="text-center">
              <p className="text-white badge badge-primary">For Bouns Marks</p>
              <h2 className="text-2xl font-semibold mb-10 sm:text-4xl">
                Most Asked Interview Questions
              </h2>
            </div>
            <div className="space-y-4 mx-auto">
              <details className="w-full lg:w-[800px] border border-primary rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  What are the different ways to manage a state in a React
                  application?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  The Four Kinds of React State to Manage Local state Global
                  state Server state URL state Local (UI) state – Local state is
                  data we manage in one or another component.Local state is most
                  often managed in React using the useState hook. Example: the
                  local state would be needed to show or hide a modal component
                  or to track values for a form component, such as form
                  submission, when the form is disabled and the values of a
                  form’s inputs. Global (UI) state – Global state is data we
                  manage across multiple components. Global state is necessary
                  when we want to get and update data anywhere in our app, or in
                  multiple components at least. Server state – Data from an
                  external server must be integrated with our UI state. Server
                  state is a simple concept but can be hard to manage alongside
                  all of our local and global UI states. There are several
                  pieces of state that must be managed every time you fetch or
                  update data from an external server, including loading and
                  error states. URL state – Data that exists on our URLs,
                  including the pathname and query parameters. URL state is
                  often missing as a category of state, but it is an important
                  one. In many cases, a lot of major parts of our application
                  rely upon accessing URL state. Try to imagine building a blog
                  without being able to fetch a post based off of its slug or id
                  that is located in the URL!
                </p>
              </details>
              <details className="w-full lg:w-[800px] border border-primary rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  How does prototypical inheritance work?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  The Prototypal Inheritance is a feature in javascript used to
                  add methods and properties in objects. It is a method by which
                  an object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the
                  [[Prototype]] of an object, we use Object.getPrototypeOf and
                  Object
                </p>
              </details>
              <details className="w-full lg:w-[800px] border border-primary rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  What is a unit test? Why should we write unit tests?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Unit Testing is a type of software testing where individual
                  units or components of a software are tested. The purpose is
                  to validate that each unit of the software code performs as
                  expected. Unit Testing is done during the development (coding
                  phase) of an application by the developers. Unit Tests isolate
                  a section of code and verify its correctness. A unit may be an
                  individual function, method, procedure, module, or object.Unit
                  Testing is important because software developers sometimes try
                  saving time doing minimal unit testing and this is myth
                  because inappropriate unit testing leads to high cost Defect
                  fixing during System Testing, Integration Testing and even
                  Beta Testing after application is built. If proper unit
                  testing is done in early development, then it saves time and
                  money in the end.
                </p>
              </details>
              <details className="w-full lg:w-[800px] border border-primary rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  React vs. Angular vs. Vue?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  React offers a Getting Started guide that should help one set
                  up React in about an hour. The documentation is thorough and
                  complete, with solutions to common issues already present on
                  Stack Overflow. React is not a complete framework and advanced
                  features require the use of third-party libraries. This makes
                  the learning curve of the core framework not so steep but
                  depends on the path you take with additional functionality.{" "}
                  <br />
                  Angular has a steep learning curve, considering it is a
                  complete solution, and mastering Angular requires you to learn
                  associated concepts like TypeScript and MVC. Even though it
                  takes time to learn Angular, the investment pays dividends in
                  terms of understanding how the front end works. <br />
                  Vue provides higher customizability and hence is easier to
                  learn than Angular or React. Further, Vue has an overlap with
                  Angular and React with respect to their functionality like the
                  use of components. Hence, the transition to Vue from either of
                  the two is an easy option.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Blog;