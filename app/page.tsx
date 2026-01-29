import { Header } from "@/components/header"
import { ViaCard } from "@/components/via-card"
import { SectionTitle } from "@/components/section-title"

const tiposDeVias = [
  {
    title: "Vía Intradérmica",
    description: "Se aplica entre las capas de la piel. Uso frecuente en pruebas diagnósticas.",
    href: "/via-intradermica",
    variant: "cyan" as const,
  },
  {
    title: "Vía Subcutánea",
    description: "Se aplica en el tejido graso. Absorción lenta y controlada.",
    href: "/via-subcutanea",
    variant: "purple" as const,
  },
  {
    title: "Vía Intramuscular",
    description: "Aplicación en el músculo. Absorción rápida.",
    href: "/via-intramuscular",
    variant: "cyan" as const,
  },
  {
    title: "Vía Intravenosa",
    description: "Ingreso directo al torrente sanguíneo. Acción inmediata.",
    href: "/via-intravenosa",
    variant: "green" as const,
  },
]

const materialesGenerales = [
  "Bandeja o riñonera",
  "Guantes desechables (no estériles)",
  "Jeringas (1 ml, 3 ml, 5 ml o 10 ml según el medicamento)",
  "Agujas (calibre y longitud según la vía y el paciente)",
  "Medicamento prescrito",
  "Algodón o gasas estériles",
  "Antiséptico (alcohol al 70 % o clorhexidina)",
  "Recipiente para desechos cortopunzantes (guardián)",
  "Recipiente para desechos biológicos",
  "Etiqueta o rotulador (si se prepara previamente el medicamento)",
]

const procedimientosBasicos = [
  "Lavado de manos",
  "Preparación del material",
  "Identificación del paciente",
  "Aplicación según la vía correspondiente",
  "Registro y monitoreo",
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header 
        title="Vías Parenterales" 
        subtitle="Aprende de forma Interactiva los tipos, técnicas y cuidados."
      />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Qué son las vías parenterales */}
        <section className="mb-16">
          <SectionTitle>¿Qué son las vías parenterales?</SectionTitle>
          <p className="mt-5 text-base text-foreground/70 leading-relaxed max-w-4xl">
            Son métodos de administración de medicamentos mediante inyección directa, evitando el sistema digestivo. Se utilizan para una acción rápida, precisión en la dosis o cuando el paciente no puede ingerir medicamentos por vía oral.
          </p>
        </section>

        {/* Tipos de vías parenterales */}
        <section className="mb-16">
          <SectionTitle>Tipos de Vías Parenterales</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-8">
            {tiposDeVias.map((via) => (
              <ViaCard 
                key={via.title}
                title={via.title}
                description={via.description}
                href={via.href}
                variant={via.variant}
              />
            ))}
          </div>
        </section>

        {/* Materiales Generales */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
              <SectionTitle color="green">Materiales Generales</SectionTitle>
              <ul className="mt-5 space-y-2.5">
                {materialesGenerales.map((material, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-foreground/75 leading-relaxed">
                    <span className="text-primary mt-0.5 text-lg">•</span>
                    {material}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
              <SectionTitle color="green">Procedimientos Básicos</SectionTitle>
              <ol className="mt-5 space-y-3">
                {procedimientosBasicos.map((procedimiento, index) => (
                  <li key={index} className="flex items-center gap-4 text-sm text-foreground/75">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      {index + 1}
                    </span>
                    {procedimiento}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        </main>
      
      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted-foreground">
          Material educativo sobre administración de medicamentos parenterales
        </div>
      </footer>
    </div>
  )
}
