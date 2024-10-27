import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section className="bg-white p-8 m-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 italic">Our Portfolio</h2>
        <p className="text-gray-700">Here are some of my recent projects.</p>
        <div className="  grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-200 p-6 rounded bg-stone-900 text-white hover:text-white cursor-pointer ">Project 1</div>
          <div className="bg-gray-200 p-6 rounded bg-stone-900 text-white hover:text-white cursor-pointer">Project 2</div>
          <div className="bg-gray-200 p-6 rounded bg-stone-900 text-white hover:text-white cursor-pointer">Project 3</div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
