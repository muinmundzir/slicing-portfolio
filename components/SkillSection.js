import SectionParagraph from './SectionParagraph';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';

const SkillSection = () => {
  return (
    <section className="py-28 bg-grayish" id="skills">
      <div className="container mx-auto py-28">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya.</SectionParagraph>
        <div className="flex flex-wrap -mx-4 mt-20">
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Intermediate"
              image="/javascript.svg"
              imageClassName="rounded-full"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="React Js"
              level="Intermediate"
              image="/react.svg"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="Node JS" level="Beginner" image="/nodejs.svg" />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="Node JS" level="Beginner" image="/nodejs.svg" />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Intermediate"
              image="/javascript.svg"
              imageClassName="rounded-full"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="React Js"
              level="Intermediate"
              image="/react.svg"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="React Js"
              level="Intermediate"
              image="/react.svg"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard name="Node JS" level="Beginner" image="/nodejs.svg" />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Intermediate"
              image="/javascript.svg"
              imageClassName="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
