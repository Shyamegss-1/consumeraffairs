import React from "react";
// import errorImage from "./path-to-your-error-image.jpg"; // Replace with the path to your error image
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ErrorPage {
  message: string;
}

const ErrorPage: React.FC<ErrorPage> = ({ message }) => {
  const history = useRouter();

  const handleGoBack = () => {
    history.push("/"); // Redirect to homepage
  };

  return (
    <div style={styles.container}>
      {/* <Image src={errorImage} alt="Error" style={styles.image} /> */}
      <h1 style={styles.title}>{message}</h1>
      <p style={styles.message}>
        {`We can't seem to find the page you're looking for.`}
      </p>
      <button style={styles.button} onClick={handleGoBack}>
        Go Back Home
      </button>
    </div>
  );
};

// Styles for the component
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
    padding: "20px",
  },
  image: {
    width: "50%",
    maxWidth: "400px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.5em",
    color: "#333",
    marginBottom: "10px",
  },
  message: {
    fontSize: "1.2em",
    color: "#666",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1em",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default ErrorPage;
