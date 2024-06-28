import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setinput] = useState("");
    const [showResult, setshowResult] = useState(false);
    const [resultLoading, setresultLoading] = useState(false);
    const [resultData, setresultData] = useState("");
    const [recentPrompt, setrecentPrompt] = useState("");
    const [previousPrompts, setpreviousPrompts] = useState([]);
    const [selectedPrompt, setselectedPrompt] = useState(null);


    const onSent = async (inputArg) => {
        const currentInput = inputArg !== undefined ? inputArg : input;
        setrecentPrompt(currentInput);
        setinput("");
        setresultData("");
        setshowResult(true);
        setresultLoading(true);
        const response = await runChat(currentInput);
        setresultData(response);
        const newPrompt = { id: previousPrompts.length + 1, prompt: currentInput, answer: response };
        setpreviousPrompts(prev => [newPrompt, ...prev]);
        setresultLoading(false);
        setselectedPrompt(newPrompt.id);
    }

    const switchPrompts = (idToFind) => {
        let foundObject = null;
        for (let i = 0; i < previousPrompts.length; i++) {
            if (previousPrompts[i].id === idToFind) {
                foundObject = previousPrompts[i];
                break;
            }
        }
        if (foundObject) {
            setresultData("");
            setshowResult(true);
            setresultData(foundObject.answer);
            setrecentPrompt(foundObject.prompt);
            setselectedPrompt(idToFind);
        }
    }



    const contextValue = {
        input,
        setinput,
        showResult,
        setshowResult,
        resultLoading,
        resultData,
        recentPrompt,
        previousPrompts,
        selectedPrompt,
        setselectedPrompt,
        onSent,
        switchPrompts,

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider;

