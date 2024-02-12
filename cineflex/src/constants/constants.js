export const CONSTANTS = {
    HEADER : {
        HOME : "Home",
        ALL_MOVIES : "All Movies",
        LOGIN : "Login",
        LOGOUT : "Logout",
        HOME_ROUTE : "/",
        ALL_MOVIES_ROUTE : "/all-movies",
        LOGIN_ROUTE : "/login",
        NOW_SHOWING_ROUTE : "/now-showing",
        NOW_SHOWING : "Now Showing",
        USER_GREETING : "Hi",
    },
    HOME : {
        HOME_BANNER_ALT : "sindel Image"
    },
    NUMBER_LOTTERY : {
        PARTICIPATE_PRIZE : "Your Mobile Number can win you exciting prizes",
        WIN_PRIZE : "Hurray! You won a free ticket to Blind date on Wednesday",
        LOSE_PRIZE : "Sorry :( Better Luck Next Time",
        INPUT_PLACEHOLDER : "Enter Mobile Number",
        SUBMIT_BUTTON_LABEL : "I'm Feeling Lucky",
        PHONE_NUMBER_REGEX : /^\d{10}$/,
    },
    TRAILER : {
        HEADING : "Trailers",
        SIGIN_IN_PREFIX : "You need to sign in to view Trailers ",
        SIGNI_IN : "Sign In Now",
        SINTEL_HEADING : "Sintel",
        SINTEL_DESCRIPTION : "Sintel tells the story of a friendship between a girl named Sintel, a baby dragon and the desperate lengths she will go to when that friendship is taken from her. Sintel is created by Blender in 2010 as a set project to demonstrate blender capabilities.",
        WATCHNOW_BUTTON_LABEL : "Watch Now",
    },
    ADWRAPPER : {
        START : "Advertisements in ",
        END : "Video Resumes in "
    },
    OTHERLANGUAGE : {
        LANGUAGE_REPRESENTATION : ['E','ह','த','മ','తె'],
        HEADING : "View in Other Languages",
    },
    ALLMOVIES : {
        LOAD_MORE_LABEL : "load more",
        LIKES_LABEL : "Likes",
        ACTORS_LABEL : "Actors",
        PAGE_SIZE : 6
    }
}
export const ALL_MOVIES_MOCK_DATA = [
    {
      "link": "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "movie": "Drishyam",
      "likes": "222",
      "id": "1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      "actors": [
        "Mohanlal",
        "Meena",
        "Ansiba",
        "Ester",
        "Siddique",
        "Asha"
      ]
    },
    {
      "link": "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
      "movie": "Dangal",
      "likes": "150",
      "id": "2",
      "description": "Dangal (Wrestling Competition) is a 2016 Indian Hindi-language biographical sports drama film directed by Nitesh Tiwari and produced by Aamir Khan and Kiran Rao under Aamir Khan Productions with Siddharth Roy Kapur under The Walt Disney Company India. The film stars Khan as Mahavir Singh Phogat, a pehlwani amateur wrestler who trains his daughters Geeta Phogat and Babita Kumari to become India's first world-class female wrestlers.[9] Fatima Sana Shaikh and Sanya Malhotra portray the adult versions of the two Phogat sisters, Zaira Wasim and Suhani Bhatnagar their younger versions, Sakshi Tanwar their mother, and Aparshakti Khurana adult version of their cousin, Ritvik Sahore his younger version, all of them except Tanwar and Sahore in their film debuts",
      "actors": [
        "Amir Khan",
        "Nitesh Tiwari",
        "Kiran Rao",
        "Ester",
        "Siddique"
      ]
    },
    {
      "link": "https://upload.wikimedia.org/wikipedia/en/e/ef/Prince_2022_poster.jpg",
      "movie": "Prince",
      "likes": "180",
      "id": "3",
      "description": "Prince is a 2022 Indian Tamil-language romantic comedy film written and directed by Anudeep KV which is produced by Suniel Narang, D. Suresh Babu, Pushkar Ram Mohan Rao under the banners of Sree Venkateswara Cinemas and Suresh Productions. The film stars Sivakarthikeyan, Maria Ryaboshapka and Sathyaraj. It revolves around a teacher from Pondicherry falling in love with a British teacher from his school, which attracts opposition from others in the town.",
      "actors": [
        "Siva karthikeyan",
        "Maria",
        "Sathyaraj",
        "Anudeep"
      ]
    },
    {
      "link": "https://upload.wikimedia.org/wikipedia/en/5/53/Master_2021_poster.jpg",
      "movie": "Master",
      "likes": "380",
      "id": "4",
      "description": "Master is a 2021 Indian Tamil-language action film[3] written and directed by Lokesh Kanagaraj. Produced by Xavier Britto, under his maiden production house XB Film Creators, the film stars Vijay and Vijay Sethupathi with Malavika Mohanan, Shanthanu Bhagyaraj, Andrea Jeremiah, Arjun Das and Gouri G. Kishan play other supporting roles. The film revolves around an alcoholic professor, J. D. (Vijay), who takes a three-month teaching job in a juvenile home and clashes with a ruthless gangster named Bhavani (Vijay Sethupathi), who uses the children as the scapegoat for his criminal activities.",
      "actors": [
        "Vijay",
        "Pooja Hegde",
        "Ansiba",
        "Ester",
        "Siddique",
        "Asha"
      ]
    },
    {
      "link": "https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg",
      "movie": "Vikram",
      "likes": "500",
      "id": "5",
      "description": "Vikram is a 2022 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International.[15] The film stars Kamal Haasan, Fahadh Faasil and Vijay Sethupathi. [16][17] Kalidas Jayaram,[18] Narain and Chemban Vinod Jose play supporting roles while Suriya makes a cameo appearance. The film's soundtrack and score are composed by Anirudh Ravichander, with cinematography handled by Girish Gangadharan and editing done by Philomin Raj. The film serves as the second installment in the Lokesh Cinematic Universe (LCU).[19] The plot follows a black-ops squad led by Agent Vikram, in which he aims to bring down a drug syndicate group called Vetti Vagaiyara, led by Sandhanam, who wants the missing drugs to be delivered to his boss Rolex.",
      "actors": [
        "Kamal Hasan",
        "Karthi",
        "Surya",
        "Fahad Fasil"
      ]
    },
    {
      "link": "https://upload.wikimedia.org/wikipedia/en/8/80/Sardar_2022_poster.jpg",
      "movie": "Sardar",
      "likes": "622",
      "id": "6",
      "description": "Sardar is an 2022 Indian Tamil-language spy action film written and directed by P. S. Mithran and produced by S. Lakshman Kumar under the banner of Prince Pictures.[4] The film stars Karthi in a dual role with Raashii Khanna, Rajisha Vijayan, Chunky Panday, Laila, Rithvik, Munishkanth, Yugi Sethu, Avinash and Balaji Sakthivel in prominent roles.[5][6] The film music composed by G. V. Prakash Kumar, with cinematography done by George C. Williams and film edited by Ruben. It marks Hindi film actor Chunky Panday's debut in Tamil cinema, and Laila's comeback to films after 16 years",
      "actors": [
        "Karthi",
        "Laila",
        "Rashi Khanna",
        "Ester"
      ]
    },
    {
      "link": "https://upload.wikimedia.org/wikipedia/en/3/3d/Beast_2022_Indian_poster.jpg",
      "movie": "Beast",
      "likes": "122",
      "id": "7",
      "description": "Beast is a 2022 Indian Tamil-language action film[5] written and directed by Nelson. The film stars Vijay, Pooja Hegde and Selvaraghavan. In the film, Veera Raghavan, an ex-RAW agent, goes on a crusade to rescue people held hostage in a shopping mall by terrorists.",
      "actors": [
        "Vijay",
        "Pooja Hegde",
        "Ansiba",
        "Ester",
        "Siddique"
      ]
    },
    {
      "link": "https://upload.wikimedia.org/wikipedia/en/1/1d/Sita_Ramam.jpg",
      "movie": "Sita Ramam",
      "likes": "1222",
      "id": "8",
      "description": "Sita Ramam is a 2022 Indian Telugu-language period romance film written and directed by Hanu Raghavapudi. Produced by Vyjayanthi Movies and Swapna Cinema, the film stars Mrunal Thakur (in her Telugu debut) and Dulquer Salmaan as the titular protagonists with Rashmika Mandanna and Sumanth in the supporting roles. Set in 1964, Lieutenant Ram, an orphaned army officer serving at the Kashmir border, gets anonymous love letters from Sita Mahalakshmi, after which Ram is on a mission to find Sita and propose his love.",
      "actors": [
        "Dulquer Salman",
        "Rashmika",
        "Sumanth",
        "Mrunal",
        "Prakash Raj",
        "Asha"
      ]
    },
    {
      "link": "https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg",
      "movie": "Pushpa",
      "likes": "14000",
      "id": "9",
      "description": "Pushpa: The Rise – Part 01 is a 2021 Indian Telugu-language action drama film[16] written and directed by Sukumar. It stars Allu Arjun as the titular character alongside Fahadh Faasil (his Telugu debut), and Rashmika Mandanna while Jagadeesh Prathap Bandari, Sunil, Rao Ramesh, Dhananjaya, Anasuya Bharadwaj, Ajay and Ajay Ghosh play supporting roles. It is produced by Mythri Movie Makers in association with Muttamsetty Media. The first of two cinematic parts, the film depicts the rise of a low wage laborer in the smuggling syndicate of red sandalwood, a rare wood that grows only in the Seshachalam Hills of Andhra Pradesh state.",
      "actors": [
        "Allu Arjun",
        "Rashmika",
        "Sunil",
        "Anasuya",
        "Siddique",
        "Asha"
      ]
    },
    {
      "link": "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "movie": "Drishyam",
      "likes": "222",
      "id": "10",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      "actors": [
        "Mohanlal",
        "Meena",
        "Ansiba",
        "Ester",
        "Siddique",
        "Asha"
      ]
    },
    {
      "link": "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "movie": "Drishyam",
      "likes": "222",
      "id": "11",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      "actors": [
        "Mohanlal",
        "Meena",
        "Ansiba",
        "Ester",
        "Siddique",
        "Asha"
      ]
    },
    {
      "link": "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "movie": "Drishyam",
      "likes": "222",
      "id": "12",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      "actors": [
        "Mohanlal",
        "Meena",
        "Ansiba",
        "Ester",
        "Siddique",
        "Asha"
      ]
    },
    {
      "link": "https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "movie": "Drishyam",
      "likes": "222",
      "id": "13",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      "actors": [
        "Mohanlal",
        "Meena",
        "Ansiba",
        "Ester",
        "Siddique",
        "Asha"
      ]
    }
]