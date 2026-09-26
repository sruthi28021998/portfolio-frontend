import { fetchData } from '../../../lib/api';

export default async function BlogPostPage({ params }) {
  const blogs = await fetchData('blogs');
  const post = blogs.find((b) => b.slug === params.slug);

  if (!post) return <p className="py-16">Post not found.</p>;

  return (
    <article className="py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{new Date(post.createdAt).toDateString()}</p>
      <div className="prose whitespace-pre-line">{post.content}</div>
    </article>
  );
}