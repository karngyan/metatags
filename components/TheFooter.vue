<template>
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="pt-5 pb-12 flex items-center justify-center">
        <p class="mt-8 text-sm leading-6 text-zinc-400 md:mt-0 md:order-1">
          metatags generator • a side project by <span class="ceator-preview hover:text-indigo-500 text-zinc-800">
          <a class="hidden md:inline-block" rel="noreferrer" target="_blank" href="https://twitter.com/gyankarn">
          <creator-preview
            :avatar="avatar"
            :name="name"
            :description="description"
            :content="content" :mode="mode" class="underline underline-offset-2 decoration-2 decoration-violet-500"/>
          </a>
          <a class="inline-block md:hidden font-bold underline underline-offset-2 decoration-2 decoration-indigo-500" target="_blank" href="https://twitter.com/gyankarn">{{ name }} </a>
          </span>
        </p>
      </div>
    </div>
  </footer>

</template>

<script>
import CreatorPreview from 'vue-creator-preview';

export default {
  components: {
    CreatorPreview
  },
  data() {
    return {
      avatar: 'https://cdn.karngyan.com/karn.jpg',
      name: 'Karn',
      mode: 'light',
      description: 'Software Engineer who tinkers with side projects, every now n then.',
      content: `Hey, I am Karn 👋<br/> I build products for fun and mostly use it for myself.<br/><br/>
 If you're interested in building with me, reach out to me at my twitter: @gyankarn ✨`,
    }
  }
}
</script>

<style scoped>
>>> .CreatorPreview {
  /*@apply bg-zinc-900 shadow-lg !important;*/
}

>>> .CreatorPreview--Avatar {
  @apply h-20 w-20 !important;
}
</style>
