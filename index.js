// Function to create notification div
function createAlertNotification(message) {
    // Create notification div
    const notificationDiv = document.createElement('div');
    notificationDiv.classList.add('notification');
    notificationDiv.id = 'notification';
    notificationDiv.textContent = message;

    // Append notification div to body
    document.body.appendChild(notificationDiv);

    // Add class to show notification
    notificationDiv.classList.add('show-notification');

    // Automatically remove notification after 2 seconds
    setTimeout(() => {
        // Add class to hide notification
        notificationDiv.classList.add('hide-notification');
        
        // Remove notification after animation
        setTimeout(() => {
            notificationDiv.remove();
        }, 500);
    }, 9000);
}

createAlertNotification("We are glad you are here. we recomend you start our tour");




document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('nav ul');
    let timeoutId;
    
    function showNavMenu() {
        if (window.innerWidth < 480) {
            navMenu.classList.add('show-menu');
            clearTimeout(timeoutId); // Clear previous timeout
            timeoutId = setTimeout(hideNavMenu, 5000); // Hide menu after 5 seconds of inactivity
        }
    }
    
    function hideNavMenu() {
        navMenu.classList.remove('show-menu');
    }
    
    function handleScroll() {
        showNavMenu();
    }
    
    function handleResize() {
        if (window.innerWidth >= 768) {
            window.removeEventListener('scroll', handleScroll);
            navMenu.classList.remove('show-menu');
        } else {
            window.addEventListener('scroll', handleScroll);
        }
    }
    
    // Initial setup
    handleResize();
    
    // Listen for resize events
    window.addEventListener('resize', handleResize);
});


document.addEventListener("DOMContentLoaded", function() {
    // Get the image container
    const imgContainer = document.querySelector('.img-container img');

    // Function to smoothly rotate the image container
    function rotateImage(degrees) {
        imgContainer.style.transition = 'transform 0.75s ease'; // Smooth transition
        imgContainer.style.transform += `rotate(${degrees}deg)`;
    }

    // Function to generate a random welcome message
    function generateWelcomeMessage() {
        const welcomeTranslations = [
            { lang: 'English', translation: 'Welcome' },
            { lang: 'French', translation: 'Bienvenue' },
            { lang: 'German', translation: 'Willkommen' },
            { lang: 'Russian', translation: 'Добро пожаловать' },
            { lang: 'Swahili', translation: 'Karibu' },
            { lang: 'Zulu', translation: 'Wamukelekile' },
            { lang: 'Arabic', translation: 'أهلاً وسهلاً' },
            { lang: 'Nigerian Igbo', translation: 'Nno' },
            { lang: 'Somali', translation: 'So dhawaada' },
            { lang: 'Amharic', translation: 'እንኳን ደህና መጡ' },
            { lang: 'Sudanese Arabic', translation: 'مرحباً' },
            { lang: 'Luganda', translation: 'Oli Wano' },
            { lang: 'Kinyarwanda', translation: 'Murakaza neza' },
            { lang: 'Afrikaans', translation: 'Welkom' }
            // Add more translations as needed
        ];
        

        // Randomly select a translation
        const randomTranslation = welcomeTranslations[Math.floor(Math.random() * welcomeTranslations.length)];

        return randomTranslation;
    }

    // Function to handle scroll event
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Check if scrollTop is 0 or no scrolling has occurred
        if (scrollTop === 0 || scrollTop === lastScrollTop) {
            rotateImage(0); // Set image to 0 degrees rotation
        } else if (scrollTop > lastScrollTop) {
            // Scrolling down, rotate clockwise
            rotateImage(45); // Adjust the angle as needed
        } else {
            // Scrolling up, rotate anticlockwise
            rotateImage(-45); // Adjust the angle as needed
        }

        // Generate and display a welcome message
        const welcomeMessage = generateWelcomeMessage();
        displayWelcomeMessage(welcomeMessage);

        // Update the last scroll position
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    // Function to display the welcome message as an h2 element
    function displayWelcomeMessage(message) {
        const welcomeElement = document.querySelector('h2');
        welcomeElement.textContent = `${message.translation} (${message.lang})`;
    }

    // Track the last scroll position
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial rotation setup (at page load)
    rotateImage(0); // Set image to 0 degrees rotation

    // Display initial welcome message
    const initialWelcomeMessage = generateWelcomeMessage();
    displayWelcomeMessage(initialWelcomeMessage);
});



