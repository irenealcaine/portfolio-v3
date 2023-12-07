import PageContainer from "@/Components/PageConainer/PageConainer";
import Title from "@/Components/Title/Title";

const Front = ({ id }) => {
  return (
    <PageContainer id={id}>
      <Title title={"Irene Alcaine"} />
      <ul>
        <li>Git</li>
        <li>Mail</li>
        <li>LinkedIn</li>
      </ul>
    </PageContainer>
  );
};

export default Front;
