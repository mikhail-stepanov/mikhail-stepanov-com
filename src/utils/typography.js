import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.65,
  scaleRatio: 2.4,
  googleFonts: [],
  headerFontFamily: ["Posterama", "Outfit", "Onest", "system-ui", "-apple-system", "sans-serif"],
  bodyFontFamily: ["Posterama", "Outfit", "Onest", "system-ui", "-apple-system", "sans-serif"],
  overrideStyles: () => ({
    "html": {
      background: "#f4ece0",
    },
    "body": {
      color: "#1d1d1f",
      background: "#f4ece0",
    },
    "a.gatsby-resp-image-link": {
      boxShadow: "none",
    },
    "a": {
      color: "#1e33e8",
      textShadow: "none",
      backgroundImage: "none",
    },
    "h1, h2, h3, h4, h5, h6": {
      color: "#1e33e8",
    },
  }),
})

if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
