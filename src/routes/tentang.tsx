import { createFileRoute, Link } from '@tanstack/react-router'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'

export const Route = createFileRoute('/tentang')({ component: Tentang })

function Tentang() {
  return (
    <div className="min-h-screen bg-[#DCE2E6] text-[#1E2B30]">
      <Nav />
      <section className="px-8 pt-[92px] pb-16">
        <div className="mb-4 flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">TENTANG KAMI</span>
        </div>
        <h1 className="max-w-[720px] text-[52px] font-medium leading-[1.05] tracking-[-1.8px] text-[#164653]">
          Lembaga perwakilan mahasiswa FILKOM.
        </h1>
        <p className="mt-6 max-w-[520px] text-[16px] leading-[1.6] text-[#4a5a60]">
          Legislatif dan perwakilan mahasiswa. Menyalurkan aspirasi, mengawal kebijakan, menjaga akuntabilitas.
        </p>
      </section>

      <section className="px-8 pb-16">
        <div className="mb-4 flex items-center justify-between border-b border-[#c5cdd1] pb-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">PERAN KAMI</span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            'Aspirasi mahasiswa',
            'Kebijakan fakultas',
            'Akuntabilitas',
            'Kolaborasi',
          ].map((t) => (
            <div key={t} className="rounded-2xl border border-[#c5cdd1] bg-white p-6 transition hover:border-[#2BB3BD]">
              <p className="m-0 text-[15px] text-[#164653]">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 pb-16">
        <div className="mb-4 flex items-center justify-between border-b border-[#c5cdd1] pb-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">KOMISI</span>
          <Link to="/komisi" className="text-[11px] text-[#4a5a60] hover:text-[#164653]">
            Lihat detail →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { name: 'Komisi I', scope: 'Pengawasan' },
            { name: 'Komisi II', scope: 'Aspirasi & Legislasi' },
            { name: 'Komisi III', scope: 'Humas & Kominfo' },
          ].map((c) => (
            <div key={c.name} className="rounded-2xl border border-[#c5cdd1] bg-white p-6 transition hover:border-[#2BB3BD]">
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#E78E3F]">{c.name.toUpperCase()}</span>
              <h3 className="mt-2 text-[20px] font-medium tracking-[-0.4px] text-[#164653]">{c.name}</h3>
              <p className="m-0 mt-1 text-[14px] text-[#4a5a60]">{c.scope}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
