import { Header } from "@/components/header"
import { SectionTitle } from "@/components/section-title"
import { VentajasDesventajas } from "@/components/ventajas-desventajas"

const ventajas = [
  "Acción inmediata",
  "Dosis exacta",
  "Útil en emergencias",
  "Permite infusión continua",
]

const desventajas = [
  "Riesgo elevado si hay errores",
  "Requiere personal capacitado",
  "Mayor riesgo de infección",
  "No apta para autoadministración",
]

const tiposDeAgujas = [
  "Catéter intravenoso periférico (calibre 18-24 G)",
  "Jeringa o equipo de venoclisis",
]

const lugaresMasUtilizados = [
  "Venas del dorso de la mano",
  "Venas del antebrazo",
  "Vena cefálica",
  "Vena basílica",
  "Pliegue antecubital (uso temporal)",
]

const procedimiento = [
  {
    titulo: "1. Preparación del material",
    items: [
      "Solución o medicamento prescrito",
      "Torniquete",
      "Antiséptico (alcohol al 70 %)",
      "Gasas estériles",
      "Guantes",
      "Apósito transparente",
      "Recipiente para material cortopunzante",
    ],
  },
  {
    titulo: "2. Higiene y seguridad",
    items: [
      "Lavado de manos",
      "Colocación de guantes",
      "Verificación de los 5 correctos",
    ],
  },
  {
    titulo: "3. Preparación del medicamento",
    items: [
      "Verificar compatibilidad y dilución",
      "Preparar la dosis indicada",
      "Eliminar burbujas de aire",
      "Rotular la solución si es necesario",
    ],
  },
  {
    titulo: "4. Selección del sitio de punción",
    items: [
      "Colocar el torniquete",
      "Palpar y visualizar la vena",
      "Elegir vena permeable, recta y elástica",
    ],
  },
  {
    titulo: "5. Antisepsia",
    items: [
      "Limpieza del sitio con técnica circular",
      "Dejar secar completamente",
    ],
  },
  {
    titulo: "6. Técnica de Punción",
    items: [
      "Introducir el catéter con bisel hacia arriba",
      "Ángulo de 15° a 30°",
      "Observar retorno sanguíneo",
      "Avanzar el catéter y retirar la aguja",
      "Conectar equipo o jeringa",
      "Iniciar administración según indicación",
    ],
  },
  {
    titulo: "7. Retiro de la aguja",
    items: [
      "Si es bolo: retirar aguja suavemente",
      "Si es catéter: fijar adecuadamente",
      "Presionar con gasa si se retira",
      "Colocar apósito estéril",
    ],
  },
  {
    titulo: "8. Eliminación del material",
    items: [
      "Desechar agujas y catéteres en recipiente de cortopunzantes",
      "Eliminar material contaminado",
      "Retirar guantes",
      "Lavado de manos",
    ],
  },
  {
    titulo: "9. Registro y observación",
    items: [
      "Registrar en historia clínica",
      "Observar al paciente durante y después:",
    ],
    subItems: ["Dolor", "Edema", "Enrojecimiento", "Reacciones adversas"],
  },
]

export default function ViaIntravenosaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Vía Intravenosa" />

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Qué es */}
        <section className="mb-12">
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
            <SectionTitle>¿Qué es?</SectionTitle>
            <p className="mt-5 text-base text-foreground/75 leading-relaxed">
              La vía intravenosa (IV) es un método de administración de medicamentos en el cual el fármaco se introduce directamente en el torrente sanguíneo, a través de una vena. Esto permite una acción inmediata, una biodisponibilidad del 100 % y un control preciso de la dosis administrada.
            </p>
          </div>
        </section>

        {/* Ventajas y Desventajas */}
        <section className="mb-12">
          <VentajasDesventajas ventajas={ventajas} desventajas={desventajas} />
        </section>

        {/* Tipos de Agujas y Lugares */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
              <SectionTitle>Tipos de Agujas Y material</SectionTitle>
              <ul className="mt-5 space-y-3">
                {tiposDeAgujas.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-foreground/75 leading-relaxed">
                    <span className="text-primary mt-0.5 text-lg">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
              <SectionTitle>Lugares más Utilizados</SectionTitle>
              <ul className="mt-5 space-y-3">
                {lugaresMasUtilizados.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-foreground/75 leading-relaxed">
                    <span className="text-primary mt-0.5 text-lg">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Procedimiento de administración */}
        <section className="mb-12">
          <SectionTitle className="mb-8">Procedimiento de administración por vía intravenosa</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedimiento.map((paso, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-5 shadow-sm border border-border/50 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-primary font-semibold text-lg mb-4">{paso.titulo}</h3>
                <ul className="space-y-2">
                  {paso.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-primary mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                  {paso.subItems && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {paso.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex items-start gap-2 text-sm text-foreground/60">
                          <span className="text-muted-foreground mt-0.5">•</span>
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border py-6">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-muted-foreground">
          Material educativo sobre administración de medicamentos parenterales
        </div>
      </footer>
    </div>
  )
}
