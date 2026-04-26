import { useState } from 'react';

export default function Login({ onNavigate, onLogin }: { onNavigate: (view: string) => void, onLogin: (role: string) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'donante' | 'beneficiario' | 'admin'>('donante');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(userType);
  };

  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <button
          onClick={() => onNavigate('landing')}
          className="mb-4 text-blue-600 hover:text-blue-700 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">DonaTrack</h1>
            <p className="text-gray-600">Inicia sesión en tu cuenta</p>
          </div>

          {/* Tipo de Usuario */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Tipo de usuario</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setUserType('donante')}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  userType === 'donante'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Donante
              </button>
              <button
                type="button"
                onClick={() => setUserType('beneficiario')}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  userType === 'beneficiario'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Beneficiario
              </button>
              <button
                type="button"
                onClick={() => setUserType('admin')}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  userType === 'admin'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Admin
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Iniciar Sesión
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>

        <p className="text-center mt-6 text-sm text-gray-600">
          ¿No tienes cuenta?{' '}
          <button onClick={() => onNavigate('registro')} className="text-blue-600 font-medium hover:text-blue-700">
            Regístrate aquí
          </button>
        </p>
      </div>
    </div>
  );
}
