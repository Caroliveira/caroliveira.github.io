import PropTypes from "prop-types";
import Nav from "../Nav";
import styles from "./styles.module.scss";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Nav />
    <main>{children}</main>
    <footer>&copy; {new Date().getFullYear()} Lina Oliveira</footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
