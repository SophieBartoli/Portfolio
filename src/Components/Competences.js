import React from 'react'
import CompetencesCards from './CompetencesCards';
import logoReact from '../Assets/Logos/logoReact.webp';
import logoNode from '../Assets/Logos/logoNode.webp';
import logoSeo from '../Assets/Logos/logoSeo.webp';


function Competences() {
  return (
    <div id="competences">
      <h2> Mes compétences</h2>
      <div className="competencesDiv">
        <CompetencesCards cardTitle="FRONTEND" cardImg={logoReact} cardText=" HTML, CSS, SASS, JS, REACT..." cardAlt="logo React"/>
        <CompetencesCards cardTitle="BACKEND" cardImg={logoNode} cardText="NODE.JS, EXPRESS, API REST, MONGODB, JAVA..." cardAlt="logo Node"/>
        <CompetencesCards cardTitle="SKILLS" cardImg={logoSeo} cardText="Gestion de projet, Méthodologies (agile, cascade), UX Design, SEO, Accessibilité, Debugging, Veille, Green IT, OWASP..." cardAlt="logo SEO"/>
      </div>
    </div>

  )
}

export default Competences