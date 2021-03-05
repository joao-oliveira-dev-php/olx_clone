import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { PageContainer } from '../../components/MainComponents';
import { PageArea } from './styled';
import useApi from '../../helpers/OlxApi';

const Page = () => {
    const api = useApi();
    const {id} = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(() => {
        const getAdInfo = async (id) => {
            const json = await api.getAds(id, true);
            setAdInfo(json);
            setLoading(false);
        }
        getAdInfo(id);
    }, []);



    return (
        <PageContainer>
           
            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                           ...

                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                
                              ...
                            </div>
                            <div className="adDescription">
                               
                            ...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                ...
                </div>
            </PageArea>

        </PageContainer>
    );
}

export default Page;