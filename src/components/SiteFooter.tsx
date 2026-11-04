export default function SiteFooter() {
  const cols = [
    { title: 'Organisasi', items: ['Tentang', 'Struktur', 'Legal'] },
    { title: 'Layanan', items: ['Aspirasi', 'Program', 'Dokumen'] },
    { title: 'Kontak', items: ['dpm@filkom.ac.id', 'Sekretariat GKB', 'Instagram'] },
  ]
  return (
    <footer className="flex w-full flex-col gap-9 border-t border-[#e8e7e3] px-8 py-12">
      <div className="flex items-start justify-between">
        <div className="flex w-[360px] flex-col gap-3">
          <div className="flex items-center gap-[10px]">
            <span className="h-3 w-3 rounded-full bg-[#0a0a0a]" />
            <span className="text-[15px] font-semibold tracking-[-0.3px] text-[#0a0a0a]">
              DPM FILKOM
            </span>
          </div>
          <p className="m-0 max-w-[320px] text-[13px] leading-[1.6] text-[#6b6b6b]">
            Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer, Universitas Brawijaya.
          </p>
        </div>
        <div className="flex gap-16">
          {cols.map((c) => (
            <div key={c.title} className="flex flex-col gap-[10px]">
              <span className="text-[11px] tracking-[1px] text-[#0a0a0a]">{c.title}</span>
              {c.items.map((it) => (
                <span key={it} className="cursor-pointer text-[13px] text-[#6b6b6b] hover:text-[#0a0a0a]">
                  {it}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-[#e8e7e3] pt-[18px]">
        <span className="text-[11px] text-[#82827c]">
          © 2026 DPM FILKOM UNIDA. Seluruh hak cipta.
        </span>
        <span className="font-mono text-[10px] tracking-[0.6px] text-[#82827c]">
          Dibuat oleh mahasiswa, untuk mahasiswa.
        </span>
      </div>
    </footer>
  )
}
