import { createFileRoute } from '@tanstack/react-router'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  return (
    <div className="min-h-screen bg-[#DCE2E6] text-[#1E2B30]">
      <Nav />
      <section className="px-4 md:px-8 pt-[46px] pb-8">
        <div className="mb-4 flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">TENTANG</span>
        </div>
        <h1 className="max-w-full md:w-[720px] text-[52px] font-medium leading-[1.05] tracking-[-1.8px] text-[#164653]">
          A small starter with room to grow.
        </h1>
        <p className="mt-6 max-w-full md:w-[640px] text-[16px] leading-[1.6] text-[#4a5a60]">
          TanStack Start gives you type-safe routing, server functions, and modern
          SSR defaults. Use this as a clean foundation, then layer in your own
          routes, styling, and add-ons.
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
