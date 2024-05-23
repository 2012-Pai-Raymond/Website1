import React from 'react';
import Image from "next/image";


export default function Home() {
  return (

    <main>
      <section id="section1" class="min-h-[500px] bg-gray-300 text-grey-500 flex items-center justify-center">
        <div class="max-w-8xl p-8">
          <h2 class="text-4xl font-bold mb-4">Section 1 Title</h2>
          <p class="text-lg">This is the content for section 1. It has a lightgrey background.</p>
        </div>
      </section>
      <section id="section2" class="min-h-[500[x]] bg-neutral-500 text-white flex items-center justify-center">
        <div class="max-w-4xl p-8">
          <h2 class="text-4xl font-bold mb-4">Section 2 Title</h2>
          <p class="text-lg">This is the content for section 2. It has a darker grey background.</p>
        </div>
      </section>
    </main>
  );
}
