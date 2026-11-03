"use client"

import { useEffect } from "react"

// Entrances: any [data-rv] element rises in once when it enters. Content is visible without script,
// because the hidden state only applies under html.js (set in the document head).
export function Reveals() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    )
    const els = document.querySelectorAll("[data-rv]")
    els.forEach((el) => io.observe(el))
    // a fast jump (anchor link, scrollbar drag) can skip past an element; reveal everything above the fold line
    const onScroll = () => {
      els.forEach((el) => {
        if (!el.classList.contains("in") && el.getBoundingClientRect().top < innerHeight) el.classList.add("in")
      })
    }
    addEventListener("scroll", onScroll, { passive: true })
    return () => {
      io.disconnect()
      removeEventListener("scroll", onScroll)
    }
  }, [])
  return null
}
