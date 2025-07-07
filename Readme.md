# Macro Tracker

Track your macros, water intake, and weight effortlessly — built with Node.js, Express, MongoDB, and JWT authentication. Includes optional OpenAI-powered meal suggestions.

---

## Features

- **User Auth**: JWT + bcryptjs  
- **Daily Macros**: Set and hit targets (calories, protein, carbs, fat, water)  
- **Food Logging**: Search and log food items  
- **Water & Weight Logging**  
- **Daily Dashboard**: Aggregated macros using MongoDB aggregation  
- **AI Meal Suggestions** via Gemini API Key

---

## Tech Stack

- **Node.js** & **Express.js**  
- **MongoDB** with **Mongoose**  
- **Authentication**: `jsonwebtoken`, `bcryptjs`  
- **AI Integration**: OpenAI API 

---

## Endpoints

1. Register 
POST http://localhost:5000/api/auth/register
<pre>{
  "name": "mahak",
  "email": "ymahak@example.com",
  "password": "minfytech@12"
}
</pre>
![register](./screenshots/register.png)

2. Login 
Endpoint:
POST http://localhost:5000/api/auth/login
<pre>
  {
  "email": "ymahak@example.com",
  "password": "minfytech@12"
}
![login](./screenshots/login.png)

3. Profile 
Endpoint:
GET http://localhost:5000/api/profile
![profile](./screenshots/profile.png)

4. Macro update
Endpoint:
PUT http://localhost:5000/api/profile
![update](./screenshots/macro-update.png)

5. Search Food
Endpoint:
GET http://localhost:5000/api/foods?search-rice
![search](./screenshots/food-search.png)

6. Add Food Entry
![add](./screenshots/food_entry.png)

7. Get Food
![get](./screenshots/foods.png)

8. Log Weight
![weight](./screenshots/weight_log.png)

9. Log water
![water](./screenshots/water_log.png)

10. Dashboard
![dashboard](./screenshots/dashboard.png)


## Open API 
For getting food suggestion we get the GEMINI_API_KEY 
11. Suggestion from Open AI 
![suggestion](./screenshots/api_suggestion.png)










