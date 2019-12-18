import React, {useEffect, useState} from 'react'
import './App.css'
import Box from "./Custom/Box";
import MetadataBox from "./Custom/MetadataBox";
import {Flex} from 'reflexbox/styled-components'
import {Heading, Text} from 'rebass/styled-components'



const StarWars = () => {
    const [characters, setCharacters] = useState({name: [], url: []});
    const [pages, setPages] = useState({next: '', prev: ''});
    const [loading, setLoading] = useState(true);
    const [metaLoading, setMetaLoading] = useState(false);
    const [hasError, setError] = useState({state: false, message: ''});
    //object has metadata like films and planets
    //consider how requests all update state
    let currentCharID = 0
    const [characterMetadata, setMetadata] = useState({charID: 0, films:  [], starships: [], vehicles: []});
    const characterShape = ({ name, films, ...rest }) => ({ name });

    const fetchCharacters = async () => {
        try {
            const result = await (await fetch('https://swapi.co/api/people/?page=1')).json();
            const results = result.results
            const shapeNext = ({next,...rest}) => ({next});
            const shapePrev = ({previous,...rest}) => ({previous});
            const shapeName = ({name,...rest}) => ({name});
            const shapeUrl = ({url,...rest}) => ({url});

            const shapedCharacters = {
                name: results ? results.map(shapeName) : [],
                url: results ? results.map(shapeUrl) : [],
            };
            console.log(shapedCharacters)
            const character = shapedCharacters.name.map(({name,...rest}) => ({name}))
            console.log(character)
            const shapedPages = {
                next: result && shapeNext(result),
                prev: result && shapePrev(result),
            };
            console.log(shapedCharacters)
            setCharacters((characters) => ({...characters, shapedCharacters}))
            setPages((pages) => ({...pages, shapedPages}))
            console.log(characters.name)
            console.log(characters.url)

        } catch(e) {
            setError({state: true, message: e.message})
        }
        setLoading(false)
    }

    const fetchCharacterMetadata = async (charID) => {
        //Fetch character data
        console.log('loading meta')
        setMetaLoading(true)
        const result = await (await fetch(characters.url[charID])).json();

        const fetchMetaPromises = async (meta) => {
            if (meta.length > 0) {
                const metaPromises = meta.map(async (item) => (await fetch(item)).json());
                return await Promise.all(metaPromises);
            }
        };
        setMetadata((characterMetadata => ({...characterMetadata, films: '', starships: '', vehicles: ''})));


        //Shaping functions
        const shapeFilms = ({title, episode_id, ...rest}) => ({title, episode_id});
        const shapeStarships = ({name, ...rest}) => ({name});
        const shapeVehicles = ({name, ...rest}) => ({name});

        const filmPromises = await fetchMetaPromises(result.films);
        const starshipPromises = await fetchMetaPromises(result.starships);
        const vehiclePromises = await fetchMetaPromises(result.vehicles);

        if (charID === characterMetadata.charID) {
            console.log('im setting');
            const data = {
                films: filmPromises && filmPromises.length > 0 ? filmPromises.map(result => shapeFilms(result)) : [],
                starships: starshipPromises && starshipPromises.length > 0 ? starshipPromises.map(result => shapeStarships(result)) : [],
                vehicles: vehiclePromises && vehiclePromises.length > 0 ? vehiclePromises.map(result => shapeVehicles(result)) : []
            };
            setMetadata((characterMetadata) => ({...characterMetadata,...data }))
        }
        setMetaLoading(false)
    };


    useEffect( () => {
        fetchCharacters();
        fetchCharacterMetadata(characterMetadata.charID)

    },[characterMetadata.charID]);


    return (
        <>
            {loading && <Text fontSize={4} fontWeight={'bold'}>Loading</Text>}
            {hasError && hasError.state &&
            <div>{hasError.message}</div>}
            {characters && characters.length > 0 && !loading && (
                //Characters
                <Box bg={'background'}>
                    <Flex>
                        <Box width={1/2} p={0} m={2}>
                            <Heading textAlign={'left'} fontSize={4}>Characters</Heading>
                            <MetadataBox>
                                {characters.name.map((character,index) =>
                                    <MetadataBox key={index}
                                                 bg={characterMetadata.charID === index ? 'primary': 'contentAreaBackground'}
                                                 onClick={() => {
                                                     setMetadata({charID: index})}}>
                                        {character}
                                    </MetadataBox>)}
                            </MetadataBox>
                        </Box>
                        <Box width={1/2} p={0} m={2}>
                            <Heading textAlign={'left'} fontSize={4}>Metadata</Heading>

                            {metaLoading ? <Flex flexWrap="wrap" justifyContent="center" alignItems="center" height={600}><Text fontSize={4} fontWeight={'bold'}>Loading</Text></Flex>  :
                                <>
                                    <MetadataBox>
                                        {characterMetadata && characterMetadata.films && characterMetadata.films.length > 0 &&
                                        <MetadataBox color={'primary'}><b>Films:</b>
                                            {characterMetadata.films.map((metaData,index) =>
                                                <MetadataBox key={index}  >{metaData.title}</MetadataBox>)}
                                        </MetadataBox>}
                                        {characterMetadata && characterMetadata.starships && characterMetadata.starships.length > 0 &&
                                        <MetadataBox color={'primary'}><b>Starships:</b>
                                            {characterMetadata.starships.map((metaData,index) =>
                                                <MetadataBox key={index}>{metaData.name}</MetadataBox>)}
                                        </MetadataBox>}
                                        {characterMetadata && characterMetadata.vehicles && characterMetadata.vehicles.length > 0 &&
                                        <MetadataBox color={'primary'}><b>Vehicles:</b>
                                            {characterMetadata.vehicles.map((metaData,index) =>
                                                <MetadataBox key={index}>{metaData.name}</MetadataBox>)}
                                        </MetadataBox>}
                                    </MetadataBox>
                                </>}
                        </Box>
                    </Flex>
                </Box>
            )
            }
        </>
    )
}



export { StarWars }
