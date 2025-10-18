export type Language = "sv" | "en"

export const translations = {
  sv: {
    // Navigation
    nav: {
      logo: "Hometown Hosting",
      aboutUs: "Om oss",
      ourServices: "Våra tjänster",
      scheduleConsultation: "Boka gratis konsultation",
    },
    // Hero
    hero: {
      title: "Tjäna mer pengar på din fastighet",
      subtitle: "Vi hjälper dig att hyra ut din bostad på Airbnb. Du tjänar mer pengar – utan att lyfta ett finger.",
      description:
        "Medan du hyr ut tryggt, lönsamt och helt utan stress tar vi hand om all administration och städning.",
      getStarted: "Kom igång",
      scheduleConsultation: "Boka konsultation",
    },
    // About
    about: {
      title: "Vi gör uthyrning enkelt, tryggt och lönsamt",
      intro:
        "Hometown Hosting är ett uthyrningsbolag som specialiserar sig på att maximera värdet av din bostad – utan att du behöver lyfta ett finger. Med bakgrund inom design, arkitektur och korttidsuthyrning, samt samarbeten med både svenska och internationella aktörer, vet vi att framgångsrik uthyrning handlar om mer än bara en annons. Ett bra värdskap skapar minnen för gästerna och trygghet för dig som bostadsägare.",
      philosophyTitle: "Vår filosofi",
      philosophyIntro: "En lyckad uthyrning handlar om mer än att publicera en annons. Det handlar om:",
      philosophyPoints: [
        "Fina minnen för gästerna: så att de vill komma tillbaka.",
        "Trygghet för dig som uthyrare: så att du kan luta dig tillbaka utan oro.",
      ],
      teamTitle: "Vårt team – ditt säkerhetsnät",
      teamIntro: "För att leverera detta samarbetar vi med:",
      teamMembers: [
        {
          title: "Professionella fotografer",
          description: "som får din bostad att glänsa i annonsen.",
        },
        {
          title: "Virtuella assistenter",
          description: "som svarar gäster snabbt och personligt.",
        },
        {
          title: "Städare och fastighetsskötare",
          description: "som håller bostaden i perfekt skick mellan varje vistelse, oavsett situation.",
        },
      ],
      teamNote:
        "Även om vi är flera bakom kulisserna har du alltid en fast kontaktperson hos oss. På så sätt får du både professionalitet och personlig service – allt på ett och samma ställe.",
      guaranteeTitle: "Vår garanti",
      guaranteeText:
        "Hos Hometown Hosting får du en kombination av professionalism och personlig omtanke. Vi tar hand om din bostad med den omsorg den förtjänar – och ser till att du tjänar mer, medan vi sköter allt det praktiska.",
    },
    // Services
    services: {
      title: "Våra tjänster",
      subtitle: "Vi hanterar allt från start till mål, så att du kan njuta av passiv inkomst utan något arbete.",
      items: [
        {
          title: "Professionell fotografering",
          description:
            "Vi ser till att din bostad får professionella bilder av hög kvalitet – något som kan vara avgörande för lönsamheten. Bra fotografering lyfter fram bostadens bästa egenskaper och skapar ett inbjudande första intryck.",
        },
        {
          title: "Hantera incheckning",
          description:
            "Vi har automatiserat processen för att checka in gäster för att göra det enkelt för dem och helt bekymmersfritt för dig.",
        },
        {
          title: "Städning",
          description:
            "Varje städning mellan gäster motsvarar en noggrann slutstädning. Genom att hålla bostaden i toppskick får du 5-stjärniga recensioner – och därmed högre intäkter.",
        },
        {
          title: "Gästkommunikation 24/7",
          description:
            "Vi hanterar all gästkommunikation, så du behöver aldrig vara tillgänglig själv. Oavsett om det gäller incheckning, särskilda önskemål under vistelsen eller andra detaljer tar vi hand om det professionellt och effektivt.",
        },
        {
          title: "Prisoptimering",
          description:
            "Vår dynamiska prisstrategi säkerställer att du tjänar mer än traditionella långtidsuthyrningar.",
        },
        {
          title: "Extra...",
          description:
            "Vi står för det lilla extra som ger gästerna en förstklassig upplevelse och bättre recensioner. Vi levererar lyxiga lakan, alla nödvändigheter och gör en noggrann genomgång av bostaden mellan varje vistelse – så att gästerna känner sig välkomna och väl omhändertagna.",
        },
      ],
    },
    // Contact
    contact: {
      title: "Kontakta oss",
      subtitle: "Få en gratis inkomstbedömning för din fastighet.",
      form: {
        title: "Kontakta oss",
        description:
          "Har du frågor? Vi skulle gärna höra från dig. Skicka oss ett meddelande så svarar vi så snart som möjligt.",
        name: "Namn",
        namePlaceholder: "Ditt namn",
        email: "E-post",
        emailPlaceholder: "din@epost.se",
        phone: "Telefon",
        phonePlaceholder: "070-123 45 67",
        interests: "Jag är intresserad av...",
        interestsRequired: "Välj minst ett alternativ",
        interestOptions: [
          "Administation av min möblerade fastighet",
          "Uthyrning av min bostad till er",
          "Hjälp med att vara värd för min redan uppsatta Airbnb-annons",
          "Hitta en fastighet som kommer att vara lönsam på Airbnb att köpa",
          "Styling och möblering av en fastighet",
          "Bedömning av vad min fastighet kan tjäna på Airbnb",
          "Förvaltning av min fastigher medan jag reser",
          "Optimering av min Airbnb-annons",
          "Lära mig mer om era tjänster",
        ],
        message: "Meddelande (Valfritt)",
        messagePlaceholder: "Berätta mer om din fastighet eller dina behov...",
        submit: "Skicka meddelande",
        sending: "Skickar...",
        successMessage: "Tack för ditt meddelande! Vi återkommer till dig snart.",
        errorMessage: "Det uppstod ett fel när meddelandet skickades. Försök igen eller kontakta oss direkt.",
        emailLabel: "E-post",
        phoneLabel: "Telefon",
        locationLabel: "Plats",
        locationText: "Betjänar fastigheter över hela landet",
      },
      schedule: {
        title: "Boka en konsultation",
        description: "Välj en tid som passar dig för en gratis konsultation om din fastighet.",
        button: "Boka tid",
      },
    },
    // Footer
    footer: {
      about: {
        title: "Om Hometown Hosting",
        description:
          "Vi specialiserar oss på korttidsuthyrning och hjälper fastighetsägare att maximera sin inkomst genom professionell uthyrningsservice på Airbnb.",
      },
      contact: {
        title: "Kontakt",
      },
      follow: {
        title: "Följ oss",
      },
      copyright: "Alla rättigheter förbehållna.",
    },
  },
  en: {
    // Navigation
    nav: {
      logo: "Hometown Hosting",
      aboutUs: "About Us",
      ourServices: "Our Services",
      scheduleConsultation: "Schedule Free Consultation",
    },
    // Hero
    hero: {
      title: "Make more money from your property",
      subtitle: "We help you rent out your home on Airbnb. You earn more money – without lifting a finger.",
      description:
        "While you rent out safely, profitably and completely stress-free, we take care of all administration and cleaning.",
      getStarted: "Get Started",
      scheduleConsultation: "Schedule Consultation",
    },
    // About
    about: {
      title: "We make renting easy, safe and profitable",
      intro:
        "Hometown Hosting is a rental company that specializes in maximizing the value of your property – without you having to lift a finger. With a background in design, architecture and short-term rentals, as well as collaborations with both Swedish and international partners, we know that successful rental is about more than just an ad. Good hosting creates memories for guests and security for you as a property owner.",
      philosophyTitle: "Our philosophy",
      philosophyIntro: "A successful rental is about more than posting an ad. It's about:",
      philosophyPoints: [
        "Great memories for guests: so they want to come back.",
        "Security for you as a landlord: so you can sit back without worry.",
      ],
      teamTitle: "Our team – your safety net",
      teamIntro: "To deliver this, we work with:",
      teamMembers: [
        {
          title: "Professional photographers",
          description: "who make your property shine in the listing.",
        },
        {
          title: "Virtual assistants",
          description: "who respond to guests quickly and personally.",
        },
        {
          title: "Cleaners and property managers",
          description: "who keep the property in perfect condition between each stay, regardless of the situation.",
        },
      ],
      teamNote:
        "Even though there are several of us behind the scenes, you always have a dedicated contact person with us. This way you get both professionalism and personal service – all in one place.",
      guaranteeTitle: "Our guarantee",
      guaranteeText:
        "At Hometown Hosting you get a combination of professionalism and personal care. We take care of your property with the care it deserves – and make sure you earn more, while we handle all the practical details.",
    },
    // Services
    services: {
      title: "Our Services",
      subtitle: "We handle everything from start to finish, so you can enjoy passive income without any of the work.",
      items: [
        {
          title: "Beautiful Photography",
          description:
            "We ensure that your property gets professional high-quality images – something that can be crucial for profitability. Good photography highlights the property's best features and creates an inviting first impression.",
        },
        {
          title: "Manage Check-ins",
          description:
            "We've automated the process of checking in guests to make it easy for them, and completely hands-off for you.",
        },
        {
          title: "Cleaning",
          description:
            "Every clean between guests is essentially an end-of-lease clean. Maintaining a top-condition property gets 5-star reviews, which means more money for you.",
        },
        {
          title: "Guest Communications 24/7",
          description:
            "We handle all guest communication, so you never need to be available yourself. Whether it's check-in, special requests during the stay or other details, we take care of it professionally and efficiently.",
        },
        {
          title: "Pricing Optimisation",
          description:
            "We're the best in the industry at striking a balance between occupancy rates and high prices, utilising our AI-driven algorithm and proprietary calendar-filling strategies.",
        },
        {
          title: "The Extra Touch",
          description:
            "We provide the little extra that gives guests a first-class experience and better reviews. We deliver luxury linens, all necessities and do a thorough inspection of the property between each stay – so that guests feel welcome and well taken care of.",
        },
      ],
    },
    // Contact
    contact: {
      title: "Let's Talk!",
      subtitle: "Get a free income appraisal for your property.",
      form: {
        title: "Contact Us",
        description:
          "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        phone: "Phone",
        phonePlaceholder: "+46704969606",
        interests: "I'm interested in help with...",
        interestsRequired: "Please select at least one option",
        interestOptions: [
          "Managing my furnished property...",
          "Renting my unfurnished property to you...",
          "Help hosting my already-set-up Airbnb listing...",
          "Finding a property that will be profitable on Airbnb to buy...",
          "Styling and furnishing a property...",
          "Appraising what my property could earn on Airbnb...",
          "Managing my place while I am travelling...",
          "Optimising my Airbnb listing...",
          "Learning more about your services",
        ],
        message: "Additional Message (Optional)",
        messagePlaceholder: "Tell us more about your property or needs...",
        submit: "Send Message",
        sending: "Sending...",
        successMessage: "Thank you for your message! We will get back to you soon.",
        errorMessage: "There was an error sending your message. Please try again or contact us directly.",
        emailLabel: "Email",
        phoneLabel: "Phone",
        locationLabel: "Location",
        locationText: "Serving properties nationwide",
      },
      schedule: {
        title: "Schedule A Consultation",
        description: "Choose a time that works for you for a free consultation about your property.",
        button: "Book Appointment",
      },
    },
    // Footer
    footer: {
      about: {
        title: "About Hometown Hosting",
        description:
          "We specialize in short-term rental management, helping property owners maximize their income through professional hosting on Airbnb.",
      },
      contact: {
        title: "Contact",
      },
      follow: {
        title: "Follow Us",
      },
      copyright: "All rights reserved.",
    },
  },
}
