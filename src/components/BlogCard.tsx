"use client";

import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  className?: string;
}

export function BlogCard({ post, featured = false, className }: BlogCardProps) {
  return (
    <article className={cn(
      "group bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden",
      featured && "lg:col-span-2",
      className
    )}>
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full">
            <Tag className="w-3 h-3 mr-1" />
            {post.category}
          </span>
          {post.featured && (
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-300 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className={cn(
          "font-bold text-white mb-3 group-hover:text-purple-300 transition-colors",
          featured ? "text-2xl" : "text-xl"
        )}>
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-gray-400 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime} min read
            </div>
          </div>
          <div className="text-gray-400">
            by {post.author}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="inline-flex items-center px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded hover:bg-gray-700/50 transition-colors"
            >
              #{tag}
            </Link>
          ))}
          {post.tags.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 text-xs text-gray-400">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:translate-x-1 transition-all"
        >
          Read Article
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}