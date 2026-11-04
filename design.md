# Design Document — DPM FILKOM UNIDA (Monochrome)

Source of truth: `DPM FILKOM — Org Profile (Monochrome)` frame in
`bemfilkom.pen`. All measurements in px unless noted.

## 1. Overview

Monochrome, editorial SaaS-style organization profile. Single page, light
background (#ffffff), black ink, one accent color (orange #ff6208). Typography
driven by `xVf` (sans) + `Geist Mono` (mono). Generous whitespace, tight
tracking on large headings, mono kickers.

## 2. Design Tokens

### Colors (DPM FILKOM official branding)

| Token | Hex | Usage |
|---|---|---|
| bg (base) | #DCE2E6 | page background, secondary containers, separators |
| surface | #ffffff | cards, nav bar, inputs |
| primary | #2BB3BD | primary CTA buttons, active icons/links, progress bars |
| secondary | #44C2D6 | hover states, badges/tags, border highlights |
| dark | #164653 | headers (H1-H3), navbar dark sections, primary borders, emphasis |
| warm | #E78E3F | notification badges, warnings, announcement banners, focus |
| text | #1E2B30 | body copy, footer background, dark neutral |
| muted | #4a5a60 | secondary text, nav links |
| fog | #6b7a80 | tertiary text, placeholders, meta |
| border | #c5cdd1 | borders, dividers, card strokes |
| card-bg | #DCE2E6 | monogram tiles, chat bubbles |
| dark-card | #164653 | dark cards (Sistem, Dies Natalis, CTA panel) |
| dark-border | #164653 | strokes on dark cards |
| dark-muted | #a0b0b6 | text on dark surfaces |
| dark-fog | #6b7a80 | tertiary on dark |

### Typography

| Role | Family | Size | Weight | Tracking | Line-height |
|---|---|---|---|---|---|
| Display headline | xVf (Inter) | 68 | 500 | -2.6 | 1.04 |
| Section title | xVf (Inter) | 44 | 500 | -1.6 | 1.10–1.12 |
| CTA title | xVf (Inter) | 52 | 500 | -1.8 | 1.1 |
| News title | xVf (Inter) | 20 | 500 | -0.4 | — |
| Card / body | xVf (Inter) | 12–16 | 400/500 | — | 1.4–1.6 |
| Stat value | xVf (Inter) | 40 | 500 | -1.4 | — |
| Kicker (mono) | Geist Mono | 9–11 | 400 | 0.6–1.2 | — |
| Code / status | Geist Mono | 10.5–12 | 400 | — | 1.65–1.75 |
| Nav link | xVf (Inter) | 13 | 400 | — | — |

### Spacing & Radii

- Base unit 4px. Common gaps: 4, 6, 8, 10, 12, 14, 16, 18, 24, 32, 64.
- Section padding: `72 32` / `64 40` / `8 32 72 32`.
- Nav height 68px, padding `0 32`.
- Card radius 16px (large), 12px (medium), 10px/9px (small), 999px (pills).
- Max content width 1440px, inner container 1376px with 32px side padding.

### Effects

- Card shadow (status card): `0 12px 32px rgba(74,18,0,0.2)`.
- Subtle borders everywhere (`#e8e7e3`).
- Gradient panel: `linear-gradient(135deg, #ffa552 0%, #ff6208 45%, #a33000 100%)`.
- Dies Natalis orb: radial gradient `#ff6208 → #8a2b06 → #101010`.

## 3. Layout (top to bottom)

1. **Nav** (h 68) — logo mark (12px black dot + "DPM FILKOM"), links (Beranda, Tentang, Program, Berita), right: Kontak + "Gabung" pill.
2. **Hero** (padding 92 40 64 40, centered) — badge (orange dot + mono period), headline 68px, subhead 16px max-w 600, two buttons (Primary black, Secondary white bordered).
3. **Program Grid** (padding 0 32 56 32) — grid bar (kicker + meta), Row 1: 3 cards (Aspirasi chat, Sistem code, Kegiatan events) each 340px tall; Row 2: Galeri (912px) + Dies Natalis (fill).
4. **About** (padding 8 32 72 32) — left copy (eyebrow, title 44px, desc, 4 link rows with index/label/meta) + right panel: orange gradient card containing code block + floating status card.
5. **Stats** (h 128, bordered top/bottom) — 4 stats separated by 1px dividers: 2.400+, 128, 48, 99%.
6. **Team** (padding 72 32 64 32) — head (eyebrow + title + period) + 4 columns with monogram (initial 72px) + name/role.
7. **News** (padding 0 32 72 32) — head (kicker + "Semua berita ↗") + 3 rows (date, title, tag, arrow).
8. **CTA** (padding 0 32 72 32) — black rounded panel with orange eyebrow, title 52px, desc, orange button, note.
9. **Footer** (bordered top, padding 48 32 32 32) — brand + 3 columns (Organisasi, Layanan, Kontak) + bottom bar (copyright + meta).

## 4. Component Patterns

- **Card**: 16px radius, 1px `#e8e7e3` border (or `#242424` on dark), `#f5f4f1` or `#0a0a0a` fill.
- **Kicker**: mono, 9–11px, uppercase, tracking 0.6–1.2, color `#6b6b6b`.
- **Button pill**: 999px radius, padding 12/20 or 13/22, 13px text.
- **Status pill**: 999px radius, 5px dot + label, mono 10px.
- **Bubble**: 12px radius with one 4px corner, 1px border, 9/12 padding, mono 10.5px.
- **Monogram tile**: 12px radius, `#f5f4f1` fill, 72px initial in `#c9c8c2`, bottom-aligned.

## 5. Content / Copy

- Headline: "Suara mahasiswa, dijalankan jadi aksi nyata."
- Subhead: "DPM FILKOM UNIDA menyalurkan aspirasi, mengawal kebijakan, dan membangun ruang kolaborasi untuk seluruh mahasiswa Fakultas Ilmu Komputer."
- Nav: Beranda, Tentang, Program, Berita, Kontak, Gabung.
- Stats labels: Mahasiswa aktif, Aspirasi ditangani, Kegiatan per tahun, Tindak lanjut.
- Team: Andi Pratama (KETUA), Siti Rahma (WAKIL KETUA), Budi Santoso (SEKRETARIS), Dewi Lestari (BENDAHARA).
- News tags: RAPAT, PROGRAM, KEGIATAN.

## 6. Implementation Notes

- Fonts: substitute `xVf` with Inter (Google Fonts) since `xVf` is not a web font; `Geist Mono` via Google Fonts.
- Icons: lucide `arrow-up-right` (14–15px).
- Images: Unsplash URLs for gallery collage.
- Responsive: design is desktop-first 1440px; mobile not specified.
