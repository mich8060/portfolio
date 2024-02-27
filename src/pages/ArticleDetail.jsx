import React from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/detail';
import UserInsights from '../articles/User-Insights';

const ArticleDetail = () => {
    const { articleName } = useParams();
    const renderArticle = () => {
        switch (articleName) {
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