document.addEventListener("DOMContentLoaded", function() {
    // Function to generate a random welcome message
    function generateWelcomeMessage() {
        const welcomeTranslations = [
            { lang: 'English', translation: 'Welcome' },
            { lang: 'French', translation: 'Bienvenue' },
            { lang: 'German', translation: 'Willkommen' },
            { lang: 'Russian', translation: 'Добро пожаловать' },
            { lang: 'Swahili', translation: 'Karibu' },
            { lang: 'Zulu', translation: 'Wamukelekile' },
            { lang: 'Arabic', translation: 'أهلاً وسهلاً' },
            { lang: 'Nigerian Igbo', translation: 'Nno' },
            { lang: 'Somali', translation: 'So dhawaada' },
            { lang: 'Amharic', translation: 'እንኳን ደህና መጡ' },
            { lang: 'Sudanese Arabic', translation: 'مرحباً' },
            { lang: 'Luganda', translation: 'Oli Wano' },
            { lang: 'Kinyarwanda', translation: 'Murakaza neza' },
            { lang: 'Afrikaans', translation: 'Welkom' }
            // Add more translations as needed
        ];

        // Randomly select a translation
        const randomTranslation = welcomeTranslations[Math.floor(Math.random() * welcomeTranslations.length)];

        return randomTranslation;
    }

    // Function to create a leafy div with the welcome message
    function createLeafyDiv(message) {
        const leafyDiv = document.createElement('div');
        leafyDiv.classList.add('leafy-div');
        leafyDiv.textContent = `${message.translation} (${message.lang})`;
        return leafyDiv;
    }

    // Function to animate falling leafy divs
    function animateFallingLeafyDiv() {
        const homepageSection = document.getElementById('homepage');
        const leafyDivContainer = document.createElement('div');
        leafyDivContainer.classList.add('leafy-div-container');
        homepageSection.appendChild(leafyDivContainer);

        const message = generateWelcomeMessage();
        const leafyDiv = createLeafyDiv(message);
        leafyDivContainer.appendChild(leafyDiv);

        const position = Math.random() * 100;
        leafyDiv.style.left = position + '%';

        setTimeout(() => {
            leafyDiv.style.top = '100%';
        }, 100);

        setTimeout(() => {
            leafyDiv.remove();
        }, 3000); // Adjust the duration of leaf animation as needed
    }

    // Function to handle scroll event
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Check if the page is scrolled 150px
        if (scrollTop % 150 === 0) {
            animateFallingLeafyDiv();
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});

function showOverlay() {
    const compInfoItems = document.querySelectorAll(".company-info-item");

    compInfoItems.forEach(compInfo => {
        const overlayContent = compInfo.querySelector('.overlay-contents');
        const boldInfo = compInfo.querySelector('b');
        let timer;

        function showOverlayDelayed() {
            timer = setTimeout(function() {
                overlayContent.classList.add('inside');
            }, 5000); // Delay of 5 seconds
        }

        compInfo.addEventListener('mouseenter', function() {
            boldInfo.textContent = "(or you can click me)";
            showOverlayDelayed();
        });

        compInfo.addEventListener('mouseleave', function() {
            clearTimeout(timer);
            boldInfo.textContent = "(hover me to continue)";
            overlayContent.classList.remove('inside');
        });

        compInfo.addEventListener('click', () => {
            overlayContent.classList.toggle('inside');
        });
    });
}

showOverlay();



function createOverlay(title, text) {
    // Create overlay div
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    // Create overlay content div
    const overlayContent = document.createElement('div');
    overlayContent.classList.add('overlay-content');
    
    // Create close button
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        overlay.remove();
    });
    
    // Create title and text elements
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    const textElement = document.createElement('p');
    textElement.textContent = text;
    
    // Append elements to overlay content
    overlayContent.appendChild(closeButton);
    overlayContent.appendChild(titleElement);
    overlayContent.appendChild(textElement);
    
    // Append overlay content to overlay
    overlay.appendChild(overlayContent);
    
    // Append overlay to body
    document.body.appendChild(overlay);
}

