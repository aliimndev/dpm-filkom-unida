import { createFileRoute, Link } from '@tanstack/react-router'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'

export const Route = createFileRoute('/tentang')({ component: Tentang })

const roles = ['Aspirasi mahasiswa', 'Kebijakan fakultas', 'Akuntabilitas', 'Kolaborasi']

function Tentang() {
  return (
    <div className="min-h-screen bg-[#DCE2E6] text-[#1E2B30]">
      <Nav />
      <section className="flex flex-col gap-16 px-4 md:px-8 pt-[46px] pb-8 md:flex-row">
        <div className="flex w-full flex-col gap-[18px] md:w-full md:w-[540px]">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">TENTANG KAMI</span>
          <h1 className="max-w-full md:w-[470px] text-[44px] font-medium leading-[1.1] tracking-[-1.6px] text-[#164653]">
            Lembaga perwakilan mahasiswa FILKOM.
          </h1>
          <p className="max-w-full md:w-[430px] text-[14px] leading-[1.6] text-[#4a5a60]">
            Legislatif & perwakilan mahasiswa. Menyalurkan aspirasi, mengawal kebijakan, menjaga akuntabilitas.
          </p>
        </div>
        <div
          className="relative hidden flex-1 overflow-hidden rounded-[20px] md:block"
          style={{
            minHeight: 320,
            background: 'linear-gradient(135deg, #44C2D6 0%, #2BB3BD 45%, #164653 100%)',
          }}
        >
          <div className="absolute bottom-6 left-6">
            <span className="font-mono text-[10px] tracking-[1.2px] text-white/70">DPM FILKOM UNIDA</span>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-8">
        <div className="mb-4 flex items-center justify-between border-b border-[#c5cdd1] pb-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">PERAN KAMI</span>
          <span className="font-mono text-[10px] tracking-[0.6px] text-[#6b7a80]">04 peran</span>
        </div>
        <div className="flex w-full flex-col md:w-full md:w-[640px]">
          {roles.map((r, i) => (
            <div
              key={r}
              className="flex items-center justify-between border-b border-[#c5cdd1] py-[14px] transition hover:border-[#2BB3BD]"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.6px] text-[#6b7a80]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] text-[#164653]">{r}</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c5cdd1" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-8">
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
            <div
              key={c.name}
              className="flex flex-col gap-3 rounded-2xl border border-[#c5cdd1] bg-white p-6 transition hover:border-[#2BB3BD]"
            >
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#E78E3F]">{c.name.toUpperCase()}</span>
              <h3 className="text-[20px] font-medium tracking-[-0.4px] text-[#164653]">{c.name}</h3>
              <p className="m-0 text-[14px] text-[#4a5a60]">{c.scope}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
