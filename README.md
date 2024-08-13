# ArtifyAI

ArtifyAI is an AI-driven web application that integrates various AI models such as ChatGPT, Gemini, and image generation tools. This project offers users a seamless experience by providing an intuitive and visually appealing user interface, allowing them to explore multiple AI tools after a simple authentication process. All user login data is securely stored in MongoDB.

## Features

- **User Authentication**: Secure login and registration system.
- **AI Tools**: 
  - **ChatGPT**: Engage in natural language conversations.
  - **Gemini**: Access advanced AI features.
  - **Image Generation**: Generate images based on user inputs.
- **User-Friendly Interface**: A clean and modern UI/UX for an enhanced user experience.
- **Data Storage**: All user data, including login information, is securely stored in MongoDB.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB setup for storing user data.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ArtifyAI.git
   cd ArtifyAI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   PORT=your_port_number
   ```

4. Run the application:
   ```bash
   npm start
   ```

5. Access the application at `http://localhost:your_port_number`.

## Usage

1. **Sign Up / Log In**: Users must create an account or log in to access AI tools.
2. **Choose AI Tool**: After authentication, users can select from ChatGPT, Gemini, or the image generation tool.
3. **Interact with AI**: Explore the AI tools within a well-designed interface.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Models**: ChatGPT, Gemini, Custom Image Generator
- **Authentication**: JWT (JSON Web Token)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please reach out to [javiyashivam70@gmail.com].

---