// Example usage
createOverlay('Welcome to CEGOPA', 'Your patner in governance and environmentalist advicer.');


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');
    
    // Function to show the selected section and hide others
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }
    
    // Function to handle link click
    function handleLinkClick(event) {
        event.preventDefault();
        
        // Get the section ID
        const sectionId = this.getAttribute('href').substring(1);
        
        // Toggle section visibility
        if (this.classList.contains('active')) {
            showSection('homepage');
            this.classList.remove('active');
        } else {
            // Remove "active" class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add "active" class to the clicked link
            this.classList.add('active');
            
            // Show the corresponding section
            showSection(sectionId);
        }
    }
    
    // Add event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
    
    // Show the homepage section by default
    showSection('homepage');

    document.getElementById('home-logo').addEventListener('click', function() {
        showSection('homepage');
        if(navLinks.classList.contains('active')){
            navLinks.classList.remove('active');
        }
        
    });


});



// Event listener for the "Shall we proceed" button in the Learn box
document.getElementById('learn-button').addEventListener('click', function() {
    // Trigger a click event on the corresponding link
    const learnLink = document.querySelector('nav ul li a[href="#education"]');
    learnLink.click();
});

// Event listener for the "Shall we proceed" button in the Engage box
document.getElementById('engage-button').addEventListener('click', function() {
    // Trigger a click event on the corresponding link
    const engageLink = document.querySelector('nav ul li a[href="#advocacy"]');
    engageLink.click();
});

// Event listener for the "Shall we proceed" button in the Connect box
document.getElementById('connect-button').addEventListener('click', function() {
    // Trigger a click event on the corresponding link
    const connectLink = document.querySelector('nav ul li a[href="#research"]');
    connectLink.click();
});


document.addEventListener("DOMContentLoaded", function(){
    const myTourguideBtn = document.getElementById('mytourist');
    const touristPanel = document.querySelector('.mytourist');
    
    let isPanel = false;

    myTourguideBtn.onclick = () => {
        if(!isPanel){
            touristPanel.style.display = "block";
            isPanel = true;
        }
        else{
            touristPanel.style.display = "none";
            isPanel = false;
        }
        
    }
})


