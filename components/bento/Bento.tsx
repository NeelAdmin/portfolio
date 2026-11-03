"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { EMAIL, PATH, PROJECTS, RESUME, SKILLS, SOCIALS, STACK, type Project } from "@/components/site/data"
import { CommunityUI, CustamaUI, VerifixUI } from "@/components/site/Fragments"
import { Reveals } from "@/components/site/Reveals"
import "./bento.css"

const UIS = { custama: CustamaUI, verifix: VerifixUI, community: CommunityUI }
const TINT: Record<string, string> = { custama: "var(--peach)", verifix: "var(--sky)", community: "var(--lime)" }

function Clock() {
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const parts = now
    ? new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Asia/Kolkata" }).format(now)
    : "--:--:--"
  const h = now ? Number(new Intl.DateTimeFormat("en-GB", { hour: "numeric", hour12: false, timeZone: "Asia/Kolkata" }).format(now)) : 12
  const mood =
    h < 7 ? "Asleep. Probably." : h < 10 ? "First chai, first commit." : h < 13 ? "Deep in a pull request." : h < 15 ? "Lunch, then more lunch." : h < 19 ? "Shipping things." : h < 23 ? "One more bug, then done." : "Should be asleep."
  return (
    <>
      <span className="bn-label">Surat, India</span>
      <b className="bn-time">{parts}</b>
      <span>{mood}</span>
    </>
  )
}

