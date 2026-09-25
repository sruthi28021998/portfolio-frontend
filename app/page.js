import { fetchData } from '../lib/api';

export default async function Home() {
  const about = await fetchData('about');
  const projects = await fetchData('projects');
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold mb-4">
        {about.title || "Hi, I'm building something great."}
      </h1>
      <p className="text-gray-600 max-w-2xl mb-10">{about.bio}</p>

      <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {featured.length === 0 && (
          <p className="text-gray-500">No featured projects yet — add some in the admin panel.</p>
        )}
        {featured.map((p) => (
          <div key={p._id} className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-bold mb-2">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}