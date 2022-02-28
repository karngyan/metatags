export const Template = Object.freeze({
  HTML: {
    String: `
<!-- Copy this code in the <head> tag -->

<!-- Primary Meta Tags -->
<title>{{title}}</title>
<meta name="title" content="{{title}}">
<meta name="description" content="{{description}}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="{{url}}">
<meta property="og:title" content="{{title}}">
<meta property="og:description" content="{{description}}">
<meta property="og:image" content="{{image}}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="{{url}}">
<meta property="twitter:title" content="{{title}}">
<meta property="twitter:description" content="{{description}}">
<meta property="twitter:image" content="{{image}}">
    `
  },
  Nuxt: {
    String: `
// Global page headers: https://go.nuxtjs.dev/config-head
head: {
  title: '{{title}}',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },

    // primary
    { name: 'title', content: '{{title}}' },
    { hid: 'description', name: 'description', content: '{{description}}' },

    // open graph / facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: '{{url}}' },
    { property: 'og:title', content: '{{title}}' },
    { property: 'og:description', content: '{{description}}' },
    { property: 'og:image', content: '{{image}}' },

    // twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: '{{url}}' },
    { property: 'twitter:title', content: '{{title}}' },
    { property: 'twitter:description', content: '{{description}}' },
    { property: 'twitter:image', content: '{{image}}' },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
},
    `
  }
})
