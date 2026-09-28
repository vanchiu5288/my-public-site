const features = [
  {
    number: "01",
    title: "清楚的架構",
    description: "以 App Router 建立，讓頁面、版型與功能各司其職。",
  },
  {
    number: "02",
    title: "靈活的樣式",
    description: "透過 Tailwind CSS 快速打造一致且容易維護的介面。",
  },
  {
    number: "03",
    title: "可靠的開發體驗",
    description: "TypeScript 與 ESLint 協助提早發現問題，保持程式碼品質。",
  },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="border-b border-slate-900/10 pb-6">
          <nav className="flex items-center justify-between" aria-label="主要導覽">
            <a className="text-lg font-bold tracking-tight text-slate-950" href="#top">
              起點
            </a>
            <a
              className="rounded-full border border-slate-900/15 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-700 hover:text-teal-800"
              href="#about"
            >
              關於本站
            </a>
          </nav>
        </header>

        <div
          id="top"
          className="grid flex-1 items-center gap-14 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28"
        >
          <div>
            <p className="mb-6 text-sm font-semibold tracking-[0.24em] text-teal-700 uppercase">
              Next.js 網站
            </p>
            <h1 className="max-w-3xl text-5xl leading-[1.08] font-bold tracking-[-0.04em] text-balance text-slate-950 sm:text-6xl lg:text-7xl">
              從簡潔的基礎，開始創造更多可能。
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              這是一個使用 Next.js、TypeScript 與 Tailwind CSS
              建立的網站起點，準備好隨著想法持續成長。
            </p>
            <a
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
              href="#about"
            >
              探索網站基礎
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden="true">
            <div className="absolute inset-0 rounded-full border border-teal-900/15" />
            <div className="absolute inset-[14%] rounded-full bg-teal-700" />
            <div className="absolute top-[9%] right-[5%] h-1/3 w-1/3 rounded-full bg-amber-300 shadow-2xl shadow-amber-300/40" />
            <div className="absolute bottom-[12%] left-[2%] h-1/4 w-1/4 rounded-full border-[12px] border-slate-950" />
          </div>
        </div>

        <div id="about" className="grid gap-px overflow-hidden rounded-3xl bg-slate-900/10 sm:grid-cols-3">
          {features.map((feature) => (
            <article className="bg-white p-7 sm:p-8" key={feature.number}>
              <span className="text-xs font-bold tracking-[0.2em] text-teal-700">
                {feature.number}
              </span>
              <h2 className="mt-8 text-xl font-bold text-slate-950">{feature.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>

        <footer className="mt-16 flex flex-col gap-2 border-t border-slate-900/10 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>以現代網頁技術打造</p>
          <p>下一步，從這裡開始。</p>
        </footer>
      </section>
    </main>
  );
}
