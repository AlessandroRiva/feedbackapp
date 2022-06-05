function Header() {
  return (
    <header style={{ backgroundColor: "blue", color: "red" }}>
      <div className='container'>
        <h2>Feedback UI</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

export default Header;
