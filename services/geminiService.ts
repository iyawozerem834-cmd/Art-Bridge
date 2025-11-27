import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeRequest = async (userPrompt: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Determine the type of request based on prefixes added in AiAssistant.tsx
    let specificInstruction = "";
    if (userPrompt.startsWith("ANALYZE_IMAGE_REQUEST")) {
        specificInstruction = `
          The user has uploaded an image (simulated). 
          1. Identify the art style (e.g., Cyberpunk, Ukiyo-e, Low Poly).
          2. Explain industry jargon/terms related to this style (e.g., "Chromatic Aberration", "Ambient Occlusion").
          3. Recommend 2 fictional creators from the platform.
        `;
    } else if (userPrompt.startsWith("CO_CREATE_REQUEST")) {
        specificInstruction = `
           The user wants to co-create. Expand their idea into a detailed art brief or prompt.
           Suggest color palettes and composition techniques.
        `;
    } else {
        specificInstruction = `
           The user is looking for a creator. Extract tags and price range.
        `;
    }

    const systemPrompt = `
      You are the AI engine for "ArtBridge" (艺智桥).
      Your output must be helpful, concise, and BILINGUAL (Chinese main, English secondary).
      
      ${specificInstruction}

      Output Format:
      **核心分析 (Analysis)**: [Content in Chinese]
      **行业关键词 (Keywords)**: [Tags]
      **推荐/建议 (Recommendation)**: [Actionable advice]
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || "AI正在思考... (AI is thinking...)";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "暂时无法连接AI服务。Please try again later.";
  }
};