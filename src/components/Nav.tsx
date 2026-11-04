
export default function Nav() {
  const links = ['Beranda', 'Tentang', 'Program', 'Berita']
  return (
    <nav className="flex w-full items-center justify-between border-b border-[#e8e7e3] px-8 py-0" style={{ height: 68 }}>
      <div className="flex items-center gap-[10px]">
        <span className="h-3 w-3 rounded-full bg-[#0a0a0a]" />
        <span className="text-[15px] font-semibold tracking-[-0.3px] text-[#0a0a0a]">
          DPM FILKOM
        </span>
      </div>
      <div className="flex items-center gap-[30px]">
        {links.map((l) => (
          <span key={l} className="cursor-pointer text-[13px] text-[#6b6b6b] hover:text-[#0a0a0a]">
            {l}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-[18px]">
        <span className="cursor-pointer text-[13px] text-[#6b6b6b] hover:text-[#0a0a0a]">
          Kontak
        </span>
        <span className="flex items-center gap-[6px] rounded-full bg-[#0a0a0a] px-[14px] py-[8px] text-[13px] text-white">
          Gabung
        </span>
      </div>
    </nav>
  )
}
