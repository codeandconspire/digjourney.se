var html = require('choo/html')
var asElement = require('prismic-element')
var view = require('../components/view')
var Hero = require('../components/hero')
var slices = require('../components/slices')
var { asText, loader, resolve, src, HTTPError, metaKey } = require('../components/base')

module.exports = view(page, meta, 'page')

function page (state, emit) {
  return state.prismic.getByUID('page', state.params.slug, function (err, doc) {
    if (err) throw HTTPError(404, err)
    if (!doc) {
      return html`
        <main class="View-main">
          ${state.partial ? state.cache(Hero, `hero-${state.partial.id}`).render({
            theme: state.partial.data.theme,
            body: html`
              <h1>${asText(state.partial.data.title)}</h1>
              ${asElement(state.partial.data.description, resolve)}
            `
          }) : Hero.loading({ theme: 'gray' })}
          <div class="u-container u-space1">
            <div class="Text">
              ${loader(65)}
            </div>
          </div>
        </main>
      `
    }

    return html`
      <main class="View-main">
        ${state.cache(Hero, `hero-${doc.id}`).render({
          theme: doc.data.theme.toLowerCase(),
          body: html`
            <h1>${asText(doc.data.title)}</h1>
            ${asElement(doc.data.description, resolve)}
          `
        })}
        ${doc.data.body.map((slice, index, list) => slices(slice, index, list, onclick))}
      </main>
    `
  })

  // create link handler, emitting pushState w/ partial info
  // obj -> fn
  function onclick (doc) {
    return function (event) {
      if (metaKey(event)) return
      emit('pushState', event.currentTarget.href, { partial: doc })
      event.preventDefault()
    }
  }
}

function meta (state) {
  return state.prismic.getByUID('page', state.params.slug, (err, doc) => {
    if (err) throw err
    if (!doc) return { 'theme': 'gray' }
    var props = {
      theme: doc.data.theme.toLowerCase(),
      title: asText(doc.data.title),
      description: asText(doc.data.description)
    }

    var image = doc.data.featured_image
    if (image && image.url) {
      Object.assign(props, {
        'og:image': src(image.url, 1200),
        'og:image:width': 1200,
        'og:image:height': 1200 * image.dimensions.height / image.dimensions.width
      })
    }

    return props
  })
}
