
import React from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/detail';
import ProjectBroadcast from '../case-studies/Project-Broadcast';
import HomepageEvolution from '../case-studies/Homepage-Evolution';
import UserInsights from '../case-studies/User-Insights';
import UnifiedLanguage from '../case-studies/Unified-Language';

function CaseStudies(){
    const { articleName } = useParams();
    const renderArticle = () => {
        switch (articleName) {
            case 'project-broadcast-sterring-the-brand-development-journey':
                return <ProjectBroadcast />
            case 'the-story-of-pluralsights-homepage-evolution':
                return <HomepageEvolution />
            case 'unlocking-user-insights-a-guide-to-effective-user-interviews':
                return <UserInsights />
            case 'creating-a-unified-design-language':
                return <UnifiedLanguage />
            default:
                return <p>Case Study Not Found</p>;
        }
    };

    return (
        <>
            <Details renderArticle={renderArticle} />
        </>
    );
}

export default CaseStudies;


