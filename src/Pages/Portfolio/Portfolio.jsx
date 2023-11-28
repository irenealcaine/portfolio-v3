import "./Portfolio.scss";
import Card from "@/Components/Card/Card";
import PageContainer from "@/Components/PageConainer/PageConainer";
import Subtitle from "@/Components/Subtitle/Subtitle";

const Portfolio = () => {
  return (
    <PageContainer id={"portfolio"}>
      <Subtitle subtitle={"Portfolio"} />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </PageContainer>
  );
};

export default Portfolio;