// Drag to turn. Each face is one layer of the stack.
function Cube() {
  const [rot, setRot] = useState({ x: -18, y: 32 })
  const drag = useRef<{ x: number; y: number } | null>(null)
  return (
    <div
      className="bn-cube-view"
      onPointerDown={(e) => {
        drag.current = { x: e.clientX, y: e.clientY }
        ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
      }}
      onPointerMove={(e) => {
        if (!drag.current) return
        const dx = e.clientX - drag.current.x
        const dy = e.clientY - drag.current.y
        drag.current = { x: e.clientX, y: e.clientY }
        setRot((r) => ({ x: r.x - dy * 0.6, y: r.y + dx * 0.6 }))
      }}
      onPointerUp={() => (drag.current = null)}
      onPointerCancel={() => (drag.current = null)}
      aria-hidden="true"
    >
      <div className="bn-cube" style={{ transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)` }}>
        {STACK.map((s, i) => (
          <span key={s.id} className={`bn-face bn-face-${i}`}>
            {s.name}
          </span>
        ))}
      </div>
    </div>
  )
}

const STICKERS = ["TypeScript", "RBAC", "☕ × 3", "ship it", "no any", "200 OK", "git push"]

function Stickers() {
  const box = useRef<HTMLDivElement>(null)
  return (
    <div ref={box} className="bn-stickers">
      <span className="bn-label">Stickers. Drag them about.</span>
      {STICKERS.map((s, i) => (
        <motion.span
          key={s}
          className="bn-sticker"
          drag
          dragConstraints={box}
          dragElastic={0.2}
          whileDrag={{ scale: 1.15, rotate: 0, zIndex: 5 }}
          style={{ left: `${8 + ((i * 29) % 78)}%`, top: `${30 + ((i * 37) % 52)}%`, rotate: ((i * 47) % 30) - 15 }}
          data-k={i % 4}
        >
          {s}
        </motion.span>
      ))}
    </div>
  )
}

type Tile = { id: string; cls: string; node: React.ReactNode }

function shuffle<T>(a: T[]) {
  const b = [...a]
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[b[i], b[j]] = [b[j], b[i]]
  }
  return b
}

function ProjectModal({ p, close }: { p: Project; close: () => void }) {
  const UI = UIS[p.id as keyof typeof UIS]
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && close()
    addEventListener("keydown", k)
    document.body.style.overflow = "hidden"
    return () => {
      removeEventListener("keydown", k)
      document.body.style.overflow = ""
    }
  }, [close])
  return (
    <motion.div className="bn-modal-back" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}>
      <motion.div
        layoutId={`bn-p-${p.id}`}
        className="bn-modal"
        style={{ background: TINT[p.id] }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`bn-m-${p.id}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="bn-close" onClick={close} autoFocus>
          Close
        </button>
        <div className="bn-modal-text">
          <h3 id={`bn-m-${p.id}`}>{p.name}</h3>
          <p className="bn-what">{p.what}</p>
          <p>
            <b>My part:</b> {p.role}
          </p>
          <ul>
            {p.points.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="bn-chips">
            {p.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </p>
        </div>
        <UI />
      </motion.div>
    </motion.div>
  )
}

function ProjectTile({ p, i, open }: { p: Project; i: number; open: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.35"] })
  const rotate = useTransform(scrollYProgress, [0, 1], [i % 2 ? 7 : -7, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1])
  const UI = UIS[p.id as keyof typeof UIS]
  return (
    <motion.div ref={ref} style={reduce ? undefined : { rotate, scale }}>
      <motion.div layoutId={`bn-p-${p.id}`} className="bn-ptile" style={{ background: TINT[p.id] }} onClick={open}>
        <span className="bn-ptile-top">
          <b>{p.name}</b>
          <span>{p.what}</span>
        </span>
        <span className="bn-ptile-ui" aria-hidden="true" inert>
          <UI />
        </span>
        <button type="button" className="bn-ptile-more" onClick={open} aria-label={`Open ${p.name} details`}>
          Open it up ↗
        </button>
      </motion.div>
    </motion.div>
  )
}

function Timeline() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const track = useRef<HTMLOListElement>(null)
  const [span, setSpan] = useState(0)
  useEffect(() => {
    const f = () => setSpan(Math.max(0, (track.current?.scrollWidth ?? 0) - innerWidth))
    f()
    addEventListener("resize", f)
    return () => removeEventListener("resize", f)
  }, [])
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -span])
  const train = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  return (
    <section ref={ref} id="path" className="bn-time-sec" data-reduce={reduce ? "true" : "false"} aria-labelledby="bn-path-h">
      <div className="bn-time-stage">
        <h2 id="bn-path-h" className="bn-h2">
          The story so far
        </h2>
        <motion.ol ref={track} className="bn-time-track" style={reduce ? undefined : { x }}>
          {PATH.map((p, i) => (
            <li key={p.title} className="bn-stop" data-k={i % 4}>
              <span className="bn-stop-year">{p.year}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </motion.ol>
        <div className="bn-rail" aria-hidden="true">
          <motion.span style={{ left: train }}>🚂</motion.span>
        </div>
      </div>
    </section>
  )
}

export function Bento() {
  const [copied, setCopied] = useState(false)
  const [presses, setPresses] = useState(0)
  const [openId, setOpenId] = useState<string | null>(null)
  const copy = () =>
    navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })

  const base: Tile[] = [
    {
      id: "hello",
      cls: "bn-t-hello",
      node: (
        <>
          <h1 className="bn-hello">Hi, I&apos;m Neel.</h1>
          <p className="bn-lede">
            A full-stack developer in Surat. I build React and Next.js front ends, Node and NestJS APIs, and the access
            control in between.
          </p>
          <div className="bn-actions">
            <a className="bn-btn" href="#work">
              See my work
            </a>
            <a className="bn-btn bn-btn-light" href={RESUME} download>
              Get the résumé
            </a>
          </div>
        </>
      ),
    },
    { id: "clock", cls: "bn-t-clock", node: <Clock /> },
    {
      id: "now",
      cls: "bn-t-now",
      node: (
        <>
          <span className="bn-label">
            <i className="bn-pulse" aria-hidden="true" /> Right now
          </span>
          <b className="bn-tile-b">Going deeper on NestJS, Prisma and Postgres.</b>
        </>
      ),
    },
    {
      id: "cube",
      cls: "bn-t-cube",
      node: (
        <>
          <span className="bn-label">The stack, in 3D. Drag it.</span>
          <Cube />
        </>
      ),
    },
    { id: "stickers", cls: "bn-t-stickers", node: <Stickers /> },
    {
      id: "years",
      cls: "bn-t-years",
      node: (
        <>
          <b className="bn-num">2</b>
          <span>years shipping production code at WebOsmotic, intern to full-stack.</span>
        </>
      ),
    },
    {
      id: "mail",
      cls: "bn-t-mail",
      node: (
        <>
          <span className="bn-label">Say hello</span>
          <a className="bn-mail" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <button type="button" className="bn-btn bn-btn-lime" onClick={copy}>
            {copied ? "Copied ✓" : "Copy address"}
          </button>
        </>
      ),
    },
    {
      id: "social",
      cls: "bn-t-social",
      node: (
        <ul className="bn-links">
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.name} ↗
              </a>
            </li>
          ))}
        </ul>
      ),
    },
  ]
  const [order, setOrder] = useState(base.map((t) => t.id))
  const tiles = order.map((id) => base.find((t) => t.id === id)!)
  const PRESS = ["Don't press", "Seriously.", "OK, again?", "You like this.", "Fine, keep going."]

  return (
    <div className="bn">
      <Reveals />
      <header className="bn-bar">
        <a href="#top" className="bn-mark">
          neel<span>.</span>
        </a>
        <nav aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#path">Story</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          type="button"
          className="bn-shuffle"
          onClick={() => {
            setOrder((o) => shuffle(o))
            setPresses((n) => n + 1)
          }}
        >
          {PRESS[Math.min(presses, PRESS.length - 1)]}
        </button>
      </header>

      <main id="top">
        <section className="bn-bento" aria-label="About Neel">
          {tiles.map((t) => (
            <motion.div key={t.id} layout transition={{ type: "spring", stiffness: 260, damping: 26 }} className={`bn-tile ${t.cls}`}>
              {t.node}
            </motion.div>
          ))}
        </section>

        <section id="work" className="bn-work" aria-labelledby="bn-work-h">
          <div className="bn-head" data-rv>
            <h2 id="bn-work-h" className="bn-h2">
              Things I built
            </h2>
            <p>Three products, each a little working replica. Tap one to open it up.</p>
          </div>
          <div className="bn-ptiles">
            {PROJECTS.map((p, i) => (
              <ProjectTile key={p.id} p={p} i={i} open={() => setOpenId(p.id)} />
            ))}
          </div>
        </section>

        <section id="skills" className="bn-skills" aria-labelledby="bn-skills-h">
          <div className="bn-head" data-rv>
            <h2 id="bn-skills-h" className="bn-h2">
              A pile of skills
            </h2>
            <p>Nineteen of them. They are draggable, because a list would be boring.</p>
          </div>
          <PileOfSkills />
        </section>

        <Timeline />

        <section id="contact" className="bn-contact" aria-labelledby="bn-contact-h">
          <div className="bn-tile bn-t-end" data-rv>
            <h2 id="bn-contact-h" className="bn-h2">
              Let&apos;s build the next one
            </h2>
            <span className="bn-wave" aria-hidden="true">
              👋
            </span>
            <p className="bn-lede">Hiring, or got a product that needs both ends built? Write to me.</p>
            <div className="bn-actions">
              <a className="bn-btn" href={`mailto:${EMAIL}`}>
                Email Neel
              </a>
              <button type="button" className="bn-btn bn-btn-light" onClick={copy}>
                {copied ? "Copied ✓" : EMAIL}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bn-foot">
        <span>© {new Date().getFullYear()} Neel Navadiya</span>
        <span>Shuffled {presses} {presses === 1 ? "time" : "times"} this visit.</span>
      </footer>

      <AnimatePresence>
        {openId && <ProjectModal p={PROJECTS.find((p) => p.id === openId)!} close={() => setOpenId(null)} />}
      </AnimatePresence>
    </div>
  )
}

function PileOfSkills() {
  const box = useRef<HTMLDivElement>(null)
  return (
    <div ref={box} className="bn-pile">
      {SKILLS.map((s, i) => (
        <motion.span
          key={s}
          className="bn-chip"
          data-k={i % 5}
          drag
          dragConstraints={box}
          dragElastic={0.15}
          whileDrag={{ scale: 1.12, zIndex: 5 }}
          initial={{ y: -120, opacity: 0, rotate: 0 }}
          whileInView={{ y: 0, opacity: 1, rotate: ((i * 37) % 24) - 12 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ type: "spring", stiffness: 300, damping: 14, delay: i * 0.04 }}
        >
          {s}
        </motion.span>
      ))}
    </div>
  )
}
