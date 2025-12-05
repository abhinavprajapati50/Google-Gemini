import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBnmLBgm1_FGv6aUPJwm4WQuNw1F1xU16E" //process.env.REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const runGemini = async (prompt) => {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    try {
        const result = await model.generateContent(prompt);
        console.log("@@@@@@@@@", result.response.text());

        return result.response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "⚠️ Error contacting Gemini API.";
    }
};

export default runGemini;