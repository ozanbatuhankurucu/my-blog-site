import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const fiMessages: PulseMessages = {
  languageLabel: 'Sivun kieli',
  video: {
    ariaLabel: `${PULSE_APP_NAME} – tuotteen esittely`,
    playLabel: 'Toista esittely',
    unsupported: 'Selaimesi ei tue upotettua videota.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Keskittymisajastin iPhonelle ja Macille`,
    metaDescription: `${PULSE_APP_NAME} on rauhallinen Pomodoro-ajastin iPhonelle ja Macille, jossa on Focus History, Daily Focus Goals, Apple- ja Google-kirjautuminen sekä offline-first-synkronointi laitteidesi välillä.`,
    heroImageAlt: `${PULSE_APP_NAME} – keskittymisajastin ja viikoittainen historiakatsaus`,
    backToProjects: 'Takaisin projekteihin',
    availableOnAppStore: 'Saatavilla App Storessa',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Keskittymisajastin iPhonelle ja Macille',
    tagline: 'Lempeä Pomodoro-ajastin, joka auttaa keskittymään — iPhonella ja Macin valikkopalkissa.',
    description: `Aloita keskittymisistunto, pidä tauko ja pidä historiasi mukanasi. Kirjaudu Applella tai Googlella, jotta Daily Focus Goals, Focus History ja synkronoidut asetukset pysyvät tililläsi iPhonella ja Macilla — samalla kun ajastin toimii offline-tilassa.`,
    downloadCta: 'Lataa App Storesta',
    watchDemo: 'Katso toiminnassa',
    supportCta: 'Tuki',
    stats: {
      platformLabel: 'Alustat',
      platformValue: 'iPhone ja Mac',
      languagesLabel: 'Kielet',
      languagesValue: '48 kieltä',
      dataLabel: 'Synkronointi',
      dataValue: 'Offline-first',
      builtWithLabel: 'Tehty',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Rauhallisempi tapa keskittyä',
      title: 'Ajastin on paikalla, kun tarvitset sitä — ja poissa, kun et.',
      description: `Macilla avaa ${PULSE_APP_NAME} valikkopalkista, valitse istunto ja sulje ponnahdusikkuna. iPhonella aloita keskittyminen aloitusnäytöltä ja jatka Live Activities -toiminnolla tuetuilla laitteilla. Ajastin jatkaa, kun sinä teet.`,
      caption:
        'Keskittymis- ja taukoajastimet, Daily Focus Goals, Focus History, putkiseuranta, 48 kielen lokalisointi ja valinnaiset valmistumisilmoitukset.',
    },
    rhythm: {
      eyebrow: 'Rytmi, jota hallitset',
      title: 'Keskittyminen, tauko, palautuminen, toisto.',
      description: `${PULSE_APP_NAME} ehdottaa seuraavaa vaihetta, mutta ei koskaan aloita istuntoa puolestasi. Jokaisen keston voi säätää päivääsi sopivaksi.`,
    },
    featureShowcases: [
      {
        title: 'Keskittyminen',
        badge: '1–120 min',
        description:
          'Lähtölaskenta etenee hiljaa työn aikana. Tauota, nollaa tai ohita — hallinta pysyy sinulla iPhonella ja Macilla.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} – käynnissä oleva keskittymisistunto tauko-ohjaimilla ja lähtölaskennalla`,
      },
      {
        title: 'Valikkopalkki',
        badge: 'Mac',
        description:
          'Macilla näytä tai piilota jäljellä oleva aika valikkopalkissa. Kiinteäleveyksinen tilaelementti pysyy paikallaan eikä siirrä ponnahdusikkunaa, enintään 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} – lähtölaskenta macOS-valikkopalkissa`,
      },
      {
        title: 'Mukauttaminen',
        badge: 'Omat säännöt',
        description:
          'Joustavat kestot, Daily Focus Goals, valmistumisäänet ja -animaatiot, 48 käyttöliittymän kieltä ja ulkoasuasetukset.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} – asetukset kestoille, valmistumisilmoituksille, kielelle ja tavoitteille`,
      },
    ],
    history: {
      eyebrow: 'Edistystä ilman painetta',
      title: 'Näe työn kasaantuvan.',
      description:
        'Avaa Focus History tarkastellaksesi summia ja putkia. Kirjautuneena historia voi synkronoitua iPhonen ja Macin välillä, jotta edistys seuraa mukana.',
      items: ['Kokonaiskeskittymisaika', 'Valmiit istunnot', 'Nykyinen putki', 'Paras putki', 'Daily Focus Goals'],
      imageAlt: `${PULSE_APP_NAME} – viikoittainen keskittymishistoria istuntomäärineen, tunteineen ja putkineen`,
    },
    feedback: {
      eyebrow: 'Lempeää palautetta, omalla tavallasi',
      title: 'Tee valmistumisesta palkitsevaa.',
      description: `Valitse kuudesta rauhallisesta valmistumisäänestä ja kuudesta eläinjuhlasta — tai poista kumpikin käytöstä. ${PULSE_APP_NAME} näyttää oikean viestin, kun keskittymis-, lyhyen tauon tai pitkän tauon istunto päättyy.`,
      items: [
        'Istuntokohtainen valmistumisotsikko ja alaotsikko',
        'Käyttöliittymä 48 kielellä, järjestelmän kieli oletuksena',
        'Kieli- ja ulkoasuasetukset kullakin laitteella',
        'Valinnaiset motivointimuistutukset iPhonella',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} – asetukset kestoille, kielelle, valmistumisäänille ja tavoitteille`,
      celebrationImageAlt: `${PULSE_APP_NAME} – pupun juhlinta-animaatio istunnon valmistuessa`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Apina', 'Koala', 'Kissa', 'Kettu', 'Panda', 'Jänis'],
    },
    native: {
      eyebrow: 'Natiivi suunnittelultaan',
      title: 'Tehty tuntumaan kodikkaalta Apple-laitteilla.',
      description: `SwiftUI, AppKit ja järjestelmäkonventiot pitävät ${PULSE_APP_NAME} nopeana ja tuttuna — VoiceOver-teksteillä ja Reduce Motion -tuella kauttaaltaan.`,
      features: [
        {
          title: 'Macin valikkopalkki ja iPhonen aloitusnäkymä',
          description: 'Hiljainen kumppani valikkopalkissa Macilla ja keskittynyt aloitusnäkymä iPhonella.',
        },
        {
          title: 'Pysyy tarkkana',
          description:
            'Istunnot pysyvät oikeina unen, heräämisen ja uudelleenkäynnistysten yli; historia tallentuu todelliseen päättymishetkeen.',
        },
        {
          title: 'Offline-first-synkronointi',
          description:
            'Jatka keskittymistä ilman yhteyttä. Kun olet taas verkossa, kirjautuneen tilin muutokset synkronoituvat tilillesi.',
        },
        {
          title: 'Puhuu kieltäsi',
          description:
            'Täysi käyttöliittymä 48 kielellä, järjestelmän kieli oletuksena ja manuaalinen valinta asetuksissa.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Yksityinen suunnittelultaan',
      title: 'Keskittyminen pysyy sinun.',
      description: `${PULSE_APP_NAME} käyttää tiliä, jotta historia voi synkronoitua laitteidesi välillä. Tallennamme vain synkronoinnin tarvitsemat tiedot, emme koskaan myy dataasi ja pidämme analytiikan erillään keskittymishistoriastasi.`,
      items: [
        'Kirjaudu Applella tai Googlella',
        'Offline-first-keskittyminen kullakin laitteella',
        'Pilvisynkronointi historialle ja synkronoiduille asetuksille',
        'Ei mainosverkostoja',
        'Poista tilisi milloin tahansa asetuksista',
      ],
    },
    closing: {
      title: 'Tee tilaa keskittyneelle työlle.',
      description: `Hanki ${PULSE_APP_NAME} App Storesta iPhonelle ja Macille — tai lue tietosuojakäytäntö ja tukisivu, jos tarvitset apua.`,
      getSupport: 'Hae tukea',
      privacy: 'Tietosuoja',
    },
  },
  support: {
    metaTitle: `${PULSE_APP_NAME} – tuki`,
    metaDescription: `Tuki, UKK ja tiliohjeet ${PULSE_APP_NAME} -sovellukseen iPhonella ja Macilla — mukaan lukien Pomodoro Pro, ostot, Focus Protection, kirjautuminen, synkronointi ja tilin poisto.`,
    title: `${PULSE_APP_NAME} – tuki`,
    intro: `${PULSE_APP_NAME} on rauhallinen Pomodoro-ajastin iPhonelle ja Macille. Kirjaudu Applella tai Googlella synkronoidaksesi Focus History laitteidesi välillä. iPhonella valinnainen Pomodoro Pro avaa Focus Protection, omat tunnisteet ja Tag Insights.`,
    gettingStarted: {
      title: 'Aloitus',
      items: [
        {
          question: 'Miten aloitan keskittymisistunnon?',
          answer:
            'Macilla napsauta sovelluskuvaketta valikkopalkissa, valitse Keskittyminen, Lyhyt tauko tai Pitkä tauko ja paina Aloita. iPhonella avaa sovellus, valitse istunto aloitusnäytöltä ja paina Aloita. Voit poistua sovelluksesta ajastimen käydessä.',
        },
        {
          question: 'Miten muutan keskittymis- ja taukojen kestoja?',
          answer:
            'Avaa Asetukset ja säädä Keskittyminen-, Lyhyt tauko- ja Pitkä tauko -kestoja. Voit myös valita valmiin rytmin ja hienosäätää minuutit.',
        },
        {
          question: 'Miten määritän Daily Focus Goals -tavoitteet?',
          answer:
            'Asetuksissa määritä, montako keskittymisistuntoa haluat päivässä. Edistyminen näkyy aloitusnäytöllä ja Focus Historyssa.',
        },
        {
          question: 'Miten näen Focus History?',
          answer:
            'Avaa Focus History sovelluksesta (Macilla ponnahdusikkunasta tai tilavalikosta). Näet summat, putket ja viikoittaisen edistymisen.',
        },
        {
          question: 'Miten vaihdan kielen ja ulkoasun?',
          answer:
            'Asetuksissa valitse Kieli (Järjestelmä tai tuettu kieli) ja Ulkoasu (Järjestelmä, Vaalea tai Tumma). Nämä asetukset pysyvät kullakin laitteella eivätkä synkronoidu.',
        },
      ],
    },
    accounts: {
      title: 'Tilit',
      items: [
        {
          question: 'Miksi kirjautuminen vaaditaan?',
          answer:
            'Tili pitää Focus History, Daily Focus Goals -tavoitteet ja synkronoidut asetukset mukanasi iPhonella ja Macilla. Uudet asennukset pyytävät kirjautumaan ennen ajastimen käyttöä. Vanhemmista versioista päivittävät laitteet voivat pitää paikallisen historian käytettävissä, kunnes kirjaudut. Pomodoro Pro -ostot pysyvät myös kirjautuneella tililläsi.',
        },
        {
          question: 'Miten kirjaudun Applella tai Googlella?',
          answer:
            'Kirjautumisnäytöllä valitse Jatka Applella tai Jatka Googlella ja viimeistele palveluntarjoajan vaiheet. Apple voi tarjota Hide My Email -toiminnon.',
        },
        {
          question: 'Miten kirjaudun ulos?',
          answer:
            'Avaa Asetukset → Tili → Kirjaudu ulos. Jos joitakin muutoksia ei ole vielä synkronoitu, sovellus voi pyytää synkronoimaan ensin tai kirjautumaan ulos silti. Uloskirjautuminen ei poista tiliäsi.',
        },
        {
          question: 'Miten kirjaudun takaisin sisään?',
          answer:
            'Käytä samaa Apple- tai Google-tapaa kirjautumisnäytöllä. Pilvihistoriasi palautuu kyseiselle tilille laitteella.',
        },
        {
          question: 'Mitä tapahtuu, jos käytän eri tiliä?',
          answer:
            'Jokaisella tilillä on oma historiansa. Toiseen tiliin kirjautuminen ei yhdistä erillisiä historioita. Valitse huolellisesti ennen historian liittämisen vahvistamista laitteella, jolla on jo paikallisia istuntoja.',
        },
        {
          question: 'Voinko linkittää Applen ja Googlen samaan tiliin?',
          answer:
            'Kyllä. Asetuksissa → Tili voit linkittää toisen kirjautumistavan, jos sitä ei jo käytä eri tili.',
        },
      ],
    },
    cloudSync: {
      title: 'Pilvisynkronointi',
      items: [
        {
          question: 'Mitä synkronoidaan laitteiden välillä?',
          answer:
            'Keskittymis- ja taukoistuntojen historia (mukaan lukien valitsemasi tunniste), luomasi tunnisteet, Daily Focus Goal -tiedot, putkiin liittyvät tilidata ja synkronoidut asetukset kuten istuntojen kestot, päivätavoite, ääni, animaatiot, valmistumisääni ja juhlaeläin.',
        },
        {
          question: 'Mitä tapahtuu ilman internetiä?',
          answer:
            'Kirjautumisen jälkeen voit käyttää ajastinta offline-tilassa. Uudet istunnot ja muutokset pysyvät laitteella, kunnes yhteys on saatavilla.',
        },
        {
          question: 'Mitä tapahtuu, kun olen taas verkossa?',
          answer:
            'Sovellus synkronoi odottavat muutokset tilillesi. Synkronointi on offline-first ja lopulta yhdenmukainen — se ei ole välitöntä reaaliaikaista yhteistyötä.',
        },
        {
          question: 'Miten käytän samaa tiliä iPhonella ja Macilla?',
          answer:
            'Asenna sovellus molemmille laitteille ja kirjaudu samalla Apple- tai Google-tilillä. Palautuksen jälkeen Focus History voi näkyä molemmilla.',
        },
        {
          question: 'Entä jos historia puuttuu?',
          answer:
            'Varmista, että olet kirjautunut samalle tilille, odota palautuksen/synkronoinnin valmistumista ja tarkista Focus History uudelleen. Jos kirjauduit eri tilille, näet sen tilin historian.',
        },
      ],
    },
    migration: {
      title: 'Päivitys vanhemmasta versiosta',
      items: [
        {
          question: 'Mitä tapahtuu olemassa olevalle paikalliselle historialle?',
          answer:
            'Olemassa olevaa paikallista historiaa ei poisteta hiljaa. Kirjautumisen jälkeen sovellus kysyy ennen historian lisäämistä tilillesi.',
        },
        {
          question: 'Miten liitän historiani?',
          answer:
            'Kirjaudu tilille, jonka pitäisi omistaa historia, tarkista Lisää historiasi -näkymä ja valitse Lisää tähän tiliin. Käytä eri tiliä, jos näytetty tili on väärä. Istuntoja ei voi myöhemmin siirtää toiselle tilille.',
        },
        {
          question: 'Entä jos laitteen ja tilin asetukset eroavat?',
          answer:
            'Sovellus voi kysyä, pidätkö tämän laitteen asetukset vai tilin asetukset. Kieli, ulkoasu, ilmoitukset ja motivointimuistutukset pysyvät laittekohtaisina.',
        },
      ],
    },
    notifications: {
      title: 'Ilmoitukset',
      items: [
        {
          question: 'Miten otan ilmoitukset käyttöön iPhonella?',
          answer:
            'Avaa Asetukset → Ilmoitukset ja valitse Ota käyttöön, tai avaa järjestelmän asetukset, jos lupa evättiin aiemmin.',
        },
        {
          question: 'Miten motivointimuistutukset toimivat?',
          answer:
            'iPhonella avaa Asetukset → Motivointimuistutukset ja ota ne käyttöön, kun ilmoitukset on sallittu. Voit keskeyttää ne tai asettaa hiljaiset tunnit. Ne ovat valinnaisia ja oletuksena pois päältä.',
        },
        {
          question: 'Entä jos ilmoitukset ovat pois päältä?',
          answer:
            'Istunnon päättymisilmoitukset ja motivointimuistutukset tarvitsevat ilmoitusluvan. Käytä Asetukset → Ilmoitukset → Avaa asetukset ottaaksesi ne käyttöön iOS-asetuksissa.',
        },
        {
          question: 'Miten Live Activities toimii?',
          answer:
            'Tuetuilla iPhoneilla valinnainen Live Activity voi näyttää aktiivisen istunnon lukitusnäytöllä ja Dynamic Islandilla. Lupa pyydetään, kun otat liittyvät ominaisuudet käyttöön.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'Mikä on Pomodoro Pro?',
          answer:
            'Pomodoro Pro on valinnainen sovelluksen sisäinen osto iPhonella. Se avaa Focus Protection, omat tunnisteet (omat nimet ja värit) ja Tag Insights (viikko- ja kuukausittainen keskittymisaika tunnisteittain). Ajastin, sisäänrakennetut tunnisteet, Focus History ja synkronointi ovat käytettävissä ilman Prota.',
        },
        {
          question: 'Mitä ostopaketteja on tarjolla?',
          answer:
            'Pomodoro Pro tarjotaan kuukausitilauksena, vuositilauksena (Annual) tai kertaluonteisena Lifetime-ostona. Tilaukset uusiutuvat automaattisesti, ellei peruuta vähintään 24 tuntia ennen nykyisen jakson päättymistä. Lifetime veloitetaan kerran eikä ole tilaus.',
        },
        {
          question: 'Mistä ostan tai näen Pomodoro Pron?',
          answer:
            'iPhonella avaa Asetukset → Pomodoro Pro tai napauta suojausmerkkiä aloitusnäytöllä. Sinun on oltava kirjautuneena. Pro pysyy tililläsi jokaisella laitteella, johon kirjaudut.',
        },
        {
          question: 'Miten palautan ostot?',
          answer:
            'Käytä Palauta puuttuvat ostot -toimintoa maksuseinällä tai Asetuksissa → Pomodoro Pro. Samalla Apple-tilillä tehdyt ostot siirtyvät tiliin, jolla olet kirjautuneena. Jos mitään ei löydy, varmista Apple-tili, jolla ostit Pron, ja yritä uudelleen verkossa.',
        },
      ],
    },
    purchases: {
      title: 'Tilaukset ja ostot',
      items: [
        {
          question: 'Miten hallitsen tai peruutan tilauksen?',
          answer:
            'Apple laskuttaa tilaukset. iPhonella avaa Asetukset → Pomodoro Pro → Hallitse tilausta tai Asetukset → [nimesi] → Tilaukset ja valitse sovellus. Peru vähintään 24 tuntia ennen uusiutumista välttääksesi seuraavan veloituksen. Sovelluksen tai Pomodoro-tilin poistaminen ei peru tilausta.',
        },
        {
          question: 'Miten pyydän hyvitystä?',
          answer:
            'Apple käsittelee hyvitykset. Käy osoitteessa reportaproblem.apple.com, kirjaudu ostoon käytetyllä Apple-tilillä, etsi tapahtuma ja lähetä hyvityspyyntö. Emme voi itse käsitellä App Store -hyvityksiä.',
        },
        {
          question: 'Entä jos osto epäonnistuu tai Pro ei avaudu?',
          answer:
            'Pysy kirjautuneena, tarkista verkkoyhteys ja yritä uudelleen. Jos maksu on odottamassa (esim. Pyydä ostoa), Pro avautuu hyväksynnän jälkeen. Jos olet jo maksanut, käytä Palauta puuttuvat ostot. Aktiivisen tilauksen maksuongelmissa päivitä maksutapa App Store -asetuksissa.',
        },
        {
          question: 'Entä jos ostan Lifetime-tilauksen aktiivisen tilauksen aikana?',
          answer:
            'Lifetime avaa Pron pysyvästi, mutta olemassa olevaa tilausta ei peruuteta automaattisesti. Poista automaattinen uusiutuminen App Store -tilausasetuksista, jotta sinua ei veloiteta uudelleen.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'Mikä on Focus Protection?',
          answer:
            'Focus Protection on Pomodoro Pro -ominaisuus iPhonella. Se käyttää Applen Screen Time -rajapintoja estääkseen valitsemasi sovellukset, kategoriat tai verkkosivustot keskittymisistunnon aikana. Taukoia ei koskaan estetä. Istunnon päättyessä estetyt sovellukset avautuvat automaattisesti.',
        },
        {
          question: 'Miten otan sen käyttöön?',
          answer:
            'Kun Pro on aktiivinen, napauta Focus Protection-merkkiä aloitusnäytöllä (tai avaa se asetuksista). Salli Screen Time -käyttö pyydettäessä, valitse estettävät kohteet ja ota Focus Protection käyttöön. Aloita keskittymisistunto, jotta suojaukset aktivoituvat.',
        },
        {
          question: 'Miten poistan sen käytöstä tai avaan sovellukset?',
          answer:
            'Avaa Focus Protection -näkymä ja valitse Poista käytöstä nyt tai poista ominaisuus käytöstä. Istunnon jälkeen voit myös käyttää Avaa sovellukset -toimintoa suojausnäytöllä. Poistaaksesi sovelluksen Screen Time -oikeuden kokonaan, siirry iOS-asetuksiin → Ruutuaika → Sovellukset, joilla on Screen Time -käyttöoikeus.',
        },
        {
          question: 'Entä jos Focus Protection ei toimi?',
          answer:
            'Varmista, että Pro on aktiivinen, Screen Time -käyttö on sallittu ja valitsit estettävät sovellukset tai kategoriat. Focus Protection koskee vain keskittymisistuntoja, ei taukoja. Jos käyttöoikeus peruttiin järjestelmäasetuksissa, avaa sovellus ja salli käyttö uudelleen. iPhonen uudelleenkäynnistys voi auttaa käyttöoikeuden muutoksen jälkeen.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Tili ja tietosuoja',
      items: [
        {
          question: 'Miten poistan tilini?',
          answer:
            'Kirjaudu sisään, avaa Asetukset → Tili → Poista tili ja vahvista. Tilisi ja synkronoitu keskittymishistoriasi poistetaan pysyvästi live-tietokannastamme. Tätä ei voi perua. Poisto vaatii verkkoyhteyden. Tilisi poistaminen ei peru App Store -tilausta — hallitse sitä App Store -asetuksissa.',
        },
        {
          question: 'Mitä tilin poisto vaikuttaa?',
          answer:
            'Kyseisen tilin synkronoidut pilvitiedot poistetaan, Sign in with Apple -valtuutus peruutetaan, jos se on tallennettu, tiliisi linkitetty ostotietue pyydetään poistettavaksi ostopalveluntarjoajaltamme, ja tilin tiedot poistetaan laitteelta, jolla poistat. Paikalliset kopiot muilla laitteilla eivät voi enää synkronoitua; poista sovellus tai tyhjennä tiedot tarvittaessa. Palveluntarjoajan varmuuskopiot voivat säilyttää poistettuja tietoja rajoitetun palautusjakson. Apple säilyttää omat App Store -tapahtumatietonsa.',
        },
        {
          question: 'Miten vien tietoni?',
          answer:
            'Asetukset → Tili → Vie tietoni tallentaa JSON-tiedoston istunnoista, päivätavoitteista, synkronoiduista asetuksista ja tiliprofiilista. Liittämättömät paikalliset tiedot voi viedä myös kirjautumisnäytöltä.',
        },
        {
          question: 'Missä on tietosuojakäytäntö?',
          answer:
            'Avaa tietosuojakäytäntö tuotesivustolta tai käytä tietosuojalinkkiä tämän sivuston tuotesivuilla.',
        },
      ],
    },
    requirements: {
      title: 'Vaatimukset',
      body: 'iPhone: iOS 17 tai uudempi. Mac: macOS 14.6 tai uudempi. Pomodoro Pro -ostot ja Focus Protection ovat saatavilla iPhonella.',
    },
    contact: {
      title: 'Yhteystiedot',
      body: 'Apua, palautetta tai virheraportteja varten:',
    },
    privacyPolicyLink: 'Tietosuojakäytäntö',
  },
  privacy: {
    metaTitle: `${PULSE_APP_NAME} – tietosuojakäytäntö`,
    metaDescription: `Tietosuojakäytäntö ${PULSE_APP_NAME} -sovellukselle: Apple- ja Google-kirjautuminen, pilvisynkronointi, Pomodoro Pro -ostot RevenueCatin kautta, Focus Protection, analytiikka ja tilin poisto Macilla ja iPhonella.`,
    title: 'Tietosuojakäytäntö',
    subtitle: `${PULSE_APP_NAME} — Pomodoro-ajastin Macille ja iPhonelle`,
    lastUpdated: 'Viimeksi päivitetty: 26. lokakuuta 2026',
    summary: {
      title: 'Yhteenveto',
      body: `Kun kirjaudut Applella tai Googlella, tilisi pitää keskittymishistoriasi, päivätavoitteesi ja ajastinasetuksesi synkronoituna Macin ja iPhonen välillä. Tallennamme vain sen, mitä sovellus tarvitsee: sähköpostiosoitteesi, tilin tunnisteen ja luomasi keskittymistiedot. Emme koskaan myy niitä, emme käytä niitä mainontaan emmekä jaa niitä analytiikkapalveluntarjoajallemme. Jos ostat Pomodoro Pron iPhonella, ostopalveluntarjoajamme RevenueCat säilyttää ostohistoriasi linkitettynä tilillesi, jotta Pro toimii jokaisella laitteella, johon kirjaudut. Focus Protectionin sovellusvalinnat eivät koskaan jätä iPhoneasi. Voit viedä tietosi tai poistaa tilisi milloin tahansa asetuksista. Erillisenä sovellus voi lähettää anonyymia, yksityisyyttä kunnioittavaa käyttöanalytiikkaa keskittymisvirtojen parantamiseksi.`,
    },
    localData: {
      title: 'Laitteellesi tallennetut tiedot',
      body: 'Ajastinasetuksesi, istuntomieltymyksesi ja keskittymishistoriasi tallennetaan paikallisesti Macille tai iPhonelle järjestelmän tavallisella tallennuksella, jotta ajastin toimii offline-tilassa. Jokaisella laitteella kirjautuneella tilillä on oma paikallinen säilönsä. Kirjautumisesi säilytetään järjestelmän avainnipussa. Kieli, ulkoasu, Käynnistä kirjautumisen yhteydessä, ilmoitukset ja motivointimuistutukset pysyvät kullakin laitteella eivätkä synkronoidu. Keskittymishistorian sisältöä ei lähetetä analytiikkapalveluntarjoajallemme.',
      migrationSafety:
        'Kun kirjaudut ensimmäistä kertaa laitteella, jolla on jo keskittymishistoriaa, sovellus kysyy ennen historian siirtämistä tilillesi. Kunnes siirto on vahvistettu palvelimillamme plus 90 päivää, sovellus säilyttää aiemman paikallisen kopion ja paikallisen varmuuskopiotiedoston laitteella turvaverkkona ja poistaa ne sitten automaattisesti.',
    },
    accountAndSync: {
      title: 'Tilisi ja synkronoidut tiedot',
      intro: 'Jos kirjaudut, käsittelemme:',
      items: [
        'Yhteystiedot: Sign in with Applen (mahdollisesti Hide My Email -välitysosoite) tai Googlen jakama sähköpostiosoite. Emme pyydä nimeäsi.',
        'Tunnisteet: kirjautumisen yhteydessä luotu tilin tunnus ja satunnainen tunnus asennusta kohden, käytetään vain synkronointiin ja sen tunnistamiseen, mikä laite teki muutoksen.',
        'Keskittymistiedot: valmiit ja poistetut keskittymis- ja taukoistunnot (ajat, kestot, paikallinen päivä ja aikavyöhyke sekä valitsemasi tunniste), luomasi tunnisteet (nimi ja väri), päivätavoitteet, paras putkesi ja synkronoidut asetukset (istuntojen kestot, päivätavoite, ääni, animaatiot, valmistumisääni, juhlaeläin).',
      ],
      closing:
        'Näitä tietoja käytetään vain synkronointiin, historiaan ja tilin ominaisuuksiin. Ne linkittyvät tiliisi, eivät ole seurantakäytössä eivätkä jaeta kolmansille osapuolille paitsi alla mainituille käsittelijöille.',
    },
    processors: {
      title: 'Käsittelijät ja tallennuspaikka',
      bodyBeforeSupabase: 'Tili- ja synkronointitiedot tallennetaan palveluun',
      bodyAfterSupabase:
        ' (tietokanta ja autentikointi) Euroopan unionissa. Kirjautumisen hoitaa',
      orWord: 'tai',
      bodyAfterProviders:
        ', valitsemastasi vaihtoehdosta riippuen. Pomodoro Pro -ostoja hallitaan palvelulla',
      bodyAfterRevenueCat:
        ' (katso Ostot alla). Tiedot salataan siirron aikana, ja pääsy on rajoitettu niin, että kukin tili voi lukea vain omat tietonsa.',
    },
    purchases: {
      title: 'Ostot (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro myydään App Storen kautta; Apple hoitaa maksun emmekä koskaan näe maksutietojasi. Pro voidaan avata jokaisella laitteella, johon kirjaudut, joten sovellus jakaa tilin tunnuksesi palvelun',
      bodyAfterRevenueCat:
        ' kanssa, joka säilyttää ostohistoriasi (ostetut tuotteet, osto- ja uusiutumispäivät, tilauksen tila) linkitettynä kyseiseen tunnukseen. Näitä tietoja käytetään vain Pron käyttöoikeuden myöntämiseen ja palauttamiseen, ei seurantaan, eikä niitä jaeta analytiikkapalveluntarjoajallemme. Pro vaatii kirjautuneen tilin; mitään ei lähetetä RevenueCatille ennen kirjautumista.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection käyttää Applen Screen Time -kehystä (Family Controls) estääkseen valitsemasi sovellukset, kategoriat ja verkkosivustot keskittymisistunnon aikana. Apple antaa sovellukselle vain läpinäkymättömät tunnukset valinnoillesi: emme näe, mitä sovelluksia tai sivustoja valitsit, miten käytät niitä tai muita Screen Time -tietoja. Valintasi pysyvät kyseisellä iPhonella, eivät koskaan lataudu tai synkronoidu eivätkä mene analytiikkapalveluntarjoajallemme. Voit poistaa Focus Protectionin käytöstä sovelluksessa milloin tahansa tai poistaa sovelluksen oikeuden asetuksissa → Ruutuaika → Sovellukset, joilla on Screen Time -käyttöoikeus.',
    },
    retention: {
      title: 'Säilytys, varmuuskopiot ja poisto',
      items: [
        'Synkronoidut tietosi säilytetään niin kauan kuin tilisi on olemassa.',
        'Tilin poisto (Asetukset → Tili → Poista tili) poistaa pysyvästi tilisi ja kaikki synkronoidut tiedot live-tietokannastamme, peruuttaa sovelluksen Sign in with Apple -valtuutuksen, jos se on tallennettu, pyytää RevenueCatia poistamaan tiliisi linkitetyn ostotietueen ja poistaa tilin tiedot laitteelta, jolla poistat. Paikalliset kopiot muilla laitteillasi eivät voi enää synkronoitua ja jäävät sinne, kunnes poistat sovelluksen niiltä laitteilta tai poistat ne kirjautumisnäytöltä, jos tarjolla.',
        'Tietokantapalveluntarjoajamme säilyttää päivittäiset varmuuskopiot 7 päivää. Poistetut tiedot voivat jäädä varmuuskopioihin, kunnes ne vanhenevat; varmuuskopioita käytetään vain katastrofipalautukseen. Voimme myös säilyttää salattua viikoittaista varmuuskopiota enintään 90 päivää samaan tarkoitukseen.',
        'Tilisi poistaminen ei peru App Store -tilausta; hallitse tai peru se Apple-tiliasetuksissasi. Apple säilyttää omat App Store -tapahtumatietonsa.',
        'Uloskirjautuminen ei poista mitään. Vielä synkronoimattomat muutokset pysyvät laitteella, kunnes sama tili kirjautuu uudelleen.',
        'Analytiikatietueita käsittelee TelemetryDeck oman säilytyskäytäntönsä mukaisesti, eikä niitä käytetä keskittymishistoriasi palauttamiseen.',
      ],
    },
    export: {
      title: 'Vienti',
      body: 'Asetukset → Tili → Vie tietoni tallentaa JSON-tiedoston istunnoistasi, päivätavoitteistasi, synkronoiduista asetuksistasi ja tiliprofiilistasi. Tietoja, joita ei ole vielä siirretty tilille, voi viedä myös kirjautumisnäytöltä.',
    },
    analytics: {
      title: 'Analytiikka',
      introBeforeLink: 'Käytämme',
      introAfterLink:
        ', yksityisyyttä painottavaa analytiikkapalvelua, ymmärtääksemme sovelluksen käyttöä (esimerkiksi: aloitetut tai valmiit keskittymis- tai taukoistunnot, päivätavoitteen muutokset, asetusmuutokset, ilmoitusluvan tulokset, motivointimuistutustapahtumat ja onboardingin valmistuminen). Signaalit eivät sisällä vapaata tekstiä, nimiä, sähköposteja tai keskittymishistoriasi sisältöä.',
      identifier:
        'TelemetryDeck tunnistaa asennukset hashatulla laitteeseen sidotulla tunnuksella ja voi liittää ei-henkilökohtaisia laitemetatietoja (kuten malli, käyttöjärjestelmäversio ja locale). Näitä tietoja käytetään vain analytiikkaan, emme linkitä niitä henkilöllisyyteesi emmekä käytä seurantaan muiden yritysten sovellusten tai sivustojen välillä.',
      learnMore: 'Lue lisää:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'App Store -päivitykset',
      body: 'Jos käytät asetuksissa Tarkista päivitykset -toimintoa, sovellus voi ottaa yhteyttä Appleen selvittääkseen, onko App Storessa uudempaa versiota saatavilla.',
    },
    launchAtLogin: {
      title: 'Käynnistä kirjautumisen yhteydessä (Mac)',
      body: 'Jos otat Käynnistä kirjautumisen yhteydessä -asetuksen käyttöön Macin asetuksissa, sovellus rekisteröityy macOS-järjestelmän rajapintojen kautta kirjautumiskohteeksi. Voit hallita tätä asetusta ja poistaa sen käytöstä milloin tahansa.',
    },
    notifications: {
      title: 'Ilmoitukset ja Live Activities (iPhone)',
      body: 'iPhonella valinnaiset paikalliset ilmoitukset, motivointimuistutukset ja Live Activities auttavat näkemään, milloin istunto päättyy, tai palaamaan lempeästi keskittymiseen. Lupa pyydetään vain, kun otat nämä ominaisuudet käyttöön. Ilmoitusten sisältö pysyy laitteellasi.',
    },
    whatWeDoNotDo: {
      title: 'Mitä emme tee',
      items: [
        'Ei mainosverkostoja',
        'Ei henkilötietojen myyntiä',
        'Ei pääsyä yhteystietoihin, kuviin, tarkkaan sijaintiin, kameraan tai mikrofoniin analytiikkaa varten',
      ],
    },
    children: {
      title: 'Lapset',
      body: `${PULSE_APP_NAME} ei tietoisesti kerää lasten henkilötietoja sen enempää kuin tili tarvitsee synkronointiin edellä kuvatulla tavalla. Analytiikkasignaalit ovat anonyymejä eivätkä sisällä henkilökohtaista sisältöä.`,
    },
    changes: {
      title: 'Muutokset',
      body: 'Jos tätä käytäntöä muutetaan, päivitetty versio julkaistaan tällä URL-osoitteella.',
    },
    contact: {
      title: 'Yhteystiedot',
      body: 'Kysymyksiä tästä käytännöstä:',
    },
  },
}