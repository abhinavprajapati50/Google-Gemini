import { createContext, useState } from "react";
import runGemini from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState('')
    const [recentPrompt, setRecentPrompt] = useState('');
    const [prevPrompt, setPrevPrompt] = useState([])
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("");


    const onSent = async () => {
        setResultData("")
        setLoading(true);
        setShowResult(true);

        try {

            setRecentPrompt(input)
            const response = await runGemini(input);
            setResultData(response);
            setLoading(false)
            setInput("");

        } catch (error) {
            setResultData("");
            setLoading(false)
            setInput("");
            // setShowResult(false)
        }

    }

    const ContextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }

    return (
        <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
    )
}

export default ContextProvider