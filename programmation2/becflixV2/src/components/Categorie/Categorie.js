import React from 'react';
import Row from "react-bootstrap/Row";
import {TvShow} from '../TvShow/TvShow';

const tabSuspense = [
    {
      src : require("../../img/Suspense/district31.jpg"),
      alt: "Distric 31",
      title: "Distric 31"
    },
    {
      src : require("../../img/Suspense/unite9.jpg"),
      alt: "Unite 9",
      title: "Unite 9"
    },
    {
      src : require("../../img/Suspense/lesinvincibles.jpg"),
      alt: "Les invincibles",
      title: "Les Invincibles"
    },
    {
      src : require("../../img/Suspense/serienoire.jpg"),
      alt: "Serie Noire",
      title: "Serie Noire"
    },
    {
      src : require("../../img/Suspense/fugueuse.jpg"),
      alt: "Fugueuse",
      title: "Fugueuse"
    },
    {
      src : require("../../img/Suspense/19-2.jpg"),
      alt: "19-2",
      title: "19-2"
    }
]

const tabHumour = [
  {
    src : require("../../img/Humour/lanceEtCompte.jpg"),
    alt: "lanceEtCompte",
    title: "lanceEtCompte"
  },
  {
    src : require("../../img/Humour/lapetitevie.jpg"),
    alt: "lapetitevie",
    title: "lapetitevie"
  },
  {
    src : require("../../img/Humour/lesboys.jpg"),
    alt: "lesboys",
    title: "lesboys"
  },
  {
    src : require("../../img/Humour/lesbeauxmalaises.jpg"),
    alt: "lesbeauxmalaises",
    title: "lesbeauxmalaises"
  },
  {
    src : require("../../img/Humour/lesbougon.jpg"),
    alt: "lesbougon",
    title: "lesbougon"
  },
  {
    src : require("../../img/Humour/minuitlesoir.jpg"),
    alt: "minuitlesoir",
    title: "minuitlesoir"
  }
]

const tabAmerica = [
  {
    src : require("../../img/Series americaines/betterCallSaul.jpg"),
    alt: "betterCallSaul",
    title: "betterCallSaul"
  },
  {
    src : require("../../img/Series americaines/breakingbad.jpg"),
    alt: "breakingbad",
    title: "breakingbad"
  },
  {
    src : require("../../img/Series americaines/dexter.jpg"),
    alt: "dexter",
    title: "dexter"
  },
  {
    src : require("../../img/Series americaines/got.jpg"),
    alt: "got",
    title: "got"
  },
  {
    src : require("../../img/Series americaines/mandalorian.jpg"),
    alt: "mandalorian",
    title: "mandalorian"
  },
  {
    src : require("../../img/Series americaines/vikings.jpg"),
    alt: "vikings",
    title: "vikings"
  }
]

export class Categorie extends React.Component{
  handleClick() {
    alert('test');
  }
  
  render() {
    return (
      <>
      <Row>
        <h1>{this.props.nom}</h1>
      </Row>
      <Row>
        {this.AfficherCategorie()}
      </Row>
      </>
      )
  }
  
  AfficherCategorie(){
    if(this.props.nom === "Suspense"){
      return (
        tabSuspense.map((element,i) => <TvShow key={"suspense"+i}
        src={element.src}
        alt={element.alt}
        title={element.title}
      ></TvShow>)
      )
    }
    else if(this.props.nom === "Humour"){
      return (
        tabHumour.map((element,i) => <TvShow key={"humour"+i}
        src={element.src}
        alt={element.alt}
        title={element.title}
   ></TvShow>)
      )
    }
    else if(this.props.nom === "Séries américaines"){
      return (
        tabAmerica.map((element,i) => <TvShow key={"america"+i}
        src={element.src}
        alt={element.alt}
        title={element.title}
   ></TvShow>)
      )
    }
  }
}
Categorie.defaultProps = { nom: 'Suspense' };