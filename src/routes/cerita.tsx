import { createFileRoute } from '@tanstack/react-router'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'

export const Route = createFileRoute('/cerita')({ component: Cerita })

function Cerita() {
  return (
    <div className="min-h-screen bg-[#DCE2E6] text-[#1E2B30]">
      <Nav />
      <section className="flex gap-16 px-8 pt-[92px] pb-16">
        <div className="flex w-full flex-col gap-[18px] md:w-[540px]">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">CERITA</span>
          <h1 className="max-w-[470px] text-[44px] font-medium leading-[1.1] tracking-[-1.6px] text-[#164653]">
            Cerita DPM FILKOM.
          </h1>
          <p className="max-w-[430px] text-[14px] leading-[1.6] text-[#4a5a60]">
            Kisah, perjalanan, dan dokumentasi kegiatan DPM FILKOM UNIDA.
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
            <span className="font-mono text-[10px] tracking-[1.2px] text-white/70">CERITA</span>
          </div>
        </div>
      </section>

      <section className="px-8 pb-16">
        <div className="mb-4 flex items-center justify-between border-b border-[#c5cdd1] pb-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">ARSIP CERITA</span>
          <span className="text-[11px] text-[#4a5a60]">Segera hadir</span>
        </div>
        <div className="rounded-2xl border border-dashed border-[#c5cdd1] bg-white p-10 text-center">
          <p className="m-0 text-[14px] text-[#6b7a80]">
            Cerita dan dokumentasi akan ditampilkan di sini setelah tersedia.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
