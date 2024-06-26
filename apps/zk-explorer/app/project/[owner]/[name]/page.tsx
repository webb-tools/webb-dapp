import Header from '../../../../components/Header';
import { PROJECT_DETAIL_CONTAINER_ID } from '../../../../constants';
import ProjectDetailTabsContainer from '../../../../containers/ProjectDetailTabs/ProjectDetailTabs';
import ProjectGitHubInfoContainer from '../../../../containers/ProjectGitHubInfo/ProjectGitHubInfo';
import ProjectHeaderContainer from '../../../../containers/ProjectHeader';
import RelatedProjectsContainer from '../../../../containers/RelatedProjects/RelatedProjectsContainer';

export default function ProjectPage({
  params: _,
}: {
  params: { slug: { owner: string; name: string } };
}) {
  // TODO: Handle invalid project's owner and name

  return (
    <main className="space-y-6">
      {/* Header */}
      {/* TODO: update breadcrumb */}
      <Header />

      <div
        id={PROJECT_DETAIL_CONTAINER_ID}
        className="lg:max-h-[1150px] grid grid-cols-1 lg:grid-cols-[auto_1fr] grid-rows-[minmax(min-content,max-content)] lg:grid-rows-[auto_1fr] gap-y-6"
      >
        <ProjectGitHubInfoContainer className="order-3 row-span-1 lg:row-span-2 lg:order-1" />

        <ProjectHeaderContainer className="order-1 col-span-1 lg:order-2" />

        <ProjectDetailTabsContainer className="order-2 col-span-1 lg:order-3" />
      </div>

      <RelatedProjectsContainer />
    </main>
  );
}
