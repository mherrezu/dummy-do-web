<template>
<div class="h-screen m-0 bg-secondary-200">
    <div class="flex items-center">
        <div>
            <a href="/home">
                <img src="/src/components/icons/ArrowLeft.png" alt="ArrowLeft" class="w-10 m-10">
            </a>
        </div>
        <div>
            <h2 class="text-4xl text-primary-200">frontend</h2>
        </div>
    </div>
    <div class="flex justify-center items-center p-10">
      <div class="grid grid-cols-3 gap-8">
        <button class="bg-slate-50 py-4 px-10 text-xl text-primary-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-200 hover:text-secondary-200 duration-300">fundamentals</button>
        <button class="bg-slate-50 py-4 px-10 text-xl text-primary-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-200 hover:text-secondary-200 duration-300">frameworks</button>
        <button class="bg-slate-50 py-4 px-10 text-xl text-primary-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-200 hover:text-secondary-200 duration-300">libraries</button>
        <button class="bg-slate-50 py-4 px-10 text-xl text-primary-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-200 hover:text-secondary-200 duration-300">UX/UI</button>
        <button class="bg-slate-50 py-4 px-10 text-xl text-primary-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-200 hover:text-secondary-200 duration-300">best practices</button>
        <button class="bg-slate-50 py-4 px-10 text-xl text-primary-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-200 hover:text-secondary-200 duration-300">GitHub</button>
        <button class="bg-slate-50 py-4 px-10 text-xl text-primary-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-200 hover:text-secondary-200 duration-300">inspiration</button>
        <button class="bg-slate-50 py-4 px-10 text-xl text-primary-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-200 hover:text-secondary-200 duration-300">who to follow</button>
        <button class="bg-slate-50 py-4 px-10 rounded text-xl text-primary-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-200 hover:text-secondary-200 duration-300">interview Q&A</button>
      </div>
    </div>
</div>
</template>
  
  <script>
  export default {
    name: 'FrontendMain',
  }
  </script>
