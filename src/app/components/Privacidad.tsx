export default function Privacidad({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="size-full overflow-y-auto bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 py-12">
        <button
          onClick={() => onNavigate('landing')}
          className="mb-6 text-blue-600 hover:text-blue-700 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Información Legal y Privacidad</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Política de Privacidad</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                En DonaTrack, nos comprometemos a proteger la privacidad de nuestros usuarios. Esta política describe
                cómo recopilamos, usamos y protegemos su información personal.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Información que recopilamos</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Datos de contacto: nombre, email, teléfono, dirección</li>
                <li>Información de donaciones realizadas o recibidas</li>
                <li>Fotografías de entregas confirmadas</li>
                <li>Ubicación de camiones durante entregas activas</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Cómo usamos su información</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Gestionar donaciones y asignaciones</li>
                <li>Facilitar la comunicación entre donantes y beneficiarios</li>
                <li>Generar reportes y estadísticas</li>
                <li>Enviar notificaciones sobre el estado de donaciones</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Protección de datos</h3>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales
                contra acceso no autorizado, pérdida o alteración.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Términos de Uso</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-gray-900 mb-2">Uso de la plataforma</h3>
              <p>
                Al utilizar DonaTrack, usted acepta usar la plataforma de manera responsable y ética, únicamente
                para los fines de donación y recepción de bienes materiales.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Responsabilidades del usuario</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                <li>Notificar cambios en el estado de donaciones oportunamente</li>
                <li>Tratar con respeto a todos los usuarios de la plataforma</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contacto</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Si tiene preguntas sobre nuestra política de privacidad o términos de uso, puede contactarnos:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> info@donatrack.org</p>
                <p><strong>Teléfono:</strong> +54 11 1234-5678</p>
                <p><strong>Dirección:</strong> Av. Corrientes 1234, CABA, Argentina</p>
              </div>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600">
              Última actualización: 26 de Abril de 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
