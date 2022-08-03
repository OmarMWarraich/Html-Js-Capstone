const toggle = document.querySelector('.toggle_icon'); 
const menu = document.querySelector('.menu');
const main = document.querySelector('.main-content');
const program = document.querySelector('.program');
const speakerDetails = document.getElementById('featured_speakers');
const featured_speakers = document.querySelector('.featured_speakers');
const partners = document.querySelector('.partners_flex');

let i = 0;

toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    main.style.display = 'none';
    menu.style.display = 'block';
    program.style.display = 'none';
    featured_speakers.style.display = 'none';
    partners.style.display = 'none';
    i += 1;
    if (i % 2 === 0) {
        toggle.classList.remove('open');
        menu.style.display = 'none';
        main.style.display = 'flex';
        program.style.display = 'flex';
        featured_speakers.style.display = 'flex';
        partners.style.display = 'flex';
    }
});

const speakers = [
    {
        img: './assets/speakers/andrew_ng.jpg',
        name: 'Andrew Ng',
        position: 'Co-Founder of Coursera, Stanford CS adjunct faculty.',
        quote: 'Coursera is a platform for learning. It is a place where you can learn from the best, and where you can share what you know.'
    },
    {
        img: './assets/speakers/JordanFried.jpg',
        name: 'Jordan Fried',
        position: 'Web3 and DevOps Specialist',
        quote: 'Focus on what you can control and never let a bear market be your excuse.'
    },
    {
        img: './assets/speakers/josh_schachter.jpeg',
        name: 'Josh Schachter',
        position: 'CEO Update AI',
        quote: 'Building tools to empower Customer Success teams to build great customer relationships'
    },
    {
        img: './assets/speakers/LexFridman.jpg',
        name: 'Lex Fridman',
        position: 'Host of Lex Fridman Podcast. Research Scientist at MIT.',
        quote: 'I believe in the power of conversation (between leaders) to help avoid World War III. This requires of our leaders: strength of character, empathy, emotional intelligence, and deep historical knowledge of the nations involved.'
    },
    {
        img: './assets/speakers/nader1.png',
        name: 'Nader dabit',
        position: 'Founder developer_dao',  
        quote: 'We need algorithms which reward naunced ideas and discussions, not outrage.'
    },
    {
        img: './assets/speakers/Ben_Haynes.jpg',
        name: 'Ben Haynes',
        position: 'CEO and Co-Founder of Directus',
        quote: 'The whole is greater than the sum of its parts. When bright minds from every department can contribute their ideas and expertise to an organization’s technical innovations, there’s no limit to what can be created.'
    }    
]

const speakersData = () => {
  speakers.forEach((speaker) => {
    speakerDetails.innerHTML +=    `<div class="speaker-card">
                                        <div class="image-card">
                                            <img src="${speaker.img}" alt="${speaker.name}'s Portrait" />
                                        </div>
                                        <div class="detail-card">
                                            <h3>${speaker.name}</h3>
                                            <h4>${speaker.position}</h4>
                                            <p class="quotes">
                                                <i><a href="#">${speaker.quote}</a></i>
                                            </p>
                                        </div>
                                    </div>`;
                                });
                            }

window.onload = speakersData();




