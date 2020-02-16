document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() { onScrollInit($('.waypoint')) }, 100);    
});

//change color of background when scroll

window.onscroll = (e) => {
    const scroll = window.scrollY;

    const header = document.querySelector('#nav-principal')

    if(scroll > 700) {
        header.classList.add('bgcolor');
    }

    else{
        header.classList.remove('bgcolor');
    }
}

   // SCROLL ANIMATIONS
   function onScrollInit( items, elemTrigger ) {

    var offset = $(window).height() / 1.6
   
    items.each( function() {
      var elem = $(this),
          animationClass = elem.attr('data-animation'),
          animationDelay = elem.attr('data-delay');
    
          elem.css({
            '-webkit-animation-delay':  animationDelay,
            '-moz-animation-delay':     animationDelay,
            'animation-delay':          animationDelay
          });
  
          var trigger = (elemTrigger) ? trigger : elem;
  
          trigger.waypoint(function() {
            elem.addClass('animated').addClass(animationClass);
            },{
                triggerOnce: true,
                offset: offset
          });
    });
  }


/*
$(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function() {
        $('.wild-detail .animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeInDown');
            }
        });

        $('#wild-carousel .animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeInDown');
            }
        });

        $('#wild-card .animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeInLeft');
            }
        });
        $('#testimonial-details .animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeInRight');
            }
        });

        $('#contact .animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeInDown');
            }
        });
    });
});*/

