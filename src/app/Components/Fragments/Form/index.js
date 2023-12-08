import React from 'react';

const Forms = () => {
  return (
    <form className="flex flex-col gap-8 min-h-full text-xl">
      <input
        className='className=" h-16 border border-gray-500 rounded-xl px-4 '
        type="text"
        name="name"
        placeholder="Insert Your Name"
      />

      <input
        className='className=" h-16 border border-gray-500 rounded-xl px-4 '
        type="email"
        name="email"
        placeholder="Insert Your Email"
      />

      <textarea
        className="h-26 border border-gray-500 rounded-xl px-4 py-4"
        placeholder="Insert Your Project"
      ></textarea>

      <button
        type="submit"
        className="text-sm bg-black text-white w-40 px-4 py-3 rounded-xl"
      >
        Send Message
      </button>
    </form>
  );
};
export default Forms;
