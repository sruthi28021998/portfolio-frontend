import { fetchData } from '../../lib/api';

export default async function AboutPage() {
  const about = await fetchData('about');
  const skills = await fetchData('skills');
  const experience = await fetchData('experience');
  const testimonials = await fetchData('testimonials');

  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <p className="text-gray-700 mb-10">{about.bio}</p>

      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3 mb-10">
        {skills.map((s) => (
          <span key={s._id} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {s.name}
          </span>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <div className="space-y-4 mb-10">
        {experience.map((e) => (
          <div key={e._id} className="border-l-2 border-blue-500 pl-4">
            <p className="font-semibold">{e.role} — {e.company}</p>
            <p className="text-sm text-gray-500">
              {e.startDate?.slice(0, 10)} - {e.current ? 'Present' : e.endDate?.slice(0, 10)}
            </p>
            <p className="text-gray-700 mt-1">{e.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t._id} className="border rounded-lg p-4 shadow-sm">
            <p className="text-gray-700 italic mb-3">"{t.message}"</p>
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-500">{t.position} — {t.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}