export default function Nav() {
  const links = ['Beranda', 'Tentang', 'Program', 'Berita']
  return (
    <nav className="flex w-full items-center justify-between border-b border-[#c5cdd1] bg-white px-8" style={{ height: 68 }}>
      <div className="flex items-center gap-[10px]">
        <span className="h-3 w-3 rounded-full bg-[#164653]" />
        <span className="text-[15px] font-semibold tracking-[-0.3px] text-[#164653]">
          DPM FILKOM
        </span>
      </div>
      <div className="flex items-center gap-[30px]">
        {links.map((l) => (
          <span key={l} className="cursor-pointer text-[13px] text-[#4a5a60] hover:text-[#164653]">
            {l}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-[18px]">
        <span className="cursor-pointer text-[13px] text-[#4a5a60] hover:text-[#164653]">
          Kontak
        </span>
        <span className="flex items-center gap-[6px] rounded-full bg-[#2BB3BD] px-[14px] py-[8px] text-[13px] text-[#164653] font-medium">
          Gabung
        </span>
      </div>
    </nav>
  )
}
