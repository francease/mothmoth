const textToType = "I love you";
        let index = 0;
        const typingSpeed = 100; // Adjust the typing speed (in milliseconds)

        function typeText() {
            const typingParagraph = document.getElementById("typing-text");
            typingParagraph.textContent += textToType[index];
            index++;

            if (index < textToType.length) {
                setTimeout(typeText, typingSpeed);
            }

        function startTyping() {
            // Reset variables
            index = 0;
            document.getElementById("typing-text").textContent = "";

            // Start typing
            typeText();
        }