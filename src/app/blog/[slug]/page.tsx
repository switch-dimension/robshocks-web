import { notFound } from "next/navigation";
import { Calendar, Clock, Tag, ArrowLeft, Share2, BookOpen } from "lucide-react";
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

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

      {/* Article Header */}
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Article Meta */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-purple-500/20 text-purple-300 rounded-full">
                <Tag className="w-3 h-3 mr-1" />
                {post.category}
              </span>
              {post.featured && (
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-300 rounded-full">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between text-gray-400 mb-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime} min read
                </div>
                <div className="text-gray-400">
                  by {post.author}
                </div>
              </div>
              
              <button className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <a
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="inline-flex items-center px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full hover:bg-gray-700/50 transition-colors"
                >
                  #{tag}
                </a>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8">
              <div
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6} (.*)/g, (match, text) => {
                    const level = match.split(' ')[0].length;
                    return `<h${level} class="text-white font-bold mb-4 mt-8">${text}</h${level}>`;
                  })
                }}
              />
            </div>
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div className="text-gray-400">
                Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                {post.updatedAt !== post.publishedAt && (
                  <span className="ml-4">
                    • Updated on {new Date(post.updatedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                )}
              </div>
              
              <button className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Level Up Your Development Skills?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers learning AI-powered development techniques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com/@robshocks"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              Subscribe on YouTube
            </a>
            <a
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
            >
              Read More Articles
            </a>
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
  // This would typically fetch from your data source
  return [
    { slug: 'mastering-cursor-ai-complete-guide' },
    { slug: 'deepseek-integration-advanced-ai' },
    { slug: 'building-first-ai-agent-openai-responses' },
    { slug: 'cursor-ai-shortcuts-transform-coding' },
    { slug: 'code-architecture-matters-more-than-ever' },
    { slug: 'model-context-protocol-future-ai-development' }
  ];
}