import "./PageContainer.css";

const PageContainer = ({ children, id }) => {
  return (
    <section className="page-container" id={id}>
      <div className="content">{children}</div>
    </section>
  );
};

export default PageContainer;
