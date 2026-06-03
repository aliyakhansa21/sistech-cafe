export default function Home() {
  return (
    <section className="bg-white flex-grow flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 className="text-6xl font-extrabold text-primary mb-4 tracking-wide">
        SISTECH CAFE
      </h1>
      <p className="text-xl text-gray-700 mb-8 font-medium">
        Local Coffee brewed by Extraordinary Women in Indonesia
      </p>
      <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-hover hover:shadow-lg transition-all">
        See our Menu
      </button>
    </section>
  );
}