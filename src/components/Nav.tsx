import { Link } from '@tanstack/react-router'

const items = [
  { label: 'Beranda', to: '/' as const },
  { label: 'Tentang', to: '/tentang' as const },
  { label: 'Program', to: '/komisi' as const },
  { label: 'Berita', to: '/dokumentasi' as const },
]

export default function Nav() {
  return (
    <nav className="flex w-full items-center justify-between border-b border-[#c5cdd1] bg-white px-8" style={{ height: 68 }}>
      <Link to="/" className="flex items-center gap-[10px]">
        <img src="/logo-dpm.webp" alt="DPM FILKOM" className="h-8 w-8 object-contain" />
        <span className="text-[15px] font-semibold tracking-[-0.3px] text-[#164653]">
          DPM FILKOM
        </span>
      </Link>
      <div className="flex items-center gap-[30px]">
        {items.map((it) => (
          <Link
            key={it.label}
            to={it.to}
            className="text-[13px] text-[#4a5a60] hover:text-[#164653]"
          >
            {it.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-[18px]">
        <Link
          to="/aduan"
          className="flex items-center gap-[6px] rounded-full bg-[#2BB3BD] px-[14px] py-[8px] text-[13px] text-[#164653] font-medium"
        >
          Aduan
        </Link>
      </div>
    </nav>
  )
}
