import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Health Tracker. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px",
    color:"black",
    backgroundColor: "#f1f1f1",
    marginTop: "20px",
  },
};

export default Footer;
