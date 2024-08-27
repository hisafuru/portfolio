import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xqaznqld");
  if (state.succeeded) {
      return <p className="text-green-500">お問い合わせありがとうございます．通常3日以内にご返信いたします．</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl mb-4 mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
      <div>
        <label htmlFor="email" className="block font-bold mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className="w-full border border-gray-300 p-2 rounded-lg"
          placeholder="メールアドレス"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-500 mt-1"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full border border-gray-300 p-2 rounded-lg"
          rows="4"
          placeholder="メッセージ"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500 mt-1"
        />
      </div>
      <button type="submit" disabled={state.submitting} className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-400 disabled:opacity-50">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;