import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Playful Design: Balancing Fun and Functionality',
      excerpt: 'Discover how to create designs that are both engaging and effective, striking the perfect balance between playful creativity and professional results.',
      author: 'Sarah Chen',
      date: '2025-01-15',
      category: 'design',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: '#E77C96'
    },
    {
      id: 2,
      title: 'Building Stronger Teams Through Creative Collaboration',
      excerpt: 'Learn effective strategies for fostering collaboration and building trust within your team through creative workshops and team-building activities.',
      author: 'David Kim',
      date: '2025-01-12',
      category: 'teamwork',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: '#97CEC8'
    },
    {
      id: 3,
      title: 'Web Trends 2025: What\'s Next in Digital Experience',
      excerpt: 'Explore the latest trends in web design and development that are shaping the digital landscape in 2025 and beyond.',
      author: 'Marcus Johnson',
      date: '2025-01-10',
      category: 'technology',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: '#FBD66E'
    },
    {
      id: 4,
      title: 'Content That Connects: Writing for Your Audience',
      excerpt: 'Master the art of creating content that resonates with your target audience and builds lasting connections with your brand.',
      author: 'Emma Thompson',
      date: '2025-01-08',
      category: 'content',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: '#EEA27B'
    },
    {
      id: 5,
      title: 'The Psychology of Color in Brand Identity',
      excerpt: 'Understanding how color choices impact brand perception and customer behavior, with practical tips for choosing your brand palette.',
      author: 'Sarah Chen',
      date: '2025-01-05',
      category: 'design',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: '#647C9F'
    },
    {
      id: 6,
      title: 'Marketing with Authenticity in the Digital Age',
      excerpt: 'How to create authentic marketing campaigns that build genuine connections with your audience while staying true to your brand values.',
      author: 'Lisa Rodriguez',
      date: '2025-01-03',
      category: 'marketing',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: '#E77C96'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'design', name: 'Design', count: blogPosts.filter(post => post.category === 'design').length },
    { id: 'teamwork', name: 'Teamwork', count: blogPosts.filter(post => post.category === 'teamwork').length },
    { id: 'technology', name: 'Technology', count: blogPosts.filter(post => post.category === 'technology').length },
    { id: 'content', name: 'Content', count: blogPosts.filter(post => post.category === 'content').length },
    { id: 'marketing', name: 'Marketing', count: blogPosts.filter(post => post.category === 'marketing').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#97CEC8]/20 to-[#FBD66E]/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-spicy text-4xl md:text-6xl font-bold text-[#647C9F] mb-6">
            Our Blog & Insights
          </h1>
          <p className="text-xl text-[#647C9F]/70 max-w-3xl mx-auto">
            Dive into our world of creativity, collaboration, and innovation. 
            We share insights, tips, and stories from our journey.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span
                      className="px-4 py-2 rounded-full text-white font-semibold text-sm uppercase tracking-wide"
                      style={{ backgroundColor: featuredPost.color }}
                    >
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide"
                      style={{ 
                        backgroundColor: `${featuredPost.color}20`,
                        color: featuredPost.color 
                      }}
                    >
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="font-spicy text-2xl lg:text-3xl font-bold text-[#647C9F] mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#647C9F]/70 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-[#647C9F]/60 text-sm">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button
                      className="group flex items-center space-x-2 text-[#E77C96] hover:text-[#647C9F] transition-colors font-semibold"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-[#97CEC8]/10 to-white">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#647C9F]/50" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97CEC8] focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-[#E77C96] text-white'
                        : 'bg-white text-[#647C9F] hover:bg-[#E77C96]/10 hover:text-[#E77C96]'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                  >
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center space-x-2">
                          <Tag className="w-4 h-4" style={{ color: post.color }} />
                          <span
                            className="text-sm font-semibold uppercase tracking-wide"
                            style={{ color: post.color }}
                          >
                            {post.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-spicy text-xl font-semibold text-[#647C9F] mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[#647C9F]/70 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-[#647C9F]/60">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <button
                        className="group mt-4 flex items-center space-x-2 text-[#E77C96] hover:text-[#647C9F] transition-colors font-semibold"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-[#647C9F]/30 mx-auto mb-4" />
                <h3 className="font-spicy text-xl font-semibold text-[#647C9F] mb-2">
                  No posts found
                </h3>
                <p className="text-[#647C9F]/70">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-[#97CEC8] to-[#647C9F]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-spicy text-3xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for the latest insights, tips, and behind-the-scenes stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-3 bg-[#E77C96] text-white rounded-full font-semibold hover:bg-[#E77C96]/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;