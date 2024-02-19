import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@linaoliveira/design-system";
import styles from "./styles.module.scss";

const aboutOptions = {
  feats: (
    <p>
      Ser promovida a desenvolvedora sênior em três anos não foi apenas um marco
      na minha carreira, foi a confirmação do meu comprometimento com a evolução
      contínua e o desejo de fazer a diferença.
    </p>
  ),
  goals: (
    <p>
      Estou em uma jornada para me tornar uma especialista em ReactJs,
      dedicando-me a criar experiências digitais que se destacam tanto pela
      usabilidade quanto pelo impacto.
    </p>
  ),
  approach: (
    <p>
      Valorizo a colaboração e a troca de ideias entre times de desenvolvedores,
      produto e designers. Acredito que um projeto só pode atingir seu potencial
      máximo quando todos os envolvidos têm voz ativa e trabalham em sintonia.
    </p>
  ),
  // skills: null,
  // testimonials: null,
};

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const option = query.get("option") || "feats";
  return (
    <div className={styles.about}>
      <h1>Quem é Lina?</h1>
      <p>
        Desde que na companhia dos meus colegas de quatro patas, sou alguém que
        encontra satisfação em transformar café em soluções eficazes de
        front-end. Atualmente aprofundando meus conhecimentos em testes e
        performance, busco qualidade em cada projeto, para ter uma ideia do meu
        trabalho, dê uma olhada na minha{" "}
        <Link to="/developments">página de desenvolvimentos</Link>.
      </p>
      <div className={styles.about__options}>
        {Object.keys(aboutOptions).map((key) => (
          <Button
            key={key}
            variant="outlined"
            disabled={key === option}
            onClick={() => navigate({ search: `?option=${key}` })}
          >
            Proezas
          </Button>
        ))}
      </div>
      {aboutOptions[option]}
    </div>
  );
};

export default About;
