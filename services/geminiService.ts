import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
// Note: In a production environment, requests should be proxied through a backend to keep the API KEY secure.
// For this demo, we use the key directly as per environment setup.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface AnalysisResult {
  text: string;
  tags?: string[];
  creators?: string[];
}

export const analyzeRequest = async (
  prompt: string, 
  imageBase64?: string, 
  mimeType: string = "image/png"
): Promise<AnalysisResult> => {
  try {
    const model = 'gemini-2.5-flash';
    
    let userContent: any = prompt;
    let systemPrompt = "";

    // 1. Image Analysis Mode
    if (imageBase64) {
      userContent = {
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: imageBase64
            }
          },
          {
            text: `(User Prompt: ${prompt})
            
            Please act as a Professional Art Director and analyze this image.
            1. **Style Analysis**: Identify the specific art style (e.g., Cyberpunk, Impasto, Voxel Art).
            2. **Industry Jargon**: List 3-5 professional keywords/terms describing the technique or visual elements (e.g., "Subsurface Scattering", "Chromatic Aberration").
            3. **Creator Matching**: Recommend 2 types of creators (fictional names) on "ArtBridge" who would specialize in this.
            
            Output strictly in Chinese (Main) and English (Secondary).`
          }
        ]
      };
    } 
    // 2. Co-Creation Mode
    else if (prompt.startsWith("CO_CREATE:")) {
      systemPrompt = `
        You are "Momo", the AI creative assistant for ArtBridge.
        The user wants to co-create or brainstorm.
        Expand their simple idea into a professional creative brief.
        Suggest: Color Palette, Composition, and Mood.
        Format: Bilingual (Chinese/English).
      `;
    } 
    // 3. Search/Match Mode
    else {
      systemPrompt = `
        You are the matching engine for ArtBridge.
        Analyze the user's natural language request.
        Extract:
        - Core Style (核心风格)
        - Estimated Price Range (预估预算)
        - Recommended Creator Tags (推荐标签)
        Format: Bilingual (Chinese/English).
      `;
    }

    const response = await ai.models.generateContent({
      model: model,
      contents: userContent,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    const text = response.text || "AI 正在思考... (AI is thinking...)";
    
    // Simple tag extraction for demo purposes (in real app, use structured JSON output)
    const tagsMatch = text.match(/Keywords|Tags|关键词|标签[:：]\s*(.*)/i);
    const tags = tagsMatch ? tagsMatch[1].split(/,|，/).map(t => t.trim()).slice(0, 4) : [];

    return { text, tags };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "暂时无法连接AI服务，请稍后再试。\nUnable to connect to AI service. Please try again later." };
  }
};