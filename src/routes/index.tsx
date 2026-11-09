import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'

const events = [
  { date: '12 FEB', name: 'Rapat Pleno Terbuka' },
  { date: '03 MAR', name: 'Aspirasi Fest 2026' },
  { date: '21 APR', name: 'Workshop Kepemimpinan' },
  { date: '09 MEI', name: 'Sidang Terbuka' },
]

const links = [
  { idx: '01', label: 'Aspirasi & advokasi', meta: '128 tiket' },
  { idx: '02', label: 'Pengawasan anggaran', meta: 'Transparan' },
  { idx: '03', label: 'Kegiatan mahasiswa', meta: '6 program' },
  { idx: '04', label: 'Publikasi & dokumen', meta: 'Arsip terbuka' },
]

const team = [
  { name: 'Andi Pratama', role: 'KETUA', initial: 'A' },
  { name: 'Siti Rahma', role: 'WAKIL KETUA', initial: 'S' },
  { name: 'Budi Santoso', role: 'SEKRETARIS', initial: 'B' },
  { name: 'Dewi Lestari', role: 'BENDAHARA', initial: 'D' },
]

const news = [
  { date: '12 JAN 2026', title: 'Rapat Pleno Perdana 2026', tag: 'RAPAT' },
  { date: '03 FEB 2026', title: 'Peluncuran Platform Aspirasi Digital', tag: 'PROGRAM' },
  { date: '21 MAR 2026', title: 'Workshop Kepemimpinan Mahasiswa', tag: 'KEGIATAN' },
]

const CODE_LINES = [
  { text: '$ dpm aspirasi --list', className: 'text-[#a0b0b6]' },
  { text: '', className: 'text-[#d4d4d4]' },
  { text: 'GET /api/v1/aspirasi', className: 'text-[#f0f0f0]' },
  { text: '200 OK · 128 entri', className: 'text-[#E78E3F]' },
  { text: '', className: 'text-[#d4d4d4]' },
  { text: 'ID · TOPIK · STATUS', className: 'text-[#6b7a80]' },
  { text: 'A-012 · Beasiswa · selesai', className: 'text-[#d4d4d4]' },
  { text: 'A-013 · Fasilitas · diproses', className: 'text-[#d4d4d4]' },
  { text: 'A-014 · Kurikulum · baru', className: 'text-[#d4d4d4]' },
]
const CODE_TOTAL = CODE_LINES.reduce((a, l) => a + l.text.length, 0)
const CODE_OFFSETS = CODE_LINES.map((_, i) =>
  CODE_LINES.slice(0, i).reduce((a, l) => a + l.text.length, 0),
)

