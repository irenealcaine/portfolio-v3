import "./PageContainer.css";

const PageContainer = ({ children }) => {
  return (
    <section className="page-container">
      <div className="content">{children}</div>
    </section>
  );
};

export default PageContainer;