// Function to create the insight platform with multiple box divs
function createInsightPlatform() {
    // Create overlay div for the insight platform
    const insightOverlay = document.createElement('div');
    insightOverlay.classList.add('overlay');
    
    // Create overlay content div
    const insightOverlayContent = document.createElement('div');
    insightOverlayContent.classList.add('overlay-content');
    
    // Create close button for insight platform
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        insightOverlay.remove();
    });

    // Create container for box divs
    const boxContainer = document.createElement('div');
    boxContainer.classList.add('box-container');

    // Create and append box divs with placeholders
    createBox("Research Papers", "Governance Reforms in Sub-Saharan Africa: A Comparative Analysis", "Dr. John Doe", "This research paper examines the challenges and opportunities for governance reforms in Sub-Saharan Africa, with a focus on democratization, institutional capacity building, and anti-corruption efforts.", "CEGOPA FINAL (1).svg");
    createBox("Case Studies", "Success Story: Improving Healthcare Delivery in Rwanda", "", "Explore how Rwanda's innovative healthcare policies and community-based health initiatives have led to significant improvements in healthcare access, maternal and child health outcomes, and disease prevention.", "CEGOPA FINAL (1).svg");
    createBox("Policy Briefs", "Policy Brief: Addressing Youth Unemployment in Africa", "", "This policy brief highlights the pressing issue of youth unemployment in Africa and proposes a multi-sectoral approach to create employment opportunities, enhance skills development, and promote entrepreneurship among young people.", "CEGOPA FINAL (1).svg");
    createBox("Data Visualizations", "Interactive Dashboard: Governance Indicators in Africa", "", "Discover key governance indicators such as political stability, rule of law, and government effectiveness in African countries. Use interactive charts and maps to explore trends over time and compare performance across regions.", "CEGOPA FINAL (1).svg");
    createBox("Expert Analysis", "Expert Insight: Strengthening Democratic Institutions in Africa", "Dr. Jane Smith", "In this insightful analysis, Dr. Smith examines the role of democratic institutions in promoting accountable governance and sustainable development in Africa. Drawing on empirical evidence and comparative studies, she discusses strategies for strengthening democratic norms, electoral integrity, and citizen participation.", "CEGOPA FINAL (1).svg");
    createBox("Training Resources", "Online Course: Introduction to Public Policy Analysis", "Prof. Michael Johnson", "Join Prof. Johnson in this comprehensive online course, designed for policymakers, analysts, and aspiring leaders. Learn essential concepts and tools for analyzing public policies, conducting policy research, and formulating evidence-based solutions to complex social challenges.", "CEGOPA FINAL (1).svg");

    // Function to create and append box div
    function createBox(category, title, author, description, imageUrl) {
        const boxDiv = document.createElement('div');
        boxDiv.classList.add('box');

        const image = document.createElement('img');
        image.src = imageUrl; // Set image source
        boxDiv.appendChild(image);

        const boxContent = document.createElement('div');
        boxContent.classList.add('box-content');

        const boxTitle = document.createElement('div');
        boxTitle.classList.add('box-title');
        boxTitle.textContent = category + ": " + title;
        boxTitle.style.fontWeight = "bold";
        boxContent.appendChild(boxTitle);

        if (author) {
            const authorElement = document.createElement('div');
            authorElement.textContent = "Author: " + author;
            authorElement.style.fontWeight = "bold";
            boxContent.appendChild(authorElement);
        }

        const boxDescription = document.createElement('div');
        boxDescription.classList.add('box-description');
        boxDescription.textContent = description;
        boxContent.appendChild(boxDescription);

        boxDiv.appendChild(boxContent);
        boxContainer.appendChild(boxDiv);
    }

    // Append elements to insight platform content
    insightOverlayContent.appendChild(closeButton);
    insightOverlayContent.appendChild(boxContainer);
    
    // Append insight platform content to overlay
    insightOverlay.appendChild(insightOverlayContent);
    
    // Append overlay to body
    document.body.appendChild(insightOverlay);
}

