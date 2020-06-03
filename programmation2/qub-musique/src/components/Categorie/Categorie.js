import React from "react";
import Row from "react-bootstrap/Row";
import './Categorie.css';
import { TvShow } from "../TvShow/TvShow";

const tabAlbums = [
  {
    src: require("../../img/Photos Albums/bisonnette1.jpg"),
    alt: "Les invincibles",
    title: "Les Invincibles",
  },
  {
    src: require("../../img/Photos Albums/bisonnette2.jpg"),
    alt: "19-2",
    title: "19-2",
  },
  {
    src: require("../../img/Photos Albums/bisonnette3.jpg"),
    alt: "District 31",
    title: "District 31",
  },
  {
    src: require("../../img/Photos Albums/bisonnette4.jpg"),
    alt: "Fugueuse",
    title: "Fugueuse",
  },
  {
    src: require("../../img/Photos Albums/ciccone1.jpg"),
    alt: "Unite 9",
    title: "Unite 9",
  },
  {
    src: require("../../img/Photos Albums/ciccone2.jpg"),
    alt: "serienoire",
    title: "serienoire",
  },
  {
    src: require("../../img/Photos Albums/ciccone3.jpg"),
    alt: "serienoire",
    title: "serienoire",
  },
  {
    src: require("../../img/Photos Albums/ciccone4.jpg"),
    alt: "serienoire",
    title: "serienoire",
  },
];

export class Categorie extends React.Component {
  // handleHover(e) {
  //   //e représente le Tvshow sur qui le hover est vrai
  //   console.log(e);
  //   //e.setStyle({ opacity: 0.5 });
  // }

  render() {
    return (
      <>
        <Row>
          <h1>{this.props.nom}</h1>
        </Row>
        <Row>{this.AfficherCategorie()}</Row>
      </>
    );
  }

  AfficherCategorie() {
    if (this.props.nom === "Albums") {
      return tabAlbums.map((element, i) => (
        <TvShow
          key={"albums" + i}
          src={element.src}
          alt={element.alt}
          title={element.title}
          //onHover={this.handleHover}
        ></TvShow>
      ));
    } 
  }
}
Categorie.defaultProps = { nom: "Albums" };
