import React from 'react';
import Col from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row'; 

import { Album } from './Album';
import { PageAlbum } from './PageAlbum';

export class Catalogue extends React.Component  {
    constructor(props) {
        super(props);
        this.state = { pageAlbum:false, albumSelect: null, paroles: null }
    }

    handleAffichageCatalogue(){
        this.setState({pageAlbum: false});
        this.props.handleAfficheEntete(true);
    }

    render() { 
        if (this.state.pageAlbum){
            return <PageAlbum back={()=>this.handleAffichageCatalogue()} album={tabAlbums[this.state.albumSelect]}/>
        } else {
            return ( 
                <Row>
                        {tabAlbums.map((element,i) => ( element.artist.toLowerCase().includes(this.props.recherche.toLowerCase()) || element.title.toLowerCase().includes(this.props.recherche.toLowerCase())) &&
                            <Album  key={"album" + i} 
                                    src={element.src} 
                                    title={element.title} 
                                    artist={element.artist} 
                                    alt={element.alt} 
                                    pageAlbum={() => this.setState({pageAlbum: true, albumSelect:i})}
                                    onClick={(e)=>this.props.onClick(e)}
                                    >
                            </Album> )}
                </Row>
            );
        }
    }
}

var tabAlbums = [ 
    { 
        src : require("../img/albums/bisonnette1.jpg"), 
        alt: "bisonnnette.Lesbarbesdeséries",
        title: "Les barbes de séries", 
        artist: "Bob Bisonnette",
        releaseYear: '2012',
        chansons: [{
            nom: "LA MACHINE À SCORER",
            paroles:<>
                    <Row className='mb-5'>
                        <Col xs lg="12">
                            <p>Tous les joueurs de hockey ont un rôle à jouer</p>
                            <p>C’est de même qu’ça marche si tu veux gagner</p>
                            <p>Le gardien de service arrête les pucks</p>
                            <p>Le 2e goaler ouvre la porte</p>
                            <p>Le préposé à l’équipement remplit les gourdes d’eau</p>
                            <p>Le coach remanie ses trios</p>
                            <p>Les goons s’donnent des coups de poings dans face</p>
                            <p>L’employé d’l’aréna fait la glace</p>
                            <p>Le gars de 4e ligne donne des mises en échec</p>
                            <p>Les plus cinglés font des cross-checks</p>
                            <p>Mais le plus important</p>
                            <p>C’est de la mettre dedans</p>
                            <p>REFRAIN</p>
                            <p>La machine à scorer, la machine à compter compter compter</p>
                            <p>Certain défenseurs jouent agressifs</p>
                            <p>Les « Stay at home » jouent défensifs</p>
                            <p>Le Capitaine se lève dans chambre</p>
                            <p>Il fait un speach, rallie la bande</p>
                            <p>Y’a des spécialistes des mises en jeu</p>
                            <p>Les Russes sont beaux à voir mais sont peureux</p>
                            <p>Y’a des gars pour tuer les punitions</p>
                            <p>Y’a en a d’autres qui sont rien que bons à maison</p>
                            <p>Les plus guerriers peuvent jouer blessés ou même malades</p>
                            <p>Les réservistes jouent d’ins estrades</p>
                            <p>Mais le plus important</p>
                            <p>C’est de la mettre dedans</p>
                            <p>Les joueurs de hockey qui marquent 50 buts, moi ça m’épate</p>
                            <p>Les vrais scoreurs, c’est rare comme de la marde de pape</p>
                            <p>Ils ont un don pour la mettre top net</p>
                            <p>Pauvre Pete Peters, pauvre Ken Wregget</p>
                            <p>Les marqueurs naturels c’est de l’or en barre</p>
                            <p>Quand t’en a un dans ton club échange le pas, c’t’une denrée rare</p>
                            <p>Les hockeyeurs qui savent enfiler l’aiguille</p>
                            <p>C’est aussi précieux que des bijoux de famille</p>                        </Col> 
                    </Row>
                    </>
        },
        {
            nom: "L'AFFAMÉE",
            paroles:<>
                    <Row className='mb-5'>
                        <Col xs lg="12">
                            <p>Dans la limousine, dans piscine et sur la table de la cuisine</p>
                            <p>Sur le plancher, dans chambre à coucher, au 31e du complexe G</p>
                            <p>Dans le bain tourbillon, dans le cabanon, dans le cockpit d’un avion</p>
                            <p>Sur la laveuse, sur la sécheuse, pendant qu’elle passait, la balayeuse</p>
                            <p>Su’ a banquette arrière, dans le funiculaire, dans le showroom du concessionnaire</p>
                            <p>Sur le balcon, dans le buisson, pendant une randonnée de ski de fond</p>
                            <p>Dans la grande roue, l’matin au Drive Thru, au terrain de golf, su’l 15e trou</p>
                            <p>Au bout du lit, sur le tapis, dans cour à bois de la quincaillerie</p>
                            <p>Sur le comptoir, dans balançoire, en pédalo, dans l’ Winnebago</p>
                            <p>Dans le walk in, au terrain de camping, dans mini-van et même sur les Plaines d’Abraham</p>
                            <p>Dans ma roulotte, en Beauce à Woodstock, au château Frontenac, au cinéparc</p>
                            <p>Dans un vestiaire, d’in hélicoptère, dans l’ascenseur et dans la douche pendant des heures</p>
                            <p>Avec des feux d’artifices, d’in champ de maïs, su a piste de danse de chez Maurice</p>
                            <p>Sur la passerelle, dans la ruelle / Comme dans un film d’Emmanuelle</p>
                            <p>Dans un sauna ou dans un spa, avec du popcorn, au cinéma</p>
                            <p>Sur la plage, dans mon garage, dans la cabine d’essayage</p>
                            <p>Sur un voilier, dans l’escalier, dans le parking du poulet frit Kentucky</p>
                            <p>À l’aréna, au centre d’achat, pendant le show de Metallica</p>
                            <p>Au guichet automatique, d’une toilette chimique / Je le sais que c’est pas trop romantique</p>
                            <p>Au restaurant, sur le divan / Pendant le Super Bowl, à la mi-temps</p>
                            <p>Le matin, l’après-midi et pendant presque toute la nuit</p>
                            <p>Infatigable, c’est remarquable c’est une ressource inépuisable</p>
                            <p>Elle en veut plus, c’est jamais assez, encore et encore, elle est affamée</p>
                        </Col> 
                    </Row>
                    </>
        },
        {
            nom: "HANRAHAN (TA FEMME SUZANNE)",
            paroles:<>
                    <Row className='mb-5'>
                        <Col xs lg="12">
                            <p>Change de Canal, change d’osti de Canal</p>
                            <p>Les Chiefs sont les plus toughs de la Ligue Fédérale</p>
                            <p>Braden, comptes-en un autre, on te paye pour</p>
                            <p>Lily t’a souligné, les bouttes ou ça fourre</p>
                            <p>Johnny trouve que l’éducation c’t’aussi important que l’cul pis a boisson</p>
                            <p>Denis Lemieux veut aller en Floride, c’est là qui est le motton</p>
                            <p>Le 1er avril y vont fermer l’usine</p>
                            <p>Morris, lui, veut une plotte su’l bord d’la piscine</p>
                            <p>Dave c’t’une terreur, Dave c’t’un tueur, mais Dave yé magané</p>
                            <p>Billy comment qu’a l’est la cerise su’l sundae</p>
                            <p>L’arbitre en chef veut du jeu propre</p>
                            <p>Mais dites pas ça à Oggy Oggiltorp</p>
                            <p>Go! Charlestown Go!</p>
                            <p>REFRAIN</p>
                            <p>Hanrahan, ta femme Suzanne a des seins bananes</p>
                            <p>Une game contre les CHIEFS ça peut faire mal</p>
                            <p>Jeff Hanson veut écouter l’hymne national</p>
                            <p>Le garçon d’Anita m’a d’l’air d’une future tapette</p>
                            <p>Billy comment t’es vends é sandwiches qu’ta femme t’a faites?</p>
                            <p>Reggie Dunlop est joueur-entraineur</p>
                            <p>Icitte à Charlestown y faut que le monde aille peur</p>
                            <p>D’ins filles des Ice Follies y en a des pas pires</p>
                            <p>Un coke, un orangeade, toute sauf l’ostie de rootbeer</p>
                            <p>Les Bulldogs ont habillé André “Poodle” Lussier</p>
                            <p>Ross Madison surnommé le chien enragé</p>
                            <p>Mais les Frères Hanson ont peur de personne</p>
                            <p>Ni même le chirurgien Tim McCraken</p>
                        </Col> 
                    </Row>
                    </>
        },
        {
            nom: "EL PRESIDENTE",
        },
        {
            nom: "J'TE TROUVE ÉCOEURANTE",
        },
        {
            nom: "J'ACCROCHE MES PATINS",
        },
        {
            nom: "TAUREAU MÉCANIQUE",
        },
        {
            nom: "LES HOMMES ZÉBRÉS",
        },
        {
            nom: "CHANTAL MACHABÉE",
        },
        {
            nom: "LES BARBES DE SÉRIES",
        },
        {
            nom: "TOUNE DE BIÈRE",
        },
    ]
    }, 
    { 
        src : require("../img/albums/bisonnette2.jpg"), 
        alt: "bisonnnette.RockStar",
        title: "Rock Star", 
        artist: "Bob Bisonnette",
        releaseYear: '2014',
        chansons: [{
            nom: "MAPLE LEAFS",
        },
        {
            nom: "LE KING DU BBQ",
        },
        {
            nom: "ROCKSTARS",
        },
        {
            nom: "UNIVERSITÉ",
        },
        {
            nom: "AH NON! PAS ENCORE DU BASKETBALL",
        },
        {
            nom: "LES BRASSIÈRES",
        },
        {
            nom: "LA BALADE DES MALADES",
        },
        {
            nom: "GENTLEMEN'S CLUB",
        },
        {
            nom: "PRENDRE UN VERRE MON MINOU",
        },
        {
            nom: "MILF",
        }
    ]
    }, 
    { 
        src : require("../img/albums/bisonnette3.jpg"), 
        alt: "bisonnnette.Recruedel'année",
        title: "Recrue de l'année", 
        artist: "Bob Bisonnette",
        releaseYear: '2010',
        chansons: [{
            nom: "MAPLE LEAFS",
        },
        {
            nom: "LE KING DU BBQ",
        },
        {
            nom: "ROCKSTARS",
        },
        {
            nom: "UNIVERSITÉ",
        },
        {
            nom: "AH NON! PAS ENCORE DU BASKETBALL",
        },
        {
            nom: "LES BRASSIÈRES",
        },
        {
            nom: "LA BALADE DES MALADES",
        },
        {
            nom: "GENTLEMEN'S CLUB",
        },
        {
            nom: "PRENDRE UN VERRE MON MINOU",
        },
        {
            nom: "MILF",
        }
    ]
    },
    { 
        src : require("../img/albums/ciccone1.jpg"), 
        alt: "ciccone.LesIncontournables",
        title: "Les Incontournables", 
        artist: "Nicola Ciccone",
        releaseYear: '2010',
        chansons: [{
            nom: "L'Opéra du mendiant",
        },
        {
            nom: "Le menteur",
        },
        {
            nom: "J't'aime tout court",
        },
        {
            nom: "Sourire",
        },
        {
            nom: "Ciao bella",
        },
        {
            nom: "Ordinary man",
        },
        {
            nom: "Chanson pour Marie",
        },
        {
            nom: "Pyromane",
        },
        {
            nom: "Celle que tu n'es pas",
        },
        {
            nom: "Il Sognatore",
        },
        {
            nom: "Mio amore",
        },
        {
            nom: "L'Immigrant",
        }
    ]
    },
    { 
        src : require("../img/albums/ciccone2.jpg"), 
        alt: "ciccone.LesImmortelles",
        title: "Les Immortelles", 
        artist: "Nicola Ciccone",
        releaseYear: '2013',
        chansons: [{
            nom: "C'est beau la vie",
        },
        {
            nom: "Je vais t'aimer",
        },
        {
            nom: "L'essentiel",
        },
        {
            nom: "Je suis venu te dire que je m'en vais",
        },
        {
            nom: "Avec le temps",
        },
        {
            nom: "Le doux chagrin",
        },
        {
            nom: "Ne me quitte pa",
        },
        {
            nom: "Ils s'aiment",
        },
        {
            nom: "Le temps d'une chanson",
        },
        {
            nom: "J'ai souvenir encore",
        },
        {
            nom: "On fait tous du show business",
        },
        {
            nom: "Aimons-nous",
        }
    ]
    },
    { 
        src : require("../img/albums/ciccone4.jpg"), 
        alt: "ciccone.Lelongchemin",
        title: "Le long chemin", 
        artist: "Nicola Ciccone",
        releaseYear: '2019',
        chansons: [{
            nom: "Le long chemin",
        },
        {
            nom: "La plus grande chose qu'on dit à une femme",
        },
        {
            nom: "Elle",
        },
        {
            nom: "Difficile l'amour",
        },
        {
            nom: "Pleure",
        },
        {
            nom: "Love is Like a Loaded Gun",
        },
        {
            nom: "Superman est une femme",
        },
        {
            nom: "Courage",
        },
        {
            nom: "La rue du paradis",
        },
        {
            nom: "Cinq",
        },
        {
            nom: "Ragazza mia",
        },
        {
            nom: "Oh toi mon père",
        }
    ]
    }
] 