import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-190px)]">
      <div className="text-left max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-8">This is the Contact page.</p>
        <ContactForm />
        <ul className="grid grid-cols-2 gap-4 list-none">
          <li>
            <a href="https://qiita.com/kyuko" className="min-w-72 shadow-md block border border-gray-300 text-center py-16 px-4 rounded-lg hover:bg-gray-100">
              Qiita
            </a>
          </li>
          <li>
            <a href="https://github.com/hisafuru" className="min-w-72 shadow-md block border border-gray-300 text-center py-16 px-4 rounded-lg hover:bg-gray-100">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://x.com/nvidia_inside" className="min-w-72 shadow-md block border border-gray-300 text-center py-16 px-4 rounded-lg hover:bg-gray-100">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://zenn.dev/kyuko" className="min-w-72 shadow-md block border border-gray-300 text-center py-16 px-4 rounded-lg hover:bg-gray-100">
              Zenn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;