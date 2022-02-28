<template>
  <div>
    <div class="max-w-3xl mx-auto px-4 py-8">
      <div class="pt-6 text-3xl text-center font-bold text-indigo-500">
        metatags generator
      </div>

      <div class="pt-6">
        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
        <div class="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
          <input v-model="title" type="text" name="title" id="title" class="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm" placeholder="title of the app">
        </div>
      </div>
      <div class="pt-4">
        <label for="desc" class="block text-sm font-medium text-gray-700">Description</label>
        <div class="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
          <textarea v-model="description" rows="4" name="desc" id="desc" class="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm" placeholder="description of the app" />
        </div>
      </div>

      <div class="pt-4">
        <label for="image" class="block text-sm font-medium text-gray-700">Image URL</label>
        <div class="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
          <input v-model="image" type="text" name="image" id="image" class="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm" placeholder="image preview url">
        </div>
      </div>

      <div class="pt-4">
        <label for="website" class="block text-sm font-medium text-gray-700">Website URL</label>
        <div class="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
          <input v-model="url" type="text" name="website" id="website" class="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm" placeholder="website url e.g. https://example.com/">
        </div>
      </div>

      <div class="pt-6 border-t mt-8 border-dashed border-gray-100">
        <div class="block">
          <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
            <button @click="activeLanguage = languages.HTML" :class="languages.HTML === activeLanguage ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'" class="rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10" aria-current="page">
              <span>{{ languages.HTML }}</span>
              <span aria-hidden="true" :class="languages.HTML === activeLanguage ? 'bg-indigo-500' : 'bg-transparent'" class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"></span>
            </button>

            <button @click="activeLanguage = languages.Nuxt" :class="languages.Nuxt === activeLanguage ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'" class="group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
              <span>{{ languages.Nuxt }}</span>
              <span aria-hidden="true" :class="languages.Nuxt === activeLanguage ? 'bg-indigo-500' : 'bg-transparent'" class="absolute inset-x-0 bottom-0 h-0.5"></span>
            </button>
          </nav>
        </div>
      </div>

      <div class="pt-6">
        <div class="block text-sm font-medium text-gray-700">{{ activeLanguage }}</div>
        <pre class="overflow-auto rounded-md shadow-md px-4 text-gray-400 bg-gray-900">
          {{ code }}
        </pre>
      </div>

    </div>

  </div>
</template>

<script>
import {Template} from "~/constants";

const languages = Object.freeze({
  HTML: 'HTML',
  Nuxt: 'Nuxt',
})

export default {
  computed: {
    code() {
      let code;
      switch (this.activeLanguage) {
        case languages.Nuxt:
          code = Template.Nuxt.String
          break
        case languages.HTML:
          code = Template.HTML.String
      }

      return code.replaceAll('{{title}}', this.title)
        .replaceAll('{{description}}', this.description)
        .replaceAll('{{url}}', this.url)
        .replaceAll('{{image}}', this.image)
    },
  },
  data() {
    return {
      title: '',
      image: '',
      description: '',
      url: '',
      languages,
      activeLanguage: languages.Nuxt
    }
  }
}
</script>
