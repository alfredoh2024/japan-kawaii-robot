"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cityPlans, nightlifeSpots } from "@/lib/trip-data";

const CUSTOM_FALLBACK_SRC = "/images/kawaii-fallback.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function TripPlanner() {
  const [activeCityId, setActiveCityId] = useState(cityPlans[0].id);
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [isFlexibleOpen, setIsFlexibleOpen] = useState(false);

  const activeCity = useMemo(
    () => cityPlans.find((city) => city.id === activeCityId) ?? cityPlans[0],
    [activeCityId],
  );

  const activeDay = activeCity.days[activeDayIndex] ?? activeCity.days[0];

  const totalStops = activeCity.days.reduce((sum, day) => sum + day.stops.length, 0);

  return (
    <main className="kawaii-shell relative isolate min-h-screen px-4 py-6 sm:px-6 lg:px-10">
      <div className="sparkles" />
      <div className="grid-pattern" />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <motion.div
          className="glass-card shimmer relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute -right-8 top-4 h-32 w-32 rounded-full bg-white/45 blur-2xl" />
          <div className="absolute -left-6 bottom-0 h-28 w-28 rounded-full bg-[#ffd7e5]/80 blur-2xl" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="pill inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#9c4f70]">
                <span className="floaty">✦</span>
                Japan Playground Plan
              </span>
              <h1 className="title-font mt-4 text-4xl leading-none text-[#6f446f] sm:text-5xl lg:text-7xl">
                Itinerario kawaii
                <span className="block text-[#ff5f87]">para explorar Japón</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#5a435e] sm:text-lg">
                Una versión visual e interactiva de tu plan, pensada para navegar por ciudad,
                revisar cada día y detectar rápido qué combina mejor con compras, templos,
                vistas nocturnas y planes más chill.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <StatCard label="Ciudades" value="3" tint="bg-[#ffe2ec]" />
              <StatCard label="Días plan" value="16" tint="bg-[#fff0c9]" />
              <StatCard label="Noches top" value="3" tint="bg-[#dff7ee]" />
            </div>
          </div>
        </motion.div>

        <motion.section
          className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="glass-card rounded-[2rem] p-5 sm:p-6">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c65e86]">
                    Elige una ciudad
                  </p>
                  <h2 className="title-font text-3xl text-[#6b446d]">Mapa de vibes</h2>
                </div>
                <div className="pill inline-flex w-fit items-center gap-2 px-4 py-2 text-sm text-[#85506f]">
                  <span>💖</span>
                  Toca una tarjeta para cambiar de ruta
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {cityPlans.map((city) => {
                  const isActive = city.id === activeCity.id;

                  return (
                    <motion.button
                      key={city.id}
                      type="button"
                      onClick={() => {
                        setActiveCityId(city.id);
                        setActiveDayIndex(0);
                      }}
                      whileHover={{ y: -6, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative overflow-hidden rounded-[1.75rem] border px-5 py-5 text-left transition ${
                        isActive
                          ? "border-white/80 bg-white shadow-[0_20px_60px_rgba(255,125,165,0.22)]"
                          : "border-white/50 bg-white/65"
                      }`}
                    >
                      <div
                        className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${city.accent} opacity-85`}
                      />
                      <div className="relative">
                        <span className="floaty-slow inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-2xl shadow-sm">
                          {city.emoji}
                        </span>
                        <div className="mt-14">
                          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a35878]">
                            {city.label}
                          </p>
                          <h3 className="title-font mt-2 text-3xl text-[#5c375e]">{city.city}</h3>
                          <p className="mt-2 text-sm leading-6 text-[#654c67]">{city.description}</p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {city.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold text-[#90536f]"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}

                <motion.button
                  type="button"
                  onClick={() => setIsFlexibleOpen((current) => !current)}
                  whileHover={{ y: -6, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden rounded-[1.75rem] border border-dashed border-[#ffc1d6] bg-white/70 px-5 py-5 text-left"
                >
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-[#e8ddff] via-[#ffdceb] to-[#fff0b8] opacity-90" />
                  <div className="relative">
                    <span className="floaty-slow inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-2xl shadow-sm">
                      🗓️
                    </span>
                    <div className="mt-14">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a35878]">
                        Flexible Slot
                      </p>
                      <h3 className="title-font mt-2 text-3xl text-[#5c375e]">Días abiertos</h3>
                      <p className="mt-2 text-sm leading-6 text-[#654c67]">
                        Espacio reservado para definir el siguiente tramo del viaje sin cerrar
                        todavía el destino.
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#90536f]">
                        Días 9-10
                      </span>
                      <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#90536f]">
                        En espera de confirmacion por Nalle
                      </span>
                      <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#90536f]">
                        Nara / Hakone / Nikko / descanso
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-[#8f5670]">
                        Toca para ver el status
                      </span>
                      <motion.span
                        animate={{ rotate: isFlexibleOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-lg text-[#a45879]"
                      >
                        ↓
                      </motion.span>
                    </div>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.aside
              key={activeCity.id}
              className="glass-card rounded-[2rem] p-5 sm:p-6"
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -20, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <div
                className={`rounded-[1.75rem] bg-gradient-to-br ${activeCity.accent} p-5 text-[#5a395d]`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#98536f]">
                      {activeCity.stay}
                    </p>
                    <h3 className="title-font mt-2 text-4xl">{activeCity.city}</h3>
                  </div>
                  <span className="text-4xl">{activeCity.emoji}</span>
                </div>
                <p className="mt-3 max-w-md text-sm leading-6">{activeCity.description}</p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <StatCard label="Días" value={String(activeCity.days.length)} tint="bg-[#fff1c8]" />
                <StatCard label="Paradas" value={String(totalStops)} tint="bg-[#e2f8f0]" />
                <StatCard label="Mood" value={activeCity.label} tint="bg-[#fde2ed]" compact />
              </div>

              <div className="mt-5 rounded-[1.5rem] bg-white/70 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bd5d83]">
                  Noches sugeridas
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {nightlifeSpots.map((spot) => (
                    <span
                      key={spot}
                      className="rounded-full border border-[#ffc5d7] bg-white px-3 py-2 text-sm font-semibold text-[#834f69]"
                    >
                      {spot}
                    </span>
                  ))}
                </div>
              </div>
            </motion.aside>
          </AnimatePresence>
        </motion.section>

        <AnimatePresence>
          {isFlexibleOpen ? (
            <motion.section
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="glass-card overflow-hidden rounded-[2rem]"
            >
              <div className="relative px-5 py-6 sm:px-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffe4ef] via-[#fff2bf] to-[#dff5ff] opacity-90" />
                <div className="relative">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c65e86]">
                        Días por confirmar
                      </p>
                      <h2 className="title-font text-3xl text-[#6b446d] sm:text-4xl">
                        El plan secreto de Nalle
                      </h2>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6d5572] sm:text-base">
                        Estos días siguen flotando en el aire. La misión es decidir si serán de
                        aventura, descanso o compras con caos bonito.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsFlexibleOpen(false)}
                      className="pill inline-flex w-fit items-center gap-2 px-4 py-2 text-sm font-semibold text-[#8a536e]"
                    >
                      Cerrar
                    </button>
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                    <motion.div
                      animate={{ y: [0, -8, 0], rotate: [0, 1.5, -1.5, 0] }}
                      transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                      className="rounded-[1.75rem] border border-white/70 bg-white/70 p-5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-5xl">🧋</span>
                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#bf5e84]">
                            Estado actual
                          </p>
                          <h3 className="title-font text-3xl text-[#634064]">Pending cuteness</h3>
                        </div>
                      </div>
                      <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                        {[
                          { emoji: "🎒", label: "Excursión" },
                          { emoji: "🛍️", label: "Shopping" },
                          { emoji: "😴", label: "Descanso" },
                        ].map((item) => (
                          <motion.div
                            key={item.label}
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                              repeat: Infinity,
                              duration: 2.8,
                              delay: item.label === "Shopping" ? 0.2 : item.label === "Descanso" ? 0.4 : 0,
                            }}
                            className="rounded-[1.25rem] bg-[#fff8fb] px-3 py-4"
                          >
                            <div className="text-3xl">{item.emoji}</div>
                            <p className="mt-2 text-sm font-semibold text-[#7a5d7d]">{item.label}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="rounded-[1.75rem] border border-white/70 bg-white/70 p-5">
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#bf5e84]">
                        Días 9-10
                      </p>
                      <div className="mt-4 space-y-3">
                        <motion.div
                          initial={{ x: -16, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.05 }}
                          className="rounded-[1.25rem] bg-[#fff7d8] px-4 py-3"
                        >
                          <p className="font-semibold text-[#7f5f2c]">En espera de confirmacion por Nalle</p>
                        </motion.div>
                        <motion.div
                          initial={{ x: -16, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.12 }}
                          className="rounded-[1.25rem] bg-[#ffe6f0] px-4 py-3 text-[#7b5169]"
                        >
                          Idea 1: Nara y paseo tranquilo
                        </motion.div>
                        <motion.div
                          initial={{ x: -16, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.19 }}
                          className="rounded-[1.25rem] bg-[#e4f6ef] px-4 py-3 text-[#516f64]"
                        >
                          Idea 2: Hakone + vistas
                        </motion.div>
                        <motion.div
                          initial={{ x: -16, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.26 }}
                          className="rounded-[1.25rem] bg-[#e5efff] px-4 py-3 text-[#4d6481]"
                        >
                          Idea 3: Nikko o descanso con compras
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>

        <motion.section
          className="glass-card rounded-[2rem] p-5 sm:p-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.85, delay: 0.15 }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c65e86]">
                Timeline interactivo
              </p>
              <h2 className="title-font text-3xl text-[#6b446d]">
                {activeCity.city} día por día
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#725676]">
              Selecciona una jornada para ver su vibe principal y todas las paradas del día.
            </p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid gap-3">
              {activeCity.days.map((day, index) => {
                const isActive = index === activeDayIndex;

                return (
                  <motion.button
                    key={`${activeCity.id}-${day.day}`}
                    type="button"
                    onClick={() => setActiveDayIndex(index)}
                    whileHover={{ x: 6 }}
                    className={`rounded-[1.5rem] border px-4 py-4 text-left transition ${
                      isActive
                        ? "border-transparent bg-[#fff1f6] shadow-[0_14px_40px_rgba(250,126,164,0.18)]"
                        : "border-white/50 bg-white/65"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-sm"
                        style={{ backgroundColor: day.color }}
                      >
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ba5a80]">
                          {day.day}
                        </p>
                        <h3 className="title-font text-2xl text-[#603c62]">{day.title}</h3>
                        <p className="mt-1 text-sm text-[#7b617d]">{day.vibe}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={`${activeCity.id}-${activeDay.day}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3 }}
                className="rounded-[1.75rem] border border-white/70 bg-white/72 p-5 shadow-[0_25px_70px_rgba(255,139,176,0.12)]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c65e86]">
                      {activeDay.day}
                    </p>
                    <h3 className="title-font mt-2 text-4xl text-[#5d385f]">{activeDay.title}</h3>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-[#735778]">
                      {activeDay.vibe}
                    </p>
                  </div>
                  <div
                    className="pill inline-flex items-center gap-2 self-start px-4 py-2 text-sm font-semibold text-[#864f69]"
                    style={{ borderColor: `${activeDay.color}66` }}
                  >
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: activeDay.color }} />
                    Focus del día
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {activeDay.stops.map((stop, index) => (
                    <motion.div
                      key={`${activeDay.day}-${stop.name}`}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.06 }}
                      className="rounded-[1.4rem] border border-[#ffd3e0] bg-[#fffafb] p-4"
                    >
                      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                          <h4 className="text-lg font-extrabold text-[#6d446f]">{stop.name}</h4>
                          {stop.note ? (
                            <p className="mt-1 text-sm leading-6 text-[#7c617f]">{stop.note}</p>
                          ) : null}
                          <div className="mt-3">
                            <span className="pill inline-flex w-fit px-3 py-2 text-sm font-semibold text-[#9b5874]">
                              {stop.slot}
                            </span>
                          </div>
                        </div>
                        <StopVisual stopName={stop.name} image={stop.image} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </motion.section>

        <motion.section
          className="grid gap-6 lg:grid-cols-[1fr_0.9fr]"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="glass-card rounded-[2rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c65e86]">
              Cute extras
            </p>
            <h2 className="title-font text-3xl text-[#69446b]">Cómo usar esta web</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <InfoBubble
                title="Explora por ciudad"
                text="Cada bloque tiene su propio tono visual, highlights y un resumen rápido para decidir prioridades."
              />
              <InfoBubble
                title="Abre un día"
                text="La columna izquierda funciona como timeline; al tocar una jornada cambian las actividades del panel."
              />
              <InfoBubble
                title="Ajusta el mood"
                text="Los días abiertos sirven como buffer para mover compras, descanso o excursiones sin romper la ruta."
              />
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c65e86]">
              Nota útil
            </p>
            <h2 className="title-font text-3xl text-[#69446b]">Reservas y timing</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-[#715675]">
              <li className="rounded-[1.35rem] bg-white/72 px-4 py-4">
                Reserva con antelación `Umeda Sky Building`, `TeamLab Planets` y parques
                temáticos.
              </li>
              <li className="rounded-[1.35rem] bg-white/72 px-4 py-4">
                `Fushimi Inari`, `Dotonbori` y `Akihabara` cambian mucho de experiencia según la
                hora del día.
              </li>
            </ul>
          </div>
        </motion.section>
      </section>
    </main>
  );
}

function StopVisual({
  stopName,
  image,
}: {
  stopName: string;
  image?: {
    src: string;
    alt: string;
    creditLabel: string;
    creditUrl: string;
  };
}) {
  const [failed, setFailed] = useState(false);
  const [customFallbackFailed, setCustomFallbackFailed] = useState(false);
  const fallback = getKawaiiFallback(stopName);

  if (!image || failed) {
    return (
      <div className={`overflow-hidden rounded-[1.25rem] border border-white/80 ${fallback.bg} shadow-sm`}>
        {!customFallbackFailed ? (
          <img
            src={CUSTOM_FALLBACK_SRC}
            alt={`Imagen kawaii de respaldo para ${stopName}`}
            loading="lazy"
            onError={() => setCustomFallbackFailed(true)}
            className="h-48 w-full object-cover"
          />
        ) : (
          <div className="flex h-48 flex-col items-center justify-center gap-3 px-4 text-center">
            <span className="floaty text-5xl" aria-hidden="true">
              {fallback.emoji}
            </span>
            <div>
              <p className="title-font text-2xl text-[#6a456b]">{fallback.title}</p>
              <p className="mt-1 text-sm text-[#7a5d7d]">{fallback.caption}</p>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between gap-3 px-3 py-2 text-xs text-[#7d637f]">
          <span>Japon 2026</span>
          <span className="font-semibold text-[#b4557c]">Kawaii Trip</span>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-white/80 bg-white shadow-sm">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-48 w-full object-cover"
      />
      <div className="flex items-center justify-between gap-3 px-3 py-2 text-xs text-[#7d637f]">
        <span>Referencia visual del lugar</span>
        <a
          href={image.creditUrl}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[#b4557c] underline decoration-[#ffc5d8] underline-offset-2"
        >
          {image.creditLabel}
        </a>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  tint,
  compact = false,
}: {
  label: string;
  value: string;
  tint: string;
  compact?: boolean;
}) {
  return (
    <div className={`rounded-[1.4rem] ${tint} px-4 py-3 text-[#6a456b]`}>
      <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">{label}</p>
      <p className={`title-font mt-2 ${compact ? "text-xl" : "text-3xl"} leading-none`}>
        {value}
      </p>
    </div>
  );
}

function InfoBubble({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-[1.5rem] border border-white/65 bg-white/70 p-4"
    >
      <h3 className="title-font text-2xl text-[#633d65]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#755a78]">{text}</p>
    </motion.div>
  );
}

function getKawaiiFallback(stopName: string) {
  const name = stopName.toLowerCase();

  if (name.includes("templo") || name.includes("shrine") || name.includes("inari") || name.includes("ji")) {
    return {
      emoji: "⛩️",
      title: "Temple Mood",
      caption: "Referencia cute para ubicar un santuario o templo del plan.",
      label: "Kawaii Temple",
      bg: "bg-gradient-to-br from-[#ffe2ec] via-[#fff5cf] to-[#e2f7ee]",
    };
  }

  if (name.includes("castle") || name.includes("castillo")) {
    return {
      emoji: "🏯",
      title: "Castle Mood",
      caption: "Vista ilustrativa para imaginar la parada histórica.",
      label: "Kawaii Castle",
      bg: "bg-gradient-to-br from-[#e9e0ff] via-[#ffdfe9] to-[#fff2c8]",
    };
  }

  if (name.includes("park") || name.includes("valley") || name.includes("bosque") || name.includes("arashiyama")) {
    return {
      emoji: "🌿",
      title: "Nature Mood",
      caption: "Bloque visual para spots tranquilos, verdes o de paseo.",
      label: "Kawaii Nature",
      bg: "bg-gradient-to-br from-[#ddf8ec] via-[#f7ffd7] to-[#dff1ff]",
    };
  }

  if (
    name.includes("disney") ||
    name.includes("universal") ||
    name.includes("pokemon") ||
    name.includes("nintendo") ||
    name.includes("teamlab")
  ) {
    return {
      emoji: "🎠",
      title: "Playground Mood",
      caption: "Referencia tierna para experiencias inmersivas, tiendas o parques.",
      label: "Kawaii Fun",
      bg: "bg-gradient-to-br from-[#ffd8eb] via-[#ffe9b8] to-[#d8f0ff]",
    };
  }

  if (
    name.includes("tower") ||
    name.includes("skytree") ||
    name.includes("sky") ||
    name.includes("odaiba") ||
    name.includes("shibuya") ||
    name.includes("akihabara")
  ) {
    return {
      emoji: "🌃",
      title: "City Lights",
      caption: "Visual kawaii para vistas urbanas, compras o spots modernos.",
      label: "Kawaii City",
      bg: "bg-gradient-to-br from-[#dfe8ff] via-[#ffddea] to-[#fff2bf]",
    };
  }

  return {
    emoji: "💖",
    title: "Trip Mood",
    caption: "Referencia visual suave mientras decides o confirmas el lugar exacto.",
    label: "Kawaii Spot",
    bg: "bg-gradient-to-br from-[#ffe1ec] via-[#fff2cb] to-[#e3f7f0]",
  };
}
