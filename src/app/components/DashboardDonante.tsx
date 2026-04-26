import { useState } from 'react';

const misDonaciones = [
  { id: 1, items: '50 Libros de texto', categoria: 'Educación', estado: 'Entregada', entidad: 'Escuela Primaria Nº 45', fecha: '15 Abr 2026' },
  { id: 2, items: '20 Kg de arroz', categoria: 'Alimentos', estado: 'En tránsito', entidad: 'Comedor Los Piletones', fecha: '20 Abr 2026' },
  { id: 3, items: '15 Prendas de invierno', categoria: 'Vestimenta', estado: 'Asignada', entidad: 'Hogar Santa María', fecha: '22 Abr 2026' },
  { id: 4, items: '30 Cuadernos', categoria: 'Educación', estado: 'Pendiente', entidad: null, fecha: '25 Abr 2026' }
];

const misiones = [
  { id: 1, titulo: 'Primera Donación', descripcion: 'Realiza tu primera donación', completada: true, puntos: 10 },
  { id: 2, titulo: 'Donante Comprometido', descripcion: 'Realiza 5 donaciones', progreso: 4, total: 5, completada: false, puntos: 25 },
  { id: 3, titulo: 'Diversidad Solidaria', descripcion: 'Dona en 3 categorías diferentes', progreso: 3, total: 3, completada: true, puntos: 20 }
];

const insignias = [
  { id: 1, nombre: 'Iniciador', icono: '🌟', obtenida: true },
  { id: 2, nombre: 'Generoso', icono: '💝', obtenida: true },
  { id: 3, nombre: 'Constante', icono: '🏆', obtenida: false },
  { id: 4, nombre: 'Héroe', icono: '🦸', obtenida: false }
];

export default function DashboardDonante({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [filtroEstado, setFiltroEstado] = useState('Todas');
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');
  const [seccionActiva, setSeccionActiva] = useState<'donaciones' | 'entidades' | 'incentivos' | 'seguimiento'>('donaciones');

  const donacionesFiltradas = misDonaciones.filter(d =>
    (filtroEstado === 'Todas' || d.estado === filtroEstado) &&
    (filtroCategoria === 'Todas' || d.categoria === filtroCategoria)
  );

  return (
    <div className="size-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">DonaTrack</h1>
            <span className="text-blue-100 text-sm">Panel de Donante</span>
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
              onClick={() => setSeccionActiva('donaciones')}
              className={`py-4 border-b-2 transition-colors ${
                seccionActiva === 'donaciones'
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Mis Donaciones
            </button>
            <button
              onClick={() => setSeccionActiva('entidades')}
              className={`py-4 border-b-2 transition-colors ${
                seccionActiva === 'entidades'
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Entidades Beneficiarias
            </button>
            <button
              onClick={() => setSeccionActiva('incentivos')}
              className={`py-4 border-b-2 transition-colors ${
                seccionActiva === 'incentivos'
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Incentivos
            </button>
            <button
              onClick={() => setSeccionActiva('seguimiento')}
              className={`py-4 border-b-2 transition-colors ${
                seccionActiva === 'seguimiento'
                  ? 'border-blue-600 text-blue-600 font-semibold'
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
          {/* Sección: Mis Donaciones */}
          {seccionActiva === 'donaciones' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Mis Donaciones</h2>
                <p className="text-gray-600">Gestiona y revisa todas tus donaciones</p>
              </div>

              {/* Filtros */}
              <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="flex flex-wrap gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                    <select
                      value={filtroEstado}
                      onChange={(e) => setFiltroEstado(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option>Todas</option>
                      <option>Pendiente</option>
                      <option>Asignada</option>
                      <option>En tránsito</option>
                      <option>Entregada</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                    <select
                      value={filtroCategoria}
                      onChange={(e) => setFiltroCategoria(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option>Todas</option>
                      <option>Educación</option>
                      <option>Alimentos</option>
                      <option>Vestimenta</option>
                      <option>Recreación</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Lista de donaciones */}
              <div className="space-y-4">
                {donacionesFiltradas.map((donacion) => (
                  <div key={donacion.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{donacion.items}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            {donacion.categoria}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {donacion.fecha}
                          </span>
                          {donacion.entidad && (
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              {donacion.entidad}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        donacion.estado === 'Entregada' ? 'bg-green-100 text-green-700' :
                        donacion.estado === 'En tránsito' ? 'bg-blue-100 text-blue-700' :
                        donacion.estado === 'Asignada' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {donacion.estado}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sección: Entidades Beneficiarias */}
          {seccionActiva === 'entidades' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Entidades Beneficiarias</h2>
                <p className="text-gray-600">Conoce las organizaciones que reciben donaciones</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Escuela Primaria Nº 45', 'Comedor Los Piletones', 'Hogar Santa María', 'Centro Comunitario Norte'].map((entidad, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{entidad}</h3>
                    <p className="text-sm text-gray-600 mb-4">Buenos Aires, Argentina</p>
                    <div className="text-sm text-gray-500">
                      <p>Necesita: Alimentos, Educación</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sección: Incentivos */}
          {seccionActiva === 'incentivos' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Incentivos y Recompensas</h2>
                <p className="text-gray-600">Completa misiones y gana insignias</p>
              </div>

              {/* Insignias */}
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Mis Insignias</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {insignias.map((insignia) => (
                    <div key={insignia.id} className={`p-4 rounded-lg text-center ${
                      insignia.obtenida ? 'bg-gradient-to-br from-yellow-100 to-yellow-200' : 'bg-gray-100'
                    }`}>
                      <div className="text-4xl mb-2">{insignia.icono}</div>
                      <p className={`font-semibold text-sm ${insignia.obtenida ? 'text-gray-900' : 'text-gray-400'}`}>
                        {insignia.nombre}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Misiones */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Misiones Activas</h3>
                <div className="space-y-4">
                  {misiones.map((mision) => (
                    <div key={mision.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{mision.titulo}</h4>
                          <p className="text-sm text-gray-600">{mision.descripcion}</p>
                        </div>
                        {mision.completada ? (
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            Completada
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            +{mision.puntos} pts
                          </span>
                        )}
                      </div>
                      {!mision.completada && mision.progreso !== undefined && (
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progreso</span>
                            <span>{mision.progreso}/{mision.total}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all"
                              style={{ width: `${(mision.progreso! / mision.total!) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Sección: Seguimiento en Vivo */}
          {seccionActiva === 'seguimiento' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Seguimiento de Entregas</h2>
                <p className="text-gray-600">Rastrea tus donaciones en tiempo real</p>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Mapa simulado */}
                <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-20 h-20 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <p className="text-gray-700 font-semibold">Camión en ruta hacia Comedor Los Piletones</p>
                      <p className="text-sm text-gray-600 mt-2">Última actualización: hace 5 minutos</p>
                      <div className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                        Tiempo estimado: 25 minutos
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
                      <span className="text-gray-600">Destino:</span>
                      <span className="font-medium text-gray-900">Comedor Los Piletones</span>
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
