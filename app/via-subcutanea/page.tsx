import { Header } from "@/components/header"
import { SectionTitle } from "@/components/section-title"
import { VentajasDesventajas } from "@/components/ventajas-desventajas"

const ventajas = [
  "Técnica sencilla",
  "Puede ser autoadministrada",
  "Menor riesgo de lesiones profundas",
  "Ideal para tratamientos prolongados",
]

const desventajas = [
  "No permite grandes volúmenes",
  "Absorción más lenta",
  "No apta para medicamentos irritantes",
]

const tiposDeAgujas = [
  "Jeringa de 1 a 3 ml (según dosis)",
  "Aguja calibre 25-27 G",
  "Longitud de aguja: 3/8 a 5/8 de pulgada",
]

const lugaresMasUtilizados = [
  "Abdomen",
  "Cara externa del brazo",
  "Cara anterior del muslo",
  "Región escapular",
]

const procedimiento = [
  {
    titulo: "Preparación del material",
    items: [
      "Medicamento prescrito",
      "Algodón o gasa estéril",
      "Antiséptico (alcohol al 70 %)",
      "Guantes limpios o estériles",
      "Recipiente para desechos cortopunzantes",
    ],
  },
  {
    titulo: "Higiene y seguridad",
    items: [
      "Realizar lavado de manos según normas de bioseguridad",
      "Colocarse los guantes",
      "Verificar los 5 correctos: paciente, medicamento, dosis, vía y hora",
    ],
  },
  {
    titulo: "Preparación del medicamento",
    items: [
      "Cargar la jeringa con la dosis indicada",
      "Eliminar burbujas de aire",
      "Mantener la jeringa en condiciones de asepsia",
    ],
  },
  {
    titulo: "Selección del sitio de inyección",
    items: [
      "Cara externa del brazo (región deltoidea posterior)",
      "Abdomen (a 5 cm del ombligo)",
      "Cara anterior del muslo",
      "Región escapular",
    ],
  },
  {
    titulo: "Antisepsia",
    items: [
      "Limpiar el área con alcohol al 70 % en forma circular, del centro hacia afuera",
      "Dejar secar completamente",
    ],
  },
  {
    titulo: "Técnica de inyección",
    items: [
      "Formar un pliegue cutáneo con el pulgar y el índice",
      "Introducir la aguja con el bisel hacia arriba",
      "Ángulo de inserción: 45° en personas delgadas, 90° en personas con mayor tejido adiposo",
      "Introducir la aguja rápidamente",
      "No aspirar (salvo indicación específica)",
      "Inyectar el medicamento de forma lenta y continua",
    ],
  },
  {
    titulo: "Retiro de la aguja",
    items: [
      "Retirar la aguja con suavidad",
      "Presionar ligeramente con gasa estéril si hay sangrado",
      "No masajear el sitio cuando se administran medicamentos como insulina o heparina",
    ],
  },
  {
    titulo: "Eliminación del material",
    items: [
      "Desechar la jeringa y aguja en el recipiente de material cortopunzante",
      "Retirar guantes y realizar lavado de manos",
    ],
  },
  {
    titulo: "Registro y observación",
    items: [
      "Registrar el procedimiento en la historia clínica",
      "Observar posibles reacciones locales (enrojecimiento, dolor, edema)",
    ],
  },
]

export default function ViaSubcutaneaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Vía Subcutánea" />
      
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Qué es */}
        <section className="mb-12">
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
            <SectionTitle>¿Qué es?</SectionTitle>
            <p className="mt-5 text-base text-foreground/75 leading-relaxed">
              La vía subcutánea es una forma de administración de medicamentos en la cual el fármaco se introduce en el tejido celular subcutáneo, que es la capa de tejido graso y conectivo situada debajo de la dermis y encima del músculo. Este tejido tiene menor irrigación sanguínea que el músculo, lo que permite una absorción lenta, continua y sostenida del medicamento.
            </p>
          </div>
        </section>

        {/* Ventajas y Desventajas */}
        <section className="mb-12">
          <VentajasDesventajas ventajas={ventajas} desventajas={desventajas} />
        </section>

        {/* Tipos de Agujas y Lugares */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
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
                  <li key={index} className="flex items-center gap-4 text-sm text-foreground/75">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary font-semibold text-xs">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground italic bg-muted/50 p-3 rounded-lg">
                Estas áreas poseen suficiente tejido adiposo y facilitan la absorción.
              </p>
            </div>
          </div>
        </section>

        {/* Procedimiento */}
        <section className="mb-12">
          <SectionTitle className="mb-8">Procedimiento de administración por vía subcutánea</SectionTitle>
          <div className="grid gap-6">
            {procedimiento.map((paso, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-6 shadow-sm border border-border/50"
              >
                <h3 className="text-lg font-semibold text-emerald-400 mb-4">
                  {index + 1}. {paso.titulo}
                </h3>
                <ul className="space-y-2">
                  {paso.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-sm text-foreground/75 leading-relaxed">
                      <span className="text-primary mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
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
