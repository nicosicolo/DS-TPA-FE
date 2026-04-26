import { useState } from 'react';

const donacionesDepositadas = [
  { id: 1, items: '100 Kg de arroz', donante: 'Juan Pérez', categoria: 'Alimentos', estado: 'Disponible', fechaIngreso: '20 Abr 2026', vencimiento: '20 Jun 2026' },
  { id: 2, items: '50 Libros', donante: 'María González', categoria: 'Educación', estado: 'Asignada', fechaIngreso: '18 Abr 2026', vencimiento: '-' },
  { id: 3, items: '30 Prendas', donante: 'Carlos López', categoria: 'Vestimenta', estado: 'En tránsito', fechaIngreso: '15 Abr 2026', vencimiento: '-' },
  { id: 4, items: '20 Kg de fideos', donante: 'Ana Rodríguez', categoria: 'Alimentos', estado: 'Vencida', fechaIngreso: '10 Feb 2026', vencimiento: '10 Abr 2026' }
];

const camiones = [
  { id: 1, codigo: 'DT-001', estado: 'En ruta', conductor: 'Roberto Sánchez', destino: 'Comedor Los Piletones', ubicacion: 'Av. Corrientes 1234' },
  { id: 2, codigo: 'DT-002', estado: 'Disponible', conductor: '-', destino: '-', ubicacion: 'Depósito Central' },
  { id: 3, codigo: 'DT-003', estado: 'Mantenimiento', conductor: '-', destino: '-', ubicacion: 'Taller' }
];

const rankingDonantes = [
  { posicion: 1, nombre: 'María González', donaciones: 15, puntos: 450 },
  { posicion: 2, nombre: 'Juan Pérez', donaciones: 12, puntos: 380 },
  { posicion: 3, nombre: 'Ana Rodríguez', donaciones: 10, puntos: 320 },
  { posicion: 4, nombre: 'Carlos López', donaciones: 8, puntos: 250 },
  { posicion: 5, nombre: 'Laura Martínez', donaciones: 7, puntos: 210 }
];

