import React from 'react';
import { useParams } from 'react-router-dom';

import MyFirstPost from '../articles/My-First-Post';
import EnhanceExperience from '../articles/Enhance-Experience';
import Details from '../components/detail';
import UserInsights from '../articles/User-Insights';

const ArticleDetail = () => {
    const { articleName } = useParams();
    const renderArticle = () => {
        switch (articleName) {
            case 'my-first-post':
                return <MyFirstPost />;
            case 'improve-customer-experience-forge-connections':
                return <EnhanceExperience />
            case 'unlocking-user-insights-a-guide-to-effective-user-interviews':
                return <UserInsights />
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
