import React from "react";
import profilePicture from "../../images/profile_picture.jpeg";
import resume from "./resume.pdf";
import SmallContact from "../Shared/SmallContact";

const About = () => {
  return (
    <div className="flex-1 d-flex f-col">
      <div className="d-flex jc-center">
        <div id="limited-container">
          <div id="limited-first">
            <img
              src={profilePicture}
              alt="Julie Harmegnies"
              className="w-100"
            />
          </div>

          <div id="limited-second">
            <div>
              <p
                style={{ textTransform: "uppercase", letterSpacing: "2px" }}
                className="font-size-xs mb-4"
              >
                ARCHITECTE D’INTÉRIEUR ET DESIGNER DIPLÔMÉE DE L’ÉCOLE BLEUE EN
                JUIN 2020, CERTIFIÉE CFAI, MENTION BIEN DU JURY
              </p>
              <div className="mb-2" style={{ lineHeight: "1.2rem" }}>
                <p className="font-size-xs mb-3">
                  À la recherche de projets en agence ou en indépendant, je
                  m’intéresse particulièrement aux matériaux naturels et aux
                  techniques traditionnelles. Je suis convaincue que combiner
                  l’ancestral et l’innovant est la clé pour développer une
                  nouvelle manière de construire, plus respectueuse de l’homme
                  et de l’environnement. Dans mon travail, j’aspire à replacer
                  l’Homme au sein de l’architecture, en proposant des
                  expériences nouvelles où le ressenti prime sur l’esthétique.
                </p>
                <p className="font-size-xs">
                  Mon cursus pluridisciplinaire au sein de l’École Bleue m’a
                  permis de développer une vision transversale du métier
                  d’architecte et d’adopter une approche globale dans les
                  projets où j’interviens. De la conception d’espace au
                  graphisme, je dessine également le mobilier. Forte de ma
                  curiosité et de mon sens de l’investissement, j’ai un grand
                  intérêt pour les projets créatifs tels que l’upcycling et le
                  collage. Mes expériences professionnelles en parallèle de mes
                  études m’ont permis d’acquérir une grande réactivité et un
                  sens des responsabilités. De plus, exercer le métier
                  d’architecte d’intérieur en indépendant lors de mon année de
                  diplôme m’a grandement familiarisé avec le suivi client.
                  Encadrer, rassurer, orienter, sont des qualités importantes
                  que j’ai retenues de cette expérience.
                </p>
              </div>
            </div>

            <div className="py-3 w-100 bg-white">
              <a
                href={resume}
                download="CV Julie Harmegnies.pdf"
                className="font-weight-bolder font-size-sm"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <SmallContact />
    </div>
  );
};

export default About;
