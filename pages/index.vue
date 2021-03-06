<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Jhostin Osorio
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Jhostin Osorio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Esta es la página principal de Jhostin Osorio' },
        { hid: 'keywords', name: 'keywords', content: 'Jhostin Osorio, Jhostin Estefano Osorio Macazana'},
        {
          property: 'og:title',
          content: 'Jhostin Osorio',
          vmid: 'og:title'
        },
        // {
        //   property: 'og:image',
        //   content: '',
        //   vmid: 'og:image'
        // },
        {
          property: 'og:description',
          content: 'Esta es la página principal de Jhostin Osorio',
          vmid: 'og:description'
        },
        {
          property: 'twitter:title',
          content: `Jhostin Osorio`,
          vmid: 'twitter:title'
        },
        // {
        //   property: 'twitter:image',
        //   content: `${this.card ? this.card.participantA.image : ''}`,
        //   vmid: 'twitter:image'
        // },
        {
          property: 'twitter:description',
          content: 'Esta es la página principal de Jhostin Osorio',
          vmid: 'twitter:description'
        },
        {
          name: 'twitter:card',
          content: `summary_large_image`,
          vmid: 'twitter:card'
        }
      ],
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
