import { useState } from 'react';

const donacionesEntregadas = [
  { id: 1, titulo: '300 Libros Escolares', entidad: 'Escuela Primaria Nº 45', lat: -34.6037, lng: -58.3816, ciudad: 'Buenos Aires', fecha: '15 Abr 2026', categoria: 'Educación' },
  { id: 2, titulo: '500 Kg de Alimentos', entidad: 'Comedor Los Piletones', lat: -31.4201, lng: -64.1888, ciudad: 'Córdoba', fecha: '12 Abr 2026', categoria: 'Alimentos' },
  { id: 3, titulo: '150 Prendas de Vestir', entidad: 'Hogar Santa María', lat: -32.9442, lng: -60.6505, ciudad: 'Rosario', fecha: '10 Abr 2026', categoria: 'Vestimenta' },
  { id: 4, titulo: '80 Juguetes', entidad: 'Centro Comunitario Norte', lat: -34.5892, lng: -58.4102, ciudad: 'Buenos Aires', fecha: '8 Abr 2026', categoria: 'Recreación' },
  { id: 5, titulo: '200 Útiles Escolares', entidad: 'Escuela Rural La Esperanza', lat: -31.4502, lng: -64.2167, ciudad: 'Córdoba', fecha: '5 Abr 2026', categoria: 'Educación' }
];

export default function MapaDonaciones({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [selectedDonacion, setSelectedDonacion] = useState<number | null>(null);

  const donacion = selectedDonacion ? donacionesEntregadas.find(d => d.id === selectedDonacion) : null;

  return (
    <div className="size-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver
          </button>
          <h1 className="text-xl font-bold">Mapa de Donaciones Entregadas</h1>
          <div className="w-20"></div>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Mapa Simulado */}
        <div className="flex-1 relative bg-gradient-to-br from-blue-100 to-green-100 overflow-hidden">
          {/* Representación visual del mapa */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-4xl max-h-4xl">
              <svg className="w-full h-full" viewBox="0 0 800 600">
                {/* Fondo del mapa */}
                <rect width="800" height="600" fill="#e0f2fe" />

                {/* Líneas de grid simulando calles */}
                <g stroke="#cbd5e1" strokeWidth="1" opacity="0.3">
                  {[...Array(20)].map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 30} x2="800" y2={i * 30} />
                  ))}
                  {[...Array(27)].map((_, i) => (
                    <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="600" />
                  ))}
                </g>

                {/* Marcadores de donaciones */}
                {donacionesEntregadas.map((donacion, index) => {
                  const x = 150 + (index % 3) * 220;
                  const y = 150 + Math.floor(index / 3) * 200;
                  const isSelected = selectedDonacion === donacion.id;

                  return (
                    <g
                      key={donacion.id}
                      onClick={() => setSelectedDonacion(donacion.id)}
                      style={{ cursor: 'pointer' }}
                      className="hover:opacity-80 transition-opacity"
                    >
                      {/* Pin del marcador */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isSelected ? 20 : 15}
                        fill={isSelected ? '#2563eb' : '#3b82f6'}
                        stroke="white"
                        strokeWidth="3"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r={isSelected ? 12 : 8}
                        fill="white"
                      />
                      {/* Etiqueta */}
                      <text
                        x={x}
                        y={y + 35}
                        textAnchor="middle"
                        fill="#1e293b"
                        fontSize="12"
                        fontWeight="600"
                      >
                        {donacion.ciudad}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Leyenda */}
          <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3">
            <h3 className="font-semibold text-sm mb-2">Leyenda</h3>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <span className="text-gray-700">Donación entregada</span>
            </div>
          </div>
        </div>

        {/* Panel de información */}
        <div className="w-full lg:w-96 bg-white border-l border-gray-200 overflow-y-auto">
          {selectedDonacion && donacion ? (
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Detalles de la Donación</h2>
                <button
                  onClick={() => setSelectedDonacion(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{donacion.titulo}</h3>
                  <p className="text-sm text-gray-600">{donacion.categoria}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Entidad beneficiaria</label>
                  <p className="text-gray-900 mt-1">{donacion.entidad}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Ubicación</label>
                  <p className="text-gray-900 mt-1">{donacion.ciudad}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Fecha de entrega</label>
                  <p className="text-gray-900 mt-1">{donacion.fecha}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Fotos de la entrega</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-green-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Donación entregada exitosamente</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Lista de Donaciones</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Haz clic en un marcador del mapa o selecciona una donación de la lista
              </p>

              <div className="space-y-3">
                {donacionesEntregadas.map((donacion) => (
                  <button
                    key={donacion.id}
                    onClick={() => setSelectedDonacion(donacion.id)}
                    className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">{donacion.titulo}</h3>
                    <p className="text-sm text-gray-600">{donacion.entidad}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {donacion.ciudad} • {donacion.fecha}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
