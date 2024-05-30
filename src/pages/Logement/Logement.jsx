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

    function getArrayData(data) {
        return (
            <ul>
                {
                    data.map(element => {
                        return (<li>{element}</li>)
                    })
                }
            </ul>
        )
    }

    function getContent() {
        if(data.logement && data.logement !== null) {
            return (
                <div className='mb-16'>
                    <div className="my-16">
                        <Carousel carousel={data.logement.pictures} />
                    </div>
                    <h1 className='text-red text-6xl text-regular my-0'>{data.logement.title}</h1>
                    <h2 className='my-3'>{data.logement.location}</h2>
                    <div className="my-11">
                        {
                            data.logement.tags.map(tag => {
                                return (<a className="px-5 py-2 kasa-bg text-white rounded-xl mr-6 bold">{tag}</a>)
                            })
                        }
                    </div>
                    <div className='flex space-between'>
                        <div className="cursor-pointer w-48">
                            <Collapse title="Description" content={<Fragment>{data.logement.description}</Fragment>} />
                        </div>
                        <div className="cursor-pointer w-48">
                            <Collapse title="Équipements" content={<Fragment>{getArrayData(data.logement.equipments)}</Fragment>} />
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <p>En attente de la réponse de l'api</p>
        );
    }

    return getContent();
}
