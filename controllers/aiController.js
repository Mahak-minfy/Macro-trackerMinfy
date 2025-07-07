const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

exports.suggestMeal = async (req, res) => {
  const { remainingProtein, remainingCarbs, remainingFat } = req.body;

  if (
    remainingProtein === undefined ||
    remainingCarbs === undefined ||
    remainingFat === undefined
  ) {
    return res.status(400).json({ message: 'Missing input values' });
  }

  try {
    const prompt = `Suggest a meal with around ${remainingProtein}g protein, ${remainingCarbs}g carbs, and ${remainingFat}g fat. Return only the food items, no intro.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.status(200).json({ suggestion: text });
  } catch (error) {
    console.error('Gemini AI error:', error);
    res.status(500).json({ message: 'Gemini AI suggestion failed' });
  }
};