export default function DashboardAdmin({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [seccionActiva, setSeccionActiva] = useState<'donaciones' | 'asignacion' | 'camiones' | 'ranking' | 'importar'>('donaciones');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div className="size-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">DonaTrack</h1>
            <span className="text-purple-100 text-sm">Panel de Administración</span>
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
          <div className="flex gap-6 overflow-x-auto">
            <button
              onClick={() => setSeccionActiva('donaciones')}
              className={`py-4 border-b-2 transition-colors whitespace-nowrap ${
                seccionActiva === 'donaciones'
                  ? 'border-purple-600 text-purple-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Donaciones en Depósito
            </button>
            <button
              onClick={() => setSeccionActiva('asignacion')}
              className={`py-4 border-b-2 transition-colors whitespace-nowrap ${
                seccionActiva === 'asignacion'
                  ? 'border-purple-600 text-purple-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Asignar Beneficiario
            </button>
            <button
              onClick={() => setSeccionActiva('camiones')}
              className={`py-4 border-b-2 transition-colors whitespace-nowrap ${
                seccionActiva === 'camiones'
                  ? 'border-purple-600 text-purple-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Gestión de Camiones
            </button>
            <button
              onClick={() => setSeccionActiva('ranking')}
              className={`py-4 border-b-2 transition-colors whitespace-nowrap ${
                seccionActiva === 'ranking'
                  ? 'border-purple-600 text-purple-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Ranking Donantes
            </button>
            <button
              onClick={() => setSeccionActiva('importar')}
              className={`py-4 border-b-2 transition-colors whitespace-nowrap ${
                seccionActiva === 'importar'
                  ? 'border-purple-600 text-purple-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Importar Donantes
            </button>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-6">
          {/* Sección: Donaciones en Depósito */}
          {seccionActiva === 'donaciones' && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Donaciones en Depósito</h2>
                  <p className="text-gray-600">Registra y gestiona las donaciones recibidas</p>
                </div>
                <button
                  onClick={() => setMostrarFormulario(!mostrarFormulario)}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Registrar Donación
                </button>
              </div>

              {/* Formulario de registro */}
              {mostrarFormulario && (
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4">Nueva Donación en Depósito</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Donante</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
                        <option>María González</option>
                        <option>Juan Pérez</option>
                        <option>Ana Rodríguez</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
                        <option>Alimentos</option>
                        <option>Educación</option>
                        <option>Vestimenta</option>
                        <option>Salud</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descripción de items</label>
                      <input
                        type="text"
                        placeholder="ej: 50 Kg de arroz"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de vencimiento (opcional)</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium">
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

              {/* Lista de donaciones */}
              <div className="space-y-4">
                {donacionesDepositadas.map((donacion) => (
                  <div key={donacion.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{donacion.items}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            donacion.estado === 'Disponible' ? 'bg-green-100 text-green-700' :
                            donacion.estado === 'Asignada' ? 'bg-yellow-100 text-yellow-700' :
                            donacion.estado === 'En tránsito' ? 'bg-blue-100 text-blue-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {donacion.estado}
                          </span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600">
                          <span>Donante: {donacion.donante}</span>
                          <span>Categoría: {donacion.categoria}</span>
                          <span>Ingreso: {donacion.fechaIngreso}</span>
                          <span>Vencimiento: {donacion.vencimiento}</span>
                        </div>
                      </div>
                      {donacion.estado === 'Vencida' && (
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                          Actualizar Estado
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sección: Asignar Beneficiario */}
          {seccionActiva === 'asignacion' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Asignación de Beneficiarios</h2>
                <p className="text-gray-600">Selecciona la entidad beneficiaria para donaciones pendientes</p>
              </div>

              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Algoritmo de Selección</h3>
                <p className="text-gray-600 mb-4">Ejecuta el algoritmo para obtener sugerencias de asignación basadas en prioridad, ubicación y necesidades</p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Ejecutar Algoritmo
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">100 Kg de arroz</h3>
                      <p className="text-sm text-gray-600">Donante: Juan Pérez • Categoría: Alimentos</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      Disponible
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm font-medium text-gray-700 mb-3">Sugerencias del algoritmo:</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Comedor Los Piletones</p>
                          <p className="text-xs text-gray-600">Prioridad: Alta • Distancia: 3.5 km</p>
                        </div>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                          Asignar
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Centro Comunitario Norte</p>
                          <p className="text-xs text-gray-600">Prioridad: Media • Distancia: 5.2 km</p>
                        </div>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium">
                          Asignar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sección: Gestión de Camiones */}
          {seccionActiva === 'camiones' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Gestión de Camiones</h2>
                <p className="text-gray-600">Administra la flota de vehículos de DonaTrack</p>
              </div>

              <div className="space-y-4">
                {camiones.map((camion) => (
                  <div key={camion.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{camion.codigo}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            camion.estado === 'Disponible' ? 'bg-green-100 text-green-700' :
                            camion.estado === 'En ruta' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {camion.estado}
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium text-gray-700">Conductor:</span> {camion.conductor}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Destino:</span> {camion.destino}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Ubicación:</span> {camion.ubicacion}
                          </div>
                        </div>
                      </div>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                        Editar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sección: Ranking Donantes */}
          {seccionActiva === 'ranking' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Ranking de Donantes</h2>
                <p className="text-gray-600">Los donantes más activos del mes</p>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-purple-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Posición</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Donante</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Donaciones</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Puntos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {rankingDonantes.map((donante) => (
                      <tr key={donante.posicion} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {donante.posicion <= 3 && (
                              <span className="text-2xl">
                                {donante.posicion === 1 ? '🥇' : donante.posicion === 2 ? '🥈' : '🥉'}
                              </span>
                            )}
                            <span className="font-semibold text-gray-900">#{donante.posicion}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900">{donante.nombre}</td>
                        <td className="px-6 py-4 text-gray-600">{donante.donaciones}</td>
                        <td className="px-6 py-4">
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                            {donante.puntos} pts
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Historial de Rankings</h3>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="font-medium text-gray-900">Marzo 2026</span>
                    <span className="text-sm text-gray-600 ml-4">Ver ranking</span>
                  </button>
                  <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="font-medium text-gray-900">Febrero 2026</span>
                    <span className="text-sm text-gray-600 ml-4">Ver ranking</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Sección: Importar Donantes */}
          {seccionActiva === 'importar' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Importar Donantes desde CSV</h2>
                <p className="text-gray-600">Carga masiva de donantes registrados (soporta +10,000 filas)</p>
              </div>

              <div className="bg-white rounded-lg shadow p-8">
                <div className="max-w-2xl mx-auto">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-purple-500 transition-colors cursor-pointer">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cargar archivo CSV</h3>
                    <p className="text-sm text-gray-600 mb-4">Arrastra y suelta o haz clic para seleccionar</p>
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                      Seleccionar Archivo
                    </button>
                  </div>

                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Formato del CSV</h4>
                    <p className="text-sm text-blue-800 mb-3">El archivo debe contener las siguientes columnas:</p>
                    <code className="block bg-white p-3 rounded text-sm text-gray-800 border border-blue-200">
                      nombre,email,telefono,direccion
                    </code>
                  </div>

                  <div className="mt-6 text-center">
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                      Descargar plantilla CSV de ejemplo
                    </button>
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
