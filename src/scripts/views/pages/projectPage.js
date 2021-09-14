const ProjectPage = {
  async render() {
    return `
      <section class="flex justify-center px-6 mt-5 mx-auto w-full">
        <div class="w-full">
          <div class="divide-y divide-solid divide-blue-400">
            <h1 class="flex justify-center text-xl font-medium border-blue-400 cursor-pointer">
              My Project
            </h1>
          </div>

          <div class="mt-10 grid md:grid-cols-3 grid-cols-1 gap-2 w-full">

            <div class="w-full bg-blue-300">
              <img class="w-full h-60 rounded-lg object-cover" src="https://images.unsplash.com/photo-1521123946922-eb346044f2ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=623&q=80" alt="">
            </div>

            <div class="w-full bg-blue-300">
              <img class="w-full h-60 rounded-lg object-cover" src="https://images.unsplash.com/photo-1521123946922-eb346044f2ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=623&q=80" alt="">
            </div>

            <div class="w-full bg-blue-300">
              <img class="w-full h-60 rounded-lg object-cover" src="https://images.unsplash.com/photo-1521123946922-eb346044f2ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=623&q=80" alt="">
            </div>
          </div>
        </div>
      </section> 
    `;
  },

  async afterRender() {

  },
};


export default ProjectPage;
