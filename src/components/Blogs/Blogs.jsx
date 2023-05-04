import React, { useRef } from "react";
import ReactToPdf from "react-to-pdf";

const Blogs = () => {
  const componentRef = useRef(); //for react-to pdf

  return (
    <div>
      <ReactToPdf targetRef={componentRef} filename="blog.pdf">
        {({ toPdf }) => (
          <button
            className="btn btn-secondary mt-3 items-center"
            onClick={toPdf}
          >
            Download as PDF
          </button>
        )}
      </ReactToPdf>
      <div ref={componentRef}>
        <h1 className="mt-2 font-bold bg-stone-400 p-2 text-slate-950">
          Latest Blog Posts
        </h1>

        <div className="p-4 bg-sky-50 text-black">
          <h1 className="mt-4 font-bold">
            (a): Tell us the differences between uncontrolled and controlled
            components.
          </h1>
          <p>
            Uncontrolled vs Controlled Components:<br></br>In simple terms, a
            controlled component is a component in which the state of its form
            elements is controlled by React. This means that React manages the
            current state of the form elements and updates it when changes
            occur. On the other hand, uncontrolled components are form elements
            whose state is managed by the DOM. This means that the current state
            of the form elements is not controlled or managed by React.
          </p>
          <h1 className="mt-8 font-bold">
            (b): How to validate React props using PropTypes?
          </h1>
          <p>
            PropTypes:<br></br> PropTypes is a library used to check the types
            of props passed to a component in React. It provides a way to
            validate and ensure that the data passed to a component is of the
            correct type. This helps catch bugs early in development and makes
            code more reliable. To use PropTypes, you simply import the library
            and define the expected types for your props in the component's
            propTypes property.
          </p>
          <h1 className="mt-8 font-bold">
            (c): Tell us the difference between nodejs and express js.
          </h1>
          <p>
            Node.js vs Express.js:<br></br> Node.js is a runtime environment
            that allows JavaScript code to run outside of the browser. It is
            built on Chrome's V8 JavaScript engine and provides developers with
            a way to build scalable and high-performance applications using
            JavaScript. Express.js, on the other hand, is a web framework built
            on top of Node.js. It provides a set of tools and features for
            building web applications and APIs, such as routing, middleware, and
            template rendering. In summary, while Node.js is a runtime
            environment, Express.js is a web framework built on top of Node.js
            that provides a set of tools for building web applications.
          </p>
          <h1 className="mt-8 font-bold">
            (d): What is a custom hook, and why will you create a custom hook?
          </h1>
          <p>
            A custom hook:<br></br> A custom hook is a function in React that
            allows you to reuse stateful logic across multiple components. It is
            a way of abstracting away complex logic from components and making
            it reusable. Custom hooks are useful because they can help you write
            more modular and reusable code. They allow you to encapsulate
            stateful logic within a single function and reuse it throughout your
            application. A common use case for custom hooks is to encapsulate
            reusable logic that involves state management, network requests, or
            any other complex operation that can be used across multiple
            components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
