<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Jhostin Osorio
      </h1>
      <div class="links">
        <nuxt-link
          to="/about"
          class="button--grey"
        >
          Acerca de
        </nuxt-link>
      </div>
      <p>Esta es la página principal de Jhostin Estefano Osorio Macazana, acompañada de una breve explicación.</p>
      <section>
        <h2>La historia de Jhostin Osorio</h2>
        <p>
          Nació en el año 1998 del mes de octubre del dia 18.
        </p>
      </section>
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
        {
          property: 'og:image',
          content: 'https://edteam-media.s3.amazonaws.com/users/avatar/eefaf3cc-ec4d-46f7-87d0-2759c1c87ecf.jpg',
          vmid: 'og:image'
        },
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
        {
          property: 'twitter:image',
          content: 'https://edteam-media.s3.amazonaws.com/users/avatar/eefaf3cc-ec4d-46f7-87d0-2759c1c87ecf.jpg',
          vmid: 'twitter:image'
        },
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
  font-size: 90px;
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
