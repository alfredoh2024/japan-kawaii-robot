const sampleIdeas = [
  {
    title: "Ruta kawaii de cafeterias",
    vibe: "Matcha, postres bonitos y spots para fotos tranquilas.",
    emoji: "🍰",
    accent: "from-[#ffd9e8] via-[#fff1c8] to-[#dff7ee]",
    tags: ["Morning plan", "Cute food", "Photo spots"],
  },
  {
    title: "Mini shopping day",
    vibe: "Tiendas cute, papeleria y una pausa de snacks suaves.",
    emoji: "🛍️",
    accent: "from-[#ffe2ec] via-[#e9ddff] to-[#d8eeff]",
    tags: ["Merch", "Stationery", "Relaxed pace"],
  },
  {
    title: "Sunset + night lights",
    vibe: "Mirador, paseo corto y cierre con ciudad iluminada.",
    emoji: "🌆",
    accent: "from-[#ffd6c9] via-[#ffdceb] to-[#fff0b8]",
    tags: ["Golden hour", "City view", "Night vibe"],
  },
];

export default function IdeasPage() {
  return (
    <main className="kawaii-shell relative isolate min-h-screen px-4 py-6 sm:px-6 lg:px-10">
      <div className="sparkles" />
      <div className="grid-pattern" />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <div className="glass-card shimmer relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10">
          <div className="absolute -right-8 top-4 h-32 w-32 rounded-full bg-white/45 blur-2xl" />
          <div className="absolute -left-6 bottom-0 h-28 w-28 rounded-full bg-[#ffd7e5]/80 blur-2xl" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="pill inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#9c4f70]">
                <span className="floaty">✦</span>
                Sample ideas
              </span>
              <h1 className="title-font mt-4 text-4xl leading-none text-[#6f446f] sm:text-5xl lg:text-7xl">
                Ideas base Develop
                <span className="block text-[#ff5f87]">para seguir creciendo</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#5a435e] sm:text-lg">
                Este espacio deja un ejemplo visual sencillo para probar contenido nuevo sin salir
                del estilo kawaii y pastel de tu home page.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <IdeaStat label="Cards" value="3" tint="bg-[#ffe2ec]" />
              <IdeaStat label="Mood" value="Soft" tint="bg-[#fff0c9]" />
              <IdeaStat label="Style" value="Kawaii" tint="bg-[#dff7ee]" />
            </div>
          </div>
        </div>

        <section className="glass-card rounded-[2rem] p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c65e86]">
                Bloques de prueba
              </p>
              <h2 className="title-font text-3xl text-[#6b446d]">Componente basico</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#725676]">
              Cada tarjeta funciona como sample inicial para validar layout, copy y ritmo visual.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {sampleIdeas.map((idea) => (
              <article
                key={idea.title}
                className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 px-5 py-5 shadow-[0_20px_60px_rgba(255,125,165,0.14)]"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${idea.accent} opacity-90`}
                />
                <div className="relative">
                  <span className="floaty-slow inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-2xl shadow-sm">
                    {idea.emoji}
                  </span>
                  <div className="mt-14">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a35878]">
                      Idea sample
                    </p>
                    <h3 className="title-font mt-2 text-3xl text-[#5c375e]">{idea.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#654c67]">{idea.vibe}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {idea.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-[#90536f]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="glass-card rounded-[2rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c65e86]">
              Uso sugerido
            </p>
            <h2 className="title-font text-3xl text-[#69446b]">Qué puedes probar aqui</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <IdeaBubble
                title="Nuevo copy"
                text="Validar textos cortos y descripciones sin tocar la home principal."
              />
              <IdeaBubble
                title="Nuevas cards"
                text="Probar otros layouts de ideas o features con la misma identidad visual."
              />
              <IdeaBubble
                title="Secciones futuras"
                text="Usarlo como sandbox para luego convertirlo en modulo reutilizable."
              />
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c65e86]">
              Estado
            </p>
            <h2 className="title-font text-3xl text-[#69446b]">Base lista</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-[#715675]">
              <div className="rounded-[1.35rem] bg-white/72 px-4 py-4">
                Hero alineado con la estética de tu home.
              </div>
              <div className="rounded-[1.35rem] bg-white/72 px-4 py-4">
                Tarjetas sample con gradiente, pills y sombras suaves.
              </div>
              <div className="rounded-[1.35rem] bg-white/72 px-4 py-4">
                Estructura simple para crecer luego con data real o componentes compartidos.
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function IdeaStat({
  label,
  value,
  tint,
}: {
  label: string;
  value: string;
  tint: string;
}) {
  return (
    <div className={`rounded-[1.4rem] ${tint} px-4 py-3 text-[#6a456b]`}>
      <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">{label}</p>
      <p className="title-font mt-2 text-3xl leading-none">{value}</p>
    </div>
  );
}

function IdeaBubble({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/65 bg-white/70 p-4">
      <h3 className="title-font text-2xl text-[#633d65]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#755a78]">{text}</p>
    </div>
  );
}
