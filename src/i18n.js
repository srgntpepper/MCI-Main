import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "es", "fr", "it", "de", "pt", "zh", "ru"],
    resources: {
      en: {
        translation: {
          app_title: " Makerstar Capital | Revolutionizing Crypto Mining",
          language: "Language",
          nav: {
            home: "Test",
            job_sites: "Job Sites",
            mining_calculator: "Mining Calculator",
            team: "Leadership Team",
            invest_in_us: "Invest In Us",
            join_our_team: "Join Our Team",
          },
          features: {
            benefits_of_bitcoin: {
              title: "Benefits of Bitcoin",
              content:
                "Low fees, fast transactions, global accessibility, inflation resistance, and investment potential.",
            },
            bitcoin_future: {
              title: "Why Bitcoin is the Future",
              content:
                "Revolutionizes finance,increases security, and supportsglobal economy.",
            },
            secure: {
              title: "100% Secure",
              content:
                "Immutable blockchain,cryptography, and decentralizednetwork provide unparalleledsecurity.",
            },
          },
          sub_hero_headers: {
            0: {
              first_half: "Discover Our",
              featured_words: "Growing List",
              second_half: "of Site Locations",
            },
            1: {
              first_half: "Meet Our",
              featured_words: "Decision Makers",
              second_half: "",
            },
            2: {
              first_half: "Join the",
              featured_words: "Bitcoin Revolution;",
              second_half: "Invest Now!",
            },
            3: {
              first_half: "Build Your Future:",
              featured_words: "Apply",
              second_half: "for Open Positions",
            },
          },
          hero: {
            first_half: "Building the ",
            featured_words: "Future",
            second_half: "  of Finance",
            sub_first_half:
              "Our mission is to build the future of finance through innovative",
            sub_featured_words: "bitcoin mining infrastructure.",
            sub_second_half:
              "Join us in investing in the next generation of digital currency.",
          },
          position_openings: {
            0: {
              position: "Data Center Technician",
              location: "Meridian, MS",
              description:
                "We’re looking for an experienced Technician who is responsible for completing preventative maintenance checks throughout data center (cleaning, basic troubleshooting, inspection). Once unit(s) are identified as unrepairable, the tech will report to Site Manager to create repair ticket. Techs are responsible for...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
            1: {
              position: "Data Center Technician",
              location: "Leachville, AR",
              description:
                "We’re looking for an experienced Technician who is responsible for completing preventative maintenance checks throughout data center (cleaning, basic troubleshooting, inspection). Once unit(s) are identified as unrepairable, the tech will report to Site Manager to create repair ticket. Techs are responsible for...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
          },
          job_sites: {
            1: {
              location: "VicksBurg, MS",
            },
            2: {
              location: "Meridian, MS",
            },
            3: {
              location: "Wiggins, MS",
            },
          },
          stats: {
            2: {
              title: "Deployed in MS",
              value: "43mW",
            },
            3: {
              title: "More by End-Of-Year",
              value: "+80mW",
            },
          },
          footerLinks: {
            0: {
              title: "Useful Links",
              links: {
                0: {
                  name: "Job Sites",
                },
                1: {
                  name: "Calculator",
                },
                2: {
                  name: "Contact",
                },
                3: {
                  name: "Careers",
                },
                4: {
                  name: "Terms & Services",
                },
              },
            },
          },
          footer_text: {
            title:
              "Unleashing the Power of Bitcoin Mining, One Block at a Time.",
            copyright_one: "Copyright",
            copyright_two: "2023 Makerstar Capital, Inc. All Rights Reserved.",
          },
          bitcoin_component: {
            heading: "What is Bitcoin?",
            description:
              "Bitcoin is a decentralized digital currency that operates independently of central banks and other financial institutions. It's based on a revolutionary technology called blockchain that allows for fast, secure, and transparent transactions without the need for intermediaries.",
          },
          live_bitcoin_price: "Live Bitcoin Price",
          form_message: {
            name: "Name is required",
            email: "Invalid email",
            message: "A message is required",
            alert: "Your message has been sent!",
            sent: "sent!",
            send_success: "Your message has been sent!",
            your_name: "Your Name",
            your_email: "Email Address",
            your_message: "Message",
            placeholder_name: "Full Name",
            placeholder_email: "Email Address",
            placeholder_message: "Type your message here",
            send_button: "SEND",
          },
          cta: {
            title: "Join the Bitcoin Mining Rush!",
            subtitle:
              "Join the lucrative world of Bitcoin mining and invest in our innovative company today!",
          },
          get_started_component: {
            get: "Get",
            started: "Started",
          },
          mining_component: {
            title_first: "What's Bitcoin Mining",
            title_second: "And Why Do It?",
            subtitle:
              "Bitcoin mining is the process of verifying transactions and adding them to the blockchain, which requires powerful computers. We do it to ensure the future of Bitcoin and help secure the network.",
          },
          mining_difficulty_component: {
            title_first: "The Bitcoin Mining ",
            title_second: "Difficulty.",
            subtitle:
              "Bitcoin mining difficulty measures the challenge of mining new Bitcoin, adjusting every 2 week for 10-minute block times. Difficulty rises as more miners compete, ensuring network security.",
          },
          environment_component: {
            title_first: "Environmentally Friendly Facts",
            title_second: "About Our Mining.",
            subtitle_first:
              "Our mining sites are located in Mississippi and Georgia. Mississippi Power is the largest partner in renewable energy in Mississippi and is collaborating with four solar energy businesses and the U.S. Navy to build four utility-scale solar facilities. They generate over",
            subtitle_second: "of electricity, enough to power more than",
            subtitle_third:
              "for a year. Mississippi Power is also focusing on biomass power and pursuing wind energy generation in coastal areas. Georgia utilizes 4 nuclear reactors accounting for",
            subtitle_fourth:
              "of their total state power. They are also leading in electricity generation from biomass, with 20% renewable resources accounting for over",
            subtitle_fifth:
              "of the state's total in-state electricity net generation in 2021.",
            subtitle_data_one: "160 MW",
            subtitle_data_two: "23,000 homes",
            subtitle_data_three: "27%",
            subtitle_data_four: "one-tenth",
          },
          button: {
            cta: "Start Mining Now",
            mining_difficulty: "Estimate Mining Returns",
            careers: "See Details",
            calculator: "Calculate",
            load_more: "Load More",
          },
          calculator: {
            title: "Bitcoin Mining Calculator",
            hash: "Hash rate (TH/s)",
            power: "Power consumption (W)",
            kWh: "Cost per kWh ($)",
            price: "BTC price ($)",
            results: {
              revenue: "Daily Revenue:",
              cost: "Daily Power Cost:",
              profit: "Daily Profit:",
            },
          },
          article: {
            title: "Latest News",
            subtitle:
              "To stay informed about the latest happenings in the world of bitcoin, check out these news articles.",
            read_more: ". . .Read More",
            end_of_feed: ". . .End of Newsfeed. . .",
          },
          terms: {
            title: "Terms of Service",
            term_one: "1. ACCEPTANCE OF TERMS ",
            paragraph_one:
              "Please read and accept the Makerstar Capital Inc. Terms of Use (“Terms”) before using the www.makerstarcapital.com Web site or any other Web site maintained by Makerstar Capital Inc. (“Web site”). If you do not agree to all of the Terms, do not use this Web site. Makerstar Capital Inc. may update these Terms from time to time. Each time you use the Web site you will be operating under the Terms as they exist as of the time of use. Please check these terms prior to each use of our Web site. The Terms are entered into by and between Makerstar Capital Inc. and you. If you currently have in effect a separate written purchase or license agreement with Makerstar Capital Inc. for a service, that agreement shall govern the use of that service to the extent it conflicts with these Terms.",
            term_two: "2. DISCLAIMER ",
            paragraph_two:
              "Although Makerstar Capital Inc. has attempted to provide accurate information on the Web site, Makerstar Capital Inc. assumes no responsibility for the accuracy of the information. Makerstar Capital Inc. may change the programs or products mentioned at any time without notice. Mention of non- Makerstar Capital Inc. products or services is for information purposes only and constitutes neither an endorsement nor a recommendation. THE MATERIALS ARE PROVIDED “AS IS” WITHOUT AN EXPRESS OR IMPLIED WARRANTY OF ANY KIND INCLUDING WARRANTIES OF MERCHANTABILITY, NON- INFRINGEMENT OF INTELLECTUAL PROPERTY, OR FITNESS FOR ANY PARTICULAR PURPOSE. IN NO EVENT SHALL MAKERSTAR CAPITAL INC. OR ITS SUPPLIERS OR PARTNERS BE LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, BUSINESS INTERRUPTION, LOSS OF INFORMATION) ARISING OUT OF THE USE OF OR INABILITY TO USE THE MATERIALS, EVEN IF MAKERSTAR CAPITAL INC. HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ELECTRONIC COMMUNICATIONS PRIVACY ACT NOTICE (18USC 2701-2711): COMPANY MAKES NO GUARANTY OF CONFIDENTIALITY OR PRIVACY OF ANY COMMUNICATION OR INFORMATION TRANSMITTED ON THE SITE OR ANY WEB-SITE LINKED TO THE WEBSITE. Company will not be liable for the privacy of e-mail addresses, registration and identification information, disk space, communications, confidential or trade-secret information, or any other Content stored on Company’s equipment, transmitted over networks accessed by the Site, or otherwise connected with Subscriber’s use of the Services.",
            term_three: "3. INTELLECTUAL PROPERTY RIGHTS ",
            paragraph_three:
              "All content, including text, data, sound recordings, sound, photographs, graphics, video, or other materials (“Material”) provided on this Web site is provided by or to Makerstar Capital Inc. by its respective manufacturers, authors, developers and vendors (the “Third Party Providers”) and is the copyrighted work of Makerstar Capital Inc. and/or the Third Party Providers. Except as expressly authorized by Makerstar Capital Inc. or the Third Party Provider, none of the Material may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means, including, but not limited to, electronic, mechanical, photocopying, recording, or otherwise. No part of the Web site, including logos, graphics, sounds or images, may be reproduced or retransmitted in any way, or by any means, without the prior express written permission of Makerstar Capital Inc. You also may not, without Makerstar Capital Inc.’s prior express written permission, copy any Materials contained on this Web site on any other server, or use any Makerstar Capital Inc. Marks for any purpose. “Makerstar Capital Inc. Marks” refers to any names, marks, brands, logos, designs, slogans, trademarks, services marks and other designations Makerstar Capital Inc. uses in connection with its products or services. Individuals who believe that their intellectual property rights have been infringed on the Web site, may contact Makerstar Capital Inc. and request that the infringing material be removed or access to it blocked. Makerstar Capital Inc. will investigate those complaints. Where Makerstar Capital Inc. is satisfied that the infringement is taking place, it will take appropriate action. If you believe your intellectual property rights are being infringed, please direct your claims to: General Counsel, Makerstar Capital Inc., Park Plaza STE 1230 Irvine, CA 92614.",
            term_four: "4. TRADEMARKS ",
            paragraph_four:
              "The trademarks, logos and service marks (“Marks”) displayed on this Web site are the property of Makerstar Capital Inc. or other third parties. Users are not permitted to use these Marks without the prior written consent of Makerstar Capital Inc. or such third party which may own the Mark.",
            term_five: "5. LINKS TO THIRD PARTY SITES ",
            paragraph_five:
              "This Web site may contain links to third party sites. Access to any other Internet site linked to this Web site is at the user’s own risk and Makerstar Capital Inc. is not responsible for the accuracy or reliability of any information, data, opinions, advice or statements made on these sites. Makerstar Capital Inc. provides these links merely as a convenience and the inclusion of such links does not imply an endorsement.",
          },
        },
      },
      es: {
        translation: {
          app_title:
            "Makerstar Capital | Revolucionando la Minería de Criptomonedas",
          language: "Idioma",
          nav: {
            home: "Inicio",
            job_sites: "Sitios de Trabajo",
            mining_calculator: "Calculadora de Minería",
            team: "Equipo de Liderazgo",
            invest_in_us: "Invierte en Nosotros",
            join_our_team: "Únete a Nuestro Equipo",
          },
          features: {
            benefits_of_bitcoin: {
              title: "Beneficios de Bitcoin",
              content:
                "Bajas comisiones, transacciones rápidas, accesibilidad global, resistencia a la inflación y potencial de inversión.",
            },
            bitcoin_future: {
              title: "Por qué Bitcoin es el Futuro",
              content:
                "Revoluciona las finanzas, aumenta la seguridad y apoya la economía global.",
            },
            secure: {
              title: "100% Seguro",
              content:
                "Blockchain inmutable, criptografía y red descentralizada proporcionan una seguridad incomparable.",
            },
          },
          sub_hero_headers: {
            0: {
              first_half: "Descubre Nuestra",
              featured_words: "Lista en Crecimiento",
              second_half: "de Ubicaciones de Sitios",
            },
            1: {
              first_half: "Conoce a Nuestros",
              featured_words: "Tomadores de Decisiones",
              second_half: "",
            },
            2: {
              first_half: "Únete a la",
              featured_words: "Revolución de Bitcoin;",
              second_half: "¡Invierte Ahora!",
            },
            3: {
              first_half: "Construye Tu Futuro:",
              featured_words: "Solicita",
              second_half: "Posiciones Abiertas",
            },
          },
          hero: {
            first_half: "Construyendo el",
            featured_words: "Futuro",
            second_half: " de las Finanzas",
            sub_first_half:
              "Nuestra misión es construir el futuro de las finanzas a través de una innovadora",
            sub_featured_words: "infraestructura de minería de bitcoin.",
            sub_second_half:
              "Únete a nosotros para invertir en la próxima generación de moneda digital.",
          },
          position_openings: {
            0: {
              position: "Técnico de Centro de Datos",
              location: "Meridian, MS",
              description:
                "Buscamos un Técnico con experiencia que se encargará de realizar controles de mantenimiento preventivo en todo el centro de datos (limpieza, solución de problemas básicos, inspección). Una vez que se identifique que la unidad no es reparable, el técnico informará al Gerente del Sitio para crear un ticket de reparación. Los técnicos son responsables de...",
              //link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
            1: {
              position: "Técnico de Centro de Datos",
              location: "Leachville, AR",
              description:
                "Buscamos un Técnico con experiencia que se encargará de realizar controles de mantenimiento preventivo en todo el centro de datos (limpieza, solución de problemas básicos, inspección). Una vez que se identifique que la unidad no es reparable, el técnico informará al Gerente del Sitio para crear un ticket de reparación. Los técnicos son responsables de...",
              //link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
          },
          job_sites: {
            1: {
              location: "VicksBurg, MS",
            },
            2: {
              location: "Meridian, MS",
            },
            3: {
              location: "Wiggins, MS",
            },
          },
          stats: {
            2: {
              title: "Desplegado en MS",
              value: "43mW",
            },
            3: {
              title: "Más para Fin de Año",
              value: "+80mW",
            },
          },
          footerLinks: {
            0: {
              title: "Enlaces Útiles",
              links: {
                0: {
                  name: "Sitios de Trabajo",
                },
                1: {
                  name: "Calculadora",
                },
                2: {
                  name: "Contacto",
                },
                3: {
                  name: "Carreras",
                },
                4: {
                  name: "Términos y Servicios",
                },
              },
            },
          },
          footer_text: {
            title:
              "Liberando el Poder de la Minería de Bitcoin, Un Bloque a la Vez.",
            copyright_one: "Derechos de Autor",
            copyright_two:
              "2023 Makerstar Capital, Inc. Todos los Derechos Reservados.",
          },
          bitcoin_component: {
            heading: "¿Qué es Bitcoin?",
            description:
              "Bitcoin es una moneda digital descentralizada que opera independientemente de los bancos centrales y otras instituciones financieras. Se basa en una tecnología revolucionaria llamada blockchain que permite transacciones rápidas, seguras y transparentes sin la necesidad de intermediarios.",
          },
          live_bitcoin_price: "Precio Actual de Bitcoin",
          form_message: {
            name: "Se requiere nombre",
            email: "Correo electrónico inválido",
            message: "Se requiere un mensaje",
            alert: "¡Tu mensaje ha sido enviado!",
            sent: "¡enviado!",
            send_success: "¡Tu mensaje ha sido enviado!",
            your_name: "Tu Nombre",
            your_email: "Dirección de Correo Electrónico",
            your_message: "Mensaje",
            placeholder_name: "Nombre Completo",
            placeholder_email: "Dirección de Correo Electrónico",
            placeholder_message: "Escribe tu mensaje aquí",
            send_button: "ENVIAR",
          },
          cta: {
            title: "¡Únete a la Fiebre de la Minería de Bitcoin!",
            subtitle:
              "¡Únete al lucrativo mundo de la minería de Bitcoin e invierte en nuestra innovadora compañía hoy!",
          },
          get_started_component: {
            get: "Comienza",
            started: "Ahora",
          },
          mining_component: {
            title_first: "¿Qué es la Minería de Bitcoin",
            title_second: "y Por Qué Hacerlo?",
            subtitle:
              "La minería de Bitcoin es el proceso de verificar transacciones y agregarlas a la blockchain, lo cual requiere computadoras potentes. Lo hacemos para asegurar el futuro de Bitcoin y ayudar a asegurar la red.",
          },
          mining_difficulty_component: {
            title_first: "La Dificultad de la Minería",
            title_second: "de Bitcoin.",
            subtitle:
              "La dificultad de la minería de Bitcoin mide el desafío de minar nuevos Bitcoin, ajustándose cada 2 semanas para tiempos de bloque de 10 minutos. La dificultad aumenta a medida que más mineros compiten, asegurando la seguridad de la red.",
          },
          environment_component: {
            title_first: "Hechos Ambientalmente Amigables",
            title_second: "Sobre Nuestra Minería.",
            subtitle_first:
              "Nuestros sitios de minería están ubicados en Mississippi y Georgia. Mississippi Power es el mayor socio en energía renovable en Mississippi y está colaborando con cuatro empresas de energía solar y la Marina de los EE. UU. para construir cuatro instalaciones solares a escala de servicios públicos. Generan más de",
            subtitle_second:
              "de electricidad, suficiente para alimentar más de",
            subtitle_third:
              "durante un año. Mississippi Power también se está enfocando en la energía de biomasa y está buscando la generación de energía eólica en áreas costeras. Georgia utiliza 4 reactores nucleares que representan el",
            subtitle_fourth:
              "de su poder estatal total. También están liderando en generación de electricidad a partir de biomasa, con recursos renovables del 20% que representan más del",
            subtitle_fifth:
              "de la generación neta total de electricidad en el estado en 2021.",
            subtitle_data_one: "160 MW",
            subtitle_data_two: "23,000 hogares",
            subtitle_data_three: "27%",
            subtitle_data_four: "una décima parte",
          },
          button: {
            cta: "Comienza a Minar Ahora",
            mining_difficulty: "Estimar Retornos de Minería",
            careers: "Ver Detalles",
            calculator: "Calcular",
            load_more: "Cargar Más",
          },
          calculator: {
            title: "Calculadora de Minería de Bitcoin",
            hash: "Tasa de hash (TH/s)",
            power: "Consumo de energía (W)",
            kWh: "Costo por kWh ($)",
            price: "Precio de BTC ($)",
            results: {
              revenue: "Ingresos Diarios:",
              cost: "Costo de Energía Diario:",
              profit: "Beneficio Diario:",
            },
          },
          article: {
            title: "Noticias Recientes",
            subtitle:
              "Para mantenerte informado sobre los últimos acontecimientos en el mundo del bitcoin, echa un vistazo a estos artículos de noticias.",
            read_more: ". . . Leer Más",
            end_of_feed: ". . .Fin de la Alimentación de Noticias. . .",
          },
          terms: {
            title: "Términos de Servicio",
            term_one: "1. ACEPTACIÓN DE TÉRMINOS ",
            paragraph_one:
              "Por favor, lea y acepte los Términos de Uso de Makerstar Capital Inc. (“Términos”) antes de utilizar el sitio web www.makerstarcapital.com o cualquier otro sitio web mantenido por Makerstar Capital Inc. (“Sitio web”). Si no está de acuerdo con todos los Términos, no utilice este sitio web. Makerstar Capital Inc. puede actualizar estos Términos de vez en cuando. Cada vez que utilice el Sitio web, estará operando bajo los Términos que existen en el momento de uso. Por favor, consulte estos términos antes de cada uso de nuestro Sitio web. Los Términos son acordados por y entre Makerstar Capital Inc. y usted. Si actualmente tiene en vigor un acuerdo de compra o licencia por escrito con Makerstar Capital Inc. para un servicio, ese acuerdo regirá el uso de ese servicio en la medida en que entre en conflicto con estos Términos.",
            term_two: "2. DESCARGO DE RESPONSABILIDAD ",
            paragraph_two:
              "Aunque Makerstar Capital Inc. ha intentado proporcionar información precisa en el Sitio web, Makerstar Capital Inc. no asume ninguna responsabilidad por la exactitud de la información. Makerstar Capital Inc. puede cambiar los programas o productos mencionados en cualquier momento sin previo aviso. La mención de productos o servicios que no son de Makerstar Capital Inc. es solo para fines informativos y no constituye ni un respaldo ni una recomendación. LOS MATERIALES SE PROPORCIONAN “TAL CUAL” SIN NINGUNA GARANTÍA EXPRESA O IMPLÍCITA DE NINGÚN TIPO, INCLUYENDO GARANTÍAS DE COMERCIABILIDAD, NO INFRACCIÓN DE LA PROPIEDAD INTELECTUAL O ADECUACIÓN PARA UN PROPÓSITO PARTICULAR. EN NINGÚN CASO SERÁ RESPONSABLE MAKERSTAR CAPITAL INC. O SUS PROVEEDORES O SOCIOS POR CUALQUIER DAÑO QUE RESULTE DEL USO O LA INHABILIDAD PARA USAR LOS MATERIALES, INCLUSO SI MAKERSTAR CAPITAL INC. HA SIDO ADVERTIDO DE LA POSIBILIDAD DE DICHOS DAÑOS. AVISO DE LA LEY DE PRIVACIDAD DE COMUNICACIONES ELECTRÓNICAS (18USC 2701-2711): LA EMPRESA NO GARANTIZA LA CONFIDENCIALIDAD O PRIVACIDAD DE CUALQUIER COMUNICACIÓN O INFORMACIÓN TRANSMITIDA EN EL SITIO O CUALQUIER SITIO WEB VINCULADO AL SITIO WEB. La Compañía no será responsable de la privacidad de las direcciones de correo electrónico, información de registro e identificación, espacio en disco, comunicaciones, información confidencial o secreto comercial, o cualquier otro Contenido almacenado en el equipo de la Compañía, transmitido a través de redes accesibles por el Sitio, o de otra manera conectado con el uso del Servicio por parte del Suscriptor.",
            term_three: "3. DERECHOS DE PROPIEDAD INTELECTUAL ",
            paragraph_three:
              "Todo el contenido, incluyendo texto, datos, grabaciones de sonido, sonido, fotografías, gráficos, video o otros materiales (“Material”) proporcionado en este Sitio web es proporcionado por o a Makerstar Capital Inc. por sus respectivos fabricantes, autores, desarrolladores y proveedores (los “Proveedores de Terceros”) y es la obra con derechos de autor de Makerstar Capital Inc. y/o los Proveedores de Terceros. Excepto como está expresamente autorizado por Makerstar Capital Inc. o el Proveedor de Terceros, ninguno de los Materiales puede ser copiado, reproducido, distribuido, republicado, descargado, exhibido, publicado o transmitido en ninguna forma o por ningún medio, incluyendo, pero no limitado a, electrónico, mecánico, fotocopiado, grabado, o de otro modo. Ninguna parte del Sitio web, incluyendo logos, gráficos, sonidos o imágenes, puede ser reproducida o retransmitida de ninguna manera, o por cualquier medio, sin el previo permiso escrito de Makerstar Capital Inc. También no puede, sin el previo permiso escrito de Makerstar Capital Inc., copiar cualquier Material contenido en este Sitio web en cualquier otro servidor, o utilizar cualquier Marca de Makerstar Capital Inc. para cualquier propósito. “Marcas de Makerstar Capital Inc.” se refiere a cualquier nombre, marca, marca comercial, logo, diseño, slogan, trademarks, marcas de servicio y otras designaciones que Makerstar Capital Inc. utiliza en relación con sus productos o servicios. Las personas que creen que sus derechos de propiedad intelectual han sido infringidos en el Sitio web, pueden ponerse en contacto con Makerstar Capital Inc. y solicitar que el material infractor sea removido o que se bloquee el acceso al mismo. Makerstar Capital Inc. investigará esas quejas. Cuando Makerstar Capital Inc. está satisfecho de que se está produciendo la infracción, tomará las medidas apropiadas. Si cree que sus derechos de propiedad intelectual están siendo infringidos, por favor dirija sus reclamaciones a: Asesor General, Makerstar Capital Inc., Park Plaza STE 1230 Irvine, CA 92614.",
            term_four: "4. MARCAS REGISTRADAS ",
            paragraph_four:
              "Las marcas registradas, logos y marcas de servicio (“Marcas”) exhibidas en este Sitio web son propiedad de Makerstar Capital Inc. o de terceros. No se permite a los usuarios usar estas Marcas sin el consentimiento previo por escrito de Makerstar Capital Inc. o de dicho tercero que pueda ser el propietario de la Marca.",
            term_five: "5. ENLACES A SITIOS DE TERCEROS ",
            paragraph_five:
              "Este Sitio web puede contener enlaces a sitios de terceros. El acceso a cualquier otro sitio de Internet vinculado a este Sitio web es bajo el propio riesgo del usuario y Makerstar Capital Inc. no es responsable de la precisión o confiabilidad de cualquier información, datos, opiniones, consejos o declaraciones hechas en estos sitios. Makerstar Capital Inc. proporciona estos enlaces solo por conveniencia y la inclusión de tales enlaces no implica un respaldo.",
          },
        },
      },
      de: {
        translation: {
          app_title: "Makerstar Capital | Die Kryptowährungs-Mining Revolution",
          language: "Sprache",
          nav: {
            home: "Startseite",
            job_sites: "Job-Standorte",
            mining_calculator: "Mining-Rechner",
            team: "Führungsteam",
            invest_in_us: "Investiere in uns",
            join_our_team: "Tritt unserem Team bei",
          },
          features: {
            benefits_of_bitcoin: {
              title: "Vorteile von Bitcoin",
              content:
                "Niedrige Gebühren, schnelle Transaktionen, weltweite Zugänglichkeit, Inflationsresistenz und Investitionspotential.",
            },
            bitcoin_future: {
              title: "Warum Bitcoin die Zukunft ist",
              content:
                "Revolutioniert die Finanzwelt, erhöht die Sicherheit und unterstützt die Weltwirtschaft.",
            },
            secure: {
              title: "100% sicher",
              content:
                "Unveränderliche Blockchain, Kryptographie und dezentrales Netzwerk bieten unvergleichliche Sicherheit.",
            },
          },
          sub_hero_headers: {
            0: {
              first_half: "Entdecken Sie unsere",
              featured_words: "Wachsende Liste",
              second_half: "von Standorten",
            },
            1: {
              first_half: "Treffen Sie unsere",
              featured_words: "Entscheidungsträger",
              second_half: "",
            },
            2: {
              first_half: "Treten Sie bei",
              featured_words: "Bitcoin-Revolution;",
              second_half: "Investiere jetzt!",
            },
            3: {
              first_half: "Bauen Sie Ihre Zukunft:",
              featured_words: "Bewerben",
              second_half: "für offene Positionen",
            },
          },
          hero: {
            first_half: "Wir bauen die",
            featured_words: "Zukunft",
            second_half: "der Finanzwelt",
            sub_first_half:
              "Unsere Mission ist es, die Zukunft der Finanzen durch innovative",
            sub_featured_words: "Bitcoin-Mining-Infrastruktur zu gestalten.",
            sub_second_half:
              "Seien Sie dabei, in die nächste Generation der digitalen Währung zu investieren.",
          },
          position_openings: {
            0: {
              position: "Techniker im Rechenzentrum",
              location: "Meridian, MS",
              description:
                "Wir suchen einen erfahrenen Techniker, der für regelmäßige Wartungschecks im gesamten Rechenzentrum verantwortlich ist (Reinigung, grundlegende Fehlerbehebung, Inspektion). Wenn eine Einheit als nicht reparabel identifiziert wird, meldet der Techniker dies an den Standortleiter, um ein Reparaturticket zu erstellen. Techniker sind verantwortlich für...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
            1: {
              position: "Techniker im Rechenzentrum",
              location: "Leachville, AR",
              description:
                "Wir suchen einen erfahrenen Techniker, der für regelmäßige Wartungschecks im gesamten Rechenzentrum verantwortlich ist (Reinigung, grundlegende Fehlerbehebung, Inspektion). Wenn eine Einheit als nicht reparabel identifiziert wird, meldet der Techniker dies an den Standortleiter, um ein Reparaturticket zu erstellen. Techniker sind verantwortlich für...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
          },
          job_sites: {
            1: {
              location: "VicksBurg, MS",
            },
            2: {
              location: "Meridian, MS",
            },
            3: {
              location: "Wiggins, MS",
            },
          },
          stats: {
            2: {
              title: "Einsatz in MS",
              value: "43mW",
            },
            3: {
              title: "Mehr bis Ende des Jahres",
              value: "+80mW",
            },
          },
          footerLinks: {
            0: {
              title: "Nützliche Links",
              links: {
                0: {
                  name: "Job-Standorte",
                },
                1: {
                  name: "Rechner",
                },
                2: {
                  name: "Kontakt",
                },
                3: {
                  name: "Karriere",
                },
                4: {
                  name: "Geschäftsbedingungen & Dienstleistungen",
                },
              },
            },
          },
          footer_text: {
            title:
              "Freisetzung der Macht des Bitcoin-Minings, ein Block nach dem anderen.",
            copyright_one: "Urheberrecht",
            copyright_two:
              "2023 Makerstar Capital, Inc. Alle Rechte vorbehalten.",
          },
          bitcoin_component: {
            heading: "Was ist Bitcoin?",
            description:
              "Bitcoin ist eine dezentrale digitale Währung, die unabhängig von Zentralbanken und anderen Finanzinstitutionen agiert. Sie basiert auf einer revolutionären Technologie namens Blockchain, die schnelle, sichere und transparente Transaktionen ohne Vermittler ermöglicht.",
          },
          live_bitcoin_price: "Live Bitcoin Preis",
          form_message: {
            name: "Name ist erforderlich",
            email: "Ungültige E-Mail",
            message: "Eine Nachricht ist erforderlich",
            alert: "Ihre Nachricht wurde gesendet!",
            sent: "gesendet!",
            send_success: "Ihre Nachricht wurde gesendet!",
            your_name: "Ihr Name",
            your_email: "E-Mail-Adresse",
            your_message: "Nachricht",
            placeholder_name: "Vollständiger Name",
            placeholder_email: "E-Mail-Adresse",
            placeholder_message: "Schreiben Sie hier Ihre Nachricht",
            send_button: "SENDEN",
          },
          cta: {
            title: "Treten Sie in die Bitcoin-Mining-Rush ein!",
            subtitle:
              "Treten Sie in die lukrative Welt des Bitcoin-Minings ein und investieren Sie heute in unser innovatives Unternehmen!",
          },
          get_started_component: {
            get: "Anfangen",
            started: "Jetzt",
          },
          mining_component: {
            title_first: "Was ist Bitcoin-Mining",
            title_second: "Und warum tun wir es?",
            subtitle:
              "Beim Bitcoin-Mining werden Transaktionen überprüft und zur Blockchain hinzugefügt, was leistungsstarke Computer erfordert. Wir tun dies, um die Zukunft von Bitcoin zu sichern und das Netzwerk zu sichern.",
          },
          mining_difficulty_component: {
            title_first: "Die Schwierigkeit des Bitcoin-Minings",
            title_second: "",
            subtitle:
              "Die Schwierigkeit des Bitcoin-Minings misst die Herausforderung, neue Bitcoins zu minen, und passt sich alle 2 Wochen für 10-minütige Blockzeiten an. Die Schwierigkeit steigt, wenn mehr Miner konkurrieren, um die Netzwerksicherheit zu gewährleisten.",
          },
          environment_component: {
            title_first: "Umweltfreundliche Fakten",
            title_second: "Über unser Mining.",
            subtitle_first:
              "Unsere Mining-Standorte befinden sich in Mississippi und Georgia. Mississippi Power ist der größte Partner in erneuerbaren Energien in Mississippi und arbeitet mit vier Solarunternehmen und der US-Marine zusammen, um vier Anlagen für Solarenergie in großem Maßstab zu bauen. Sie erzeugen über",
            subtitle_second: "Elektrizität, genug, um mehr als",
            subtitle_third:
              "für ein Jahr zu versorgen. Mississippi Power konzentriert sich auch auf Biomasse-Energie und verfolgt die Windenergieerzeugung in Küstengebieten. Georgia nutzt 4 Kernreaktoren, die für",
            subtitle_fourth:
              "ihrer gesamten Landesleistung verantwortlich sind. Sie sind auch führend in der Stromerzeugung aus Biomasse, mit 20% erneuerbaren Ressourcen, die über",
            subtitle_fifth:
              "ihrer gesamten inländischen Netto-Stromerzeugung im Jahr 2021 ausmachen.",
            subtitle_data_one: "160 MW",
            subtitle_data_two: "23.000 Haushalte",
            subtitle_data_three: "27%",
            subtitle_data_four: "ein Zehntel",
          },
          button: {
            cta: "Jetzt mit dem Mining beginnen",
            mining_difficulty: "Mining-Rendite berechnen",
            careers: "Details anzeigen",
            calculator: "Berechnen",
            load_more: "Mehr laden",
          },
          calculator: {
            title: "Bitcoin-Mining-Rechner",
            hash: "Hash-Rate (TH/s)",
            power: "Stromverbrauch (W)",
            kWh: "Kosten pro kWh ($)",
            price: "BTC-Preis ($)",
            results: {
              revenue: "Tägliche Einnahmen:",
              cost: "Tägliche Stromkosten:",
              profit: "Täglicher Gewinn:",
            },
          },
          article: {
            title: "Aktuelle Nachrichten",
            subtitle:
              "Um über die neuesten Entwicklungen in der Welt des Bitcoin informiert zu bleiben, schauen Sie sich diese Nachrichtenartikel an.",
            read_more: ". . .Weiterlesen",
            end_of_feed: ". . .Ende des Newsfeed. . .",
          },
          terms: {
            title: "Nutzungsbedingungen",
            term_one: "1. ANNAHME DER BEDINGUNGEN",
            paragraph_one:
              "Bitte lesen Sie und akzeptieren Sie die Nutzungsbedingungen („Bedingungen“) von Makerstar Capital Inc. vor der Nutzung der Webseite www.makerstarcapital.com oder jeder anderen Webseite, die von Makerstar Capital Inc. betrieben wird („Webseite“). Wenn Sie nicht allen Bedingungen zustimmen, dürfen Sie diese Webseite nicht nutzen. Makerstar Capital Inc. kann diese Bedingungen von Zeit zu Zeit aktualisieren. Jedes Mal, wenn Sie die Webseite nutzen, tun Sie dies unter den Bedingungen, die zum Zeitpunkt der Nutzung gelten. Bitte überprüfen Sie diese Bedingungen vor jeder Nutzung unserer Webseite. Die Bedingungen werden von Ihnen und Makerstar Capital Inc. eingegangen. Wenn Sie derzeit eine separate schriftliche Kauf- oder Lizenzvereinbarung mit Makerstar Capital Inc. für einen Dienst haben, gilt diese Vereinbarung für die Nutzung dieses Dienstes, soweit sie diesen Bedingungen widerspricht.",
            term_two: "2. HAFTUNGSAUSSCHLUSS",
            paragraph_two:
              "Obwohl Makerstar Capital Inc. versucht hat, genaue Informationen auf der Webseite bereitzustellen, übernimmt Makerstar Capital Inc. keine Verantwortung für die Genauigkeit der Informationen. Makerstar Capital Inc. kann die erwähnten Programme oder Produkte jederzeit ohne Ankündigung ändern. Die Erwähnung von Produkten oder Dienstleistungen, die nicht von Makerstar Capital Inc. stammen, dient nur Informationszwecken und stellt weder eine Befürwortung noch eine Empfehlung dar. DIE MATERIALIEN WERDEN „WIE SIE SIND“ OHNE JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GARANTIE IRGENDWELCHER ART EINSCHLIESSLICH GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT, NICHTVERLETZUNG VON GEISTIGEM EIGENTUM ODER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK ZUR VERFÜGUNG GESTELLT. IN KEINEM FALL HAFTET MAKERSTAR CAPITAL INC. ODER SEINE LIEFERANTEN ODER PARTNER FÜR SCHÄDEN (EINSCHLIESSLICH, OHNE BESCHRÄNKUNG, SCHÄDEN FÜR VERLUST VON GEWINNEN, BETRIEBSUNTERBRECHUNG, VERLUST VON INFORMATIONEN), DIE AUS DER NUTZUNG ODER DER UNFÄHIGKEIT ZUR NUTZUNG DER MATERIALIEN ENTSTEHEN, AUCH WENN MAKERSTAR CAPITAL INC. AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE. HINWEIS ZUM DATENSCHUTZ VON ELEKTRONISCHEN KOMMUNIKATIONEN (18USC 2701-2711): DIE FIRMA GARANTIERT NICHT DIE VERTRAULICHKEIT ODER PRIVATSPHÄRE VON KOMMUNIKATIONEN ODER INFORMATIONEN, DIE AUF DER WEBSEITE ODER EINER MIT DER WEBSEITE VERLINKTEN WEBSEITE ÜBERMITTELT WERDEN. Die Firma haftet nicht für die Privatsphäre von E-Mail-Adressen, Registrierungs- und Identifikationsinformationen, Festplattenspeicher, Kommunikationen, vertrauliche oder geschäftsgeheime Informationen oder irgendeinen anderen Inhalt, der auf der Ausrüstung der Firma gespeichert, über Netzwerke, die von der Seite aus zugänglich sind, übertragen oder anderweitig mit der Nutzung der Dienste verbunden ist.",
            term_three: "3. RECHTE AN GEISTIGEM EIGENTUM",
            paragraph_three:
              "Alle Inhalte, einschließlich Text, Daten, Tonaufnahmen, Ton, Fotografien, Grafiken, Videos oder andere Materialien („Material“), die auf dieser Webseite bereitgestellt werden, werden von Makerstar Capital Inc. oder den jeweiligen Herstellern, Autoren, Entwicklern und Anbietern (den „Drittanbieter-Anbietern“) bereitgestellt und sind das urheberrechtlich geschützte Werk von Makerstar Capital Inc. und/oder den Drittanbieter-Anbietern. Ohne die ausdrückliche Genehmigung von Makerstar Capital Inc. oder dem Drittanbieter-Anbieter darf kein Material in irgendeiner Form oder mit irgendwelchen Mitteln kopiert, reproduziert, verbreitet, neu veröffentlicht, heruntergeladen, angezeigt, gepostet oder übertragen werden, einschließlich, aber nicht beschränkt auf, elektronische, mechanische, Fotokopie, Aufnahme oder sonstige. Kein Teil der Webseite, einschließlich Logos, Grafiken, Sounds oder Bilder, darf in irgendeiner Weise oder mit irgendwelchen Mitteln ohne die vorherige ausdrückliche schriftliche Genehmigung von Makerstar Capital Inc. reproduziert oder neu übertragen werden. Ohne die vorherige ausdrückliche schriftliche Genehmigung von Makerstar Capital Inc. dürfen Sie auch keine Materialien, die auf dieser Webseite enthalten sind, auf einem anderen Server kopieren oder Marken von Makerstar Capital Inc. für irgendeinen Zweck verwenden. „Makerstar Capital Inc. Marken“ bezieht sich auf alle Namen, Marken, Markenzeichen, Logos, Designs, Slogans, Warenzeichen, Dienstleistungsmarken und andere Bezeichnungen, die Makerstar Capital Inc. in Verbindung mit ihren Produkten oder Dienstleistungen verwendet. Personen, die der Meinung sind, dass ihre Rechte an geistigem Eigentum auf der Webseite verletzt wurden, können sich an Makerstar Capital Inc. wenden und verlangen, dass das verletzende Material entfernt oder der Zugriff darauf blockiert wird. Makerstar Capital Inc. wird diese Beschwerden untersuchen. Wenn Makerstar Capital Inc. davon überzeugt ist, dass eine Verletzung stattfindet, wird es entsprechende Maßnahmen ergreifen. Wenn Sie der Meinung sind, dass Ihre Rechte an geistigem Eigentum verletzt werden, richten Sie Ihre Ansprüche bitte an: General Counsel, Makerstar Capital Inc., Park Plaza STE 1230 Irvine, CA 92614.",
            term_four: "4. MARKENZEICHEN",
            paragraph_four:
              "Die auf dieser Webseite angezeigten Warenzeichen, Logos und Dienstleistungsmarken („Marken“) sind Eigentum von Makerstar Capital Inc. oder anderen Dritten. Nutzern ist es nicht gestattet, diese Marken ohne die vorherige schriftliche Zustimmung von Makerstar Capital Inc. oder des Dritten, dem die Marke gehört, zu verwenden.",
            term_five: "5. LINKS ZU WEBSEITEN DRITTER",
            paragraph_five:
              "Diese Webseite kann Links zu Webseiten Dritter enthalten. Der Zugriff auf andere Internetseiten, die mit dieser Webseite verlinkt sind, erfolgt auf eigenes Risiko des Nutzers und Makerstar Capital Inc. ist nicht verantwortlich für die Genauigkeit oder Zuverlässigkeit von Informationen, Daten, Meinungen, Ratschlägen oder Aussagen, die auf diesen Seiten gemacht werden. Makerstar Capital Inc. stellt diese Links lediglich als Annehmlichkeit zur Verfügung und das Vorhandensein solcher Links impliziert keine Billigung.",
          },
        },
      },
      fr: {
        translation: {
          app_title:
            "Makerstar Capital | Révolutionner l'exploitation de Crypto",
          language: "Langue",
          nav: {
            home: "Accueil",
            job_sites: "Sites d'emploi",
            mining_calculator: "Calculateur d'exploitation",
            team: "Équipe de direction",
            invest_in_us: "Investissez en nous",
            join_our_team: "Rejoignez notre équipe",
          },
          features: {
            benefits_of_bitcoin: {
              title: "Avantages du Bitcoin",
              content:
                "Frais bas, transactions rapides, accessibilité mondiale, résistance à l'inflation et potentiel d'investissement.",
            },
            bitcoin_future: {
              title: "Pourquoi le Bitcoin est l'avenir",
              content:
                "Révolutionne la finance, augmente la sécurité, et soutient l'économie mondiale.",
            },
            secure: {
              title: "100% sécurisé",
              content:
                "La blockchain immuable, la cryptographie et le réseau décentralisé offrent une sécurité inégalée.",
            },
          },
          sub_hero_headers: {
            0: {
              first_half: "Découvrez notre",
              featured_words: "Liste en expansion",
              second_half: "des emplacements des sites",
            },
            1: {
              first_half: "Rencontrez nos",
              featured_words: "Décideurs",
              second_half: "",
            },
            2: {
              first_half: "Rejoignez la",
              featured_words: "Révolution Bitcoin;",
              second_half: "Investissez maintenant !",
            },
            3: {
              first_half: "Construisez votre avenir :",
              featured_words: "Postulez",
              second_half: "pour des postes ouverts",
            },
          },
          hero: {
            first_half: "Construire le",
            featured_words: "Futur",
            second_half: "de la finance",
            sub_first_half:
              "Notre mission est de construire l'avenir de la finance grâce à une infrastructure innovante",
            sub_featured_words: "d'exploitation de bitcoin.",
            sub_second_half:
              "Rejoignez-nous pour investir dans la prochaine génération de monnaie numérique.",
          },
          position_openings: {
            0: {
              position: "Technicien de centre de données",
              location: "Meridian, MS",
              description:
                "Nous recherchons un technicien expérimenté responsable de l'exécution des contrôles de maintenance préventive dans tout le centre de données (nettoyage, dépannage de base, inspection). Une fois que les unités sont identifiées comme irréparables, le technicien signalera au gestionnaire de site pour créer un ticket de réparation. Les techniciens sont responsables de...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
            1: {
              position: "Technicien de centre de données",
              location: "Leachville, AR",
              description:
                "Nous recherchons un technicien expérimenté responsable de l'exécution des contrôles de maintenance préventive dans tout le centre de données (nettoyage, dépannage de base, inspection). Une fois que les unités sont identifiées comme irréparables, le technicien signalera au gestionnaire de site pour créer un ticket de réparation. Les techniciens sont responsables de...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
          },
          job_sites: {
            1: {
              location: "VicksBurg, MS",
            },
            2: {
              location: "Meridian, MS",
            },
            3: {
              location: "Wiggins, MS",
            },
          },
          stats: {
            2: {
              title: "Déployé en MS",
              value: "43mW",
            },
            3: {
              title: "Plus d'ici fin d'année",
              value: "+80mW",
            },
          },
          footerLinks: {
            0: {
              title: "Liens utiles",
              links: {
                0: {
                  name: "Sites d'emploi",
                },
                1: {
                  name: "Calculateur",
                },
                2: {
                  name: "Contact",
                },
                3: {
                  name: "Carrières",
                },
                4: {
                  name: "Conditions et Services",
                },
              },
            },
          },
          footer_text: {
            title:
              "Libérer la puissance de l'exploitation de Bitcoin, un bloc à la fois.",
            copyright_one: "Droits d'auteur",
            copyright_two: "2023 Makerstar Capital, Inc. Tous droits réservés.",
          },
          bitcoin_component: {
            heading: "Qu'est-ce que le Bitcoin ?",
            description:
              "Le Bitcoin est une monnaie numérique décentralisée qui fonctionne indépendamment des banques centrales et des autres institutions financières. Il est basé sur une technologie révolutionnaire appelée blockchain qui permet des transactions rapides, sécurisées et transparentes sans intermédiaires.",
          },
          live_bitcoin_price: "Prix du Bitcoin en direct",
          form_message: {
            name: "Le nom est requis",
            email: "Email invalide",
            message: "Un message est requis",
            alert: "Votre message a été envoyé !",
            sent: "envoyé !",
            send_success: "Votre message a été envoyé !",
            your_name: "Votre nom",
            your_email: "Adresse Email",
            your_message: "Message",
            placeholder_name: "Nom complet",
            placeholder_email: "Adresse Email",
            placeholder_message: "Tapez votre message ici",
            send_button: "ENVOYER",
          },
          cta: {
            title: "Rejoignez la ruée vers l'exploitation de Bitcoin !",
            subtitle:
              "Rejoignez le monde lucratif de l'exploitation de Bitcoin et investissez dans notre entreprise innovante aujourd'hui !",
          },
          get_started_component: {
            get: "Commencer",
            started: "",
          },
          mining_component: {
            title_first: "Qu'est-ce que l'exploitation de Bitcoin",
            title_second: "Et pourquoi le faire ?",
            subtitle:
              "L'exploitation de Bitcoin est le processus de vérification des transactions et de leur ajout à la blockchain, qui nécessite des ordinateurs puissants. Nous le faisons pour assurer l'avenir de Bitcoin et aider à sécuriser le réseau.",
          },
          mining_difficulty_component: {
            title_first: "La difficulté de l'exploitation",
            title_second: "de Bitcoin.",
            subtitle:
              "La difficulté de l'exploitation de Bitcoin mesure le défi de l'exploitation de nouveaux Bitcoin, s'ajustant toutes les 2 semaines pour des temps de bloc de 10 minutes. La difficulté augmente à mesure que plus de mineurs entrent en compétition, garantissant la sécurité du réseau.",
          },
          environment_component: {
            title_first: "Faits respectueux de l'environnement",
            title_second: "Sur notre exploitation.",
            subtitle_first:
              "Nos sites d'exploitation sont situés au Mississippi et en Géorgie. Mississippi Power est le plus grand partenaire en énergie renouvelable du Mississippi et collabore avec quatre entreprises d'énergie solaire et la marine américaine pour construire quatre installations solaires à l'échelle de l'entreprise. Ils génèrent plus de",
            subtitle_second: "d'électricité, assez pour alimenter plus de",
            subtitle_third:
              "pour une année. Mississippi Power se concentre également sur l'énergie de la biomasse et poursuit la génération d'énergie éolienne dans les zones côtières. La Géorgie utilise 4 réacteurs nucléaires comptant pour",
            subtitle_fourth:
              "de leur puissance totale de l'état. Ils sont également en tête de la génération d'électricité à partir de biomasse, avec 20% de ressources renouvelables comptant pour plus de",
            subtitle_fifth:
              "de la génération nette totale d'électricité de l'État en 2021.",
            subtitle_data_one: "160 MW",
            subtitle_data_two: "23 000 maisons",
            subtitle_data_three: "27%",
            subtitle_data_four: "un dixième",
          },
          button: {
            cta: "Commencer l'exploitation maintenant",
            mining_difficulty: "Estimer les rendements de l'exploitation",
            careers: "Voir les détails",
            calculator: "Calculer",
            load_more: "Charger plus",
          },
          calculator: {
            title: "Calculateur d'exploitation Bitcoin",
            hash: "Taux de hachage (TH/s)",
            power: "Consommation d'énergie (W)",
            kWh: "Coût par kWh ($)",
            price: "Prix BTC ($)",
            results: {
              revenue: "Revenu quotidien:",
              cost: "Coût quotidien de l'énergie:",
              profit: "Profit quotidien:",
            },
          },
          article: {
            title: "Dernières nouvelles",
            subtitle:
              "Pour rester informé des dernières actualités dans le monde du bitcoin, consultez ces articles de presse.",
            read_more: ". . .Lire la suite",
            end_of_feed: ". . .Fin du flux de nouvelles. . .",
          },
          terms: {
            title: "Conditions de service",
            term_one: "1. ACCEPTATION DES CONDITIONS",
            paragraph_one:
              "Veuillez lire et accepter les Conditions d'Utilisation de Makerstar Capital Inc. («Conditions») avant d'utiliser le site Web www.makerstarcapital.com ou tout autre site Web maintenu par Makerstar Capital Inc. («Site Web»). Si vous n'acceptez pas toutes les Conditions, n'utilisez pas ce site Web. Makerstar Capital Inc. peut mettre à jour ces Conditions de temps à autre. Chaque fois que vous utilisez le site Web, vous serez sous les Conditions telles qu'elles existent au moment de l'utilisation. Veuillez vérifier ces termes avant chaque utilisation de notre site Web. Les Conditions sont conclues entre Makerstar Capital Inc. et vous. Si vous avez actuellement en vigueur un accord d'achat ou de licence écrit séparé avec Makerstar Capital Inc. pour un service, cet accord régira l'utilisation de ce service dans la mesure où il entre en conflit avec ces Conditions.",
            term_two: "2. AVERTISSEMENT",
            paragraph_two:
              "Bien que Makerstar Capital Inc. ait tenté de fournir des informations précises sur le site Web, Makerstar Capital Inc. n'assume aucune responsabilité quant à l'exactitude des informations. Makerstar Capital Inc. peut modifier les programmes ou les produits mentionnés à tout moment sans préavis. La mention de produits ou services non Makerstar Capital Inc. est à des fins d'information uniquement et ne constitue ni une approbation ni une recommandation. LES MATÉRIAUX SONT FOURNIS «EN L'ÉTAT» SANS AUCUNE GARANTIE EXPRESSE OU IMPLICITE DE QUELQUE NATURE QUE CE SOIT, Y COMPRIS LES GARANTIES DE QUALITÉ MARCHANDE, DE NON-VIOLATION DE PROPRIÉTÉ INTELLECTUELLE OU D'ADAPTATION À UN USAGE PARTICULIER. EN AUCUN CAS MAKERSTAR CAPITAL INC. OU SES FOURNISSEURS OU PARTENAIRES NE SERONT RESPONSABLES DE QUELQUE DOMMAGE QUE CE SOIT (Y COMPRIS, SANS LIMITATION, LES DOMMAGES POUR PERTE DE PROFITS, INTERRUPTION D'ACTIVITÉ, PERTE D'INFORMATIONS) RÉSULTANT DE L'UTILISATION OU DE L'INCAPACITÉ À UTILISER LES MATÉRIAUX, MÊME SI MAKERSTAR CAPITAL INC. A ÉTÉ INFORMÉ DE LA POSSIBILITÉ DE TELS DOMMAGES. AVIS SUR LA LOI SUR LA PROTECTION DE LA VIE PRIVÉE DES COMMUNICATIONS ÉLECTRONIQUES (18USC 2701-2711): LA SOCIÉTÉ NE GARANTIT PAS LA CONFIDENTIALITÉ OU LA VIE PRIVÉE DE TOUTE COMMUNICATION OU INFORMATION TRANSMISE SUR LE SITE OU TOUT SITE WEB LIÉ AU SITE WEB. La Société ne sera pas responsable de la confidentialité des adresses e-mail, des informations d'enregistrement et d'identification, de l'espace disque, des communications, des informations confidentielles ou des secrets commerciaux, ou de tout autre contenu stocké sur l'équipement de la Société, transmis sur les réseaux accessibles par le Site, ou autrement lié à l'utilisation des Services par l'Abonné.",
            term_three: "3. DROITS DE PROPRIÉTÉ INTELLECTUELLE",
            paragraph_three:
              "Tout le contenu, y compris les textes, les données, les enregistrements sonores, le son, les photographies, les graphiques, la vidéo ou d'autres matériaux («Matériel») fournis sur ce site Web est fourni par ou à Makerstar Capital Inc. par ses fabricants, auteurs, développeurs et fournisseurs respectifs (les «Fournisseurs tiers») et est l'œuvre protégée par le droit d'auteur de Makerstar Capital Inc. et/ou des Fournisseurs tiers. Sauf autorisation expresse de Makerstar Capital Inc. ou du Fournisseur tiers, aucun des Matériels ne peut être copié, reproduit, distribué, republié, téléchargé, affiché, posté ou transmis sous quelque forme ou par quelque moyen que ce soit, y compris, mais sans s'y limiter, électronique, mécanique, photocopies, enregistrement, ou autrement. Aucune partie du site Web, y compris les logos, les graphiques, les sons ou les images, ne peut être reproduite ou retransmise de quelque manière que ce soit, ou par quelque moyen que ce soit, sans l'autorisation écrite préalable de Makerstar Capital Inc. Vous ne pouvez également pas, sans l'autorisation écrite préalable de Makerstar Capital Inc., copier aucun Matériel contenu sur ce site Web sur un autre serveur, ou utiliser les Marques de Makerstar Capital Inc. à quelque fin que ce soit. «Marques de Makerstar Capital Inc.» se réfère à tous les noms, marques, marques, logos, dessins, slogans, marques de commerce, marques de service et autres désignations que Makerstar Capital Inc. utilise en relation avec ses produits ou services. Les individus qui estiment que leurs droits de propriété intellectuelle ont été violés sur le site Web, peuvent contacter Makerstar Capital Inc. et demander que le matériel contrefaisant soit retiré ou que l'accès à celui-ci soit bloqué. Makerstar Capital Inc. enquêtera sur ces plaintes. Là où Makerstar Capital Inc. est convaincu que l'infraction a lieu, il prendra des mesures appropriées. Si vous pensez que vos droits de propriété intellectuelle sont violés, veuillez adresser vos plaintes à: Conseiller général, Makerstar Capital Inc., Park Plaza STE 1230 Irvine, CA 92614.",
            term_four: "4. MARQUES COMMERCIALES",
            paragraph_four:
              "Les marques, logos et marques de service («Marques») affichés sur ce site Web sont la propriété de Makerstar Capital Inc. ou d'autres tiers. Les utilisateurs ne sont pas autorisés à utiliser ces Marques sans le consentement préalable écrit de Makerstar Capital Inc. ou de ce tiers qui peut posséder la Marque.",
            term_five: "5. LIENS VERS DES SITES TIERS",
            paragraph_five:
              "Ce site Web peut contenir des liens vers des sites tiers. L'accès à tout autre site Internet lié à ce site Web est à risque de l'utilisateur et Makerstar Capital Inc. n'est pas responsable de l'exactitude ou de la fiabilité de toute information, donnée, opinion, conseil ou déclaration faite sur ces sites. Makerstar Capital Inc. fournit ces liens simplement pour commodité et l'inclusion de tels liens n'implique pas une approbation.",
          },
        },
      },
      it: {
        translation: {
          app_title: "Makerstar Capital | Rivoluzionando il Crypto Mining",
          language: "Lingua",
          nav: {
            home: "Test",
            job_sites: "Siti di Lavoro",
            mining_calculator: "Calcolatore di Mining",
            team: "Squadra di Leadership",
            invest_in_us: "Investi in Noi",
            join_our_team: "Unisciti alla Nostra Squadra",
          },
          features: {
            benefits_of_bitcoin: {
              title: "Vantaggi del Bitcoin",
              content:
                "Basse commissioni, transazioni veloci, accessibilità globale, resistenza all'inflazione, e potenziale di investimento.",
            },
            bitcoin_future: {
              title: "Perché il Bitcoin è il Futuro",
              content:
                "Rivoluziona la finanza, aumenta la sicurezza, e supporta l'economia globale.",
            },
            secure: {
              title: "100% Sicuro",
              content:
                "Blockchain immutabile, crittografia, e rete decentralizzata offrono una sicurezza senza paragoni.",
            },
          },
          sub_hero_headers: {
            0: {
              first_half: "Scopri i Nostri",
              featured_words: "Crescenti Siti",
              second_half: "di Ubicazioni",
            },
            1: {
              first_half: "Incontra i Nostri",
              featured_words: "Decisori",
              second_half: "",
            },
            2: {
              first_half: "Unisciti alla",
              featured_words: "Rivoluzione del Bitcoin;",
              second_half: "Investi Ora!",
            },
            3: {
              first_half: "Costruisci il Tuo Futuro:",
              featured_words: "Candidati",
              second_half: "per Posizioni Aperte",
            },
          },
          hero: {
            first_half: "Costruendo il",
            featured_words: "Futuro",
            second_half: " della Finanza",
            sub_first_half:
              "La nostra missione è costruire il futuro della finanza attraverso un'innovativa",
            sub_featured_words: "infrastruttura di mining di bitcoin.",
            sub_second_half:
              "Unisciti a noi nell'investire nella prossima generazione di valuta digitale.",
          },
          position_openings: {
            0: {
              position: "Tecnico del Data Center",
              location: "Meridian, MS",
              description:
                "Stiamo cercando un Tecnico esperto che sia responsabile per l'esecuzione di controlli di manutenzione preventiva in tutto il data center (pulizia, risoluzione dei problemi di base, ispezione). Una volta identificati i dispositivi non riparabili, il tecnico lo segnalerà al Manager del sito per creare un ticket di riparazione. I tecnici sono responsabili per...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
            1: {
              position: "Tecnico del Data Center",
              location: "Leachville, AR",
              description:
                "Stiamo cercando un Tecnico esperto che sia responsabile per l'esecuzione di controlli di manutenzione preventiva in tutto il data center (pulizia, risoluzione dei problemi di base, ispezione). Una volta identificati i dispositivi non riparabili, il tecnico lo segnalerà al Manager del sito per creare un ticket di riparazione. I tecnici sono responsabili per...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
          },
          job_sites: {
            1: {
              location: "VicksBurg, MS",
            },
            2: {
              location: "Meridian, MS",
            },
            3: {
              location: "Wiggins, MS",
            },
          },
          stats: {
            2: {
              title: "Implementato in MS",
              value: "43mW",
            },
            3: {
              title: "Di più entro fine anno",
              value: "+80mW",
            },
          },
          footerLinks: {
            0: {
              title: "Link Utili",
              links: {
                0: {
                  name: "Siti di Lavoro",
                },
                1: {
                  name: "Calcolatore",
                },
                2: {
                  name: "Contatto",
                },
                3: {
                  name: "Carriere",
                },
                4: {
                  name: "Termini & Servizi",
                },
              },
            },
          },
          footer_text: {
            title:
              "Liberando la Potenza del Mining di Bitcoin, un Blocco alla Volta.",
            copyright_one: "Copyright",
            copyright_two:
              "2023 Makerstar Capital, Inc. Tutti i Diritti Riservati.",
          },
          bitcoin_component: {
            heading: "Cos'è il Bitcoin?",
            description:
              "Bitcoin è una valuta digitale decentralizzata che opera indipendentemente dalle banche centrali e altre istituzioni finanziarie. Si basa su una tecnologia rivoluzionaria chiamata blockchain che permette transazioni veloci, sicure e trasparenti senza la necessità di intermediari.",
          },
          live_bitcoin_price: "Prezzo Live del Bitcoin",
          form_message: {
            name: "Il nome è richiesto",
            email: "Email non valida",
            message: "Un messaggio è richiesto",
            alert: "Il tuo messaggio è stato inviato!",
            sent: "inviato!",
            send_success: "Il tuo messaggio è stato inviato!",
            your_name: "Il Tuo Nome",
            your_email: "Indirizzo Email",
            your_message: "Messaggio",
            placeholder_name: "Nome Completo",
            placeholder_email: "Indirizzo Email",
            placeholder_message: "Scrivi il tuo messaggio qui",
            send_button: "INVIA",
          },
          cta: {
            title: "Unisciti alla Corsa del Mining di Bitcoin!",
            subtitle:
              "Unisciti al lucrativo mondo del mining di Bitcoin e investi nella nostra innovativa azienda oggi!",
          },
          get_started_component: {
            get: "Inizia",
            started: "Ora",
          },
          mining_component: {
            title_first: "Cos'è il Mining di Bitcoin",
            title_second: "E Perché Farlo?",
            subtitle:
              "Il mining di Bitcoin è il processo di verifica delle transazioni e della loro aggiunta alla blockchain, che richiede potenti computer. Lo facciamo per garantire il futuro del Bitcoin e aiutare a proteggere la rete.",
          },
          mining_difficulty_component: {
            title_first: "La Difficoltà del Mining",
            title_second: "del Bitcoin.",
            subtitle:
              "La difficoltà del mining del Bitcoin misura la sfida di estrarre nuovi Bitcoin, aggiustandosi ogni 2 settimane per i tempi di blocco di 10 minuti. La difficoltà aumenta man mano che più minatori competono, garantendo la sicurezza della rete.",
          },
          environment_component: {
            title_first: "Fatti Ecologicamente Amichevoli",
            title_second: "Sul Nostro Mining.",
            subtitle_first:
              "I nostri siti di mining sono situati in Mississippi e Georgia. Mississippi Power è il maggior partner in energia rinnovabile nel Mississippi e sta collaborando con quattro aziende di energia solare e la Marina degli Stati Uniti per costruire quattro impianti solari su scala industriale. Generano oltre",
            subtitle_second: "di elettricità, sufficiente a alimentare più di",
            subtitle_third:
              "per un anno. Mississippi Power si sta anche concentrando sull'energia da biomassa e sta perseguendo la generazione di energia eolica nelle aree costiere. La Georgia utilizza 4 reattori nucleari che rappresentano il",
            subtitle_fourth:
              "del totale dell'energia dello stato. Sta anche guidando la generazione di elettricità da biomassa, con risorse rinnovabili che rappresentano oltre il",
            subtitle_fifth:
              "della produzione netta di elettricità dello stato nel 2021.",
            subtitle_data_one: "160 MW",
            subtitle_data_two: "23.000 case",
            subtitle_data_three: "27%",
            subtitle_data_four: "un decimo",
          },
          button: {
            cta: "Inizia a Minare Ora",
            mining_difficulty: "Stima Ritorni dal Mining",
            careers: "Vedi Dettagli",
            calculator: "Calcola",
            load_more: "Carica Altri",
          },
          calculator: {
            title: "Calcolatore di Mining Bitcoin",
            hash: "Hash rate (TH/s)",
            power: "Consumo energetico (W)",
            kWh: "Costo per kWh ($)",
            price: "Prezzo BTC ($)",
            results: {
              revenue: "Entrate Giornaliere:",
              cost: "Costo Energetico Giornaliero:",
              profit: "Profitto Giornaliero:",
            },
          },
          article: {
            title: "Ultime Notizie",
            subtitle:
              "Per rimanere informato sulle ultime novità nel mondo del bitcoin, dai un'occhiata a questi articoli di notizie.",
            read_more: ". . .Leggi di Più",
            end_of_feed: ". . .Fine del Feed di Notizie. . .",
          },
          terms: {
            title: "Termini di Servizio",
            term_one: "1. ACCETTAZIONE DEI TERMINI ",
            paragraph_one:
              "Si prega di leggere e accettare i Termini di Uso di Makerstar Capital Inc. (“Termini”) prima di utilizzare il sito Web www.makerstarcapital.com o qualsiasi altro sito Web gestito da Makerstar Capital Inc. (“Sito Web”). Se non si accettano tutti i Termini, non utilizzare questo Sito Web. Makerstar Capital Inc. può aggiornare questi Termini di volta in volta. Ogni volta che si utilizza il Sito Web si sarà soggetti ai Termini così come esistono al momento dell'uso. Si prega di controllare questi termini prima di ogni utilizzo del nostro Sito Web. I Termini sono stipulati da e tra Makerstar Capital Inc. e voi. Se avete attualmente in vigore un separato accordo scritto di acquisto o licenza con Makerstar Capital Inc. per un servizio, tale accordo regolerà l'uso di quel servizio nella misura in cui sia in conflitto con questi Termini.",
            term_two: "2. ESCLUSIONE DI RESPONSABILITÀ ",
            paragraph_two:
              "Sebbene Makerstar Capital Inc. abbia cercato di fornire informazioni accurate sul Sito Web, Makerstar Capital Inc. non si assume alcuna responsabilità per l'accuratezza delle informazioni. Makerstar Capital Inc. può cambiare i programmi o i prodotti menzionati in qualsiasi momento senza preavviso. La menzione di prodotti o servizi non di Makerstar Capital Inc. è solo a scopo informativo e non costituisce né un avallo né una raccomandazione. I MATERIALI SONO FORNITI “COSÌ COME SONO” SENZA GARANZIA ESPRESSA O IMPLICITA DI ALCUN TIPO INCLUSI GARANZIE DI COMMERCIABILITÀ, NON VIOLAZIONE DI PROPRIETÀ INTELLETTUALE, O IDONEITÀ PER UN PARTICOLARE SCOPO. IN NESSUN CASO MAKERSTAR CAPITAL INC. O I SUOI FORNITORI O PARTNER SARANNO RESPONSABILI PER QUALSIASI DANNO (INCLUSI, SENZA LIMITAZIONE, DANNI PER PERDITA DI PROFITTI, INTERRUZIONE DELLA ATTIVITÀ, PERDITA DI INFORMAZIONI) DERIVANTI DALL'USO O DALL'IMPOSSIBILITÀ DI USARE I MATERIALI, ANCHE SE MAKERSTAR CAPITAL INC. È STATA AVVISATA DELLA POSSIBILITÀ DI TALI DANNI. NOTIFICA SULLA PRIVACY DELLE COMUNICAZIONI ELETTRONICHE (18USC 2701-2711): LA SOCIETÀ NON GARANTISCE LA RISERVATEZZA O LA PRIVACY DI ALCUNA COMUNICAZIONE O INFORMAZIONE TRASMESSA SUL SITO O SU QUALSIASI SITO WEB COLLEGATO AL SITO WEB. La Società non sarà responsabile per la privacy degli indirizzi e-mail, delle informazioni di registrazione e di identificazione, dello spazio su disco, delle comunicazioni, delle informazioni riservate o segrete commerciali, o di qualsiasi altro Contenuto memorizzato sull'attrezzatura della Società, trasmesso su reti accessibili dal Sito, o comunque collegato all'uso del Sito da parte dell'Abbonato.",
            term_three: "3. DIRITTI DI PROPRIETÀ INTELLETTUALE ",
            paragraph_three:
              "Tutto il contenuto, incluso testo, dati, registrazioni sonore, suono, fotografie, grafica, video, o altri materiali (“Materiale”) fornito su questo Sito Web è fornito da o a Makerstar Capital Inc. dai rispettivi produttori, autori, sviluppatori e fornitori (i “Fornitori di Terze Parti”) ed è l'opera protetta da copyright di Makerstar Capital Inc. e/o dei Fornitori di Terze Parti. Tranne che come espressamente autorizzato da Makerstar Capital Inc. o dal Fornitore di Terze Parti, nessuno dei Materiali può essere copiato, riprodotto, distribuito, ripubblicato, scaricato, visualizzato, postato o trasmesso in qualsiasi forma o con qualsiasi mezzo, incluso, ma non limitato a, elettronico, meccanico, fotocopiatrice, registrazione, o altro. Nessuna parte del Sito Web, compresi loghi, grafica, suoni o immagini, può essere riprodotta o ritrasmessa in alcun modo, o con qualsiasi mezzo, senza il previo permesso scritto di Makerstar Capital Inc. Non potete, senza il previo permesso scritto di Makerstar Capital Inc., copiare alcun Materiale contenuto in questo Sito Web su un altro server, o utilizzare alcun Marchio Makerstar Capital Inc. per qualsiasi scopo. “Marchi Makerstar Capital Inc.” si riferisce a qualsiasi nome, marchio, brand, logo, design, slogan, trademark, marchi di servizio e altre designazioni che Makerstar Capital Inc. usa in relazione ai suoi prodotti o servizi. Gli individui che ritengono che i loro diritti di proprietà intellettuale siano stati violati sul Sito Web, possono contattare Makerstar Capital Inc. e richiedere che il materiale violante sia rimosso o l'accesso ad esso bloccato. Makerstar Capital Inc. indagherà su quelle lamentele. Dove Makerstar Capital Inc. è convinta che la violazione stia avvenendo, prenderà le opportune misure. Se credete che i vostri diritti di proprietà intellettuale stiano venendo violati, si prega di indirizzare le vostre rivendicazioni a: Consigliere Generale, Makerstar Capital Inc., Park Plaza STE 1230 Irvine, CA 92614.",
            term_four: "4. MARCHI REGISTRATI ",
            paragraph_four:
              "I marchi registrati, i loghi e i marchi di servizio (“Marchi”) visualizzati su questo Sito Web sono proprietà di Makerstar Capital Inc. o di altre terze parti. Gli utenti non sono autorizzati a utilizzare questi Marchi senza il previo consenso scritto di Makerstar Capital Inc. o di tale terza parte che potrebbe possedere il Marchio.",
            term_five: "5. LINK A SITI DI TERZE PARTI ",
            paragraph_five:
              "Questo Sito Web può contenere collegamenti a siti di terze parti. L'accesso a qualsiasi altro sito Internet collegato a questo Sito Web è a rischio dell'utente e Makerstar Capital Inc. non è responsabile per l'accuratezza o l'affidabilità di qualsiasi informazione, dato, opinione, consiglio o affermazione fatta su questi siti. Makerstar Capital Inc. fornisce questi collegamenti semplicemente per comodità e l'inclusione di tali collegamenti non implica un'approvazione.",
          },
        },
      },
      pt: {
        translation: {
          app_title: "Capital Makerstar | Revolucionando a Mineração de Cripto",
          language: "Língua",
          nav: {
            home: "Página Inicial",
            job_sites: "Locais de Emprego",
            mining_calculator: "Calculadora de Mineração",
            team: "Equipe de Gestão",
            invest_in_us: "Invista em Nós",
            join_our_team: "Junte-se à Nossa Equipe",
          },
          features: {
            benefits_of_bitcoin: {
              title: "Benefícios do Bitcoin",
              content:
                "Baixas taxas, transações rápidas, acessibilidade global, resistência à inflação e potencial de investimento.",
            },
            bitcoin_future: {
              title: "Porque Bitcoin é o Futuro",
              content:
                "Revoluciona o setor financeiro, aumenta a segurança e apoia a economia global.",
            },
            secure: {
              title: "100% Seguro",
              content:
                "A blockchain imutável, criptografia e a rede descentralizada oferecem uma segurança sem igual.",
            },
          },
          sub_hero_headers: {
            0: {
              first_half: "Descubra Nossas",
              featured_words: "Crescentes Localizações",
              second_half: "de Sites",
            },
            1: {
              first_half: "Conheça Nossos",
              featured_words: "Decisores",
              second_half: "",
            },
            2: {
              first_half: "Junte-se à",
              featured_words: "Revolução Bitcoin;",
              second_half: "Invista Já!",
            },
            3: {
              first_half: "Construa o Seu Futuro:",
              featured_words: "Candidate-se",
              second_half: "a Posições Disponíveis",
            },
          },
          hero: {
            first_half: "Construindo o",
            featured_words: "Futuro",
            second_half: " das Finanças",
            sub_first_half:
              "A nossa missão é construir o futuro das finanças através de inovadoras",
            sub_featured_words: "infraestruturas de mineração de bitcoin.",
            sub_second_half:
              "Junte-se a nós, investindo na próxima geração de moeda digital.",
          },
          position_openings: {
            0: {
              position: "Técnico de Centro de Dados",
              location: "Meridian, MS",
              description:
                "Estamos à procura de um Técnico experiente que será responsável por realizar verificações de manutenção preventiva em todo o centro de dados (limpeza, solução de problemas básica, inspeção). Quando unidades são identificadas como irreparáveis, o técnico reportará ao Gerente do Site para criar um ticket de reparo. Os técnicos são responsáveis por...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
            1: {
              position: "Técnico de Centro de Dados",
              location: "Leachville, AR",
              description:
                "Estamos à procura de um Técnico experiente que será responsável por realizar verificações de manutenção preventiva em todo o centro de dados (limpeza, solução de problemas básica, inspeção). Quando unidades são identificadas como irreparáveis, o técnico reportará ao Gerente do Site para criar um ticket de reparo. Os técnicos são responsáveis por...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
          },
          job_sites: {
            1: {
              location: "VicksBurg, MS",
            },
            2: {
              location: "Meridian, MS",
            },
            3: {
              location: "Wiggins, MS",
            },
          },
          stats: {
            2: {
              title: "Implementado em MS",
              value: "43mW",
            },
            3: {
              title: "Mais até o Final do Ano",
              value: "+80mW",
            },
          },
          footerLinks: {
            0: {
              title: "Links Úteis",
              links: {
                0: {
                  name: "Locais de Emprego",
                },
                1: {
                  name: "Calculadora",
                },
                2: {
                  name: "Contato",
                },
                3: {
                  name: "Carreiras",
                },
                4: {
                  name: "Termos & Serviços",
                },
              },
            },
          },
          footer_text: {
            title:
              "Desencadeando o Poder da Mineração de Bitcoin, Um Bloco de cada Vez.",
            copyright_one: "Direitos Autorais",
            copyright_two:
              "2023 Makerstar Capital, Inc. Todos os Direitos Reservados.",
          },
          bitcoin_component: {
            heading: "O que é Bitcoin?",
            description:
              "Bitcoin é uma moeda digital descentralizada que opera independentemente de bancos centrais e outras instituições financeiras. Está baseado numa tecnologia revolucionária chamada blockchain que permite transações rápidas, seguras e transparentes sem a necessidade de intermediários.",
          },
          live_bitcoin_price: "Preço Atual do Bitcoin",
          form_message: {
            name: "Nome é obrigatório",
            email: "Email inválido",
            message: "É necessário uma mensagem",
            alert: "Sua mensagem foi enviada!",
            sent: "enviado!",
            send_success: "Sua mensagem foi enviada com sucesso!",
            your_name: "Seu Nome",
            your_email: "Endereço de Email",
            your_message: "Mensagem",
            placeholder_name: "Nome Completo",
            placeholder_email: "Endereço de Email",
            placeholder_message: "Digite a sua mensagem aqui",
            send_button: "ENVIAR",
          },
          cta: {
            title: "Junte-se à corrida da mineração de Bitcoin!",
            subtitle:
              "Participe do lucrativo mundo da mineração de Bitcoin e invista em nossa empresa inovadora hoje!",
          },
          get_started_component: {
            get: "Comece",
            started: "Agora",
          },
          mining_component: {
            title_first: "O que é a mineração de Bitcoin",
            title_second: "E por que fazê-lo?",
            subtitle:
              "A mineração de Bitcoin é o processo de verificar transações e adicioná-las à blockchain, o que exige computadores poderosos. Fazemos isso para garantir o futuro do Bitcoin e ajudar a proteger a rede.",
          },
          mining_difficulty_component: {
            title_first: "A dificuldade da mineração de",
            title_second: "Bitcoin.",
            subtitle:
              "A dificuldade da mineração de Bitcoin mede o desafio de minerar novos Bitcoins, ajustando a cada 2 semanas para tempos de bloco de 10 minutos. A dificuldade aumenta à medida que mais mineradores competem, garantindo a segurança da rede.",
          },
          environment_component: {
            title_first: "Fatos ambientalmente amigáveis",
            title_second: "Sobre nossa mineração.",
            subtitle_first:
              "Nossos sites de mineração estão localizados em Mississippi e Georgia. A Mississippi Power é a maior parceira em energia renovável no Mississippi e está colaborando com quatro empresas de energia solar e a Marinha dos EUA para construir quatro instalações solares de grande escala. Elas geram mais de",
            subtitle_second:
              "de eletricidade, suficiente para abastecer mais de",
            subtitle_third:
              "por um ano. A Mississippi Power também está focando em energia de biomassa e buscando a geração de energia eólica em áreas costeiras. A Geórgia utiliza 4 reatores nucleares responsáveis por",
            subtitle_fourth:
              "de sua energia total no estado. Eles também estão liderando na geração de eletricidade a partir de biomassa, com 20% de recursos renováveis responsáveis por mais de",
            subtitle_fifth:
              "da geração líquida total de eletricidade no estado em 2021.",
            subtitle_data_one: "160 MW",
            subtitle_data_two: "23.000 residências",
            subtitle_data_three: "27%",
            subtitle_data_four: "um décimo",
          },
          button: {
            cta: "Comece a Minerar Agora",
            mining_difficulty: "Estime Retornos de Mineração",
            careers: "Veja Detalhes",
            calculator: "Calcular",
            load_more: "Carregar Mais",
          },
          calculator: {
            title: "Calculadora de Mineração de Bitcoin",
            hash: "Taxa de hash (TH/s)",
            power: "Consumo de energia (W)",
            kWh: "Custo por kWh ($)",
            price: "Preço do BTC ($)",
            results: {
              revenue: "Receita Diária:",
              cost: "Custo diário de energia:",
              profit: "Lucro diário:",
            },
          },
          article: {
            title: "Últimas Notícias",
            subtitle:
              "Para se manter informado sobre os últimos acontecimentos no mundo do bitcoin, confira estes artigos de notícias.",
            read_more: ". . .Leia Mais",
            end_of_feed: ". . .Fim do Feed de Notícias. . .",
          },
          terms: {
            title: "Termos de Serviço",
            term_one: "1. ACEITAÇÃO DOS TERMOS ",
            paragraph_one:
              "Por favor, leia e aceite os Termos de Uso da Makerstar Capital Inc. (“Termos”) antes de usar o site www.makerstarcapital.com ou qualquer outro site mantido pela Makerstar Capital Inc. (“Site”). Se você não concordar com todos os Termos, não use este site. A Makerstar Capital Inc. pode atualizar estes Termos de tempos em tempos. Cada vez que você usar o Site estará operando sob os Termos conforme existem no momento do uso. Por favor, verifique estes termos antes de cada uso do nosso Site. Os Termos são firmados entre a Makerstar Capital Inc. e você. Se você atualmente tem em vigor um acordo de compra ou licença escrito separado com a Makerstar Capital Inc. para um serviço, esse acordo deve reger o uso desse serviço na medida em que entre em conflito com estes Termos.",
            term_two: "2. ISENÇÃO DE RESPONSABILIDADE ",
            paragraph_two:
              "Embora a Makerstar Capital Inc. tenha tentado fornecer informações precisas no Site, a Makerstar Capital Inc. não assume responsabilidade pela precisão das informações. A Makerstar Capital Inc. pode alterar os programas ou produtos mencionados a qualquer momento sem aviso prévio. A menção de produtos ou serviços que não são da Makerstar Capital Inc. é apenas para fins informativos e não constitui nem um endosso nem uma recomendação. OS MATERIAIS SÃO FORNECIDOS “COMO ESTÃO” SEM QUALQUER GARANTIA EXPRESSA OU IMPLÍCITA DE QUALQUER TIPO, INCLUINDO GARANTIAS DE COMERCIALIZAÇÃO, NÃO VIOLAÇÃO DE PROPRIEDADE INTELECTUAL OU ADEQUAÇÃO A QUALQUER PROPÓSITO ESPECÍFICO. EM NENHUM CASO A MAKERSTAR CAPITAL INC. OU SEUS FORNECEDORES OU PARCEIROS SERÃO RESPONSÁVEIS POR QUAISQUER DANOS (INCLUINDO, SEM LIMITAÇÃO, DANOS POR PERDA DE LUCROS, INTERRUPÇÃO DE NEGÓCIOS, PERDA DE INFORMAÇÕES) RESULTANTES DO USO OU INCAPACIDADE DE USAR OS MATERIAIS, MESMO SE A MAKERSTAR CAPITAL INC. FOI AVISADA DA POSSIBILIDADE DE TAIS DANOS. AVISO DE PRIVACIDADE DE COMUNICAÇÕES ELETRÔNICAS (18USC 2701-2711): A EMPRESA NÃO GARANTE A CONFIDENCIALIDADE OU PRIVACIDADE DE QUALQUER COMUNICAÇÃO OU INFORMAÇÃO TRANSMITIDA NO SITE OU QUALQUER SITE LIGADO AO WEBSITE. A Empresa não será responsável pela privacidade de endereços de e-mail, informações de registro e identificação, espaço em disco, comunicações, informações confidenciais ou segredos comerciais, ou qualquer outro Conteúdo armazenado nos equipamentos da Empresa, transmitido em redes acessadas pelo Site, ou de outra forma relacionado com o uso dos Serviços pelo Assinante.",
            term_three: "3. DIREITOS DE PROPRIEDADE INTELECTUAL ",
            paragraph_three:
              "Todo o conteúdo, incluindo texto, dados, gravações de som, som, fotografias, gráficos, vídeo ou outros materiais (“Material”) fornecidos neste Site é fornecido por ou para a Makerstar Capital Inc. por seus respectivos fabricantes, autores, desenvolvedores e fornecedores (os “Fornecedores de Terceiros”) e é a obra protegida por direitos autorais da Makerstar Capital Inc. e/ou dos Fornecedores de Terceiros. Exceto conforme expressamente autorizado pela Makerstar Capital Inc. ou pelo Fornecedor de Terceiros, nenhum dos Materiais pode ser copiado, reproduzido, distribuído, republicado, baixado, exibido, postado ou transmitido de qualquer forma ou por qualquer meio, incluindo, mas não se limitando a, eletrônico, mecânico, fotocópia, gravação ou de outra forma. Nenhuma parte do Site, incluindo logotipos, gráficos, sons ou imagens, pode ser reproduzida ou retransmitida de qualquer maneira, ou por qualquer meio, sem a prévia permissão escrita da Makerstar Capital Inc. Você também não pode, sem a prévia permissão escrita da Makerstar Capital Inc., copiar quaisquer Materiais contidos neste site em qualquer outro servidor, ou usar qualquer Marcas da Makerstar Capital Inc. para qualquer propósito. “Marcas da Makerstar Capital Inc.” refere-se a quaisquer nomes, marcas, marcas, logotipos, designs, slogans, marcas comerciais, marcas de serviço e outras designações que a Makerstar Capital Inc. usa em conexão com seus produtos ou serviços. Indivíduos que acreditam que seus direitos de propriedade intelectual foram violados no Site, podem entrar em contato com a Makerstar Capital Inc. e solicitar que o material infrator seja removido ou o acesso a ele bloqueado. A Makerstar Capital Inc. investigará essas reclamações. Quando a Makerstar Capital Inc. estiver satisfeita de que a infração está ocorrendo, tomará as medidas adequadas. Se você acredita que seus direitos de propriedade intelectual estão sendo violados, por favor direcione suas reclamações para: Conselho Geral, Makerstar Capital Inc., Park Plaza STE 1230 Irvine, CA 92614.",
            term_four: "4. MARCAS REGISTRADAS ",
            paragraph_four:
              "As marcas comerciais, logotipos e marcas de serviço (“Marcas”) exibidos neste Site são propriedade da Makerstar Capital Inc. ou de terceiros. Os usuários não têm permissão para usar estas Marcas sem o consentimento prévio por escrito da Makerstar Capital Inc. ou do terceiro que pode ser o proprietário da Marca.",
            term_five: "5. LINKS PARA SITES DE TERCEIROS ",
            paragraph_five:
              "Este Site pode conter links para sites de terceiros que são controlados e operados por terceiros. A Makerstar Capital Inc. não tem controle sobre os sites vinculados e não é responsável pelo conteúdo de nenhum site vinculado ou qualquer link contido em um site vinculado.",
          },
        },
      },
      ru: {
        translation: {
          app_title:
            "Capital Makerstar | Революция в области майнинга криптовалют",
          language: "Язык",
          nav: {
            home: "Главная",
            job_sites: "Места работы",
            mining_calculator: "Калькулятор майнинга",
            team: "Команда управления",
            invest_in_us: "Инвестируйте в нас",
            join_our_team: "Присоединиться к нашей команде",
          },
          features: {
            benefits_of_bitcoin: {
              title: "Преимущества Биткоина",
              content:
                "Низкие комиссии, быстрые транзакции, глобальная доступность, устойчивость к инфляции и инвестиционный потенциал.",
            },
            bitcoin_future: {
              title: "Почему Биткоин - это будущее",
              content:
                "Революционизирует финансовую отрасль, повышает безопасность и поддерживает мировую экономику.",
            },
            secure: {
              title: "100% Безопасность",
              content:
                "Неизменная блокчейн, криптография и децентрализованная сеть обеспечивают непревзойденную безопасность.",
            },
          },
          sub_hero_headers: {
            0: {
              first_half: "Откройте для себя наши",
              featured_words: "Растущие Локации",
              second_half: "по местам работы",
            },
            1: {
              first_half: "Познакомьтесь с нашими",
              featured_words: "Руководителями",
              second_half: "",
            },
            2: {
              first_half: "Присоединяйтесь к",
              featured_words: "Революции Биткоина;",
              second_half: "Инвестируйте сегодня!",
            },
            3: {
              first_half: "Стройте свое Будущее:",
              featured_words: "Откликнуться",
              second_half: "на доступные позиции",
            },
          },
          hero: {
            first_half: "Строим",
            featured_words: "Будущее",
            second_half: " финансов",
            sub_first_half:
              "Наша миссия - строить будущее финансов через инновационные",
            sub_featured_words: "инфраструктуры майнинга биткоина.",
            sub_second_half:
              "Присоединяйтесь к нам, инвестируя в следующее поколение цифровой валюты.",
          },
          position_openings: {
            0: {
              position: "Техник Центра Данных",
              location: "Меридиан, МС",
              description:
                "Мы ищем опытного техника, который будет отвечать за проведение проверок предупредительного обслуживания по всему центру данных (уборка, решение базовых проблем, инспекция). Когда устройства определяются как неремонтопригодные, техник сообщит об этом Менеджеру сайта для создания заявки на ремонт. Техники отвечают за...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
            1: {
              position: "Техник Центра Данных",
              location: "Личвилль, АР",
              description:
                "Мы ищем опытного техника, который будет отвечать за проведение проверок предупредительного обслуживания по всему центру данных (уборка, решение базовых проблем, инспекция). Когда устройства определяются как неремонтопригодные, техник сообщит об этом Менеджеру сайта для создания заявки на ремонт. Техники отвечают за...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
          },
          job_sites: {
            1: {
              location: "Виксбург, МС",
            },
            2: {
              location: "Меридиан, МС",
            },
            3: {
              location: "Уиггинс, МС",
            },
          },
          stats: {
            2: {
              title: "Реализовано в МС",
              value: "43mW",
            },
            3: {
              title: "Больше к концу года",
              value: "+80mW",
            },
          },
          footerLinks: {
            0: {
              title: "Полезные ссылки",
              links: {
                0: {
                  name: "Места работы",
                },
                1: {
                  name: "Калькулятор",
                },
                2: {
                  name: "Контакт",
                },
                3: {
                  name: "Карьера",
                },
                4: {
                  name: "Условия и услуги",
                },
              },
            },
          },
          footer_text: {
            title: "Раскрываем мощь майнинга Биткоина, блок за блоком.",
            copyright_one: "Авторские права",
            copyright_two: "2023 Makerstar Capital, Inc. Все права защищены.",
          },
          bitcoin_component: {
            heading: "Что такое Биткоин?",
            description:
              "Биткоин - это децентрализованная цифровая валюта, которая работает независимо от центральных банков и других финансовых учреждений. Он основан на революционной технологии, называемой блокчейн, которая позволяет быстро, безопасно и прозрачно проводить транзакции без необходимости в посредниках.",
          },
          live_bitcoin_price: "Текущая цена Биткоина",
          form_message: {
            name: "Имя обязательно",
            email: "Неверный адрес электронной почты",
            message: "Требуется сообщение",
            alert: "Ваше сообщение отправлено!",
            sent: "отправлено!",
            send_success: "Ваше сообщение было успешно отправлено!",
            your_name: "Ваше имя",
            your_email: "Адрес электронной почты",
            your_message: "Сообщение",
            placeholder_name: "Полное имя",
            placeholder_email: "Адрес электронной почты",
            placeholder_message: "Введите ваше сообщение здесь",
            send_button: "ОТПРАВИТЬ",
          },

          cta: {
            title: "Присоединяйтесь к гонке майнинга Биткоина!",
            subtitle:
              "Участвуйте в прибыльном мире майнинга Биткоина и инвестируйте в нашу инновационную компанию сегодня!",
          },
          get_started_component: {
            get: "Начните",
            started: "Сейчас",
          },
          mining_component: {
            title_first: "Что такое майнинг Биткоина",
            title_second: "И почему его стоит делать?",
            subtitle:
              "Майнинг Биткоина - это процесс проверки транзакций и их добавления в блокчейн, что требует мощных компьютеров. Мы делаем это, чтобы гарантировать будущее Биткоина и помочь защитить сеть.",
          },
          mining_difficulty_component: {
            title_first: "Сложность майнинга",
            title_second: "Биткоина.",
            subtitle:
              "Сложность майнинга Биткоина отражает сложность добычи новых Биткоинов, корректируясь каждые 2 недели для времени блока в 10 минут. Сложность увеличивается по мере того, как больше майнеров конкурируют, обеспечивая безопасность сети.",
          },
          environment_component: {
            title_first: "Экологически дружелюбные факты",
            title_second: "О нашем майнинге.",
            subtitle_first:
              "Наши места для майнинга находятся в Миссисипи и Джорджии. Mississippi Power является крупнейшим партнером в области возобновляемой энергии в Миссисипи и сотрудничает с четырьмя солнечными энергетическими компаниями и Военно-морскими силами США для строительства четырех солнечных электростанций крупного масштаба. Они генерируют более",
            subtitle_second: "электричества, что достаточно для питания более",
            subtitle_third:
              "в течение года. Mississippi Power также активно занимается биомассой и развивает генерацию ветровой энергии в прибрежных районах. В Джорджии используется 4 ядерных реактора, которые обеспечивают",
            subtitle_fourth:
              "от общей энергии штата. Кроме того, они лидируют в производстве электроэнергии из биомассы, где 20% возобновляемых ресурсов составляют более",
            subtitle_fifth:
              "от общего объема внутренней генерации электроэнергии в штате в 2021 году.",
            subtitle_data_one: "160 МВт",
            subtitle_data_two: "23 000 домов",
            subtitle_data_three: "27%",
            subtitle_data_four: "десятая часть",
          },
          button: {
            cta: "Начать майнить сейчас",
            mining_difficulty: "Оценить прибыль от майнинга",
            careers: "Подробнее",
            calculator: "Рассчитать",
            load_more: "Загрузить еще",
          },
          calculator: {
            title: "Калькулятор майнинга биткоинов",
            hash: "Хэшрейт (ТХ/с)",
            power: "Потребляемая мощность (Вт)",
            kWh: "Стоимость за кВт-ч ($)",
            price: "Цена BTC ($)",
            results: {
              revenue: "Ежедневный доход:",
              cost: "Ежедневные затраты на энергию:",
              profit: "Ежедневная прибыль:",
            },
          },
          article: {
            title: "Последние новости",
            subtitle:
              "Чтобы быть в курсе последних событий в мире биткоина, ознакомьтесь с этими новостными статьями.",
            read_more: ". . .Читать дальше",
            end_of_feed: ". . .Конец новостной ленты. . .",
          },
          terms: {
            title: "Условия предоставления услуг",
            term_one: "1. ПРИНЯТИЕ УСЛОВИЙ",
            paragraph_one:
              "Пожалуйста, ознакомьтесь и примите Условия использования Makerstar Capital Inc. («Условия») перед использованием веб-сайта www.makerstarcapital.com или любого другого веб-сайта, поддерживаемого Makerstar Capital Inc. («Веб-сайт»). Если вы не согласны со всеми Условиями, не используйте этот Веб-сайт. Makerstar Capital Inc. может время от времени обновлять эти Условия. Каждый раз, когда вы используете Веб-сайт, вы будете действовать в соответствии с Условиями, действующими на момент использования. Пожалуйста, проверьте эти условия перед каждым использованием нашего Веб-сайта. Условия заключаются между Makerstar Capital Inc. и вами. Если у вас уже есть действующее отдельное письменное соглашение о покупке или лицензии с Makerstar Capital Inc. на какую-либо услугу, это соглашение будет регулировать использование этой услуги в той степени, в которой оно противоречит этим Условиям.",
            term_two: "2. ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ",
            paragraph_two:
              "Хотя Makerstar Capital Inc. стремится предоставить точную информацию на Веб-сайте, Makerstar Capital Inc. не несет ответственности за точность информации. Makerstar Capital Inc. может в любое время изменять упомянутые программы или продукты без предварительного уведомления. Упоминание продуктов или услуг, не являющихся продуктами или услугами Makerstar Capital Inc., предоставляется только в информационных целях и не является поддержкой. МАТЕРИАЛЫ ПРЕДОСТАВЛЯЮТСЯ «КАК ЕСТЬ» БЕЗ КАКИХ-ЛИБО ЯВНЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ ГАРАНТИЙ ЛЮБОГО ВИДА, ВКЛЮЧАЯ ГАРАНТИИ ПРИГОДНОСТИ ДЛЯ ОПРЕДЕЛЕННЫХ ЦЕЛЕЙ И ОТСУТСТВИЯ НАРУШЕНИЯ АВТОРСКИХ ПРАВ. В НИКАКОМ СЛУЧАЕ MAKERSTAR CAPITAL INC. ИЛИ ЕЕ ПОСТАВЩИКИ ИЛИ ПАРТНЕРЫ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ЗА ЛЮБЫЕ УБЫТКИ (ВКЛЮЧАЯ, БЕЗ ОГРАНИЧЕНИЙ, УБЫТКИ ОТ ПОТЕРИ ПРИБЫЛИ, ПРЕРЫВАНИЯ БИЗНЕСА, ПОТЕРИ ИНФОРМАЦИИ), ВОЗНИКШИЕ В РЕЗУЛЬТАТЕ ИСПОЛЬЗОВАНИЯ ИЛИ НЕВОЗМОЖНОСТИ ИСПОЛЬЗОВАНИЯ МАТЕРИАЛОВ, ДАЖЕ ЕСЛИ MAKERSTAR CAPITAL INC. БЫЛА ПРЕДУПРЕЖДЕНА О ВОЗМОЖНОСТИ ТАКИХ УБЫТКОВ. ЗАМЕЧАНИЕ О КОНФИДЕНЦИАЛЬНОСТИ ЭЛЕКТРОННЫХ КОММУНИКАЦИЙ (18 USC 2701-2711): КОМПАНИЯ НЕ ГАРАНТИРУЕТ КОНФИДЕНЦИАЛЬНОСТЬ ИЛИ ЧАСТНОСТЬ ЛЮБОГО ОБМЕНА ИЛИ ИНФОРМАЦИИ, ПЕРЕДАВАЕМЫХ НА САЙТЕ ИЛИ ЛЮБОМ ВЕБ-САЙТЕ, ССЫЛАЮЩЕМСЯ НА ВЕБ-САЙТ. Компания не несет ответственности за конфиденциальность адресов электронной почты, регистрационных и идентификационных данных, дискового пространства, коммуникаций, конфиденциальной или коммерческой информации или любого другого содержимого, хранящегося на оборудовании Компании, передаваемого по сети, доступного через сайт или иным образом связанного с использованием Услуг абонентом.",
            term_three: "3. ПРАВА ИНТЕЛЛЕКТУАЛЬНОЙ СОБСТВЕННОСТИ",
            paragraph_three:
              "Весь контент, включая текст, данные, звуковые записи, звук, фотографии, графику, видео или другие материалы («Материалы»), предоставленные на этом Веб-сайте, предоставляются Makerstar Capital Inc. или ее соответствующими производителями, авторами, разработчиками и поставщиками («Поставщики сторон») и является объектом авторского права Makerstar Capital Inc. и/или Поставщиков сторон. За исключением случаев, когда Makerstar Capital Inc. или Поставщик сторон явно разрешили, ни одна часть Материалов не может быть скопирована, воспроизведена, распространена, перепечатана, загружена, отображена, размещена или передана в любой форме или любыми средствами, включая, но не ограничиваясь, электронными, механическими, фотокопировальными, записывающими или иными. Ни одна часть Веб-сайта, включая логотипы, графику, звуки или изображения, не может быть воспроизведена или перепечатана, любым способом или любыми средствами, без предварительного письменного разрешения Makerstar Capital Inc. Вы также не можете копировать любые материалы, содержащиеся на этом Веб-сайте, на любом другом сервере без предварительного письменного разрешения Makerstar Capital Inc. Также вы не можете использовать никакие товарные знаки Makerstar Capital Inc. без предварительного письменного разрешения Makerstar Capital Inc. «Товарные знаки Makerstar Capital Inc.» означает любые названия, знаки, бренды, логотипы, дизайны, слоганы, товарные знаки, услуги Makerstar Capital Inc. и другие обозначения, используемые Makerstar Capital Inc. в связи со своими продуктами или услугами. Лица, считающие, что их интеллектуальные права были нарушены на Веб-сайте, могут обратиться к Makerstar Capital Inc. с просьбой о удалении нарушающего материала или блокировке доступа к нему. Makerstar Capital Inc. проведет расследование таких жалоб. Если Makerstar Capital Inc. установит, что нарушение имеет место, будут приняты соответствующие меры. Если вы считаете, что ваши интеллектуальные права были нарушены, пожалуйста, обратитесь с вашими претензиями: Генеральный советник, Makerstar Capital Inc., Park Plaza STE 1230 Irvine, CA 92614.",
            term_four: "4. ТОВАРНЫЕ ЗНАКИ",
            paragraph_four:
              "Товарные знаки, логотипы и знаки обслуживания («Знаки»), отображаемые на этом Веб-сайте, являются собственностью Makerstar Capital Inc. или других третьих сторон. Пользователям не разрешается использовать эти Знаки без предварительного письменного согласия Makerstar Capital Inc. или такой третьей стороны, которая может владеть Знаком.",
            term_five: "5. ССЫЛКИ НА САЙТЫ ТРЕТЬИХ СТОРОН",
            paragraph_five:
              "На этом Веб-сайте могут содержаться ссылки на сайты третьих сторон. Доступ к любому другому интернет-сайту, связанному с этим Веб-сайтом, осуществляется на свой страх и риск пользователя, и Makerstar Capital Inc. не несет ответственности за точность или надежность информации, данных, мнений, советов или заявлений, сделанных на этих сайтах. Makerstar Capital Inc. предоставляет эти ссылки исключительно в качестве удобства, и включение таких ссылок не означает поддержки.",
          },
        },
      },
      zh: {
        translation: {
          app_title: " Makerstar Capital | 颠覆加密货币挖矿的未来",
          language: "语言",
          nav: {
            home: "首页",
            job_sites: "工作地点",
            mining_calculator: "挖矿计算器",
            team: "领导团队",
            invest_in_us: "投资我们",
            join_our_team: "加入我们的团队",
          },
          features: {
            benefits_of_bitcoin: {
              title: "比特币的好处",
              content: "低手续费，快速交易，全球可用，抵抗通胀，投资潜力。",
            },
            bitcoin_future: {
              title: "为何比特币是未来",
              content: "革新金融，增加安全性，支持全球经济。",
            },
            secure: {
              title: "100% 安全",
              content:
                "不可更改的区块链，密码学，和去中心化的网络提供无与伦比的安全性。",
            },
          },
          sub_hero_headers: {
            0: {
              first_half: "探索我们",
              featured_words: "不断增长的",
              second_half: "站点位置列表",
            },
            1: {
              first_half: "会见我们的",
              featured_words: "决策者",
              second_half: "",
            },
            2: {
              first_half: "加入",
              featured_words: "比特币革命；",
              second_half: "现在就投资！",
            },
            3: {
              first_half: "建立您的未来：",
              featured_words: "申请",
              second_half: "空缺职位",
            },
          },
          hero: {
            first_half: "构建金融",
            featured_words: "未来",
            second_half: "",
            sub_first_half: "我们的使命是通过创新的",
            sub_featured_words: "比特币挖矿基础设施",
            sub_second_half:
              "构建金融的未来。请加入我们，投资数字货币的下一代。",
          },
          position_openings: {
            0: {
              position: "数据中心技术员",
              location: "梅里迪恩，密西西比州",
              description:
                "我们正在寻找一位经验丰富的技术员，负责在数据中心进行预防性维护检查（清洁，基本故障排除，检查）。一旦确定无法修复的设备，技术员将向站点经理报告以创建修理工单。技术员负责...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
            1: {
              position: "数据中心技术员",
              location: "雷奇维尔, 阿肯色",
              description:
                "我们正在寻找一位经验丰富的技术员，负责在数据中心进行预防性维护检查（清洁，基本故障排除，检查）。一旦确定无法修复的设备，技术员将向站点经理报告以创建修理工单。技术员负责...",
              link: "https://www.indeed.com/job/data-center-technician-3733bab170b1abb1?_ga=2.57638639.479615685.1680209229-1695951322.1679956967",
            },
          },
          job_sites: {
            1: {
              location: "密西西比州，维克斯堡",
            },
            2: {
              location: "密西西比州，梅里迪恩",
            },
            3: {
              location: "密西西比州，韦金斯",
            },
          },
          stats: {
            2: {
              title: "已在密西西比部署",
              value: "43mW",
            },
            3: {
              title: "年底前将增加",
              value: "+80mW",
            },
          },
          footerLinks: {
            0: {
              title: "有用的链接",
              links: {
                0: {
                  name: "工作地点",
                },
                1: {
                  name: "计算器",
                },
                2: {
                  name: "联系我们",
                },
                3: {
                  name: "职业",
                },
                4: {
                  name: "条款和服务",
                },
              },
            },
          },
          footer_text: {
            title: "一块块释放比特币挖矿的力量。",
            copyright_one: "版权所有",
            copyright_two: "2023 Makerstar Capital, Inc. 保留所有权利。",
          },
          bitcoin_component: {
            heading: "什么是比特币？",
            description:
              "比特币是一种独立于中央银行和其他金融机构运作的去中心化数字货币。它基于一种名为区块链的革命性技术，允许进行快速，安全，透明的交易，无需中间人。",
          },
          live_bitcoin_price: "实时比特币价格",
          form_message: {
            name: "需要输入名称",
            email: "无效的电子邮件",
            message: "需要输入信息",
            alert: "您的信息已发送！",
            sent: "已发送！",
            send_success: "您的信息已发送！",
            your_name: "您的名字",
            your_email: "电子邮件地址",
            your_message: "信息",
            placeholder_name: "全名",
            placeholder_email: "电子邮件地址",
            placeholder_message: "在这里输入您的信息",
            send_button: "发送",
          },
          cta: {
            title: "加入比特币挖矿的狂潮！",
            subtitle: "立即加入比特币挖矿的丰富世界，投资我们的创新公司！",
          },
          get_started_component: {
            get: "开始",
            started: "开始",
          },
          mining_component: {
            title_first: "什么是比特币挖矿",
            title_second: "为什么要做它？",
            subtitle:
              "比特币挖矿是验证交易并将其添加到区块链的过程，这需要强大的计算机。我们这样做是为了确保比特币的未来并帮助保护网络。",
          },
          mining_difficulty_component: {
            title_first: "比特币挖矿",
            title_second: "的难度。",
            subtitle:
              "比特币挖矿的难度衡量挖掘新比特币的挑战性，每2周调整一次以确保10分钟的区块时间。随着更多矿工的竞争，难度会提高，确保网络安全。",
          },
          environment_component: {
            title_first: "关于我们挖矿的",
            title_second: "环保事实。",
            subtitle_first:
              "我们的挖矿场地位于密西西比和乔治亚。密西西比电力公司是密西西比州最大的可再生能源合作伙伴，正在与四家太阳能企业和美国海军合作建设四个公用规模的太阳能设施。他们生成了超过",
            subtitle_second: "的电力，足以供应超过",
            subtitle_third:
              "一年的电力。密西西比电力公司也正在关注生物质能源，并在沿海地区寻求风能发电。乔治亚利用4个核反应器占据了",
            subtitle_fourth:
              "他们的总州电力。他们还在利用生物质进行电力发电，20%的可再生资源占2021年该州在内的电力净发电量的",
            subtitle_fifth: "超过十分之一。",
            subtitle_data_one: "160 MW",
            subtitle_data_two: "23,000个家庭",
            subtitle_data_three: "27%",
            subtitle_data_four: "十分之一",
          },
          button: {
            cta: "现在开始挖矿",
            mining_difficulty: "估计挖矿收益",
            careers: "查看详细信息",
            calculator: "计算",
            load_more: "加载更多",
          },
          calculator: {
            title: "比特币挖矿计算器",
            hash: "哈希率 (TH/s)",
            power: "功耗 (W)",
            kWh: "每千瓦时的成本 ($)",
            price: "BTC价格 ($)",
            results: {
              revenue: "每日收入：",
              cost: "每日电力成本：",
              profit: "每日利润：",
            },
          },
          article: {
            title: "最新新闻",
            subtitle: "为了了解比特币世界的最新动态，可以阅读这些新闻文章。",
            read_more: ". . .阅读更多",
            end_of_feed: ". . .新闻源已经到底. . .",
          },
          terms: {
            title: "服务条款",
            term_one: "1. 接受条款 ",
            paragraph_one:
              "在使用www.makerstarcapital.com网站或Makerstar Capital Inc.维护的任何其他网站（“网站”）之前，请阅读并接受Makerstar Capital Inc.的使用条款（“条款”）。如果你不同意所有的条款，请不要使用这个网站。Makerstar Capital Inc.可能会不时更新这些条款。每次你使用网站，你将按照使用时的条款进行操作。请在每次使用我们的网站之前检查这些条款。条款是由Makerstar Capital Inc.和你之间签订的。如果你当前已经有一份与Makerstar Capital Inc.签订的独立的书面购买或许可协议，那么该协议将在与这些条款冲突的情况下管理该服务的使用。",
            term_two: "2. 免责声明 ",
            paragraph_two:
              "尽管Makerstar Capital Inc.试图在网站上提供准确的信息，但Makerstar Capital Inc.对信息的准确性不承担任何责任。Makerstar Capital Inc.可能会随时更改所提及的程序或产品，而不需要提前通知。非Makerstar Capital Inc.的产品或服务的提及仅仅是为了信息的目的，并不构成对其的背书或推荐。这些材料“按原样”提供，没有任何明示或暗示的保证，包括但不限于对适销性、非侵权或适用于特定目的的保证。在任何情况下，对于由于使用或无法使用这些材料而造成的任何损害（包括但不限于利润损失、业务中断、信息丢失），Makerstar Capital Inc.以及其供应商或合作伙伴都不承担任何责任，即使Makerstar Capital Inc.已经被告知可能会发生此类损害。电子通信隐私法告示（18USC 2701-2711）：公司不对在网站或与网站链接的任何网站上传输或储存的任何通信或信息的保密性或隐私性做出任何保证。对于存储在公司设备上、通过网站访问的网络传输或以其他方式与订阅者使用服务连接的电子邮件地址、注册和识别信息、磁盘空间、通信、机密或商业秘密信息，或任何其他内容的隐私，公司不承担任何责任。",
            term_three: "3. 知识产权 ",
            paragraph_three:
              "本网站提供的所有内容，包括文本、数据、录音、声音、照片、图形、视频或其他材料（“材料”）由Makerstar Capital Inc.或其各自的制造商、作者、开发者和供应商（“第三方提供商”）提供，并为Makerstar Capital Inc.及/或第三方提供商的版权作品。除非得到Makerstar Capital Inc.或第三方提供商的明确授权，否则任何人不得以任何形式或方式，包括但不限于电子、机械、复印、录音或其他方式复制、再版、分发、再版、下载、显示、张贴或传输任何材料。未经Makerstar Capital Inc.事先明确书面许可，任何人不得在任何其他服务器上复制本网站上包含的任何材料，也不得使用任何Makerstar Capital Inc.的标记进行任何目的。“Makerstar Capital Inc.的标记”是指Makerstar Capital Inc.在其产品或服务中使用的任何名称、标记、品牌、logo、设计、口号、商标、服务标记和其他指定。认为其知识产权在网站上被侵犯的个人，可以联系Makerstar Capital Inc.并要求移除侵权材料或阻止访问它。Makerstar Capital Inc.将调查那些投诉。当Makerstar Capital Inc.确信侵权正在发生时，它将采取适当的行动。如果你认为你的知识产权正在被侵犯，请将你的索赔发送到：Makerstar Capital Inc.总法律顾问，Park Plaza STE 1230 Irvine, CA 92614。",
            term_four: "4. 商标 ",
            paragraph_four:
              "本网站上显示的商标、标志和服务标记（“标记”）是Makerstar Capital Inc.或其他第三方的财产。未经Makerstar Capital Inc.或可能拥有这些标记的第三方的事先书面同意，用户不得使用这些标记。",
            term_five: "5. 第三方网站链接 ",
            paragraph_five:
              "本网站可能包含到第三方网站的链接。访问与本网站链接的任何其他互联网网站都是用户自己的风险，Makerstar Capital Inc.对这些网站上的任何信息、数据、观点、建议或声明的准确性或可靠性不承担任何责任。Makerstar Capital Inc.仅为了方便提供这些链接，包含这样的链接并不意味着赞同。",
          },
        },
      },
    },
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    // react: { useSuspense: false },
    // backend: {
    //   loadPath: "src/assets/locales/{{lng}}/translation.json",
    // },
  });

export default i18next;
