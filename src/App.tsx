import "./App.css";
import React, { useEffect, useRef } from "react";
import {
  Box,
  Button,
  Container,
  createMuiTheme,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  List,
  ThemeProvider,
} from "@mui/material";
// @ts-ignore
import image from "./img/me_photo.jpg";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { pink } from "@mui/material/colors";
import emailjs from "@emailjs/browser";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import mainImage from "./img/main_photo.jpg";
import { SocialIcon } from "react-social-icons";
import project1 from "./img/project1.png";
import project2 from "./img/project2.png";
import project3 from "./img/project3.png";
import project4 from "./img/project4.png";
import projectsStyled from "./styles/Projects.styled";

const styledAboutMe = {
  image: {
    height: "25em",
    width: "25em",
    position: "relative",
    top: 0,
    right: -700,
    borderRadius: "20px",
  },
  imgContainer: {
    position: "absolute",
  },
  icons: {
    marginTop: "1em",
  },
  icon: {
    marginRight: "1em",
  },
};

const styledContact = {
  form: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    height: "80vh",
  },
  input: {
    display: "block",
    width: "80%",
    padding: "1em",
    marginBottom: "2em",
    borderRadius: "5px",
    border: 0,
    fontSize: "20px",
  },
  submitButton: {
    display: "inline-block",
    width: "30%",
    height: "2rem",
    border: 0,
    bottom: 0,
    cursor: "pointer",
    fontSize: "20px",
    borderRadius: "10px",
    backgroundColor: pink["100"],
  },
  contactContainer: {
    margin: "0 0",
  },
};

const style = {
  text: {
    fontSize: "1.5em",
    textAlign: "justify",
    color: "white",
  },
  header: {
    fontSize: "3em",
    color: pink["400"],
  },
  container: {
    marginBottom: "4em",
  },
};

const styledWelcome = {
  welcomeContainer: {
    height: "80vh",
    width: "98vw",
    textAlign: "center",
    marginBottom: "10em",
  },
  welcomeText: {
    position: "relative",
    top: "30%",
    fontSize: "2em",
    color: "rgb(255,255,255)",
  },
  scrollDown: {
    position: "relative",
    top: "50%",
  },
};

const styledProjects = {
  imageItem: {
    margin: "1em",
  },
  titleImage: {
    fontSize: "2rem",
    color: "white",
  }
};

const theme = createMuiTheme({
  palette: {
    primary: pink,
  },
  components: {
    MuiImageListItemBar: {
      styleOverrides: {
        root: {
          color: "white",
          fontSize: "2rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.25rem",
          fontFamily: "Montserrat",
          borderRadius: "50%",
        },
      },
    },
  },
});

