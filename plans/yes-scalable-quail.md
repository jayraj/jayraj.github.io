# Portfolio Website Plan — Self-Employed Business

## Context
The user is launching a self-employed business and needs a portfolio website that functions as a trust-building point for potential clients. Their core offerings are: **Project Management (Agile)**, **Frontend Development**, and **UI/UX Design**. The site must be a clean, professional SPA with each section clearly scoped.

The existing `src/app/App.tsx` is a working dark-themed React portfolio (violet accent, Bricolage Grotesque + Onest fonts). We will **replace its content entirely** with new sections tailored to this user's profile, keeping the same tech stack, font imports, and CSS token contract.

---

## Tech Stack (unchanged)
- React 18 + TypeScript
- Tailwind CSS v4 + inline styles for dynamic states
- Lucide React for icons
- Fonts: `Bricolage Grotesque` (display) + `Onest` (body) via Google Fonts
- Color theme: dark `#0A0A0F` bg, `#F0EEF9` fg, `#7B5EFF` violet accent

---

## Sections (MVP — planned individually)

### 1. Navigation
- Fixed top bar, transparent → blurred dark on scroll
- Logo: user's name (left)
- Links: Services · Work · About · Contact (right)
- "Let's Talk" CTA button (violet, links to Contact)
- Mobile: hamburger → fullscreen overlay menu
- Active section highlight via scroll spy

### 2. Hero
- Full-viewport height
- Subtle grid-line background + violet radial glow (existing pattern)
- Availability badge: pulsing dot + "Open to new projects"
- Headline (Bricolage Grotesque, giant): e.g. `"I design, build & ship digital products"`
- Sub-tagline: one sentence positioning statement for clients
- Three service pills (icon + label): 🗂 Project Management · 💻 Frontend Dev · 🎨 UI/UX Design
- Two CTAs: "View My Work" (scroll to Work) + "Get in Touch" (scroll to Contact)
- Stats strip: Years Experience · Projects Delivered · Happy Clients

### 3. Services
- New section not in original — critical for self-employed trust
- Three cards, one per service:
  - **Agile Project Management**: Discovery, roadmapping, sprint planning, delivery
  - **Frontend Development**: React, TypeScript, responsive, performant, accessible
  - **UI/UX Design**: User research, wireframes, prototypes, design systems
- Each card: icon, title, short description, bullet list of deliverables
- Layout: 3-column grid on desktop, stacked on mobile
- Card style: dark `#12121A` card bg, subtle border, violet accent on hover

### 4. Work / Projects
- Section label "Selected Work" + title "Recent Projects"
- 3 project cards (list style matching existing pattern):
  - Each card: index number, title, year badge, category, description, tags, thumbnail
  - Hover: border brightens, radial glow, external link icon appears
  - Projects will cover each service discipline (one PM project, one dev, one design)
- "See All Work" ghost button at bottom (placeholder, links to #)

### 5. About
- Two-column layout (bio left, skills + stats right)
- Left: "About" label, headline, 2–3 bio paragraphs positioning as a solo specialist
- Social links row: GitHub, LinkedIn, Email + Download CV link
- Right: Skill chips grouped by category (Design, Frontend, PM Tools)
- Stats row: Years Exp · Projects · Clients

### 6. Contact
- Centered CTA card with violet radial glow (existing pattern)
- Headline: "Ready to start a project?"
- Short paragraph: availability + response time
- Email button (mailto) + LinkedIn button
- Optional: simple contact info line (location/timezone)

### 7. Footer
- Single row: copyright + descriptor + location

---

## Files to Modify
| File | Change |
|------|--------|
| `src/app/App.tsx` | Full replacement with new sections and content |
| `src/styles/theme.css` | No changes needed (tokens already match) |
| `src/styles/fonts.css` | No changes needed (fonts already imported) |

---

## Data to Populate (placeholder content)
- **Name**: to be set by user (currently "Jay Raj Bhatta" from prior session)
- **Projects**: 3 entries — one per discipline (PM, Frontend, UI/UX)
- **Skills**: Design tools, frontend stack, PM/Agile tools
- **Stats**: 5+ Years · 20+ Projects · 15+ Clients (user can update)
- **Email**: jayraj.bhatta@gmail.com (from prior session)

---

## Implementation Order
1. Replace `projects[]` and `skills[]` data with new discipline-appropriate content
2. Add `services[]` data array
3. Build sections top-to-bottom: Nav → Hero → Services → Work → About → Contact → Footer
4. Wire scroll spy, mobile menu, smooth scroll (same pattern as existing)

---

## Verification
- `npm run dev` → open `http://localhost:5173`
- Check: all 7 sections render, nav scroll-spy works, mobile menu opens/closes
- Check: Services cards display correctly on mobile (stacked) and desktop (3-col)
- Check: Project hover states and thumbnail images load from Unsplash URLs
- Check: Email CTA opens mail client, LinkedIn link is present
