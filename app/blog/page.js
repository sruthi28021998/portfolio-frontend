import Link from 'next/link';
import { fetchData } from '../../lib/api';

export default async function BlogPage() {
  const blogs = (await fetchData('blogs')).filter((b) => b.published);

  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {blogs.length === 0 && <p className="text-gray-500">No published posts yet.</p>}
        {blogs.map((b) => (
          <div key={b._id} className="border-b pb-6">
            <Link href={`/blog/${b.slug}`}>
              <h2 className="text-xl font-semibold hover:text-blue-600">{b.title}</h2>
            </Link>
            <p className="text-sm text-gray-500">{new Date(b.createdAt).toDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}