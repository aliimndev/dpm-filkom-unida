import { createFileRoute } from '@tanstack/react-router'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'

export const Route = createFileRoute('/dokumentasi')({ component: Dokumentasi })

const docs = [
  { title: 'Musyawarah Kerja (MUKER)' },
  { title: 'Musyawarah Besar (MUBES)' },
]

function Dokumentasi() {
  return (
    <div className="min-h-screen bg-[#DCE2E6] text-[#1E2B30]">
      <Nav />
      <section className="px-8 pt-[92px] pb-16">
        <div className="mb-4 flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">DOKUMENTASI</span>
        </div>
        <h1 className="max-w-[720px] text-[52px] font-medium leading-[1.05] tracking-[-1.8px] text-[#164653]">
          Arsip organisasi.
        </h1>
        <p className="mt-6 max-w-[640px] text-[16px] leading-[1.6] text-[#4a5a60]">
          Kumpulan dokumen resmi DPM FILKOM UNIDA.
        </p>
      </section>

      <section className="px-8 pb-16">
        <div className="mb-2 flex items-center justify-between border-b border-[#c5cdd1] pb-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">ARSIP</span>
          <span className="text-[11px] text-[#4a5a60]">Dokumen organisasi</span>
        </div>
        {docs.map((d) => (
          <div
            key={d.title}
            className="flex items-center justify-between border-b border-[#c5cdd1] py-[22px]"
          >
            <span className="text-[20px] font-medium tracking-[-0.4px] text-[#164653]">{d.title}</span>
            <span className="font-mono text-[9px] tracking-[0.9px] text-[#4a5a60]">DOKUMEN</span>
          </div>
        ))}
        <div className="mt-8 rounded-2xl border border-dashed border-[#c5cdd1] bg-white p-8 text-center">
          <p className="m-0 text-[13px] text-[#6b7a80]">Dokumen akan ditampilkan di sini setelah tersedia.</p>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
