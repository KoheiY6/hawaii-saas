import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hawaii SaaS - Authentic Travel Experiences</title>
        <meta
          name="description"
          content="Connect with authentic Hawaii travel experiences and local guides"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Authentic Hawaii Experiences
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with local guides and discover the real Hawaii
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Explore Experiences
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400">
                Become a Guide
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
