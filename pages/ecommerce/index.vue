<template>
    <div>
        <h1>ECommerce de Jhostin Osorio</h1>
        <p>Aqui se muestran los productos del Ecommerce de Jhostin Osorio</p>
    </div>
</template>

<script>
export default {
    head() {
    return {
      title: 'Jhostin Osorio | ECommerce',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Esta es la página ecommerce de Jhostin Osorio' },
        { hid: 'keywords', name: 'keywords', content: 'Jhostin Osorio, Jhostin Estefano Osorio Macazana, ECommerce Jhostin Osorio, Jhostin Osorio ECommerce, Ecommerce'},
        {
          property: 'og:title',
          content: 'Jhostin Osorio | ECommerce',
          vmid: 'og:title'
        },
        {
          property: 'og:image',
          content: 'https://edteam-media.s3.amazonaws.com/users/avatar/eefaf3cc-ec4d-46f7-87d0-2759c1c87ecf.jpg',
          vmid: 'og:image'
        },
        {
          property: 'og:description',
          content: 'Esta es la página ecommerce de Jhostin Osorio',
          vmid: 'og:description'
        },
        {
          property: 'twitter:title',
          content: `Jhostin Osorio | ECommerce`,
          vmid: 'twitter:title'
        },
        {
          property: 'twitter:image',
          content: 'https://edteam-media.s3.amazonaws.com/users/avatar/eefaf3cc-ec4d-46f7-87d0-2759c1c87ecf.jpg',
          vmid: 'twitter:image'
        },
        {
          property: 'twitter:description',
          content: 'Esta es la página ecommerce de Jhostin Osorio',
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

</style>