import { notFound } from "next/navigation";
import { BookOpen, ArrowLeft } from "lucide-react";
import { getBlogPostsByCategory, blogCategories } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = blogCategories.find(cat => cat.slug === params.slug);
  const posts = getBlogPostsByCategory(params.slug);

  if (!category || posts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <a href="/" className="text-white font-bold text-xl hover:text-purple-300 transition-colors">
                Rob Shocks
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="/#content" className="text-gray-300 hover:text-white transition-colors">Content</a>
              <a href="/#tutorials" className="text-gray-300 hover:text-white transition-colors">Tutorials</a>
              <a href="/blog" className="text-white font-medium">Blog</a>
              <a href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back to Blog */}
          <div className="mb-8">
            <a
              href="/blog"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </a>
          </div>

          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {category.name}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {category.description}
            </p>
            <div className="text-gray-400">
              {posts.length} article{posts.length !== 1 ? 's' : ''} in this category
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Rob Shocks</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Rob Shocks. Empowering developers with AI-powered tools.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  return blogCategories.map((category) => ({
    slug: category.slug,
  }));
}