const html = require('choo/html')

module.exports = {
  logo: function (classList) {
    return html`
      <svg class="${classList}" viewBox="0 0 89 27">
        <title>boma</title>
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M82.76 22.18h-7.91a5.77 5.77 0 0 1-5.73-5.8c0-3.19 2.57-5.79 5.74-5.79h.13a5.82 5.82 0 0 1 5.52 5.92v2.68c0 .93.54 1.77 1.38 2.16l.96.45c.19.1.12.38-.09.38zm-50.08 0a5.77 5.77 0 0 1-5.74-5.8c0-3.19 2.57-5.79 5.74-5.79 3.16 0 5.73 2.6 5.73 5.8 0 3.2-2.57 5.79-5.73 5.79zm-18.54 0h-.21a5.88 5.88 0 0 1-5.52-5.92v-2.71c0-.92-.52-1.75-1.34-2.14l-.92-.44c-.19-.1-.12-.38.09-.38H14a5.85 5.85 0 0 1 5.87 5.63 5.77 5.77 0 0 1-5.74 5.96zM89 24.36c0-1.2-.97-2.18-2.16-2.18h-1.45V5.77h-2.71c-.74 0-1.43.38-1.83 1.03l-.36.6-.61-.34a10.3 10.3 0 0 0-5-1.29h.02-.13c-2.9 0-5.54 1.2-7.44 3.14a7.97 7.97 0 0 0-6.28-3.14 8 8 0 0 0-5.2 1.92l-.47.4-.47-.4a8 8 0 0 0-5.43-1.92 8.15 8.15 0 0 0-7.43 5.8 10.5 10.5 0 0 0-9.37-5.8 10.5 10.5 0 0 0-9.28 5.65 10.76 10.76 0 0 0-9.44-5.65H8.42l-.01-3.6C8.4.98 7.44 0 6.25 0H3.62l.02 5.77H0l.01 2.64c0 1.2.97 2.18 2.16 2.18h1.45l.02 5.8c0 6.12 5.16 11.05 11.33 10.58a10.54 10.54 0 0 0 8.44-5.58A10.5 10.5 0 0 0 32.67 27c3.8 0 7.14-2.05 8.99-5.1V27h4.78v-2.78l-.01-10.23a3.36 3.36 0 0 1 3.28-3.4 3.3 3.3 0 0 1 3.28 3.31V27h4.78v-3.34l-.01-9.67a3.36 3.36 0 0 1 3.28-3.4 3.3 3.3 0 0 1 3.28 3.31v1.46A10.57 10.57 0 0 0 74.78 27H89l-.01-2.64z" />
      </svg>
    `
  },
  global: function (classList) {
    return html`
      <svg class="${classList}" viewBox="0 0 84 30">
        <path
          fill="currentColor"
          fill-rule="nonzero"
          d="M13.4 9.86V7.64h3.15v14.3c0 2.29-.75 4.03-2.23 5.26a8.23 8.23 0 0 1-5.42 1.83c-3.42 0-5.77-1.2-7.05-3.63l2.77-1.62c.77 1.53 2.23 2.3 4.34 2.3 2.77 0 4.43-1.52 4.43-4.13v-1.83a5.95 5.95 0 0 1-5.17 2.6 7.12 7.12 0 0 1-5.33-2.24 7.67 7.67 0 0 1-2.17-5.5c0-2.12.71-3.95 2.17-5.45a7.04 7.04 0 0 1 5.33-2.28c2.23 0 3.95.87 5.17 2.6zm-8.13 8.49c.92.9 2.05 1.35 3.4 1.35 1.33 0 2.46-.45 3.35-1.35a4.48 4.48 0 0 0 1.37-3.36c0-1.35-.44-2.46-1.37-3.36a4.56 4.56 0 0 0-3.36-1.35 4.56 4.56 0 0 0-4.73 4.71c0 1.35.45 2.46 1.34 3.36zm17.88 4.29h-3.21V.74h3.2v21.9zm10.38.39a7.56 7.56 0 0 1-5.56-2.28 7.66 7.66 0 0 1-2.3-5.61c0-2.22.78-4.08 2.3-5.61a7.56 7.56 0 0 1 5.56-2.28c2.2 0 4.05.75 5.56 2.28a7.66 7.66 0 0 1 2.3 5.6c0 2.23-.78 4.09-2.3 5.62a7.5 7.5 0 0 1-5.56 2.28zm-3.3-4.5c.89.9 1.99 1.35 3.3 1.35 1.3 0 2.4-.45 3.3-1.35.9-.9 1.34-2.04 1.34-3.4 0-1.34-.45-2.48-1.34-3.38-.9-.9-2-1.35-3.3-1.35-1.31 0-2.41.45-3.3 1.35-.9.9-1.34 2.04-1.34 3.39s.44 2.49 1.34 3.39zM52.36 7.25c2.05 0 3.78.75 5.24 2.28a7.8 7.8 0 0 1 2.17 5.6c0 2.2-.72 4.09-2.17 5.62a6.94 6.94 0 0 1-5.24 2.28 6 6 0 0 1-5.2-2.55v2.16h-3.22v-21h3.21v8.13a6.04 6.04 0 0 1 5.21-2.52zm-3.87 11.34c.9.9 2.03 1.35 3.36 1.35 1.34 0 2.47-.45 3.37-1.35a4.77 4.77 0 0 0 1.34-3.45 4.65 4.65 0 0 0-4.7-4.8 4.65 4.65 0 0 0-4.7 4.8c0 1.38.44 2.52 1.33 3.45zm25.62-8.82V7.64h3.21v15h-3.21v-2.16a6 6 0 0 1-5.21 2.55 6.94 6.94 0 0 1-5.24-2.28 7.85 7.85 0 0 1-2.17-5.61 7.8 7.8 0 0 1 2.17-5.61 6.94 6.94 0 0 1 5.24-2.28c2.26 0 3.99.84 5.2 2.52zm-8.07 8.82c.9.9 2.03 1.35 3.37 1.35 1.33 0 2.46-.45 3.36-1.35a4.77 4.77 0 0 0 1.34-3.45 4.65 4.65 0 0 0-4.7-4.8 4.65 4.65 0 0 0-4.7 4.8c0 1.38.44 2.52 1.33 3.45zm17.88 4.05h-3.21V.74h3.21v21.9z" />
      </svg>
    `
  },
  arrow,
  chevron: function (text) {
    return arrow(text, true)
  }
}

function arrow(text, rotate) {
  const svg = html`
    <svg
      class="u-arrow"
      style="${rotate
        ? 'transform: rotate(90deg); top: 0.05em; margin: 0 0.6rem'
        : ''}"
      role="presentation"
      viewBox="0 0 7 11">
      <path
        fill="none"
        fill-rule="evenodd"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1.66 9.9L5.9 5.66 1.66 1.4" />
    </svg>
  `

  if (typeof text === 'string') {
    const words = text.split(' ')
    return html`
      ${words.slice(0, words.length - 1).join(' ')}
      <span class="u-textNowrap">${words[words.length - 1]} ${svg}</span>
    `
  }

  return html`
    ${text} ${svg}
  `
}
