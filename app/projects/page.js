import { fetchData } from '../../lib/api';

export default async function ProjectsPage() {
  const projects = await fetchData('projects');

  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p._id} className="border rounded-lg p-5 shadow-sm">
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {(p.techStack || []).map((t) => (
                <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            <div className="space-x-4 text-sm">
              {p.liveUrl && <a href={p.liveUrl} className="text-blue-600" target="_blank" rel="noreferrer">Live</a>}
              {p.repoUrl && <a href={p.repoUrl} className="text-blue-600" target="_blank" rel="noreferrer">Code</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}