const AboutMe = () => {
  return (
    <>
      <Container style={style.container}>
        <h1 id="pageSection1" style={style.header}>
          ABOUT ME
        </h1>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div style={style.text}>
              I'm a computer science student from Poland, currently studying at
              the Technical University of Lodz. Passionate about frontend
              development, I enjoy crafting interactive interfaces using HTML,
              CSS, and JavaScript. Recently I've taken part in Erasmus program
              in Dornbirn, Austria, which enriched my perspectives and
              appreciation for diversity. As I embark on my journey, I seek
              challenging projects to grow and improve. Beyond coding, I find
              joy in photography and exploring nature. Welcome to my portfolio,
              where I showcase my work and experiences. <br></br>
              <strong>
                Let's connect and create together in the exciting world of
                frontend development!
              </strong>
              <div style={styledAboutMe.icons}>
                <span style={styledAboutMe.icon}>
                  <SocialIcon url="https://github.com/zuzakula" />
                </span>
                <span style={styledAboutMe.icon}>
                  <SocialIcon url="https://www.linkedin.com/in/zuzanna-kula-124a13235/" />
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} style={styledAboutMe.imgContainer}>
            <img src={mainImage} style={styledAboutMe.image} alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const imageData = [
  {
    img: project1,
    title: "Car Dashboard",
    url: "https://github.com/zuzakula/car-dashboard",
  },
  {
    img: project2,
    title: "WebDziekanat",
    url: "https://github.com/zuzakula/web-dziekanat",
  },
  {
    img: project3,
    title: "Wordle Clone",
    url: "https://github.com/zuzakula/wordle-clone",
  },
  {
    img: project4,
    title: "Pizza Store",
    url: "https://github.com/zuzakula/pizza-store",
  },
];

const Projects = () => {
  return (
    <>
      <Container style={style.container}>
        <h1 id="pageSection2" style={style.header}>
          PROJECTS
        </h1>
        <ImageList
          sx={{ width: 500, height: 450 }}
          style={{ width: "100%", height: "100%" }}
          className="projectImages"
        >
          {imageData.map((item) => (
            <ImageListItem key={item.img} style={styledProjects.imageItem}>
              <img src={`${item.img}`} alt={item.title} loading="lazy" className="projectImg" />
              <ImageListItemBar
                title={
                  <span>
                    <SocialIcon url={item.url} />
                  </span>
                }
                sx={{
                  "& .MuiImageListItemBar-title": {
                    display: "inline",
                    marginTop: "0 !important"
                  },
                  "& .MuiImageListItemBar-subtitle": {
                    fontSize: "0.8em",
                    fontFamily: "Montserrat",
                    display: "inline-block",
                    position: "relative",
                    top: "0.3em",
                    marginLeft: "0.8em"
                  },
                }}
                subtitle={item.title}
                position="below"
                style={styledProjects.titleImage}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_munyh6u",
        "template_2mou541",
        form.current,
        "QIrdxxyOlGbwCE-nQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <Container style={style.container}>
        <h1 id="pageSection4" style={style.header}>
          CONTACT ME
        </h1>
        <div style={styledContact.contactContainer}>
          <div style={style.text}>
            <form ref={form} onSubmit={sendEmail} style={styledContact.form}>
              <input
                type="text"
                placeholder="Full Name"
                name="userName"
                style={styledContact.input}
                required
              />
              <input
                type="email"
                placeholder="E-Mail"
                name="email"
                style={styledContact.input}
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                style={styledContact.input}
                required
              />
              <textarea
                name="message"
                cols={30}
                rows={10}
                style={styledContact.input}
              ></textarea>
              <input
                type="submit"
                value="SEND"
                style={styledContact.submitButton}
              />
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

const Welcome = () => {
  let aboutSection;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    aboutSection = document.getElementById("pageSection1");
  }, []);

  const scrollTo = (section) => {
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container style={styledWelcome.welcomeContainer}>
      <Box style={styledWelcome.welcomeText}>
        <h1>Hi!</h1>
        <h1>I'm Zuza Kula&#128075;</h1>
      </Box>
      <Box style={styledWelcome.scrollDown}>
        <Button onClick={() => scrollTo(aboutSection)}>
          <FaArrowCircleDown></FaArrowCircleDown>
        </Button>
      </Box>
    </Container>
  );
};

const LinearProgressWithLabel = (
  props: LinearProgressProps & { value: number }
) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1, margin: "0 0" }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
};

const Resume = () => {
  return (
    <>
      <Container style={style.container}>
        <h1 id="pageSection3" style={style.header}>
          RESUME
        </h1>
        <Grid container spacing={2} style={style.text}>
          <Grid item xs={6}>
            <h2>My Skills</h2>
            <Box sx={{ width: "90%" }}>
              <h4>Angular</h4>
              <LinearProgressWithLabel value={80} />
              <h4>HTML/CSS</h4>
              <LinearProgressWithLabel value={90} />
              <h4>Typescript</h4>
              <LinearProgressWithLabel value={88} />
              <h4>React</h4>
              <LinearProgressWithLabel value={70} />
              <h4>React Native</h4>
              <LinearProgressWithLabel value={50} />
              <h4>Figma</h4>
              <LinearProgressWithLabel value={60} />
              <h4>PHP</h4>
              <LinearProgressWithLabel value={55} />
              <h4>Java/Spring</h4>
              <LinearProgressWithLabel value={55} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <h2>Frontend Developer</h2>
            <h3>Comarch, July 2022 - January 2023</h3>
            <List>
              <ul>
                <li>
                  Designed and updated layouts to meet usability and performance
                  requirements.
                </li>
                <li>Produced websites compatible with multiple browsers.</li>
                <li>
                  Conducted unit testing to deliver optimal browser
                  functionality using Cypress.
                </li>
              </ul>
            </List>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

function App() {
  let aboutSection;
  let projectSection;
  let resumeSection;
  let contactSection;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    aboutSection = document.getElementById("pageSection1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    projectSection = document.getElementById("pageSection2");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    resumeSection = document.getElementById("pageSection3");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    contactSection = document.getElementById("pageSection4");
  }, []);

  const scrollTo = (section) => {
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
          <Box className="topMenu">
            <img src={image} className="profilePic" alt="" />
            <span className="icon">
              <SocialIcon url="https://github.com/zuzakula" />
            </span>
            <span className="icon">
              <SocialIcon url="https://www.linkedin.com/in/zuzanna-kula-124a13235/" />
            </span>
            <div className="navigationButtons">
              <Button
                className="navigationButton"
                onClick={() => scrollTo(aboutSection)}
              >
                About Me
              </Button>
              <Button
                className="navigationButton"
                onClick={() => scrollTo(projectSection)}
              >
                Projects
              </Button>
              <Button
                className="navigationButton"
                onClick={() => scrollTo(resumeSection)}
              >
                Resume
              </Button>
              <Button
                className="navigationButton"
                onClick={() => scrollTo(contactSection)}
              >
                Contact me
              </Button>
            </div>
          </Box>
        <Divider />
        <Welcome />
        <div className="content">
          <AboutMe />
          <Projects />
          <Resume />
          <ContactMe />
        </div>
        <div className="goUppButton">
          <Button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <FaArrowCircleUp></FaArrowCircleUp>
          </Button>
        </div>
        <footer className="footer">2023 &copy; Zuzanna Kula</footer>
      </ThemeProvider>
    </>
  );
}

export default App;
