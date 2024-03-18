import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components


import Navigation from '@/components/Showcases/Navigation';
import Menu from '@/components/Showcases/Menu';






import Footer from '@/components/Startup/Footer';


function LandingPreview() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Studio</title>
      </Head>
      <main>
      <Navigation />
      <Menu />
        <div class="container mt-3 p-3">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <h5>Impressum</h5>
        <h2>Verantwortliche:</h2>
<p>
JRM Records UG(haftungsbeschränkt)
St.Ilgenerstraße 5
69190 Walldorf

Amtsgericht Mannheim
HRB 750245

Vertreten durch die beiden Geschäftsführer: Valentin Issa Schlosser, Tristan Heyne

Tel:01629440598
Email: contact@jrmrecords.com
</p>
<br/>
      <br/>
<p>
Die Verwendung der auf jrmrecords.com angebotenen Fotos und Artworks unserer Veröffentlichungen, sowie der verfügbaren Texte, ob ganz oder teilweise, bedarf unserer vorherigen und schriftlichen Einwilligung. Alle weiteren Rechte behalten wir uns vor.
</p>

<p>
Alle Soundfiles, Videos, Texte, Bilder, Logos, Artworks und Designs sind urheberrechtlich geschützt und dürfen in keiner Form reproduziert, wiederverwendet oder für gewerbliche Zwecke genutzt werden. Dies gilt auch für die Verwendung in Online-Diensten oder für die Aufnahme in elektronische Datenbanken. Verbreitung nur mit schriftlicher Genehmigung durch Tristan Heyne und Valentin Schlosser.
</p>
<br/>
      <br/>
<h2>HAFTUNGSAUSSCHLUSS</h2>
<br/>
      <br/>
<h3>1. Inhalt des Onlineangebotes</h3>
<p>
Diese Website bildet den temporären Stand eines kontinuierlichen Arbeitsprozesses ab. Obwohl bei der Zusammenstellung der auf dieser Website enthaltenen Inhalte und Services größte Sorgfalt und Kontrolle angewandt wurde, kann JRM Records für die Aktualität, Korrektheit, Vollständigkeit oder Qualität keine Gewähr übernehmen. Haftungsansprüche gegen JRM Records und damit gegen Tristan Heyne, die sich auf Schäden materieller oder ideeller Art beziehen, welche durch die Nutzung oder Nichtnutzung der dargebotenen Inhalte und Services oder durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens JRM Records und damit Tristan Heyne kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Wir behalten uns ausdrücklich vor, änderungen der Inhalte und Services ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder das gesamte Angebot oder die Veröffentlichung zeitweise oder endgültig einzustellen. Alle Angebote sind freibleibend und unverbindlich.
</p>
<br/>
      <br/>
<h3>2. Verweise und Links</h3>
<p>
Bei direkten oder indirekten Verweisen auf fremde Webseiten (“Hyperlinks”), die außerhalb des Verantwortungsbereiches der Webseite jrmrecords.com liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem wir von den Inhalten Kenntnis hatten und es uns technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Wir erklären hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der gelinkten/verknüpften Seiten haben wir keinerlei Einfluss. Deshalb distanzieren wir uns hiermit ausdrücklich von allen Inhalten aller gelinkten /verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in von uns eingerichteten Gästebüchern, Diskussionsforen und Mailinglisten. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
</p>
<br/>
      <br/>
<h3>3. Urheber- und Kennzeichenrecht</h3>
<p>
Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind.
</p>
<br/>
      <br/>
<h3>4. Datenschutz</h3>
<p>
Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (eMail-Adressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist – soweit technisch möglich und zumutbar – auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet. Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben veröffentlichten Kontaktdaten wie Postanschriften, Telefon- und Faxnummern sowie Emailadressen durch Dritte zur übersendung von nicht ausdrücklich angeforderten Informationen ist nicht gestattet. Rechtliche Schritte gegen die Versender von sogenannten Spam-Mails bei Verstößen gegen dieses Verbot sind ausdrücklich vorbehalten.
</p>
<br/>
      <br/>
<h3>5. Rechtswirksamkeit dieses Haftungsausschlusses</h3>
<p>
Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
</p>
<br/>
      <br/>
      <br/>
      <br/>

      </div>

      
      </main>
      <Footer />
    </>
  )
}

LandingPreview.getLayout = page => <Layout>{page}</Layout>

export default LandingPreview;