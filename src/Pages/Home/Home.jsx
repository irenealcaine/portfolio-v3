import PageContainer from "@/Components/PageConainer/PageConainer";
import Title from "@/Components/Title/Title";
import { contact } from "@/Data/socialMedia";
import "./Home.scss"

const Front = ({ id }) => {
  return (
    <PageContainer id={id}>
      <Title title={"Irene Alcaine"} />
      <ul className={`contact-list`}>
        {contact.map((item) => (
          <li>{item.icon}</li>
        ))}
      </ul>
    </PageContainer>
  );
};

export default Front;
