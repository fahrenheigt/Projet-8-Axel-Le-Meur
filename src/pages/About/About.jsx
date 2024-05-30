import React, { Fragment } from 'react'
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';


export default function About() {
return(
    <div>
        <Banner source="about" />
        <div className='w-90 flex flex-col m-auto'>
                        <div className="cursor-pointer">
                            <Collapse title="Fiabilité" content={
                            <Fragment>
                                Les annonces postées sur Kasa garantissent une fiabilité totale.
                                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes
                            </Fragment>} />
                        </div>
                        <div className="cursor-pointer my-13">
                            <Collapse title="Respect" content={
                            <Fragment>
                                La bienveillance fait partie des valeurs fondatrices de Kasa.
                                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                            </Fragment>} />
                        </div>
                        <div className="cursor-pointer">
                            <Collapse title="Service" content={
                            <Fragment>
                                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                                N'hésitez pas à nous contacter si vous avez la moindre question.
                            </Fragment>} />
                        </div>
                        <div className="cursor-pointer my-13">
                            <Collapse title="Sécurité" content={
                            <Fragment>
                                La sécurité est la priorité de Kasa.
                                Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond à des critères de sécurité  établis par nos services.
                                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                            </Fragment>} />
                        </div>
                    </div>
    </div>
);
}