// Function to create the chat platform
function createChatPlatform(topic) {
    // Create overlay div for the chat platform
    const chatOverlay = document.createElement('div');
    chatOverlay.classList.add('overlay');
    
    // Create overlay content div
    const chatOverlayContent = document.createElement('div');
    chatOverlayContent.classList.add('overlay-content');
    
    // Create close button for chat platform
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        chatOverlay.remove();
    });

    // Create elements for the chat platform content
    const titleElement = document.createElement('h2');
    
    if(topic == "Learn"){
        titleElement.textContent = 'What do you wish  to  ' + topic + "   today?";
    
    }

    if(topic == "Engage"){
        titleElement.textContent = 'How do you wish  to  ' + topic + " with us   today?";
    
    }

    if(topic == "Connect"){
        titleElement.textContent = 'How can we assist you to ' + topic + " with us  today?";
    
    }

    if(topic == "Explore"){
        titleElement.textContent = 'How can we assist you to ' + topic + " with us  today?";
    
    }

    if(topic == "Innovate"){
        titleElement.textContent = 'How can we assist you to ' + topic + " ideas from us  today?";
    
    }

    if(topic == "Act"){
        titleElement.textContent = 'How can we assist you wih ' + topic +"ions" + "  today?";
    
    }
    // Input field for user message
    const userInput = document.createElement('input');
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('placeholder', 'Message CEGOPA...');
    userInput.classList.add('user-input');
    userInput.value.toLowerCase();
    
    // Send button
    const sendButton = document.createElement('button');
    sendButton.textContent = 'Send';
    sendButton.classList.add('send-button');
    sendButton.disabled = true;
    
    userInput.addEventListener("keydown", function(e){
        if( e.code == "Enter" && userInput.value.trim()  != "" ){
            sendMessage();
            sendButton.disabled = true;
        }
    })

    userInput.addEventListener('input', function(){
        if(userInput.value.trim() == "") {
            sendButton.disabled = true;
            
        }
        else{
            sendButton.disabled = false;
            sendButton.addEventListener('click', sendMessage);
        }
    })
    // Response div
    const responseDiv = document.createElement('div');
    responseDiv.classList.add('response');

    // Append elements to chat platform content
    chatOverlayContent.appendChild(closeButton);
    chatOverlayContent.appendChild(titleElement);
    chatOverlayContent.appendChild(userInput);
    chatOverlayContent.appendChild(sendButton);
    chatOverlayContent.appendChild(responseDiv);
    
    // Append chat platform content to overlay
    chatOverlay.appendChild(chatOverlayContent);
    
    chatOverlayContent.style.width = "300px";
    // Append overlay to body
    document.body.appendChild(chatOverlay);
}

// Function to handle sending message
function sendMessage() {
    const userInput = document.querySelector('.user-input');
    const message = userInput.value;
    
    // Clear input field
    userInput.value = '';
    
    // Display user message in response area
    const responseDiv = document.querySelector('.response');
    const userMessage = document.createElement('p');
    userMessage.textContent = `You : ${message}`;
    responseDiv.appendChild(userMessage);
}



// Event listener for the "Shall we proceed" button
document.getElementById('explore-button').addEventListener('click', function() {
    createInsightPlatform();
});

// Example usage
const exploreChatButton = document.getElementById('explore-chat-button');
exploreChatButton.addEventListener('click', function() {
    createChatPlatform('Explore');
});

const learnChatButton = document.getElementById('learn-chat-button');
learnChatButton.addEventListener('click', function() {
    createChatPlatform('Learn');
});

const engageChatButton = document.getElementById('engage-chat-button');
engageChatButton.addEventListener('click', function() {
    createChatPlatform('Engage');
});

const connectChatButton = document.getElementById('connect-chat-button');
connectChatButton.addEventListener('click', function() {
    createChatPlatform('Connect');
});

const actChatButton = document.getElementById('act-chat-button');
actChatButton.addEventListener('click', function() {
    createChatPlatform('Act');
});

const innovateChatButton = document.getElementById('innovate-chat-button');
innovateChatButton.addEventListener('click', function() {
    createChatPlatform('Innovate');
});