$(function() {

    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#people').val('');
                $('#phone').val('');
                $('#date').val('');
                $('#customRadio1').val('');
                $('#customRadio2').val('');
                $('#comments').val('');

            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });

    });

});


    var arrLang = {
        "en-gb": {
            "HOMEPAGE": "Home",
            "ABOUT": "About Us",
            "FREETOURS": "FreeTours",
	    "MORETOURS": "Tours & Treks",
            "REVIEWS": "Reviews",
            "CONTACTNAV": "Contact",
	    "FAQS": "FAQ'S",

	    
            /*"HOME_H2": "By Locals",
            "HOME_BUTTON1": "Book now!",*/

	    "home_h4_1": "Best Local experience in Town",
	    "home_p1": "Join us and have a valuable moment",
		

	    "T-SHRIT_1": "Find us with our ORANGE T-SHIRT  and logo",
	    "T-SHRIT_2": "Don’t get confused by others groups.",
	    "TITLE_ABOUT": "WHY CHOOSE US?",
	    "P1_ABOUT": "Free walking Tours Cusco is operated by a 100% local company, we have been working in Cusco for 3 years, our local guides are accredited professionals, each tour is focused on history, traditions and local culture.",
            "P2_ABOUT": "The best way to discover a WONDERFUL city like Cusco is walking, and there’s no better, that doing it accompanied by one of our local guides. We make your time a valuable moment, which you will not forget. We have 3 daily departure times: 10:00 am, 12:30 pm and 03:00 pm. Each group is of maximum 15 people. We have separate groups, in both English and Spanish.",
	    "P3_ABOUT": "IMPORTANT: DO NOT get confused by other people who claim to be local guides and you will waste your time with false or google information. Our company is the only local company authorized by the Peruvian government. Any doubts? You can check our real comments from our visitors on: ",
	    "FOOTER_ABOUT": "Casio Valdéz - General Manager",

            /*"CAROUSEL_H2": "About us",
            "CAROUSEL_IMG_1": "The best Free Walking Tour in Cusco, great English",
            "CAROUSEL_IMG_2": "With Local Guides born and raised here",
            "CAROUSEL_IMG_3": "Cultural Focused Tours",
            "CAROUSEL_IMG_4": "History, Culture, Traditions and Lifestyle",
            "CAROUSEL_IMG_5": "Free Pisco Sour Tasting",
            "CAROUSEL_IMG_6": "Free Exotic Fruit Tasting",
            "CAROUSEL_IMG_7": "Alpaca wool explanations",
            "CAROUSEL_IMG_8": "You want to know Cusco as/with a local?, come and join us!",*/

            "CARD_H2" : "Our Walking Tours",
            "CARD_H5_1": "Walking Tour 10:00",
            "CARD_P1": "Meeting point: Plazoleta Espinar, In front of \"La Merced\" Church",
            "LI_1": "Brief Historical Review",
            "LI_2": "Oldest High School of the city",
            "LI_3": "San Pedro Market: Fruit tasting",
            "LI_4": "Main Square",
            "LI_5": "Temple of the choosen women: Accllawuasi",
            "LI_6": "Alpaca Wool Explanation",
            "LI_7": "Qoricancha Sun Temple",
            "LI_8": "Inca Roca Palace",
            "LI_9": "San Blas Neighborhood",
            "CARD_H5_2": "Walking Tour 12:30",
            "CARD_P2": "Meeting point: Plazoleta Espinar, In front of \"La Merced\" Church",
            "LI_10": "Brief Historical Review",
            "LI_11": "Main Square",
            "LI_12": "Temple of the choosen women: Accllawuasi",
            "LI_13": "Alpaca Wool Explanation",
            "LI_14": "Qoricancha Sun Temple",
            "LI_15": "Pachacutec Palace: Qusicancha",
            "LI_16": "Inca Roca Palace",
            "LI_17": "San Blas Neighborhood: View Point, Art galleries",
            "CARD_BUTTON": "Book now!",
            "CARD_H5_3": "Walking Tour 15:00",
            "CARD_P3": "Meeting point: Plazoleta Espinar, In front of \"La Merced\" Church",
            "LI_18": "Brief Historical Review",
            "LI_19": "Main Square",
            "LI_20": "Temple of the choosen women: Accllawuasi",
            "LI_21": "Alpaca & Llama's Selfie",
            "LI_22": "Pachacutec Palace: Qusicancha",
            "LI_23": "Inca Roca Palace: 12 Angles-Stone",
            "LI_24": "Alpaca Wool Explanation",
            "LI_25": "San Blas Neighborhood: Plazoleta de San blas",
            "LI_26": "Free Pisco Sour Tasting",
            "MODAL_BUTTON": "Private Walking Tours",
            "exampleModalLabel": "Departures from your hotel",
            "MODAL_P1": "Our private walks are focused in history which last 2hrs only. This option is good for those who wants to uncover the city with a local guide (FLEXIBLE SCHEDULES). Please contact us by clicking in our WhatsApp",
            "MODAL_P2": "icon,  or by filling out the ",
            "MODAL_LINK" : "Contact",
            "MODAL_P3": " form",
            "CARD_ALERT": "Optional for Walking Tour 12h30: Bus-ride to Sacsayhuamán WITH A MINIMUN OF 20 PEOPLE.",
            
            "HUMANTAY": "Humantay Lagoon",
 	    "HUMANTAY_P": "Enjoy with us this great adventure full of breathtaking landscapes; this is an unmissable route that is gradually becoming very popular by all visitors to Cusco.",
	    "SALKANTAY": "Salkantay - Machu Picchu 5 Days and 4 Nights",
	    "SALKANTAY_P": "An economical alternative to get to Machu Picchu, the Salkantay Machu Picchu route, is considered one of the best by NatGeo, and the level of difficulty is similar to that of the Classic Inca Trail.",
	    "CHOQUEQUIRAO": "Choquequirao Trek 5 days and 4 nights",
	    "CHOQUEQUIRAO_P": "Considered by many tourists who visited it as the other Machu Picchu and sometimes many tourists dare to say it is better than Machu Picchu.",
	    "MARAS_TOUR": "Maras-Moray Tour",
	    "MARAS_TOUR_P": "Moray is an archaeological site that is located near Cusco. At first glance it looks like a kind of amphitheater, made up of several circular platforms, located at 3,500 meters above sea level.",
	    "VINICUNCA":"Vinicunca (Rainbow Mountains)",
	    "VINICUNCA_P":"It is one of the new and best attractions of Peru. Located at 100 km far from the city of Cusco, on an altitudinal summit, at 5,200 meters above sea level (m.s.n.m.).",
	    "SACRED_VALLEY": "Sacred Valley Tour",
	    "SACRED_VALLEY_P": "Discover the mystery that surrounds one of the most important routes of the Andean culture.",

            "DETAILS_H2": "Details",
            "DETAILS_ALERT_1": "Departures: From Monday to Sunday",
            "SCHEDULE": "Schedules",
            "DET_LI_1": "10h00 - Walking Tour 1",
            "DET_LI_2": "12h30 - Walking Tour 2",
            "DET_LI_3": "15h00 - Walking Tour 3",
            "MEETING_POINT": "Meeting Point",
            "DETAILS_P1": "Plazoleta Espinar , in front of \"La Merced\" Church",
            "DETAILS_BUTTON_1": "Check out the map!",
            "DURATION": "Duration",
            "DETAILS_P2": "Around 2h - 2.5h",
            "DETAILS_BUTTON_2": "Join us!",
            "PRICE": "Price",
            "DETAILS_P3": "Based on DECENT Tips, our tour guides don´t have a fixed salary!",
            "BRING": "What to bring?",
            "DET_LI_4": "Sunglasses & Water",
            "DET_LI_5": "Hat & Jumper",
            "DET_LI_6": "From October to March bring a Poncho (Rainy Season)",
            "DETAILS_BUTTON_3": "Don't forget!",
            "LANGUAGE": "Language",
            "DETAILS_P4": "Tours in English and Spanish everyday in every schedule",
            "DETAILS_BUTTON_4": "Come with us!",
            "DETAILS_ALERT_2": "Warning: There are people who claim to be our workers. We don't have staff in different squares or streets. Don't get confused!",

            "REVIEWS_H2": "Reviews",
            "REVIEWS_H5_1": "Check out more Reviews",
            "REVIEWS_H5_2": "Badges",
            "REVIEWS_H5_3": "Give us a Like",

            "CONTACT_H2_1": "Meeting Point",
            "yourForm": "Contact",
            "CONTACT_H5_1": "Choose your Schedule",
            "CONTACT_LABEL_1": "First group at 10:00 am, every day",
            "CONTACT_LABEL_2": "Second group at 12:30 pm, every day",
            "CONTACT_LABEL_3": "Third group at 3:00 pm, every day",
            "CONTACT_H5_2": "Choose a language",
            "CONTACT_LABEL_4": "English",
            "CONTACT_LABEL_5": "Spanish",
            "submit": "Send",
            "MORE_INFO": "More information?",
            "ADDRESS": "Marquez 219 Street, 2nd Floor-Office 206.",

	    "Q1": "1.- Do I require a reservation for the tour?",
	    "A1": "To guarantee your place, use the online booking form, which can be found at the CONTACT section.",
	    "Q2": "2.- What time does the tour start?",
	    "A2": "Show up 5 minutes before the start time:",
	    "A2_1": "Morning tour starts at 10h:00 daily.",
            "A2_2": "Midday tour starts at 12h:30 daily.",
            "A2_3": "Afternoon tour starts 15h00 daily.",
	    "Q3": "3.- How long does the tour take?",
	    "A3": "The tour will generally last 2h - 2.5h.",
	    "Q4": "4.- Where is the meeting point?",
	    "A4": "The meeting point is located at Plazoleta Espinar (1 block away comming from Main Square and 3 blocks away comming from San Pedro Market), in front of \"La Merced\" Church. Look for the friendly team in the ‘WildFreeWalkingTours’ branded, ORANGES t-shirts, don’t get confused by others.",
	    "Q5": "5.- What languages are the tour offered in? ",
	    "A5": "The tour is offered in English and Spanish . DO IT WITH THE PROS.",
	    "Q6": "6.- Will there be any entry fees or monetary charges whilst on the tour?",
	    "A6": "There are no extra costs whilst on the tour whatsoever. You may however, bring some spending money as we will pass by many artisanal stores and eateries on the way and also sometimes you feel like taking some pictures with the locals and their cute llamas and alpacas as well as you might donate some coins to some musicians when they performed their music.",
	    "Q7": "7.- Are there a maximum number of people allowed to join the tour?",
	    "A7": "Yes, 15 people maximum, we use amplification system for voice projection for better understanding.",
	    "Q8": "8.- Do I need to bring anything with me?",
	    "A8": "Cusco has very unpredictable weather, therefore we suggest that you equip yourselves with the following:",
	    "A8_1": "Sun Lotion",
	    "A8_2": "Rain Jacket / Umbrella",
	    "A8_3": "Drinking Water",
	    "A8_4": "Coins (for photographs with locals & animals)",
            "A8_5": "Camera / Video Camera",
	    "A8_6": "Wear Trainers / Walking Shoes",
	    "A8_7": "Sunglasses",
	    "Q9": "9.- Is the tour really free?",
	    "A9": "WildFreeWalkingTours does not charge a fee for its tours. However, we do ask that if you enjoy your time with us and have a valuable and fulfilling experience, that you consider to leave us a tip, it's important to know as some people we had before , they say it's free and walk away without even saying thanks, we know that in many countries tipping is not custom since the salaries are very high and allows people to go on holidays and get to see the world, however this is our job and we don't work for the government or are financially supported by other companies, we only get your TIPS. so thanks a lot. we make sure all our team is happy and willing to do the future tours.",
	    "Q10": "10.- Are any of the other free walking tours in Cuzco related to WildFreeWalkingTours?",
	    "A10": "No. We operate independently from all other walking tours in Cuzco. For truly the best experience be sure to look for the friendly team in the ‘WildFreeWalkingTours’ branded, ORANGE t-shirts and meet us at Plazoleta Espinar (1 block away comming from Main Square and 3 blocks away coming from San Pedro Market), in front of \"La Merced\" Church.",

        "first_walking" : "Walking Tour 10:00 ",
	    "tours_subtitle": "by Wild Free Walking Tours - English & Spanish",
	    "paragraph_first_walking" : "Our Walking Tours are historical and cultural focused, our licensed guides are prepared to give you important information and facts about our ancestral city, this tour is a great way to start your day in Cusco.",
	    "book_tour": "Book",
	    "Itinerary": "Itinerary",

	    "second_walking" : "Walking Tour 12:30 ",
	    "paragraph_second_walking" : "If you missed our first walking tour, don't worry, all our tours are focused in history, traditions and culture. There are some variations in the places we visit, for more information you should check the itinerary for each schedule.",

	    "third_walking" : "Walking Tour 15:00 ",
	    "paragraph_third_walking" : "We will show you the most important and historical places of the ancient capital city of the Incas. A tour, full of history, culture, and traditions.",
	    
	    "optional_activities" : "Optional Activities",
	    "extra_activities": "In each tour we have some optional or extra activities like Alpaca Wool Explanation, fruit tasting in San Pedro Market, Pisco Tasting in a local bar. Check the itinerary to see which of these activities are in your chosen tour.",
	


        "tour_Q1" : "1.- Brief Historical Review",
	    "tour_A1" : "A general review about the ancient city, really important to understand later facts.",
	    "tour_Q2" : "2.- Oldest High School of the city",
	    "tour_A2" : "We will visit the \"Colegio Nacional de Ciencias y Artes\", founded in 1825.",
	    "tour_Q3" : "3.- San Pedro Market: Fruit tasting",
	    "tour_A3" : "The market stands 8 minutes away from the mainsquare, it's a must place to visit, in order to experience local life.",
	    "tour_Q4" : "4.- Main Square",
	    "tour_A4" : "Nice wide stone pathways and colorful gardens, it's the heart of the colonial center.",
	    "tour_Q5" : "5.- Temple of the choosen women: Accllawuasi",
	    "tour_A5" : "Acllahuasi is a Quechua word that means house of the chosen women. The Acllas were the women with th best cultural preparation in the empire.",
	    "tour_Q6" : "6.- Alpaca Wool Explanation",
	    "tour_A6" : "One of our additional or extra activities. We'll learn how to distinguish between differents quality of alpaca textil and how to actually recognize clothes made of alpaca wool.",
	    "tour_Q7" : "7.- Qoricancha Sun Temple",
	    "tour_A7" : "It can be known as Coricancha, Qoricancha, Qorikancha or Koricancha and it was one of the most important and most sacred temples of the Inca empire. Its ruins are located in Santo Domingo Plaza in Cusco.",
	    "tour_Q8" : "8.- Inca Roca Palace",
	    "tour_A8" : "\"Inca Roca\", was the sixth Sapa Inca of the Empire of Cusco (beginning around CE 1350) and the first of the Hanan (\"upper\") dynasty.",
	    "tour_Q9" : "9.- San Blas Neighborhood",
        "tour_A9" : "It's an area quite different to the rest of Cusco. It's better known as the artisan's quarter, it's worth it to take the walking up.",
        
                    
	    "tour_Q10" : "1.- Brief Historical Review",
	    "tour_A10" : "A general review about the ancient city, really important to understand later facts.",
	    "tour_Q11" : "2.- Main Square",
	    "tour_A11" : "Nice wide stone pathways and colorful gardens, it's the heart of the colonial center.",
	    "tour_Q12" : "3.- Temple of the choosen women: Accllawuasi",
        "tour_A12" : "Acllahuasi is a Quechua word that means house of the chosen women. The Acllas were the women with th best cultural preparation in the empire.",
	    "tour_Q13" : "4.- Alpaca Wool Explanation",
	    "tour_A13" : "One of our additional or extra activities. We'll learn how to distinguish between differents quality of alpaca textil and how to actually recognize clothes made of alpaca wool.",
	    "tour_Q14" : "5.- Qoricancha Sun Temple",
	    "tour_A14" : "It can be known as Coricancha, Qoricancha, Qorikancha or Koricancha and it was one of the most important and most sacred temples of the Inca empire. Its ruins are located in Santo Domingo Plaza in Cusco.",
	    "tour_Q15" : "6.- Pachacutec Palace (Qasana)",
	    "tour_A15" : "Qasana is a Quechua word. It means \"Frost Susceptibility place\" or \"where the ice falls\". In Inca´s time this palace was extended from the bank of the river Saphy to the palace Qora Qora.",
	    "tour_Q16" : "7.- Inca Roca Palace",
	    "tour_A16" : "\"Inca Roca\", was the sixth Sapa Inca of the Empire of Cusco (beginning around CE 1350) and the first of the Hanan (\"upper\") dynasty.",
	    "tour_Q17" : "8.- San Blas Neighborhood",
        "tour_A17" : "It's an area quite different to the rest of Cusco. It's better known as the artisan's quarter, it's worth it to take the walking up.",
        
        "tour_Q18" : "1.- Brief Historical Review",
	    "tour_A18" : "A general review about the ancient city, really important to understand later facts.",
	    "tour_Q19" : "2.- Main Square",
	    "tour_A19" : "Nice wide stone pathways and colorful gardens, it's the heart of the colonial center.",
	    "tour_Q20" : "3.- Temple of the choosen women: Accllawuasi",
        "tour_A20" : "Acllahuasi is a Quechua word that means house of the chosen women. The Acllas were the women with th best cultural preparation in the empire.",
	    "tour_Q21" : "4.- Alpaca & Llama's Selfie.",
	    "tour_A21" : "A quite hidden place where you can take some photos with those nice lovely animals.",
	    "tour_Q22" : "5.- Pachacutec Palace (Qasana)",
	    "tour_A22" : "Qasana is a Quechua word. It means \"Frost Susceptibility place\" or \"where the ice falls\". In Inca´s time this palace was extended from the bank of the river Saphy to the palace Qora Qora.",
	    "tour_Q23" : "6.- Inca Roca Palace",
	    "tour_A23" : "\"Inca Roca\", was the sixth Sapa Inca of the Empire of Cusco (beginning around CE 1350) and the first of the Hanan (\"upper\") dynasty.",
	    "tour_Q24" : "7.- Alpaca Wool Explanation",
	    "tour_A24" : "One of our additional or extra activities. We'll learn how to distinguish between differents quality of alpaca textil and how to actually recognize clothes made of alpaca wool.",
	    "tour_Q25" : "8.- San Blas Neighborhood",
        "tour_A25" : "It's an area quite different to the rest of Cusco. It's better known as the artisan's quarter, it's worth it to take the walking up.",
        "tour_Q26" : "9.- Pisco Sour Tasting",
	    "tour_A26" : "This is a additional activity to finish this tour and is mainly use to give our final words and thanks.",


	    "T1_FOOTER": "MORE TOURS IN CUSCO...",
	    "T2_FOOTER": "CERTIFICATIONS",
	    "T3_FOOTER": "SOCIAL MEDIA",
	    "P_FOOTER": "Hey Dear Travellers! Thanks for your preference! You can check more interesting tours and treks at: "
        },
        "es": {
            "HOMEPAGE": "Inicio",
            "ABOUT": "Nosotros",
            "FREETOURS": "FreeTours",
	    "MORETOURS": "Tours & Treks",
            "REVIEWS": "Reseñas",
            "CONTACTNAV": "Contacto",
	    "FAQS": "Preguntas",
	    

            /*"HOME_H2": "Por Locales",
            "HOME_BUTTON1": "Reserva ya!",*/
	    
	    "home_h4_1": "La mejor experiencia local en la ciudad",
	    "home_p1": "Unete y pasa un momento inolvidable",
	    "home_h4_2": "Encuéntranos en:",
	    "home_p2": "Plazoleta Espinar, Frente a la Iglesia \"La Merced\"",

	    "T-SHRIT_1": "Buscanos con nuestro polo y logo",
	    "T-SHRIT_2": "No se confunda con otros grupos.",
	    "TITLE_ABOUT": "POR QUÉ ELEGIRNOS?",
	    "P1_ABOUT": "Free Walking Tours Cusco es operado por una empresa 100% local, estamos trabajando en Cusco desde hace 3 años, nuestros guías locales son profesionales acreditados, cada recorrido está enfocado en historia, tradiciones y cultura local.",
            "P2_ABOUT": "Una ciudad tan MARAVILLOSA como Cusco se conoce mejor caminando, y que mejor, acompañado de un guía local. Hacemos de su tiempo un valioso momento, que no olvidará. Tenemos 3 horarios de salida diaria : 10:00am,12:30pm y 03:00pm. Cada grupo es de máximo 15 personas. Tenemos grupos separados en inglés y español.",
	    "P3_ABOUT": "IMPORTANTE : NO se confunda con otras personas que dicen ser guías locales y perderá su tiempo con información falsa o googleada. Nuestra empresa es la única empresa local autorizada por el gobierno peruano. Tiene dudas? Puede ver nuestros comentarios reales de nuestros visitantes en : ",
	    "FOOTER_ABOUT": "Casio Valdéz - Gerente General",

            "CAROUSEL_H2": "Nosotros",
            "CAROUSEL_IMG_1": "El mejor Tour a pie en Cusco",
            "CAROUSEL_IMG_2": "Con guías locales nacidos en Cusco",
            "CAROUSEL_IMG_3": "Tours enfocados en lo cultural",
            "CAROUSEL_IMG_4": "Historia, Cultura, tradiciones y estilo de vida",
            "CAROUSEL_IMG_5": "Degustación gratuita de Pisco Sour",
            "CAROUSEL_IMG_6": "Degustación gratiuta de frutas exóticas",
            "CAROUSEL_IMG_7": "Explicación sobre lana de Alpaca",
            "CAROUSEL_IMG_8": "Quieres conocer Cusco con/como un local?, Ven y Únete",

            "CARD_H2" : "Nuestros Tours a pie",
            "CARD_H5_1": "Tour a pie 10:00",
            "CARD_P1": "Punto de Encuentro: Plazoleta Espinar, Frente a la Iglesia \"La Merced\"",
            "LI_1": "Breve Reseña Histórica",
            "LI_2": "La más antigua escuela de la ciudad",
            "LI_3": "Mercado San Pedro: Degustación de frutas",
            "LI_4": "Plaza de armas",
            "LI_5": "Templo de la mujer escogida: Accllawuasi",
            "LI_6": "Explicación sobre lana de Alpaca",
            "LI_7": "Qoricancha Templo del sol",
            "LI_8": "Palacio Inca Roca",
            "LI_9": "Barrio de San Blas",
            "CARD_H5_2": "Tour a pie 12:30",
            "CARD_P2": "Punto de Encuentro: Plazoleta Espinar, Frente a la Iglesia \"La Merced\"",
            "LI_10": "Breve Reseña Histórica",
            "LI_11": "Plaza de armas",
            "LI_12": "Templo de la mujer escogida: Accllawuasi",
            "LI_13": "Explicación sobre lana de Alpaca",
            "LI_14": "Qoricancha Templo del sol",
            "LI_15": "Palacio Pachacutec: Qusicancha",
            "LI_16": "Palacio Inca Roca",
            "LI_17": "Barrio de San Blas: Mirador, Galerías de arte",
            "CARD_BUTTON": "Reserva ya!",
            "CARD_H5_3": "Tour a Pie 15:00",
            "CARD_P3": "Punto de Encuentro: Plazoleta Espinar, Frente a la Iglesia \"La Merced\"",
            "LI_18": "Breve Reseña Histórica",
            "LI_19": "Plaza de armas",
            "LI_20": "Templo de la mujer escogida: Accllawuasi",
            "LI_21": "Selfie con Alpacas & Llamas",
            "LI_22": "Palacio Pachacutec: Qusicancha",
            "LI_23": "Palacio Inca Roca: Piedra de 12 ángulos",
            "LI_24": "Explicación sobre lana de Alpaca",
            "LI_25": "Barrio de San Blas: Plazoleta de San blas",
            "LI_26": "Degustación gratiuta de Pisco Sour",
            "MODAL_BUTTON": "Tours a Pie Privados",
            "exampleModalLabel": "Salidas desde tu hotel",
            "MODAL_P1": "Nuestros tours privados están enfocados en historia y tienen 2hrs de duración. Esta opción es excelente para quienes quieren descubrir la ciudad con un guía local. Por favor contáctanos haciendo click en el ícono de WhatsApp",
            "MODAL_P2": ", o llenando el formulario de ",
            "MODAL_LINK" : "Contacto",
            "MODAL_P3": "del sitio web",
            "CARD_ALERT": "Opcional para Tour a pie 12h30: Bus a Sacsayhuamán CON UN MINIMO DE 20 PERSONAS.",
	    
	    "HUMANTAY": "Laguna Humantay",
 	    "HUMANTAY_P": "Disfruta con nosotros esta gran aventura llena de paisajes impresionantes; esta es una ruta imperdible que gradualmente se está volviendo muy popular entre todos los visitantes del Cusco.",
	    "SALKANTAY": "Salkantay - Machu Picchu 4 días 5 Noches",
	    "SALKANTAY_P": "Una alternativa económica para llegar a Machu Picchu, la ruta de Salkantay Machu Picchu, es considerado una de las mejores por NatGeo, y el nivel de dificultad es similar a la del Camino Inca Clásico.",
	    "CHOQUEQUIRAO": "Choquequirao Trek 5 Días y 4 noches",
	    "CHOQUEQUIRAO_P": "Considerado por muchos turistas que lo visitaron como el otro Machu Picchu y a veces muchos turistas se atreven a decir que es Mejor que Machu Picchu.",
	    "MARAS_TOUR": "Tour Maras-Moray",
	    "MARAS_TOUR_P": "Moray es un sitio arqueológico que se encuentra cerca del Cusco. A primera vista pareciera una especie de anfiteatro, conformado de varios andenes circulares, situado a 3.500 msnm.", 
            "VINICUNCA":"Vinicunca (Montaña de 7 colores)",
	    "VINICUNCA_P":"Es una de las nuevas y mejores atracciones del Perú. Ubicada a más de 100 kilómetros de la ciudad del Cusco, en una cumbre altitudinal situada a 5,200 metros sobre el nivel del mar (m.s.n.m.)",
	    "SACRED_VALLEY": "Tour Valle sagrado",
	    "SACRED_VALLEY_P": "Descubre el misterio que rodea una de las rutas más importantes de la cultura andina.",

            "DETAILS_H2": "Detalles",
            "DETAILS_ALERT_1": "Salidas: De Lunes a Domingo",
            "SCHEDULE": "Horarios",
            "DET_LI_1": "10h00 - Tour a pie 1",
            "DET_LI_2": "12h30 - Tour a pie 2",
            "DET_LI_3": "15h00 - Tour a pie 3",
            "MEETING_POINT": "Punto de Encuentro",
            "DETAILS_P1": "Plazoleta Espinar , Frente a la Iglesia \"La Merced\"",
            "DETAILS_BUTTON_1": "Revisa el mapa!",
            "DURATION": "Duración",
            "DETAILS_P2": "Alrededor de 2h - 2.5h",
            "DETAILS_BUTTON_2": "Únete!",
            "PRICE": "Precio",
            "DETAILS_P3": "Basado en Tips DECENTES, nuestros guías no tienen un salario fijo.",
            "BRING": "Qué traer contigo?",
            "DET_LI_4": "Gafas de sol & Agua<",
            "DET_LI_5": "Sombrero & Chaqueta",
            "DET_LI_6": "Desde Octubre a Marzo, traer un poncho. (Temporada de lluvia) ",
            "DETAILS_BUTTON_3": "No lo Olvides!",
            "LANGUAGE": "Idioma",
            "DETAILS_P4": "Tours en Español e Inglés todos los días en todo horario",
            "DETAILS_BUTTON_4": "Únete!",
            "DETAILS_ALERT_2": "Advertencia: Hay personas que dicen ser nuestros trabajadores. No tenemos personal en diferentes plazas o calles. Que no te confundan!",

            "REVIEWS_H2": "Reseñas",
            "REVIEWS_H5_1": "Revisa nuestros comentarios",
            "REVIEWS_H5_2": "Medallas",
            "REVIEWS_H5_3": "Dame un Like",

            "CONTACT_H2_1": "Punto de Encuentro",
            "yourForm": "Contacto",
            "CONTACT_H5_1": "Elige tu horario",
            "CONTACT_LABEL_1": "Primer grupo a las 10:00 am",
            "CONTACT_LABEL_2": "Segundo grupo a las 12:30 pm",
            "CONTACT_LABEL_3": "Tercer grupo a las at 3:00 pm",
            "CONTACT_H5_2": "Elige un idioma",
            "CONTACT_LABEL_4": "Inglés",
            "CONTACT_LABEL_5": "Español",
            "submit": "Send",
            "MORE_INFO": "Más Información?",
            "ADDRESS": "Calle Marquez 219, 2do Piso-Oficina 206.",

	    "Q1": "1.- ¿Necesito una reserva para el tour?",
	    "A1": "Para garantizar su lugar, utilice el formulario de reserva en línea, que se puede encontrar en la sección CONTACTO.",
	    "Q2": "2.- ¿A qué hora comienza el recorrido?",
	    "A2": "Recomendamos llegar 5 minutos antes de la hora de inicio:",
	    "A2_1": "El tour de la mañana comienza a las 10h: 00 todos los días.",
            "A2_2": "El tour del mediodía comienza a las 12h: 30 todos los días.",
            "A2_3": "El tour de la tarde comienza a las 15h00 todos los días.",
	    "Q3": "3.- ¿Cuánto dura el recorrido?",
	    "A3": "El recorrido generalmente es de 2h - 2.5h.",
	    "Q4": "4.- ¿Dónde está el punto de encuentro?",
	    "A4": "Nuestro punto de encuentro es en Plazoleta Espinar (a 1 cuadra de la Plaza de Armas y a 3 cuadras del Mercado de San Pedro), frente a la Iglesia \"La Merced\". Busca el amistoso equipo con las camisetas NARANJAS con el logo de ‘WildFreeWalkingTours’, no te confundas con otros grupos",
	    "Q5": "5.- ¿En qué idiomas se ofrece el tour?",
	    "A5": "El tour se ofrece en inglés y español. REALIZALO CON LOS PROS.",
	    "Q6": "6.- ¿Habrá tarifas de entrada o cargos monetarios durante el viaje?",
	    "A6": "No hay costos adicionales durante el viaje en absoluto. Sin embargo, puede traer algo de dinero, ya que pasaremos por muchas tiendas artesanales y restaurantes en el camino y también a veces se sentirá como si se tomara fotos con los lugareños y sus lindas llamas y alpacas, así como podría donar algunas monedas a algunos músicos. cuando interpretaron su música.",
	    "Q7": "7.- ¿Hay un número máximo de personas permitidas para unirse al tour?",
	    "A7": "Sí, un máximo de 15 personas, además utilizamos un sistema de amplificación de voz, para una mejor comprensión.",
	    "Q8": "8.- ¿Necesito traer algo conmigo?",
	    "A8": "Cusco tiene un clima muy impredecible, por lo tanto, sugerimos que se equipen con lo siguiente",
	    "A8_1": "Protector solar",
	    "A8_2": "Chaqueta de lluvia / paraguas",
	    "A8_3": "Agua",
	    "A8_4": "Monedas (para fotografías con locales y animales)",
            "A8_5": "Cámara / Video Cámara",
	    "A8_6": "Zapatillas / Zapatos para caminar",
	    "A8_7": "Lentes de sol",
	    "Q9": "9.- ¿Es el tour realmente gratis?",
	    "A9": "WildFreeWalkingTours no cobra una tarifa por sus recorridos. Sin embargo, le pedimos que si disfruta de su tiempo con nosotros y tiene una experiencia valiosa y plena, considere dejarnos una propina, es importante saber esto, ya que algunas personas que hicieron el recorrido antes, asumen que es gratis y se van sin decir por lo menos gracias. Sabemos que en muchos países las propinas no son una costumbre, ya que los salarios son muy altos y permiten a las personas ir de vacaciones y ver el mundo, sin embargo, este es nuestro trabajo y no trabajamos para el gobierno ni contamos con el apoyo de otras empresas, solo obtenemos sus PROPINAS. así que, muchas gracias. Nos aseguramos de que todo nuestro equipo esté feliz y dispuesto a trabajar con nostros.",
	    "Q10": "10.- ¿Alguno de los otros recorridos a pie gratuitos en Cusco está relacionado con WildFreeWalkingTours?",
	    "A10": "No. Operamos independientemente de todos los demás recorridos a pie en Cusco. Para obtener realmente la mejor experiencia, asegúrese de buscar el amigable equipo con la marca 'WildFreeWalkingTours' y camisetas NARANJAS, reúnase con nosotros en Plazoleta Espinar (a 1 cuadra de la Plaza de Armas y 3 cuadras del Mercado de San Pedro), frente a la Iglesia de la Merced.",

        "first_walking" : "Tour a pie 10:00",
	    "tours_subtitle": "Por Wild Free Walking Tours - Inglés & Español",
	    "paragraph_first_walking" : "Nuestros recorridos a pie tienen un enfoque histórico y cultural, nuestros guías con licencia están preparados para brindarle información importante y datos sobre nuestra ciudad ancestral, este recorrido es una excelente manera de comenzar su día en Cusco.",
	    "book_tour": "Reservar",
	    "itinerary": "Itinerario",

	    "second_walking" : "Tour a pie 12:30",
	    "paragraph_second_walking" : "Si se perdió nuestro primer recorrido a pie, no se preocupe, todos nuestros recorridos se centran en la historia, las tradiciones y la cultura. Hay algunas variaciones en los lugares que visitamos, para más información debe consultar el itinerario de cada horario.",

	    "third_walking" : "Tour a pie 15:00",
	    "paragraph_third_walking" : "Le mostraremos los lugares más importantes e históricos de la antigua capital de los Incas. Un recorrido lleno de historia, cultura y tradiciones.",
	    
	    "optional_activities" : "Actividades extras",
	    "extra_activities": "En cada recorrido tenemos algunas actividades opcionales o adicionales como Explicación de lana de alpaca, degustación de frutas en el mercado de San Pedro, degustación de pisco en un bar local. Verifique el itinerario para ver cuáles de estas actividades están en su recorrido elegido.",

        
	    "tour_Q1": "1.- Breve reseña histórica",
	    "tour_A1": "Una revisión general sobre la ciudad antigua, realmente importante para comprender hechos posteriores",
	    "tour_Q2": "2.- Escuela secundaria más antigua de la ciudad",
        "tour_A2": "Visitaremos el \" Colegio Nacional de Ciencias y Artes \", fundado en 1825.",
	    "tour_Q3": "3.- Mercado de San Pedro: degustación de frutas",
	    "tour_A3": "El mercado se encuentra a 8 minutos de la plaza principal, es un lugar de visita obligada para experimentar la vida local",
	    "tour_Q4": "4.- Plaza principal",
	    "tour_A4": "Bonitos senderos de piedra y jardines coloridos, es el corazón del centro colonial.",
        "tour_Q5": "5.- Templo de las mujeres elegidas: Accllawuasi",
	    "tour_A5": "Acllahuasi es una palabra quechua que significa casa de las mujeres elegidas. Las Acllas fueron las mujeres con la mejor preparación cultural del imperio",
	    "tour_Q6": "6.- Explicación de la lana de alpaca",
	    "tour_A6": "Una de nuestras actividades adicionales o adicionales. Aprenderemos a distinguir entre diferentes calidades de alpaca textil y cómo reconocer realmente la ropa hecha de lana de alpaca.",
        "tour_Q7": "7.- Templo del Sol Qoricancha",
	    "tour_A7": "Puede ser conocido como Coricancha, Qoricancha, Qorikancha o Koricancha y fue uno de los templos más importantes y sagrados del imperio inca. Sus ruinas se encuentran en la Plaza de Santo Domingo en Cusco.",
	    "tour_Q8": "8.- Palacio Inca Roca",
	    "tour_A8": "\" Inca Roca \", fue el sexto Sapa Inca del Imperio del Cusco (comenzando alrededor de CE 1350) y el primero de la dinastía Hanan (\" superior \")",
	    "tour_Q9": "9.- Barrio de San Blas",
	    "tour_A9": "Es un área bastante diferente al resto del Cusco. Es mejor conocido como el barrio de los artesanos, vale la pena subir caminando.",

        "tour_Q10": "1.- Breve reseña histórica",
        "tour_A10": "Una revisión general sobre la ciudad antigua, realmente importante para comprender hechos posteriores",
        "tour_Q11": "2.- Plaza principal",
        "tour_A11": "Bonitos senderos de piedra y jardines coloridos, es el corazón del centro colonial.",
        "tour_Q12": "3.- Templo de las mujeres elegidas: Accllawuasi",
                "tour_A12": "Acllahuasi es una palabra quechua que significa casa de las mujeres elegidas. Las Acllas fueron las mujeres con la mejor preparación cultural del imperio.",
        "tour_Q13": "4.- Explicación de la lana de alpaca",
        "tour_A13": "Una de nuestras actividades adicionales o adicionales. Aprenderemos a distinguir entre diferentes calidades de alpaca textil y cómo reconocer realmente la ropa hecha de lana de alpaca.",
        "tour_Q14": "5.- Templo del Sol Qoricancha",
        "tour_A14": "Puede ser conocido como Coricancha, Qoricancha, Qorikancha o Koricancha y fue uno de los templos más importantes y sagrados del imperio inca. Sus ruinas se encuentran en la Plaza de Santo Domingo en Cusco.",
        "tour_Q15": "6.- Palacio Pachacutec (Qasana)",
        "tour_A15": "Qasana es una palabra quechua. Significa \" lugar de susceptibilidad a las heladas\" o \" donde cae el hielo \". En tiempos de los incas, este palacio se extendía desde la orilla del río Saphy hasta el palacio Qora Qora.",
        "tour_Q16": "7.- Palacio Inca Roca",
        "tour_A16": "\" Inca Roca \", fue el sexto Sapa Inca del Imperio del Cusco (comenzando alrededor de CE 1350) y el primero de la dinastía Hanan (\" superior \")",
        "tour_Q17": "8.- Barrio de San Blas",
        "tour_A17": "Es un área bastante diferente al resto del Cusco. Es mejor conocido como el barrio de los artesanos, vale la pena subir.",

        "tour_Q18": "1.- Breve reseña histórica",
        "tour_A18": "Una revisión general sobre la ciudad antigua, realmente importante para comprender hechos posteriores",
        "tour_Q19": "2.- Plaza principal",
        "tour_A19": "Bonitos senderos de piedra y jardines coloridos, es el corazón del centro colonial.",
        "tour_Q20": "3.- Templo de las mujeres elegidas: Accllawuasi",
        "tour_A20": "Acllahuasi es una palabra quechua que significa casa de las mujeres elegidas. Las Acllas fueron las mujeres con la mejor preparación cultural del imperio",
        "tour_Q21": "4.- Selfie de Alpaca & Llama",
        "tour_A21": "Un lugar bastante escondido donde puedes tomar algunas fotos con esos encantadores animales.",
        "tour_Q22": "5.- Palacio Pachacutec (Qasana)",
        "tour_A22": "Qasana es una palabra quechua. Significa \" lugar de susceptibilidad a las heladas\" o \" donde cae el hielo \". En tiempos de los incas, este palacio se extendía desde la orilla del río Saphy hasta el palacio Qora Qora",
        "tour_Q23": "6.- Palacio Inca Roca",
        "tour_A23": "\" Inca Roca \", fue el sexto Sapa Inca del Imperio del Cusco (comenzando alrededor de CE 1350) y el primero de la dinastía Hanan (\" superior \")",
        "tour_Q24": "7.- Explicación de la lana de alpaca",
        "tour_A24": "Una de nuestras actividades adicionales o adicionales. Aprenderemos a distinguir entre diferentes calidades de alpaca textil y cómo reconocer realmente la ropa hecha de lana de alpaca.",
        "tour_Q25": "8.- Barrio de San Blas",
        "tour_A25": "Es un área bastante diferente al resto del Cusco. Es mejor conocido como el barrio de los artesanos, vale la pena subir.",
        "tour_Q25": "9.- Degustación de Pisco Sour",
        "tour_A25": "Esta es una actividad adicional para terminar este recorrido y se utiliza principalmente para dar nuestras últimas palabras y gracias.",


	"T1_FOOTER": "MAS TOURS EN CUSCO...",
	"T2_FOOTER": "CERTIFICACIONES",
	"T3_FOOTER": "REDES SOCIALES",
	"P_FOOTER": "Queridos Viajeros Gracias por su preferencia. Puede revisar todos los maravillosos tours y treks en:"
	
        }
    };

    // The default language is English
    var lang = "en-gb";
    // Check for localStorage support
    if('localStorage' in window){

        var usrLang = localStorage.getItem('uiLang');
        if(usrLang) {
            lang = usrLang
        }

    }


    console.log(lang);

    $(document).ready(function() {

        $(".lang").each(function(index, element) {
            $(this).text(arrLang[lang][$(this).attr("id")]);
        });
    });

    // get/set the selected language
    $(".translate").click(function() {
        var lang = $(this).attr("id");

        // update localStorage key
        if('localStorage' in window){
            localStorage.setItem('uiLang', lang);
            console.log( localStorage.getItem('uiLang') );
        }

        $(".lang").each(function(index, element) {
            $(this).text(arrLang[lang][$(this).attr("id")]);
        });
    });



