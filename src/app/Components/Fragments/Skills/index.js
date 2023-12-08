import { useFetchSkills } from '@/app/features/skill/useFetchSkills';
import Image from 'next/image';

const Skills = () => {
  const { data: dataSkills, isLoading } = useFetchSkills();

  return (
    <section className="relative max-w-5xl mx-auto mb-16">
      <div className="flex justify-center mb-16">
        <div className="flex flex-col text-center gap-4">
          <h1 className="font-bold text-4xl tracking-wider">Skills</h1>
          <p className="text-[14px] text-gray-600">My technical level</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {dataSkills.map((skill) => {
          return (
            <div
              className="border-[1px] border-gray-800 rounded-xl h-[200px]"
              key={skill.id}
            >
              <div className="flex flex-col py-4">
                <div className="w-30 h-30 mx-auto mb-3">
                  <Image
                    src={skill.image}
                    width={100}
                    height={100}
                    alt={skill.title}
                  />
                </div>
                <div className="font-semibold mx-auto">
                  <h1>{skill.title}</h1>
                </div>
                <div className="text-sm mx-auto">
                  <p>{skill.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Skills;
