'use client';
import React, { useState, FormEvent } from 'react';

const MyPage = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [reversedString, setReversedString] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setReversedString('');

    try {
      const res = await fetch('/api/reverse-string', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: inputValue }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Network response was not ok');
      }

      const data = await res.json();
      if (data.reversedString) {
        setReversedString(data.reversedString);
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Error:', error); // Log the error
      setError('An error occurred while processing your request: ' + error);
    }
  };

  return (
    <div className="flex justify-center items-start mt-10">
      <div className="w-72">
        <form onSubmit={handleSubmit}>
          <div className="relative w-full min-w-[200px] h-10">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Type input
            </label>
            <button
              type="submit"
              className="w-72 h-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
        {reversedString && <p className="mt-12 text-green-500">Reversed: {reversedString}</p>}
        {error && <p className="mt-12 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default MyPage; 

