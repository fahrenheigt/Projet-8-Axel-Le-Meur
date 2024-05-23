import React, { Fragment } from 'react'
import { useState } from 'react';
import { getLogement } from '../../assets/services/logement.service'
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Collapse from '../../components/Collapse/Collapse';

export default function Logement () {
    let { id } = useParams();

    const [data, setLogement] = useState({logement: null});

    getLogement(id).then((res) => {
        setLogement({
            logement: res
        });
    })

    function getContent() {
        if(data.logement && data.logement !== null) {
            return (
                <div className='mb-16'>
                    <div className="my-16">
                        <Carousel carousel={data.logement.pictures} />
                    </div>
                    <h1>Logement n°{data.logement.id}</h1>
                    <h2>{data.logement.title}</h2>
                    <p>{data.logement.description}</p>
                    <Collapse title="test" content={<Fragment>This is an <strong>HTML</strong> string.</Fragment>} />
                    <a href="/">Retour</a>
                </div>
            );
        }

        return (
            <p>En attente de la réponse de l'api</p>
        );
    }

    return getContent();
}
