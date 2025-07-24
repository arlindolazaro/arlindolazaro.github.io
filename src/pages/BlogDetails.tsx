import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const BlogDetails = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Blog Details</h1>
          {/* Conteúdo do blog aqui */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetails;