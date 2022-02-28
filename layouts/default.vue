<template>
<div>
  <div>
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div v-show="sidebarOpen" class="fixed inset-0 z-40 flex md:hidden" role="dialog" aria-modal="true">
      <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <transition
        enter-class="opacity-0"
        enter-active-class="transition-opacity ease-linear duration-300"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-300"
        leave-to-class="opacity-0"
      >
        <div v-show="sidebarOpen" class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
      </transition>
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <transition
        enter-class="-translate-x-full"
        enter-active-class="transition ease-in-out duration-300 transform"
        enter-to-class="translate-x-0"
        leave-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-300 transform"
        leave-to-class="-translate-x-full"
      >
        <div v-show="sidebarOpen" class="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
          <!--
            Close button, show/hide based on off-canvas menu state.

            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
          <div v-show="sidebarOpen" @click="sidebarOpen = false" class="absolute top-0 right-0 -mr-12 pt-2">
            <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Close sidebar</span>
              <!-- Heroicon name: outline/x -->
              <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="flex-shrink-0 px-4 flex items-center">
            <div class="h-8 w-auto text-xl font-medium text-indigo-800">tools.karngyan.com</div>
          </div>
          <div class="mt-5 flex-1 h-0 overflow-y-auto">
            <nav class="px-2 space-y-1">
              <nuxt-link exact to="/" class="active-sidebar text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" class="active-sidebar-svg text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clip-rule="evenodd" />
                </svg>
                  meta tags generator
              </nuxt-link>

            </nav>
          </div>
        </div>
      </transition>
      <div class="flex-shrink-0 w-14">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-white overflow-y-auto">
        <div class="flex-shrink-0 px-4 flex items-center">
          <div class="h-8 w-auto text-xl font-medium text-indigo-800">tools.karngyan.com</div>
        </div>
        <div class="flex-grow mt-5 flex flex-col">
          <nav class="flex-1 px-2 pb-4 space-y-1">
            <nuxt-link exact to="/" class="active-sidebar text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" class="active-sidebar-svg text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clip-rule="evenodd" />
              </svg>
              meta tags generator
            </nuxt-link>

          </nav>
        </div>
      </div>
    </div>

    <div class="md:pl-64">
      <button @click="sidebarOpen = true" class="flex md:hidden px-8 pt-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      </button>
      <div class="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
        <main class="flex-1">
          <div class="py-6">
            <div class="px-4 sm:px-6 md:px-0">
              <Nuxt />
              <TheFooter />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      sidebarOpen: false,
    }
  }
}
</script>

<style>
html {
  @apply font-sans;
}

.nuxt-link-active.active-sidebar {
  @apply bg-gray-100 text-gray-900;
}

.nuxt-link-active.active-sidebar-svg {
  @apply text-gray-500;
}
</style>
