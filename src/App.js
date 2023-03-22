import React from "react";
import "./App.css";
// import "./style.css";

function Portfolio() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <a href="#">Ana Sayfa</a>
          </li>
          <li>
            <a href="#about">Hakkımda</a>
          </li>
          <li>
            <a href="#education">Eğitim</a>
          </li>
          <li>
            <a href="#projects">Projelerim</a>
          </li>
          <li>
            <a href="#contact">İletişim</a>
          </li>
        </ul>
      </nav>

      <header>
        <h1>Fatih HAMARAT</h1>
      </header>

      <section id="about">
        <div className="photo">
          <img src="./fatih.jpeg" alt="Benim fotoğrafım" />
        </div>
        <div className="about">
          <h2>Hakkımda</h2>
          <p>
          Experienced in IT and an expert front-end developer, interested in writing codes, skilled
at developing complex solutions, creating responsive designs, possessing strong creative thinking skills,
high energy and integrity.
Well Experience in HTML5 / CSS3, SCSS/SASS, Bootstrap5, Material UI, JavaScript, React JS,
Redux, Tailwind, TypeScript, Python, Linux, Jira Software. Experienced in each phase of Software
Development Life Cycle (SDLC) and Agile methodologies. Experienced in using Git as a version control
system and GitHub as a repository.
Ability to create algorithms effectively, and interact positively and communicate appropriately with
team members. Quickly grasp new technologies and concepts to develop innovative and creative solutions
to problems. A team player with willingness to take initiative and considerate in leading roles while ensuring
inclusivity. Passionate about engaging with team members not only to work collaboratively also to share
learning, experience sharing, improvement opportunities. Able to prioritize supporting others, smart-working
practices and friendly work environment while comfortable working under timeline pressure with competitive
creative and productive environment. Able to demonstrate transferable skills such as self-discipline,
organizational, technical skills inherited from previous roles as system admin in different roles.
Always eager to learn various technologies, tools and libraries. Especially interested in the
Frontend /Web Development, HTML, CSS, JS, React. Excited to learn new things and improve, lifetime
student.
          </p>
        </div>
      </section>
      <section id="education">
        <h2>Eğitimlerim</h2>
        <ul>
          <li>[Astsubay Meslek Yüksek Okulu - Güverte/Silah]</li>
          <li>[Anadolu Üniversitesi - İşletme]</li>
        </ul>
      </section>
      <section id="certificates">
        <h2>Sertifikalarım</h2>
        <ul>
          <li>[META – Front-end Developer]</li>
          <li>[META – Programming with JavaScript]</li>
          <li>[Udemy - Modern Web Development Course ( HTML, CSS, JavaScript, React, Bootstrap, MUI, Redux )]</li>
          <li>[Turkcell Gelecegi Yazanlar - 101: HTML ]</li>
          <li>[Turkcell Gelecegi Yazanlar - 201: HTML&CSS]</li>
          <li>[Turkcell Gelecegi Yazanlar - 301: JavaScript]</li>
          <li>[Turkcell Gelecegi Yazanlar - 101: React]</li>
          <li>[Turkcell Gelecegi Yazanlar - 201: React]</li>
          <li>[Turkcell Gelecegi Yazanlar - 301: React]</li>
          <li>[Turkcell Gelecegi Yazanlar - 101: Python ]</li>
          <li>[Turkcell Gelecegi Yazanlar - 201: Python ]</li>
          <li>[Turkcell Gelecegi Yazanlar - 301: Python ]</li>
          <li>[Turkcell Gelecegi Yazanlar - 101: Basic Linux ]</li>
        </ul>
      </section>
      <section id="projects">
        <h2>Projelerim</h2>
        <div className="projects">
          <div className="project">
            <h3>NEWSPAPER APP</h3>
            <p>This application is an online newspaper. It pulls the news simultaneously and
shows it on the homepage. It also shows the first 3 news on the homepage on the slider at the top of
the page. it lists the rest of the news with the pagination feature on the homepage. In the navbar,
there is a simultaneous category list. You can list the news in the category you want by choosing a
category here. There is additional filtering on the category pages. If you wish, you can filter by
country, category and desired subject/word. On the about tab in the navbar, there is information in the
form of a CV about me. When you click on my name in the header, it directs you to my CV. I used
HTML, CSS, JavaScript and React.Js while making this application. I used VSCode as editor and
Node.js as package manager.</p>
          </div>
          <div className="project">
            <h3>SPEND MONEY APP</h3>
            <p>The purpose of this project is to spend money. There is a defined list of money
and illustrated items. You can add the product you want to the basket, remove it from the basket and
empty the basket completely with one click.</p>
          </div>
          <div className="project">
            <h3>TODO APP</h3>
            <p>The aim of this project is to prepare a to do list. You can enter a new item in the to-do list,
mark and filter completed work, and delete completed items.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>İletişim</h2>
        <p>Bana aşağıdaki iletişim bilgilerimden ulaşabilirsiniz:</p><br/>
        <ul>
          <li>Email: fatihhamarat@hotmail.com </li>
          <li>Email: fatihamarat83@gmail.com </li>
          <li>Telefon: +905446129394</li>
          <li>https://www.linkedin.com/in/fatihhamarat/</li>
          <li>https://github.com/fatihamarat</li>
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;