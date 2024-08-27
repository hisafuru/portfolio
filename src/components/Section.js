import React from 'react';

function Section({ title, items }) {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold underline mb-2 ml-6">{title}</h3>
      <ol className="list-decimal pl-6">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </section>
  );
}

export default Section;