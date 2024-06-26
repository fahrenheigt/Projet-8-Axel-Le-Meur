import React from 'react';
import { useState } from 'react';
import { getLogements } from '../../assets/services/logement.service';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';

export default function Home() {
    const [data, setLogements] = useState({logements: []});

    getLogements().then((res) => {
        setLogements({
            logements: res
        });
    })

    return (
        <React.Fragment>
            <Banner source="home" />
            <div className='card-container grey-bg p-16 my-10 rounded-lg'>
                <div className='flex-col-3 w-100'>
                    {
                        data.logements.map((logement) => {
                            return (<Card key={logement.id} logement={logement}/>);
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}