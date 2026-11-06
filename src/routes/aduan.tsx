import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'

export const Route = createFileRoute('/aduan')({ component: Aduan })

function Aduan() {
  const [form, setForm] = useState({
    nama: '',
    nim: '',
    komisi: 'Komisi II',
    topik: '',
    isi: '',
  })
  const [ticket, setTicket] = useState<null | typeof form>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setTicket({ ...form })
  }

  return (
    <div className="min-h-screen bg-[#DCE2E6] text-[#1E2B30]">
      <Nav />
      <section className="flex gap-16 px-8 pt-[92px] pb-16">
        <div className="flex w-full flex-col gap-[18px] md:w-[540px]">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">ADUAN</span>
          <h1 className="max-w-[470px] text-[44px] font-medium leading-[1.1] tracking-[-1.6px] text-[#164653]">
            Surat aduan mahasiswa.
          </h1>
          <p className="max-w-[430px] text-[14px] leading-[1.6] text-[#4a5a60]">
            Sampaikan aspirasi, aduan, atau masukan Anda kepada DPM FILKOM UNIDA.
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
            <span className="font-mono text-[10px] tracking-[1.2px] text-white/70">ADUAN</span>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 px-8 pb-16 md:flex-row">
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between border-b border-[#c5cdd1] pb-2">
            <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">FORM ADUAN</span>
          </div>
          <div className="rounded-2xl border border-[#c5cdd1] bg-white p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-[1.1px] text-[#4a5a60]">NAMA</label>
                <input
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-[#c5cdd1] bg-[#DCE2E6] px-4 py-3 text-[14px] text-[#1E2B30] outline-none focus:border-[#2BB3BD]"
                  placeholder="Nama lengkap"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-[1.1px] text-[#4a5a60]">NIM</label>
                <input
                  name="nim"
                  value={form.nim}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-[#c5cdd1] bg-[#DCE2E6] px-4 py-3 text-[14px] text-[#1E2B30] outline-none focus:border-[#2BB3BD]"
                  placeholder="NIM"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-[1.1px] text-[#4a5a60]">KOMISI TUJUAN</label>
                <select
                  name="komisi"
                  value={form.komisi}
                  onChange={handleChange}
                  className="rounded-xl border border-[#c5cdd1] bg-[#DCE2E6] px-4 py-3 text-[14px] text-[#1E2B30] outline-none focus:border-[#2BB3BD]"
                >
                  <option>Komisi I — Pengawasan</option>
                  <option>Komisi II — Aspirasi &amp; Legislasi</option>
                  <option>Komisi III — Humas &amp; Kominfo</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-[1.1px] text-[#4a5a60]">TOPIK</label>
                <input
                  name="topik"
                  value={form.topik}
                  onChange={handleChange}
                  required
                  className="rounded-xl border border-[#c5cdd1] bg-[#DCE2E6] px-4 py-3 text-[14px] text-[#1E2B30] outline-none focus:border-[#2BB3BD]"
                  placeholder="Topik aduan"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-[1.1px] text-[#4a5a60]">ISI ADUAN</label>
                <textarea
                  name="isi"
                  value={form.isi}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="rounded-xl border border-[#c5cdd1] bg-[#DCE2E6] px-4 py-3 text-[14px] text-[#1E2B30] outline-none focus:border-[#2BB3BD]"
                  placeholder="Tuliskan aduan Anda..."
                />
              </div>
              <button
                type="submit"
                className="self-start rounded-full bg-[#2BB3BD] px-[22px] py-[13px] text-[13px] font-medium text-[#164653]"
              >
                Kirim Aduan
              </button>
            </form>
          </div>
        </div>

        <div className="w-full md:w-[420px]">
          <div className="mb-4 flex items-center justify-between border-b border-[#c5cdd1] pb-2">
            <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">TIKET ADUAN</span>
          </div>
          {ticket ? (
            <div className="flex flex-col gap-4 rounded-2xl border border-[#164653] bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[1.1px] text-[#E78E3F]">TIKET #ADU-001</span>
                <span className="rounded-full bg-[#2BB3BD] px-3 py-1 text-[10px] font-medium text-[#164653]">DIPROSES</span>
              </div>
              <div className="flex flex-col gap-2 border-t border-[#c5cdd1] pt-4">
                <div className="flex justify-between">
                  <span className="font-mono text-[10px] text-[#6b7a80]">NAMA</span>
                  <span className="text-[13px] text-[#164653]">{ticket.nama}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-[10px] text-[#6b7a80]">NIM</span>
                  <span className="text-[13px] text-[#164653]">{ticket.nim}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-[10px] text-[#6b7a80]">KOMISI</span>
                  <span className="text-[13px] text-[#164653]">{ticket.komisi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-[10px] text-[#6b7a80]">TOPIK</span>
                  <span className="text-[13px] text-[#164653]">{ticket.topik}</span>
                </div>
              </div>
              <div className="rounded-xl bg-[#DCE2E6] p-4">
                <p className="m-0 text-[12px] leading-[1.5] text-[#4a5a60]">{ticket.isi}</p>
              </div>
              <p className="m-0 text-[11px] text-[#6b7a80]">
                Aduan akan ditindaklanjuti oleh komisi terkait.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#c5cdd1] bg-white p-10 text-center">
              <p className="m-0 text-[13px] text-[#6b7a80]">
                Tiket aduan akan muncul di sini setelah formulir dikirim.
              </p>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
