# Post2Product

This project aims at creating elaborate product information given instagram, twitter , facebook links including product description, headings and product images extracted from the video/image as provided by the user.

Here is a demonstration of how the project works given a link to a social media website.

https://github.com/user-attachments/assets/cb6f66ab-ed4f-44d0-af44-049f5da6bf4c

## Technologies Used
* Python-Backend
  * Apify
  * OpenAI Whisper Model
  * Llama Model 3.3-70B-Instruct-Turbo
  * Clip Model
  * Facebook Vitmae
  * Fast API
* ReactJS - Frontend
  * Redux
  * Bootstrap
  * Javascript
  * Axios / Fetch API

## Usage 
### 🚀 Running the Backend Server (Fast API)
* Download all the code present in pythonscripts folder.
* Download all the requirements mentioned in the pythonscripts folder.
* Run all the python scripts parallely.
* ```
  python run desciption.py
  ```
* Similarly run all the other .py scripts
> This code runs the fastapi server for serving the api's we created.

###  🚀 Running the Frontend Application
* Install Dependencies  
`npm install`
This will install all required dependencies and create a node_modules folder along with a package-lock.json file.
* Start the Application
`npm run start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
