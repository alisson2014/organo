import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <img src="/images/fb.png" alt="facebook" />
        <img src="/images/tw.png" alt="Twitter" />
        <img src="/images/ig.png" alt="Instagram" />
      </div>
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="credits">
        <p>Desenvolvido por Alisson</p>
      </div>
    </footer>
  );
};

export default Footer;
