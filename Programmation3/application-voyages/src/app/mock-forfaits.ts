import { Forfait } from './forfait';

export const forfaits : Forfait [] = [
    {
        destination: 'Riviera Maya, Mexique',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Ocean Riviera Paradise',
            coordonnees: '34 km de Aéroport Juan Gualberto Gomez - Varadero',
            nombreEtoiles: 5,
            nombreChambres: 350,
            photo: "./assets/OceanRivieraParadise.jpg",
            caracteristiques: [ "Wi-Fi : dans tout le complexe",
                                "Salle d'exercice",
                                "Boissons 24 h",
                                "collations 24 h", 
                                "Coffret de sûreté",
                                "Section adulte", 
                                "Ascenseur"]
        },
        dateDepart: '15/11/2020',
        dateRetour: '29/11/2020',
        prix: 1150,
        rabais: 200,
        forfaitVedette: true
    },
    {
        destination: 'Holguin, Cuba',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Playa Costa Verde',
            coordonnees: 'Playa Pesquero, Rafael Freye Holguin, 82200 Cuba',
            nombreEtoiles: 3,
            nombreChambres: 480,
            photo: "./assets/hotel-playa-costa-verde.jpg",
            caracteristiques: [ "Ascenseur", 
                                "Miniclub",
                                "4 piscines",
                                "7 restaurants",
                                "13 bars",
                                "Wi-Fi ($)", 
                                "Boissons 24 h",
                                "Coffret de sûreté ($)", 
                                "Salle d'exercice"]
        },
        dateDepart: '13/12/2020',
        dateRetour: '21/12/2020',
        prix: 979,
        rabais: 0,
        forfaitVedette: false
    },
    {
        destination: 'Punta Cana, République dominicaine',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Ocean Blue & Sand',
            coordonnees: 'Arena Gorda sn. Playa Bavaro, République dominicaine',
            nombreEtoiles: 5,
            nombreChambres: 708,
            photo: "./assets/VerdanzaHotel.jpg",
            caracteristiques: [ "Au cœur de la zone hôtelière", 
                                "Wi-Fi : hall",
                                "Piscine",
                                "2 restaurants",
                                "7 bars",
                                "De l’autre côté de la rue longeant la plage", 
                                "Collations 24 h",
                                "Salle d'exercice", 
                                "Coffret de sûreté"]
        },
        dateDepart: '18/12/2020',
        dateRetour: '25/12/2020',
        prix: 1009,
        rabais: 50,
        forfaitVedette: true
    },
    {
        destination: 'San Juan, Porto Rico',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Verdanza',
            coordonnees: '8020 Tartak, Isla Verde, Puerto Rico 00979',
            nombreEtoiles: 4,
            nombreChambres: 222,
            photo: "./assets/friendly-vallarta_overview.jpg" ,
            caracteristiques: [ "Face à la plage", 
                                "Wi-Fi : hall",
                                "3 piscines",
                                "5 restaurants",
                                "Spa ($)",
                                "1 édifice de 14 étages", 
                                "Ascenseur",
                                "Salle d'exercice", 
                                "Près d'un lieu culturel"]
        },
        dateDepart: '18/12/2020',
        dateRetour: '25/12/2020',
        prix: 1209,
        rabais: 0,
        forfaitVedette: false
    },
    {
        destination: 'Puerto Vallarta, Mexique',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Friendly Vallarta',
            coordonnees: 'Ave. Francisco Medina Ascencio Km 2.5, Zona Hetelera 483330 Puerto Vallarta, Jalisco Mexique',
            nombreEtoiles: 4,
            nombreChambres: 270,
            photo: "./assets/hotel-royal-decameron.jpg",
            caracteristiques: [ "Face à la plage", 
                                "Wi-Fi : hall",
                                "Près d'un attrait/ville/lieu historique",
                                "2 restaurants",
                                "2 piscines",
                                "4 bars",
                                "Salle d'exercice",
                                "Coffret de sûreté ($)", 
                                "Ascenseur",
                                "Salle d'exercice", 
                                "Mariages"]
        },
        dateDepart: '11/01/2021',
        dateRetour: '18/01/2021',
        prix: 1379,
        rabais: 250,
        forfaitVedette: true
    }
];