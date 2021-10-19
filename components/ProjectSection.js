import ProjectCard from './ProjectCard';
import SectionParagraph from './SectionParagraph';
import SectionTitle from './SectionTitle';

const ProjectSection = () => {
  return (
    <section className="py-28" id="projects">
      <div className="container mx-auto">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Beberapa proyek bikinan saya.</SectionParagraph>
        <div className="flex flex-wrap -mx-4 mt-20">
          <div className="w-6/12 px-4 pb-8">
            <ProjectCard
              image="/hasten.png"
              description="Explorasi landing page"
              name="Hasten"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ProjectCard
              image="/resource.png"
              description="Explorasi landing page"
              name="Resource"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ProjectCard
              image="/resource.png"
              description="Explorasi landing page"
              name="Resource"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ProjectCard
              image="/hasten.png"
              description="Explorasi landing page"
              name="Hasten"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
