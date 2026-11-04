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
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#DCE2E6] text-[#1E2B30]">
      <Nav />
      <section className="px-8 pt-[92px] pb-16">
        <div className="mb-4 flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">ADUAN</span>
        </div>
        <h1 className="max-w-[720px] text-[52px] font-medium leading-[1.05] tracking-[-1.8px] text-[#164653]">
          Surat aduan mahasiswa.
        </h1>
        <p className="mt-6 max-w-[640px] text-[16px] leading-[1.6] text-[#4a5a60]">
          Sampaikan aspirasi, aduan, atau masukan Anda kepada DPM FILKOM UNIDA
          melalui formulir berikut.
        </p>
      </section>

      <section className="px-8 pb-16">
        <div className="max-w-[720px] rounded-2xl border border-[#c5cdd1] bg-white p-8">
          {submitted ? (
            <div className="text-center">
              <h2 className="text-[24px] font-medium text-[#164653]">Aduan terkirim.</h2>
              <p className="mt-2 text-[14px] text-[#4a5a60]">
                Terima kasih. Aduan Anda akan ditindaklanjuti oleh komisi terkait.
              </p>
            </div>
          ) : (
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
                  <option>Komisi II — Aspirasi & Legislasi</option>
                  <option>Komisi III — Humas & Kominfo</option>
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
                  rows={6}
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
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
