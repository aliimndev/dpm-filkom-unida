export default function SiteFooter() {
  const cols = [
    { title: 'Organisasi', items: ['Tentang', 'Struktur', 'Legal'] },
    { title: 'Layanan', items: ['Aspirasi', 'Program', 'Dokumen'] },
    { title: 'Kontak', items: ['dpm@filkom.ac.id', 'Sekretariat GKB', 'Instagram'] },
  ]
  return (
    <footer className="flex w-full flex-col gap-9 border-t border-[#2a3a40] bg-[#1E2B30] px-8 py-12">
      <div className="flex items-start justify-between">
        <div className="flex w-full md:w-[360px] flex-col gap-3">
          <div className="flex items-center gap-[10px]">
            <img src="/logo-dpm.webp" alt="DPM FILKOM" className="h-8 w-8 object-contain brightness-0 invert" />
            <span className="text-[15px] font-semibold tracking-[-0.3px] text-white">
              DPM FILKOM
            </span>
          </div>
          <p className="m-0 max-w-[320px] text-[13px] leading-[1.6] text-[#a0b0b6]">
            Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer, Universitas Brawijaya.
          </p>
        </div>
        <div className="flex gap-16">
          {cols.map((c) => (
            <div key={c.title} className="flex flex-col gap-[10px]">
              <span className="text-[11px] tracking-[1px] text-white">{c.title}</span>
              {c.items.map((it) => (
                <span key={it} className="cursor-pointer text-[13px] text-[#a0b0b6] hover:text-white">
                  {it}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-[#2a3a40] pt-[18px]">
        <span className="text-[11px] text-[#6b7a80]">
          © 2026 DPM FILKOM UNIDA. Seluruh hak cipta.
        </span>
        <span className="font-mono text-[10px] tracking-[0.6px] text-[#6b7a80]">
          Dibuat oleh mahasiswa, untuk mahasiswa.
        </span>
      </div>
    </footer>
  )
}
