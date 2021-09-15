/* eslint-disable max-len */
const FrontPage = {
  async render() {
    return `
      <section class="w-full max-h-screen">
        <div class="mt-4">
          <div class="mx-auto">
            <img class="w-44 h-44 mx-auto rounded-full object-cover" src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="profile">
          </div>

          <div class="mx-auto mt-6 text-center text-sm">
            <h1 class="text-xl font-medium">Agung Saepudin</h1>
            <p class="text-center mt-3">
              Hi, I'm Agung Saepudin, a 
              <span class="font-bold">Fullstack Developer.</span>
            </p>
            <p>
              For the Front end i usually use the 
              <span class="font-bold">Vue JS</span>
            </p>
            <p>
              while for the Backend i usually use
            </p>
            <p class="font-bold">Express JS</p>

            <button class="mt-6 px-5 py-2 rounded-lg text-base shadow text-white bg-gradient-to-b from-blue-400 to-purple-500 hover:form-blue-500 hover:to-purple-600 font-medium">
              My Resume
            </button>
          </div>
        </div>
      </section>  
    `;
  },

  async afterRender() {

  },
};


export default FrontPage;
