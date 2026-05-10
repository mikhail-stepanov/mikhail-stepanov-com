import React from "react"
import { WEBP_DISPLACEMENT_MAP } from "./src/utils/liquid-glass-map"

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: "en" })

  setHeadComponents([
    <link key="gf-pre1" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link key="gf-pre2" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
    <link
      key="gf-stylesheet"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Onest:wght@300..900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
    />,
    <meta key="theme-color" name="theme-color" content="#f4f1ea" />,
    <meta key="color-scheme" name="color-scheme" content="light" />,
  ])

  setPreBodyComponents([
    <div key="cursor-glow" id="cursor-glow" aria-hidden="true" />,
    <div key="grain" id="grain-overlay" aria-hidden="true" />,
    <svg
      key="liquid-glass-defs"
      aria-hidden="true"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", pointerEvents: "none" }}
    >
      <filter id="liquid-glass-filter" primitiveUnits="objectBoundingBox">
        <feImage
          result="map"
          width="100%"
          height="100%"
          x="0"
          y="0"
          href={WEBP_DISPLACEMENT_MAP}
          preserveAspectRatio="none"
        />
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.01" result="blur" />
        <feDisplacementMap
          in="blur"
          in2="map"
          scale="0.5"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>,
  ])
}
