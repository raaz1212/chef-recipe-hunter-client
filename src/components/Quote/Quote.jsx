// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { generate_quote } from "./quote-generator";

function QuoteCard() {
  const [quote, setQuote] = useState(generate_quote());

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(generate_quote());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 flex flex-col justify-center h-full bg-sky-200">
      <div className="uppercase underline tracking-wide text-sm text-indigo-800 font-bold">
        Quote of the Day
      </div>
      <div className="flex-grow flex items-center justify-center">
        <h1 className="block mt-1 text-center text-base md:text-xs md:text-sm lg:text-lg leading-tight font-medium text-black hover:touch-pan-up h-24 overflow-hidden">
          {quote}
        </h1>
      </div>
      <p className="text-center mt-auto">
        <small>Enjoy every bite of your food.</small>
      </p>
    </div>
  );
}

export default QuoteCard;
