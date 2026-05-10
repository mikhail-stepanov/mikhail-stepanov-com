import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.65,
  scaleRatio: 2.4,
  googleFonts: [],
  headerFontFamily: ["Onest", "system-ui", "-apple-system", "sans-serif"],
  bodyFontFamily: ["Onest", "system-ui", "-apple-system", "sans-serif"],
  overrideStyles: () => ({
    "html": {
      background: "#f4f1ea",
    },
    "body": {
      color: "#1d1d1f",
      background: "#f4f1ea",
    },
    "a.gatsby-resp-image-link": {
      boxShadow: "none",
    },
    "a": {
      color: "#b08418",
      textShadow: "none",
      backgroundImage: "none",
    },
    "h1, h2, h3, h4, h5, h6": {
      color: "#1d1d1f",
    },
  }),
})

if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
