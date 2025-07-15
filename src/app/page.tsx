// vizz-novo/src/app/page.tsx
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-24">
      <div className="bg-white p-10 rounded-lg shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          A Estilização Funcionou!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Se você vê esta caixa azul e branca, o Tailwind CSS está funcionando corretamente.
        </p>
      </div>
    </main>
  )
}