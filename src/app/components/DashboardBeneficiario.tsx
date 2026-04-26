import { useState } from 'react';

const necesidadesRegistradas = [
  { id: 1, categoria: 'Alimentos', descripcion: 'Arroz, fideos, aceite', cantidad: '50 Kg', urgencia: 'Alta', fecha: '20 Abr 2026' },
  { id: 2, categoria: 'Educación', descripcion: 'Libros de matemática nivel primario', cantidad: '30 unidades', urgencia: 'Media', fecha: '18 Abr 2026' },
  { id: 3, categoria: 'Vestimenta', descripcion: 'Ropa de invierno para niños', cantidad: '40 prendas', urgencia: 'Alta', fecha: '15 Abr 2026' }
];

const donacionesAsignadas = [
  { id: 1, items: '20 Kg de arroz', donante: 'María González', estado: 'En tránsito', fechaEstimada: '26 Abr 2026' },
  { id: 2, items: '15 Libros de matemática', donante: 'Juan Pérez', estado: 'Asignada', fechaEstimada: '28 Abr 2026' },
  { id: 3, items: '25 Prendas de invierno', donante: 'Ana Rodríguez', estado: 'Pendiente de confirmar', fechaEstimada: '30 Abr 2026' }
];

export default function DashboardBeneficiario({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [seccionActiva, setSeccionActiva] = useState<'necesidades' | 'donaciones' | 'seguimiento'>('necesidades');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [confirmarRecepcion, setConfirmarRecepcion] = useState<number | null>(null);

  return (
    <div className="size-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">DonaTrack</h1>
            <span className="text-green-100 text-sm">Panel de Entidad Beneficiaria</span>
          </div>
          <button
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-2 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Salir
          </button>
        </div>
      </div>

      {/* Navegación de secciones */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-6">
            <button
              onClick={() => setSeccionActiva('necesidades')}
              className={`py-4 border-b-2 transition-colors ${
                seccionActiva === 'necesidades'
                  ? 'border-green-600 text-green-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Mis Necesidades
            </button>
            <button
              onClick={() => setSeccionActiva('donaciones')}
              className={`py-4 border-b-2 transition-colors ${
                seccionActiva === 'donaciones'
                  ? 'border-green-600 text-green-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Donaciones Asignadas
            </button>
            <button
              onClick={() => setSeccionActiva('seguimiento')}
              className={`py-4 border-b-2 transition-colors ${
                seccionActiva === 'seguimiento'
                  ? 'border-green-600 text-green-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Seguimiento en Vivo
            </button>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-6">
          {/* Sección: Necesidades */}
          {seccionActiva === 'necesidades' && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Necesidades Materiales</h2>
                  <p className="text-gray-600">Registra y gestiona las necesidades de tu entidad</p>
                </div>
                <button
                  onClick={() => setMostrarFormulario(!mostrarFormulario)}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Nueva Necesidad
                </button>
              </div>

              {/* Formulario de nueva necesidad */}
              {mostrarFormulario && (
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4">Registrar Nueva Necesidad</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                        <option>Alimentos</option>
                        <option>Educación</option>
                        <option>Vestimenta</option>
                        <option>Salud</option>
                        <option>Recreación</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Urgencia</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none">
                        <option>Alta</option>
                        <option>Media</option>
                        <option>Baja</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
                      <textarea
                        rows={3}
                        placeholder="Describe qué necesitas..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cantidad estimada</label>
                      <input
                        type="text"
                        placeholder="ej: 50 Kg, 30 unidades"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                      Registrar
                    </button>
                    <button
                      onClick={() => setMostrarFormulario(false)}
                      className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}

              {/* Lista de necesidades */}
              <div className="space-y-4">
                {necesidadesRegistradas.map((necesidad) => (
                  <div key={necesidad.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{necesidad.categoria}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            necesidad.urgencia === 'Alta' ? 'bg-red-100 text-red-700' :
                            necesidad.urgencia === 'Media' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            Urgencia {necesidad.urgencia}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">{necesidad.descripcion}</p>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span>Cantidad: {necesidad.cantidad}</span>
                          <span>Registrado: {necesidad.fecha}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sección: Donaciones Asignadas */}
          {seccionActiva === 'donaciones' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Donaciones Asignadas</h2>
                <p className="text-gray-600">Revisa y confirma las donaciones que recibirás</p>
              </div>

              <div className="space-y-4">
                {donacionesAsignadas.map((donacion) => (
                  <div key={donacion.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{donacion.items}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Donante: {donacion.donante}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Estimada: {donacion.fechaEstimada}
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                        donacion.estado === 'En tránsito' ? 'bg-blue-100 text-blue-700' :
                        donacion.estado === 'Asignada' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {donacion.estado}
                      </span>
                    </div>

                    {donacion.estado === 'En tránsito' && (
                      <button
                        onClick={() => setConfirmarRecepcion(donacion.id)}
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                      >
                        Confirmar Recepción
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Modal de confirmación */}
              {confirmarRecepcion && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                  <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Confirmar Recepción</h3>
                    <p className="text-gray-600 mb-6">Carga fotos de la donación recibida para confirmar la entrega</p>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subir fotos</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors cursor-pointer">
                          <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          <p className="text-sm text-gray-600">Haz clic para seleccionar fotos</p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Comentarios (opcional)</label>
                        <textarea
                          rows={3}
                          placeholder="Agrega un comentario..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                        Confirmar
                      </button>
                      <button
                        onClick={() => setConfirmarRecepcion(null)}
                        className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Sección: Seguimiento en Vivo */}
          {seccionActiva === 'seguimiento' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Seguimiento de Entregas</h2>
                <p className="text-gray-600">Rastrea las donaciones en camino a tu entidad</p>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Mapa simulado */}
                <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-20 h-20 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <p className="text-gray-700 font-semibold">Camión DT-001 en ruta</p>
                      <p className="text-sm text-gray-600 mt-2">Última actualización: hace 3 minutos</p>
                      <div className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                        Llegada estimada: 20 minutos
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información del envío */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4">Donación en tránsito</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Artículos:</span>
                      <span className="font-medium text-gray-900">20 Kg de arroz</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Donante:</span>
                      <span className="font-medium text-gray-900">María González</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Camión:</span>
                      <span className="font-medium text-gray-900">DT-001</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
