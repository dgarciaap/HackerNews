import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
    //useState([]) because we receive an array of ids (initialize it as an empty array)
    const [storyIds, setStoryIds] = useState([]);

    //hook
    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);
    // [] = when the component mounts do this...

    return storyIds.map(storyId => <Story key={storyId} storyId={storyId} />);
}

// export default StoriesContainer;