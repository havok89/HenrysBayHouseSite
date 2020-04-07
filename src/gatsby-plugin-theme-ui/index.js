export default {
    colors: {
      text: ["#000", "#222", "#fff"],
      background: ["#fff","#252525", "#000"],
      primary: "#826f47",
      secondary: "#c7932c",
    },
    fonts: {
      body: "Open Sans, sans-serif",
      heading: "Roboto Condensed, sans-serif",
      monospace: "Menlo, monospace",
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    fontSizes: [14, 16, 20, 24, 32, 48, 64, 72],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    text: {
      heading: {
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        color: "text.0",
      },
    },
    styles: {
      root: {
        fontFamily: 'body',
        color: "text.0",
        fontSize: 0,
        backgroundColor: "background.0"
      },
      h1: {
        variant: 'text.heading',
        fontSize: 4,
        p: 0,
        m: 0
      },
      h2: {
        variant: 'text.heading',
        fontSize: 3,
        p: 0,
        m: 0
      },
      h3: {
        variant: 'text.heading',
        fontSize: 2,
        p: 0,
        m: 0
      }
    }
  }