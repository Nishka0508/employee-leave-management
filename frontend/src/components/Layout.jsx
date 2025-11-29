const Layout = ({ children }) => {
  const style = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f2f2f7",
    padding: "20px",
  };

  const card = {
    width: "400px",
    background: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  };

  return (
    <div style={style}>
      <div style={card}>{children}</div>
    </div>
  );
};

export default Layout;
