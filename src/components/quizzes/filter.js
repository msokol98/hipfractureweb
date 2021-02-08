import React, { useState, useEffect } from 'react';
import getTopics from 'data/getTopics';
import { Typeahead } from 'react-bootstrap-typeahead'; 


const Filter = ({ filterByTopic }) => {

    const [topic, setTopic] = useState([""]);

    useEffect(() => {
        if(topic.length === 0) 
            return filterByTopic("");
        
        const chosenTopic = topic[0] && topic[0].trim();

        if(chosenTopic)
            filterByTopic(chosenTopic);

    }, [topic]);

    return(
        <Typeahead
            id={1}
            onChange={topic => setTopic(topic)}
            options={getTopics()}
            selected={topic}
        />
    )
}
 
export default Filter;