// Function to create the Call-to-Action (CTA) platform
function createCTAPlatform() {
    // Create overlay div for the CTA platform
    const ctaOverlay = document.createElement('div');
    ctaOverlay.classList.add('overlay');
    
    // Create overlay content div
    const ctaOverlayContent = document.createElement('div');
    ctaOverlayContent.classList.add('overlay-content');
    
    // Create close button for CTA platform
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        ctaOverlay.remove();
    });

    // Create elements for the CTA platform content
    const titleElement = document.createElement('h2');
    titleElement.textContent = 'Take Action Now';

    // Suggestive content
    const contentElement = document.createElement('p');
    contentElement.textContent = 'Encourage visitors to take action by inviting them to subscribe to newsletters, attend upcoming events, join advocacy campaigns, or support CEGOPA\'s initiatives through donations or volunteer opportunities.';
    
    // Email input field
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Enter your email');

    // Subscribe button
    const subscribeButton = document.createElement('button');
    subscribeButton.textContent = 'Subscribe';
    subscribeButton.addEventListener('click', function() {
        const email = emailInput.value;
        // Code to handle subscription
        console.log('Subscribed with email:', email);
        // Clear the email input field
        emailInput.value = '';
    });

    // Checkbox for upcoming events alert
    const eventsCheckbox = document.createElement('input');
    eventsCheckbox.setAttribute('type', 'checkbox');
    eventsCheckbox.setAttribute('id', 'events-checkbox');
    const eventsLabel = document.createElement('label');
    eventsLabel.setAttribute('for', 'events-checkbox');
    eventsLabel.textContent = 'Alert me about upcoming events';

    // Link to donate or support CEGOPA
    const donateLink = document.createElement('a');
    donateLink.setAttribute('href', 'https://www.example.com/donate');
    donateLink.textContent = 'Donate or Support CEGOPA';

    // Append elements to CTA platform content
    ctaOverlayContent.appendChild(closeButton);
    ctaOverlayContent.appendChild(titleElement);
    ctaOverlayContent.appendChild(contentElement);
    ctaOverlayContent.appendChild(emailInput);
    ctaOverlayContent.appendChild(subscribeButton);
    ctaOverlayContent.appendChild(document.createElement('br')); // Line break
    ctaOverlayContent.appendChild(eventsCheckbox);
    ctaOverlayContent.appendChild(eventsLabel);
    ctaOverlayContent.appendChild(document.createElement('br')); // Line break
    ctaOverlayContent.appendChild(donateLink);
    
    // Append CTA platform content to overlay
    ctaOverlay.appendChild(ctaOverlayContent);
    
    // Append overlay to body
    document.body.appendChild(ctaOverlay);
}

// Event listener for the "Shall we proceed" button in the CTA box
document.getElementById('act-button').addEventListener('click', function() {
    createCTAPlatform();
});



function displayGreeting() {
    const helloButtons = document.querySelectorAll('.helloBtn');

    helloButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log("clicked and said hi")
            const greetingResponse = this.parentNode.querySelector('.greeting-response');
            const name = this.value;
            greetingResponse.style.display = "block";
            greetingResponse.textContent = `Hello from, ${name}! Nice to meet you.`;
            createAlertNotification(`Hello from, ${name}! Nice to meet you.`)
        });
    });
}

displayGreeting();


const understandCheckbox = document.getElementById('understand');
const simplifyCheckbox = document.getElementById('simplify');
const fordummiesDiv = document.getElementById('fordummies');
const forprosDiv = document.getElementById('forpros');

understandCheckbox.addEventListener('change', function() {
    if (this.checked) {
        fordummiesDiv.style.display = 'block';
        forprosDiv.style.display = 'none';
    } else {
        fordummiesDiv.style.display = 'none';
        forprosDiv.style.display = 'none';
    }
});

simplifyCheckbox.addEventListener('change', function() {
    if (this.checked) {
        fordummiesDiv.style.display = 'none';
        forprosDiv.style.display = 'block';
    } else {
        fordummiesDiv.style.display = 'none';
        forprosDiv.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Check if it's the user's first visit or a new session
    if (!sessionStorage.getItem('visited')) {
        // Scroll to the specified element
        const tourGuideElement = document.querySelector('.tour-guide');
        window.scrollTo({
            top: tourGuideElement.offsetTop,
            behavior: 'smooth'
        });

        // Animate the button borders after 3 seconds
        setTimeout(function() {
            document.getElementById('mytourist').classList.add('active');
        }, 3000);

        // Set the flag in sessionStorage to indicate that the user has visited the page
        sessionStorage.setItem('visited', 'true');
    }
});


 // Get all the "Back to top" buttons
 const backToTopButtons = document.querySelectorAll('.simplified-terms button');

 // Function to scroll to the top of the page
 function scrollToTop() {
     // Hide the .mytourist element
     document.querySelector('.mytourist').style.display = 'none';

     // Scroll to the top of the page
     window.scrollTo({
         top: 0,
         behavior: 'smooth' // Smooth scrolling
     });
 }

 // Add click event listener to each button
 backToTopButtons.forEach(button => {
     button.addEventListener('click', scrollToTop);
 });