function Home() {
  const [aspirasiInput, setAspirasiInput] = useState('')
  const [aspirasiMsgs, setAspirasiMsgs] = useState([
    { text: 'Kelas tanpa proyektor di GKB 4, mohon ditinjau.', from: 'user' },
    { text: 'Sudah diteruskan ke bagian akademik.', from: 'dpm' },
    { text: 'Status: diproses oleh komisi III', from: 'dpm' },
    { text: 'Terima kasih, ditunggu tindak lanjutnya.', from: 'user' },
  ])
  function sendAspirasi() {
    if (!aspirasiInput.trim()) return
    setAspirasiMsgs((m) => [...m, { text: aspirasiInput.trim(), from: 'user' }])
    setAspirasiInput('')
  }
  const [visibleMsgs, setVisibleMsgs] = useState(0)
  useEffect(() => {
    if (visibleMsgs >= aspirasiMsgs.length) {
      const t = setTimeout(() => setVisibleMsgs(0), 2600)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setVisibleMsgs((v) => v + 1), 850)
    return () => clearTimeout(t)
  }, [visibleMsgs, aspirasiMsgs.length])
  const [codeN, setCodeN] = useState(0)
  useEffect(() => {
    if (codeN >= CODE_TOTAL) {
      const t = setTimeout(() => setCodeN(0), 2200)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setCodeN((n) => n + 1), 35)
    return () => clearTimeout(t)
  }, [codeN])
  const [eventItems, setEventItems] = useState(events)
  useEffect(() => {
    const t = setInterval(() => {
      setEventItems((items) => [...items.slice(1), items[0]])
    }, 2600)
    return () => clearInterval(t)
  }, [])
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return (
    <div className="min-h-screen bg-[#DCE2E6] text-[#1E2B30]">
      <Nav />

      {/* Hero */}
      <section className="flex flex-col items-center gap-6 px-4 pt-[46px] pb-8 md:px-10">
        <div className="hero-badge flex items-center gap-2 rounded-full border border-[#c5cdd1] bg-white px-[12px] py-[6px]">
          <span className="h-[6px] w-[6px] rounded-full bg-[#E78E3F]" />
          <span className="font-mono text-[10px] tracking-[1.1px] text-[#4a5a60]">
            PARLEMEN AKSARA 2026/2027.
          </span>
        </div>
        <h1 className="max-w-[860px] text-center text-[clamp(24px,8vw,40px)] font-medium leading-[1.04] tracking-[-1.6px] md:text-[68px] md:tracking-[-2.6px] text-[#164653]">
          <span className="hero-line block">
            <span className="hero-line-inner block whitespace-nowrap">Merangkai Aspirasi</span>
          </span>
          <span className="hero-line block">
            <span className="hero-line-inner hero-line-delay block whitespace-nowrap">Mengawal Demokrasi</span>
          </span>
        </h1>
        <p className="hero-sub max-w-[600px] text-center text-[15px] leading-[1.55] text-[#4a5a60] md:text-[16px]">
          Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer Universitas Djuanda
        </p>
        <div className="flex items-center gap-[10px]">
          <Link
            to="/aduan"
            className="flex items-center gap-2 rounded-full bg-[#2BB3BD] px-5 py-3 text-[13px] font-medium text-[#164653]"
          >
            Sampaikan Aspirasi
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        
        </div>
      </section>

      {/* Program Grid */}
      <section className="reveal px-4 md:px-8 pb-14 pt-0">
        <div className="mb-4 flex items-center justify-between border-b border-[#c5cdd1] pb-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">
            PROGRAM &amp; LAYANAN
          </span>
          <span className="font-mono text-[10px] tracking-[0.6px] text-[#6b7a80]">
            06 inisiatif aktif
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Card Aspirasi */}
          <div className="flex h-[340px] flex-col overflow-hidden rounded-2xl border border-[#c5cdd1] bg-white">
            <div className="flex flex-1 flex-col justify-between gap-2 p-[18px]">
              <div className="flex flex-col gap-2">
                {aspirasiMsgs.slice(0, visibleMsgs).map((m, i) => {
                  const isUser = m.from === 'user'
                  return (
                    <div
                      key={i}
                      className={`bubble-in max-w-[85%] px-3 py-[9px] ${
                        isUser
                          ? 'self-end border border-[#2BB3BD] bg-[#2BB3BD]'
                          : 'self-start border border-[#c5cdd1] bg-[#DCE2E6]'
                      }`}
                      style={{
                        borderRadius: isUser
                          ? '12px 12px 4px 12px'
                          : '12px 12px 12px 4px',
                      }}
                    >
                      <p
                        className={`m-0 font-mono text-[10.5px] leading-[1.4] ${
                          isUser ? 'text-[#164653]' : 'text-[#4a5a60]'
                        }`}
                      >
                        {m.text}
                      </p>
                    </div>
                  )
                })}
              </div>
              <div className="flex items-center gap-2 rounded-[10px] border border-[#c5cdd1] bg-[#DCE2E6] px-3 py-[9px]">
                <input
                  value={aspirasiInput}
                  onChange={(e) => setAspirasiInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') sendAspirasi() }}
                  placeholder="Tulis aspirasi…"
                  className="flex-1 bg-transparent font-mono text-[10.5px] text-[#4a5a60] outline-none placeholder:text-[#6b7a80]"
                />
                <button
                  type="button"
                  onClick={sendAspirasi}
                  className="h-[22px] w-[22px] rounded-full bg-[#2BB3BD] text-[10px] font-bold text-[#164653]"
                >
                  ↑
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#c5cdd1] px-[18px] py-[13px]">
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#4a5a60]">ASPIRASI</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5a60" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>

          {/* Card Sistem */}
          <div className="flex h-[340px] flex-col overflow-hidden rounded-2xl border border-[#164653] bg-[#164653]">
            <div className="flex flex-1 flex-col justify-between gap-2 p-[18px]">
              <div className="flex flex-col font-mono text-[10.5px] leading-[1.65]">
                {CODE_LINES.map((line, i) => {
                  const start = CODE_OFFSETS[i]
                  if (codeN < start) return null
                  const visible = line.text.slice(0, Math.min(line.text.length, codeN - start))
                  const isActive = codeN - start < line.text.length
                  return (
                    <span key={i} className={line.className}>
                      {line.text === '' ? '\u00A0' : visible}
                      {isActive && <span className="animate-pulse text-[#ff6208]">▌</span>}
                    </span>
                  )
                })}
                {codeN >= CODE_TOTAL && <span className="animate-pulse text-[#ff6208]">▌</span>}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#164653] px-[18px] py-[13px]">
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#a0b0b6]">SISTEM</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>

          {/* Card Kegiatan */}
          <div className="flex h-[340px] flex-col overflow-hidden rounded-2xl border border-[#c5cdd1] bg-white">
            <div className="relative flex-1 overflow-hidden p-[18px]">
              <div className="relative h-full">
                {eventItems.map((e, slot) => (
                  <div
                    key={e.name}
                    className="absolute left-0 right-0 flex h-[58px] items-center gap-[10px] rounded-[9px] border border-[#c5cdd1] bg-[#DCE2E6] px-[10px] will-change-[top] hover:border-[#2BB3BD] hover:bg-white"
                    style={{
                      top: slot * 66,
                      zIndex: events.length - slot,
                      transition:
                        'top 700ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms, background-color 150ms',
                    }}
                  >
                    <span className="font-mono text-[9.5px] tracking-[0.8px] text-[#6b7a80]">
                      {e.date}
                    </span>
                    <span className="text-[12px] text-[#164653]">{e.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#c5cdd1] px-[18px] py-[13px]">
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#4a5a60]">KEGIATAN</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5a60" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Card Galeri */}
          <div className="flex h-[340px] flex-col overflow-hidden rounded-2xl border border-[#c5cdd1] bg-white">
            <div className="flex flex-1 overflow-hidden">
              <div className="flex flex-1 flex-col gap-[2px]">
                <div className="flex flex-1 gap-[2px]">
                  <div
                    className="flex-1 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                    style={{
                      backgroundImage:
                        'url(/komisi-1.webp)',
                    }}
                  />
                  <div
                    className="flex-1 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                    style={{
                      backgroundImage:
                        'url(/komisi-2.webp)',
                    }}
                  />
                </div>
              </div>
              <div
                className="w-[33%] bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{
                  backgroundImage:
                    'url(/komisi-3.webp)',
                }}
              />
            </div>
            <div className="flex items-center justify-between border-t border-[#c5cdd1] px-[18px] py-[13px]">
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#4a5a60]">GALERI</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5a60" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>

          {/* Card Dies Natalis */}
          <div className="flex h-[340px] flex-col overflow-hidden rounded-2xl border border-[#164653] bg-[#164653]">
            <div className="flex flex-1 items-center justify-center overflow-hidden">
              <img
                src="/cctv.webp"
                alt="CCTV"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between border-t border-[#164653] px-[18px] py-[13px]">
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#a0b0b6]">
                DIES NATALIS
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="reveal flex flex-col gap-16 px-4 py-7 md:flex-row md:px-8">
        <div className="flex w-full flex-col gap-[18px] md:w-[540px]">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">TENTANG KAMI</span>
          <h2 className="max-w-full text-[32px] font-medium leading-[1.1] tracking-[-1.2px] text-[#164653] md:text-[44px] md:tracking-[-1.6px] md:max-w-[470px]">
            Satu organisasi.
            <br />
            Semua peran mahasiswa.
          </h2>
          <p className="max-w-full text-[14px] leading-[1.6] text-[#4a5a60] md:max-w-[430px]">
            Legislatif & perwakilan mahasiswa FILKOM.
          </p>
          <div className="flex w-full flex-col md:w-[470px]">
            {links.map((l) => (
              <div
                key={l.label}
                className="flex items-center justify-between border-b border-[#c5cdd1] py-[13px]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.6px] text-[#6b7a80]">{l.idx}</span>
                  <span className="text-[14px] text-[#164653]">{l.label}</span>
                </div>
                <span className="font-mono text-[10.5px] text-[#6b7a80]">{l.meta}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative flex-1 overflow-hidden rounded-[20px]"
          style={{
            height: 520,
            background:
              'linear-gradient(135deg, #44C2D6 0%, #2BB3BD 45%, #164653 100%)',
          }}
        >
          <div className="absolute left-7 top-[26px] flex w-[520px] flex-col">
            {[
              'aspirasi.submit({',
              '  topik: "Fasilitas",',
              '  ruang: "GKB 4",',
              '  urgensi: "tinggi",',
              '})',
              '',
              '→ tiket #A-013 dibuat · 1.2s',
            ].map((line, i) => (
              <span
                key={i}
                className="font-mono text-[12px] leading-[1.75]"
                style={{
                  color:
                    line.includes('topik') || line.includes('ruang')
                      ? '#ffffff'
                      : line.includes('urgensi')
                      ? '#DCE2E6'
                      : line.startsWith('→')
                      ? '#164653'
                      : '#ffffff',
                }}
              >
                {line || '\u00A0'}
              </span>
            ))}
          </div>
          <div className="absolute left-14 top-[352px] w-[420px] rounded-[14px] bg-white p-4 shadow-[0_12px_32px_rgba(22,70,83,0.2)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[9.5px] tracking-[1px] text-[#6b7a80]">
                STATUS ASPIRASI #A-013
              </span>
              <span className="font-mono text-[9px] tracking-[0.8px] text-[#E78E3F]">DIPROSES</span>
            </div>
            <h3 className="mb-3 text-[15px] font-medium text-[#164653]">
              Fasilitas ruang kelas GKB 4
            </h3>
            <div className="mb-3 flex flex-wrap items-center gap-[6px]">
              {['Diterima', 'Diverifikasi', 'Komisi III', 'Selesai'].map((s, i) => (
                <span
                  key={s}
                  className="flex items-center gap-[6px] rounded-full px-[9px] py-[5px] text-[10px] font-mono"
                  style={{
                    background: i < 3 ? '#DCE2E6' : '#ffffff',
                    border: i < 3 ? '1px solid #DCE2E6' : '1px solid #c5cdd1',
                    color: i < 3 ? '#164653' : '#6b7a80',
                  }}
                >
                  <span
                    className="h-[5px] w-[5px] rounded-full"
                    style={{ background: i < 3 ? '#E78E3F' : '#c5cdd1' }}
                  />
                  {s}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-[#6b7a80]">Respons Komisi III · 2 hari kerja</span>
              <span className="rounded-full bg-[#2BB3BD] px-3 py-[7px] text-[11px] font-medium text-[#164653]">
                Lacak
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="reveal flex items-center border-y border-[#c5cdd1] bg-white px-4 md:px-8 py-9">
        {[
          { value: '2.400+', label: 'Mahasiswa aktif' },
          { value: '128', label: 'Aspirasi ditangani' },
          { value: '48', label: 'Kegiatan per tahun' },
          { value: '99%', label: 'Tindak lanjut' },
        ].map((s, i) => (
          <div key={s.label} className="flex items-center">
            {i > 0 && <div className="mx-7 h-11 w-px bg-[#c5cdd1]" />}
            <div className="flex flex-col gap-[6px]">
              <span className="text-[28px] font-medium leading-none tracking-[-1px] text-[#164653] md:text-[40px] md:tracking-[-1.4px]">
                {s.value}
              </span>
              <span className="font-mono text-[10px] tracking-[1px] text-[#4a5a60]">
                {s.label}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Team */}
      <section className="reveal flex flex-col gap-7 px-4 md:px-8 py-8">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[14px]">
            <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">STRUKTUR</span>
            <h2 className="max-w-[620px] text-[32px] font-medium leading-[1.12] tracking-[-1.2px] text-[#164653] md:text-[44px] md:tracking-[-1.6px]">
              Orang-orang di balik meja.
            </h2>
          </div>
          <div className="flex items-center gap-[6px] pb-1">
            <span className="font-mono text-[10px] tracking-[0.9px] text-[#6b7a80]">PERIODE 2025/2026</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7a80" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col gap-[10px]">
              <div className="flex h-[230px] items-end rounded-xl border border-[#c5cdd1] bg-[#DCE2E6] p-4">
                <span className="text-[72px] font-medium leading-none tracking-[-3px] text-[#8fa6ad]">
                  {m.initial}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#164653]">{m.name}</span>
                <span className="font-mono text-[9px] tracking-[0.9px] text-[#6b7a80]">{m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="reveal flex flex-col px-4 md:px-8 pb-8 pt-0">
        <div className="mb-2 flex items-center justify-between border-b border-[#c5cdd1] pb-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">KABAR TERBARU</span>
          <span className="text-[11px] text-[#4a5a60]">Semua berita ↗</span>
        </div>
        {news.map((n) => (
          <div
            key={n.title}
            className="flex items-center justify-between border-b border-[#c5cdd1] py-[22px]"
          >
            <div className="flex items-center gap-6">
              <span className="font-mono text-[10px] tracking-[0.8px] text-[#6b7a80]">{n.date}</span>
              <span className="text-[16px] font-medium tracking-[-0.4px] text-[#164653] md:text-[20px]">{n.title}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[9px] tracking-[0.9px] text-[#4a5a60]">{n.tag}</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#164653" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        ))}
      </section>

      {/* CTA - Aduan */}
      <section className="reveal px-4 md:px-8 pb-8 pt-0">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-[#164653] px-12 py-[72px] text-center">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#a0b0b6]">
            ADUAN MAHASISWA
          </span>
          <h2 className="max-w-[760px] text-[32px] font-medium leading-[1.1] tracking-[-1.2px] text-white md:text-[52px] md:tracking-[-1.8px]">
            Sampaikan aspirasi dan aduan Anda.
          </h2>
          <p className="max-w-[560px] text-[14px] leading-[1.6] text-[#a0b0b6]">
            DPM FILKOM UNIDA menampung aspirasi, aduan, dan masukan mahasiswa
            melalui surat aduan resmi.
          </p>
          <a
            href="/aduan"
            className="flex items-center gap-2 rounded-full bg-[#E78E3F] px-[22px] py-[13px] text-[13px] font-medium text-[#164653]"
          >
            Buat Surat Aduan
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export const Route = createFileRoute('/')({ component: Home })
