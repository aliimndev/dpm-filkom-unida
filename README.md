# DPM FILKOM UNIDA

Situs profil organisasi Dewan Perwakilan Mahasiswa (DPM) Fakultas Ilmu Komputer Universitas Djuanda — monochrome editorial dengan aksen oranye.

## Stack

| Layer | Teknologi |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR full-stack) |
| UI | React 19 + TypeScript |
| Routing | [TanStack Router](https://tanstack.com/router) (file-based) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 (via `@tailwindcss/vite`) |
| Build/Dev | Vite 8 |
| Server | [Nitro](https://v3.nitro.build/) |
| Fonts | Inter (sans) + Geist Mono (mono) |

## Getting Started

```bash
npm install
npm run dev
```

Dev server berjalan di `http://localhost:3000`.

## Scripts

| Command | Fungsi |
|---|---|
| `npm run dev` | Jalankan dev server (port 3000) |
| `npm run build` | Build produksi |
| `npm run preview` | Preview hasil build |

## Building for Production

```bash
npm run build
node dist/server/index.mjs
```

Build menghasilkan server Node self-contained di `dist/`. Deploy dengan cara push `dist/` ke host (Render, Fly.io, VPS, dll.) lalu jalankan server. Preset host lain (Vercel, Netlify, Cloudflare, AWS Lambda) tersedia di https://v3.nitro.build/deploy.

## Struktur Proyek

```
src/
├── routes/            # File-based routes (TanStack Router)
│   ├── __root.tsx     # Root layout + theme init + devtools
│   ├── index.tsx      # Beranda
│   ├── tentang.tsx    # Tentang
│   ├── aduan.tsx      # Aduan mahasiswa
│   ├── berita.tsx     # Berita
│   ├── kegiatan.tsx   # Kegiatan
│   └── komisi.tsx     # Komisi
├── components/        # Nav, SiteFooter, ThemeToggle
├── router.tsx         # Konfigurasi router
├── styles.css         # Tailwind + token design
└── routeTree.gen.ts   # Route tree (auto-generated)
```

## Fitur

- **Routing file-based** — tambah route baru dengan membuat file di `src/routes/`.
- **SSR** via TanStack Start + Nitro.
- **Theme toggle** — light/dark/auto, persisted di `localStorage` (lihat `ThemeToggle.tsx`).
- **Devtools** — TanStack Router & Devtools panel (aktif di dev).

## Design

Design system dan token ada di `design.md` (monochrome editorial, warna brand FILKOM, tipografi Inter + Geist Mono).

## Learn More

- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)