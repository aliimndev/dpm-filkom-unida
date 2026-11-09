import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const items = [
  { label: 'Beranda', to: '/' as const },
  { label: 'Tentang', to: '/tentang' as const },
  { label: 'Program', to: '/komisi' as const },
  { label: 'Berita', to: '/berita' as const },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="w-full border-b border-[#c5cdd1] bg-white">
      <div className="flex items-center justify-between px-4 md:px-8" style={{ height: 68 }}>
        <Link to="/" className="flex items-center gap-[10px]">
          <img src="/logo-dpm.webp" alt="DPM FILKOM" className="h-8 w-8 object-contain" />
          <span className="text-[15px] font-semibold tracking-[-0.3px] text-[#164653]">
            DPM FILKOM UNIDA
          </span>
        </Link>
        <div className="hidden items-center gap-[30px] md:flex">
          {items.map((it) => (
            <Link key={it.label} to={it.to} className="text-[13px] text-[#4a5a60] hover:text-[#164653]">
              {it.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-[18px] md:flex">
          <Link to="/aduan" className="flex items-center gap-[6px] rounded-full bg-[#2BB3BD] px-[14px] py-[8px] text-[13px] text-[#164653] font-medium">
            Aduan
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c5cdd1] text-[#164653] md:hidden"
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-3 border-t border-[#c5cdd1] px-4 py-4 md:hidden">
          {items.map((it) => (
            <Link
              key={it.label}
              to={it.to}
              onClick={() => setOpen(false)}
              className="text-[14px] text-[#4a5a60] hover:text-[#164653]"
            >
              {it.label}
            </Link>
          ))}
          <Link
            to="/aduan"
            onClick={() => setOpen(false)}
            className="self-start rounded-full bg-[#2BB3BD] px-[14px] py-[8px] text-[13px] text-[#164653] font-medium"
          >
            Aduan
          </Link>
        </div>
      )}
    </nav>
  )
}
