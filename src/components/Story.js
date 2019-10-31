import React, { useEffect, useState } from 'react';
import { getStory } from '../services/hnApi';

//({destructured}) so we only get the id instead of using props and getting storyId: 2464651
export const Story = ({ storyId }) => {
    // initializing story as an empty object
    const [story, setStory] = useState({});

    useEffect(() => {
        // if it has an url then set the story
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    return story && story.url ? (
        <>
            <a href={story.url}>
                <p>{story.title}</p>
            </a>
            By: <p>{story.by}</p>
            Posted: <p>{story.time}</p>
        </>
    ) : null;
}