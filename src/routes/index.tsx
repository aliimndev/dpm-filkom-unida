import { createFileRoute } from '@tanstack/react-router'
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

function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      <Nav />

      {/* Hero */}
      <section className="flex flex-col items-center gap-6 px-10 pt-[92px] pb-16">
        <div className="flex items-center gap-2 rounded-full border border-[#e8e7e3] px-[12px] py-[6px]">
          <span className="h-[6px] w-[6px] rounded-full bg-[#ff6208]" />
          <span className="font-mono text-[10px] tracking-[1.1px] text-[#6b6b6b]">
            PERIODE 2025/2026 · FILKOM UNIDA
          </span>
        </div>
        <h1 className="max-w-[860px] text-center text-[68px] font-medium leading-[1.04] tracking-[-2.6px] text-[#0a0a0a]">
          Suara mahasiswa, dijalankan jadi aksi nyata.
        </h1>
        <p className="max-w-[600px] text-center text-[16px] leading-[1.55] text-[#6b6b6b]">
          DPM FILKOM UNIDA menyalurkan aspirasi, mengawal kebijakan, dan membangun
          ruang kolaborasi untuk seluruh mahasiswa Fakultas Ilmu Komputer.
        </p>
        <div className="flex items-center gap-[10px]">
          <button className="flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-3 text-[13px] text-white">
            Jelajahi Program
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
          <button className="flex items-center gap-2 rounded-full border border-[#dcdbd6] bg-white px-5 py-3 text-[13px] text-[#0a0a0a]">
            Sampaikan Aspirasi
          </button>
        </div>
      </section>

      {/* Program Grid */}
      <section className="px-8 pb-14 pt-0">
        <div className="mb-4 flex items-center justify-between border-b border-[#e8e7e3] pb-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#6b6b6b]">
            PROGRAM &amp; LAYANAN
          </span>
          <span className="font-mono text-[10px] tracking-[0.6px] text-[#7d7d77]">
            06 inisiatif aktif
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {/* Card Aspirasi */}
          <div className="flex h-[340px] flex-col overflow-hidden rounded-2xl border border-[#e8e7e3] bg-[#f5f4f1]">
            <div className="flex flex-1 flex-col justify-between gap-2 p-[18px]">
              <div className="flex flex-col gap-2">
                {[
                  'Kelas tanpa proyektor di GKB 4, mohon ditinjau.',
                  'Sudah diteruskan ke bagian akademik.',
                  'Status: diproses oleh komisi III',
                ].map((t, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-[#e8e7e3] bg-white px-3 py-[9px]"
                    style={{ borderRadius: '12px 12px 12px 4px' }}
                  >
                    <p className="m-0 font-mono text-[10.5px] leading-[1.4] text-[#4a4a4a]">
                      {t}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between rounded-[10px] border border-[#e8e7e3] bg-white px-3 py-[9px]">
                <span className="font-mono text-[10.5px] text-[#82827c]">Tulis aspirasi…</span>
                <span className="h-[22px] w-[22px] rounded-full bg-[#0a0a0a]" />
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#e8e7e3] px-[18px] py-[13px]">
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#6b6b6b]">ASPIRASI</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b6b6b" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>

          {/* Card Sistem */}
          <div className="flex h-[340px] flex-col overflow-hidden rounded-2xl border border-[#242424] bg-[#0a0a0a]">
            <div className="flex flex-1 flex-col justify-between gap-2 p-[18px]">
              <div className="flex flex-col font-mono text-[10.5px] leading-[1.65]">
                <span className="text-[#7d7d7d]">$ dpm aspirasi --list</span>
                <span className="text-[#d4d4d4]">&nbsp;</span>
                <span className="text-[#f0f0f0]">GET /api/v1/aspirasi</span>
                <span className="text-[#ff6208]">200 OK · 128 entri</span>
                <span className="text-[#d4d4d4]">&nbsp;</span>
                <span className="text-[#6f6f6f]">ID · TOPIK · STATUS</span>
                <span className="text-[#d4d4d4]">A-012 · Beasiswa · selesai</span>
                <span className="text-[#d4d4d4]">A-013 · Fasilitas · diproses</span>
                <span className="text-[#d4d4d4]">A-014 · Kurikulum · baru</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#242424] px-[18px] py-[13px]">
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#8f8f8f]">SISTEM</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>

          {/* Card Kegiatan */}
          <div className="flex h-[340px] flex-col overflow-hidden rounded-2xl border border-[#e8e7e3] bg-[#f5f4f1]">
            <div className="flex flex-1 flex-col justify-between gap-2 p-[18px]">
              <div className="flex flex-col gap-2">
                {events.map((e) => (
                  <div
                    key={e.name}
                    className="flex items-center gap-[10px] rounded-[9px] border border-[#e8e7e3] bg-white px-[10px] py-[9px]"
                  >
                    <span className="font-mono text-[9.5px] tracking-[0.8px] text-[#7d7d77]">
                      {e.date}
                    </span>
                    <span className="text-[12px] text-[#0a0a0a]">{e.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#e8e7e3] px-[18px] py-[13px]">
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#6b6b6b]">KEGIATAN</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b6b6b" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-[912px_1fr] gap-4">
          {/* Card Galeri */}
          <div className="flex h-[340px] flex-col overflow-hidden rounded-2xl border border-[#e8e7e3] bg-white">
            <div className="flex flex-1 overflow-hidden">
              <div className="flex flex-1 flex-col gap-[2px]">
                <div className="flex flex-1 gap-[2px]">
                  <div
                    className="flex-1 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url(https://images.unsplash.com/photo-1562852293-c2dec232e381?w=1080)',
                    }}
                  />
                  <div
                    className="flex-1 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url(https://images.unsplash.com/photo-1781690643349-011c1fc2a6cf?w=1080)',
                    }}
                  />
                </div>
              </div>
              <div
                className="w-[33%] bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1758270703824-a6565c6a33a8?w=1080)',
                }}
              />
            </div>
            <div className="flex items-center justify-between border-t border-[#e8e7e3] px-[18px] py-[13px]">
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#6b6b6b]">GALERI</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b6b6b" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>

          {/* Card Dies Natalis */}
          <div className="flex h-[340px] flex-col overflow-hidden rounded-2xl border border-[#242424] bg-[#0a0a0a]">
            <div className="flex flex-1 items-center justify-center overflow-hidden">
              <div
                className="h-[260px] w-[260px] rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, #ff6208 0%, #8a2b06 55%, #101010 100%)',
                }}
              />
            </div>
            <div className="flex items-center justify-between border-t border-[#242424] px-[18px] py-[13px]">
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#8f8f8f]">
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
      <section className="flex gap-16 px-8 py-14">
        <div className="flex w-[540px] flex-col gap-[18px]">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#6b6b6b]">TENTANG KAMI</span>
          <h2 className="max-w-[470px] text-[44px] font-medium leading-[1.1] tracking-[-1.6px] text-[#0a0a0a]">
            Satu organisasi.
            <br />
            Semua peran mahasiswa.
          </h2>
          <p className="max-w-[430px] text-[14px] leading-[1.6] text-[#6b6b6b]">
            Kami legislator, pengawas anggaran, dan jembatan antara mahasiswa dan
            fakultas. Setiap aspirasi punya tiket, setiap keputusan punya catatan.
          </p>
          <div className="flex w-[470px] flex-col">
            {links.map((l) => (
              <div
                key={l.label}
                className="flex items-center justify-between border-b border-[#e8e7e3] py-[13px]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.6px] text-[#82827c]">{l.idx}</span>
                  <span className="text-[14px] text-[#0a0a0a]">{l.label}</span>
                </div>
                <span className="font-mono text-[10.5px] text-[#82827c]">{l.meta}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative flex-1 overflow-hidden rounded-[20px]"
          style={{
            height: 520,
            background:
              'linear-gradient(135deg, #ffa552 0%, #ff6208 45%, #a33000 100%)',
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
                      ? '#ffd8bd'
                      : line.startsWith('→')
                      ? '#3a1200'
                      : line === '' || line === '})'
                      ? '#fff1e6'
                      : '#fff1e6',
                }}
              >
                {line || '\u00A0'}
              </span>
            ))}
          </div>
          <div className="absolute left-14 top-[352px] w-[420px] rounded-[14px] bg-white p-4 shadow-[0_12px_32px_rgba(74,18,0,0.2)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[9.5px] tracking-[1px] text-[#8a8a86]">
                STATUS ASPIRASI #A-013
              </span>
              <span className="font-mono text-[9px] tracking-[0.8px] text-[#ff6208]">DIPROSES</span>
            </div>
            <h3 className="mb-3 text-[15px] font-medium text-[#0a0a0a]">
              Fasilitas ruang kelas GKB 4
            </h3>
            <div className="mb-3 flex flex-wrap items-center gap-[6px]">
              {['Diterima', 'Diverifikasi', 'Komisi III', 'Selesai'].map((s, i) => (
                <span
                  key={s}
                  className="flex items-center gap-[6px] rounded-full px-[9px] py-[5px] text-[10px] font-mono"
                  style={{
                    background: i < 3 ? '#f3f2ee' : '#ffffff',
                    border: i < 3 ? '1px solid #f3f2ee' : '1px solid #e8e7e3',
                    color: i < 3 ? '#0a0a0a' : '#7d7d77',
                  }}
                >
                  <span
                    className="h-[5px] w-[5px] rounded-full"
                    style={{ background: i < 3 ? '#ff6208' : '#c9c8c3' }}
                  />
                  {s}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-[#8a8a86]">Respons Komisi III · 2 hari kerja</span>
              <span className="rounded-full bg-[#0a0a0a] px-3 py-[7px] text-[11px] text-white">
                Lacak
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="flex items-center border-y border-[#e8e7e3] px-8 py-9">
        {[
          { value: '2.400+', label: 'Mahasiswa aktif' },
          { value: '128', label: 'Aspirasi ditangani' },
          { value: '48', label: 'Kegiatan per tahun' },
          { value: '99%', label: 'Tindak lanjut' },
        ].map((s, i) => (
          <div key={s.label} className="flex items-center">
            {i > 0 && <div className="mx-7 h-11 w-px bg-[#e8e7e3]" />}
            <div className="flex flex-col gap-[6px]">
              <span className="text-[40px] font-medium leading-none tracking-[-1.4px] text-[#0a0a0a]">
                {s.value}
              </span>
              <span className="font-mono text-[10px] tracking-[1px] text-[#6b6b6b]">
                {s.label}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Team */}
      <section className="flex flex-col gap-7 px-8 py-16">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[14px]">
            <span className="font-mono text-[10px] tracking-[1.2px] text-[#6b6b6b]">STRUKTUR</span>
            <h2 className="max-w-[620px] text-[44px] font-medium leading-[1.12] tracking-[-1.6px] text-[#0a0a0a]">
              Orang-orang di balik meja.
            </h2>
          </div>
          <div className="flex items-center gap-[6px] pb-1">
            <span className="font-mono text-[10px] tracking-[0.9px] text-[#82827c]">PERIODE 2025/2026</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a3a3a0" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col gap-[10px]">
              <div className="flex h-[230px] items-end rounded-xl border border-[#e8e7e3] bg-[#f5f4f1] p-4">
                <span className="text-[72px] font-medium leading-none tracking-[-3px] text-[#c9c8c2]">
                  {m.initial}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#0a0a0a]">{m.name}</span>
                <span className="font-mono text-[9px] tracking-[0.9px] text-[#82827c]">{m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="flex flex-col px-8 pb-16 pt-0">
        <div className="mb-2 flex items-center justify-between border-b border-[#e8e7e3] pb-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#6b6b6b]">KABAR TERBARU</span>
          <span className="text-[11px] text-[#6b6b6b]">Semua berita ↗</span>
        </div>
        {news.map((n) => (
          <div
            key={n.title}
            className="flex items-center justify-between border-b border-[#e8e7e3] py-[22px]"
          >
            <div className="flex items-center gap-6">
              <span className="font-mono text-[10px] tracking-[0.8px] text-[#82827c]">{n.date}</span>
              <span className="text-[20px] font-medium tracking-[-0.4px] text-[#0a0a0a]">{n.title}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[9px] tracking-[0.9px] text-[#6b6b6b]">{n.tag}</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="px-8 pb-16 pt-0">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-[#0a0a0a] px-12 py-[72px] text-center">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#7d7d77]">
            REKRUTMEN TERBUKA · BATCH 7
          </span>
          <h2 className="max-w-[760px] text-[52px] font-medium leading-[1.1] tracking-[-1.8px] text-white">
            Siap berkontribusi untuk FILKOM?
          </h2>
          <p className="max-w-[560px] text-[14px] leading-[1.6] text-[#82827c]">
            Bergabung dengan DPM FILKOM UNIDA — wadah bagi mahasiswa yang ingin
            mengawal kebijakan dan membangun budaya kolaborasi.
          </p>
          <button className="flex items-center gap-2 rounded-full bg-[#ff6208] px-[22px] py-[13px] text-[13px] font-medium text-white">
            Daftar Sekarang
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
          <span className="font-mono text-[10px] tracking-[0.8px] text-[#9a9a96]">
            Pendaftaran ditutup 28 Februari 2026
          </span>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export const Route = createFileRoute('/')({ component: Home })
