import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { addSearchVideos } from "../utils/videoSlice";
import { SEARCH_SUGGESTION_API, GET_RELATED_VIDEO_API } from "../utils/constants";

const useSearch = () => {
    const [searchText, setSearchText] = useState("");
    const [suggestedResults, setSuggestedResults] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [selectedQuery, setSelectedQuery] = useState(null);
    const searchCache = useSelector(store => store.search);
    const dispatch = useDispatch();

    // Fetch search suggestions or use cache
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchText]) {
                setSuggestedResults(searchCache[searchText]);
            } else {
                getSearchSuggestion();
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [searchText]);

    // Fetch related videos when a query is selected
    useEffect(() => {
        if (selectedQuery) {
            getSearchVideos();
        }
    }, [selectedQuery]);

    const getSearchSuggestion = async () => {
        try {
            const data = await fetch(SEARCH_SUGGESTION_API + searchText);
            const json = await data.json();
            setSuggestedResults(json[1]);
            dispatch(cacheResults({ [searchText]: json[1] }));
        } catch (error) {
            console.error("Error fetching search suggestions:", error);
        }
    };

    const getSearchVideos = async () => {
        if (!selectedQuery) return;
        const data = await fetch(
            `${GET_RELATED_VIDEO_API}${selectedQuery}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );
        const json = await data.json();
        dispatch(addSearchVideos(json.items));
    };

    return {
        searchText,
        setSearchText,
        suggestedResults,
        showSuggestion,
        setShowSuggestion,
        selectedQuery,
        setSelectedQuery,
    };
};

export default useSearch;
