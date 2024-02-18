import React from 'react';
import { useParams } from 'react-router-dom';

import MyFirstPost from '../articles/My-First-Post';
import EnhanceExperience from '../articles/Enhance-Experience';
import Details from '../components/detail';

const ArticleDetail = () => {
    const { articleName } = useParams();
    const renderArticle = () => {
        switch (articleName) {
            case 'my-first-post':
                return <MyFirstPost />;
            case 'improve-customer-experience-forge-connections':
                return <EnhanceExperience />
            default:
                return <p>Article Not Found</p>;
        }
    };

    return (
        <>
            <Details renderArticle={renderArticle} />
        </>
    );
};

export default ArticleDetail;
