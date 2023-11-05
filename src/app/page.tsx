import Reports from "@/components/layout/report/Reports";
import DefaultCarousel from "@/components/layout/Carousel";
import { Footer } from "@/components/layout/footer/Footer";
import NavBar from "@/components/layout/header/NavBar";
import Cards from "@/components/layout/web-cents/Card";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <header>
        <NavBar />
      </header>
      <main className="flex flex-col items-center justify-center">
        <section className="h-80 w-4/6 flex justify-center items-center mb-4 mt-4">
          <DefaultCarousel />
        </section>
        <section className="flex flex-wrap space-x-4 justify-center w-6/6 mx-auto mt-4 mb-4">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </section>
        <button className="p-2 flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2">
          See More
        </button>
        <Reports />
      </main>
      <Footer />
    </div>
  );
}