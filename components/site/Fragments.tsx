"use client"

import { useState } from "react"
import "./fragments.css"

// Interface fragments, drawn in HTML as stills of each product. Sample data, not production data.

export function CustamaUI() {
  const [faqs, setFaqs] = useState([
    { q: "What are your delivery hours?", s: "live" },
    { q: "Can I change my order after paying?", s: "live" },
    { q: "Do you ship outside Gujarat?", s: "suggested" },
    { q: "Is there a bulk discount over 50 units?", s: "suggested" },
  ])
  const set = (i: number, s: string) => setFaqs((f) => f.map((x, j) => (j === i ? { ...x, s } : x)))
  const live = faqs.filter((f) => f.s === "live").length

  return (
    <div className="ui ui-custama" data-ui role="group" aria-label="Custama knowledge base and bot preview, sample data">
      <div className="ui-bar">
        <b>Knowledge base</b>
        <span>Version 14 · {live} live answers</span>
      </div>
      <div className="ui-split">
        <ul className="ui-faqs">
          {faqs.map((f, i) => (
            <li key={f.q} data-s={f.s}>
              <span>{f.q}</span>
              {f.s === "suggested" ? (
                <span className="ui-actions">
                  <button onClick={() => set(i, "live")}>Approve</button>
                  <button onClick={() => set(i, "rejected")}>Reject</button>
                </span>
              ) : (
                <em>{f.s === "live" ? "Live" : "Rejected"}</em>
              )}
            </li>
          ))}
        </ul>
        <div className="ui-chat">
          <p className="ui-msg ui-msg-user">Do you deliver on Sundays?</p>
          <p className="ui-msg">Yes, between 10am and 2pm in the city. Outside the city it is the next working day.</p>
          <p className="ui-msg ui-msg-user">Nice. And bulk orders?</p>
          <p className="ui-msg ui-typing" aria-label="Bot is typing">
            <i />
            <i />
            <i />
          </p>
        </div>
      </div>
    </div>
  )
}

const LOANS = [
  { n: "Aarav Mehta", a: "₹4,50,000", d: "PAN, bank statement", s: "Verified" },
  { n: "Diya Patel", a: "₹1,20,000", d: "Salary slips missing", s: "Pending" },
  { n: "Kabir Shah", a: "₹8,00,000", d: "Address mismatch", s: "Flagged" },
  { n: "Isha Desai", a: "₹2,75,000", d: "All documents", s: "Verified" },
  { n: "Rohan Joshi", a: "₹6,10,000", d: "Awaiting KYC call", s: "Pending" },
]

export function VerifixUI() {
  const [filter, setFilter] = useState("All")
  const rows = LOANS.filter((l) => filter === "All" || l.s === filter)
  return (
    <div className="ui ui-verifix" data-ui role="group" aria-label="Verifix verification queue, sample data">
      <div className="ui-bar">
        <b>My queue</b>
        <span>Signed in as Verifier</span>
      </div>
      <div className="ui-chips" role="tablist" aria-label="Filter by status">
        {["All", "Pending", "Flagged", "Verified"].map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Applicant</th>
            <th>Amount</th>
            <th>Documents</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((l) => (
            <tr key={l.n}>
              <td>{l.n}</td>
              <td className="num">{l.a}</td>
              <td>{l.d}</td>
              <td>
                <span className="ui-status" data-s={l.s}>
                  {l.s}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const WEEKS = [42, 58, 51, 77, 90, 84, 118]

export function CommunityUI() {
  const max = Math.max(...WEEKS)
  return (
    <div className="ui ui-community" data-ui role="group" aria-label="CommUnity admin dashboard, sample data">
      <div className="ui-bar">
        <b>Admin dashboard</b>
        <span>Role: Super Admin</span>
      </div>
      <div className="ui-kpis">
        <div>
          <span>New members this week</span>
          <b>118</b>
        </div>
        <div>
          <span>Paid communities</span>
          <b>14 of 37</b>
        </div>
        <div>
          <span>Open reports</span>
          <b>6</b>
        </div>
      </div>
      <div className="ui-chart" aria-label="New members per week for seven weeks, rising from 42 to 118">
        {WEEKS.map((w, i) => (
          <span key={i} style={{ height: `${(w / max) * 100}%` }} title={`${w}`} />
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Community</th>
            <th>Plan</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Surat Runners</td>
            <td>Free</td>
            <td className="num">1,204</td>
          </tr>
          <tr>
            <td>DSA in 90 days</td>
            <td>Paid</td>
            <td className="num">386</td>
          </tr>
          <tr>
            <td>Weekend Potters</td>
            <td>Paid</td>
            <td className="num">97</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
