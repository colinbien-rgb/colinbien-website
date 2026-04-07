import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-body font-700 text-3xl text-[var(--color-ink)] mb-12 tracking-tight">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 font-body text-sm text-[var(--color-muted)] leading-relaxed">
          <section>
            <h2 className="font-700 text-base text-[var(--color-ink)] mb-2">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-600 text-[var(--color-ink)] mb-1">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
              Text aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="font-700 text-base text-[var(--color-ink)] mb-2">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-2">
              Dr. Colin Bien<br />
              Gänsemarkt 33<br />
              20354 Hamburg<br />
              Telefon: +49 178 65 78 624<br />
              E-Mail: colin_bien(at)web.de
            </p>
            <p className="mt-2">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
              personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </section>

          <section>
            <h2 className="font-700 text-base text-[var(--color-ink)] mb-2">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-600 text-[var(--color-ink)] mb-1">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so
              genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies
              sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL,
              Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
            <p className="mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
              Darstellung und der Optimierung seiner Website — hierzu müssen die Server-Log-Files
              erfasst werden.
            </p>

            <h3 className="font-600 text-[var(--color-ink)] mb-1 mt-4">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser
              Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
              der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
              unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
              Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1
              lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
            <p className="mt-2">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns
              zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
              für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer
              Anfrage). Zwingende gesetzliche Bestimmungen — insbesondere Aufbewahrungsfristen —
              bleiben unberührt.
            </p>
          </section>

          <section>
            <h2 className="font-700 text-base text-[var(--color-ink)] mb-2">
              4. Analyse-Tools und Werbung
            </h2>
            <p>
              Diese Website verwendet keine Analyse-Tools oder Tracking-Software. Es werden keine
              Cookies zu Analyse- oder Werbezwecken eingesetzt.
            </p>
          </section>

          <section>
            <h2 className="font-700 text-base text-[var(--color-ink)] mb-2">
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
              ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
              jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
              Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>
            <p className="mt-2">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an
              uns wenden: colin_bien(at)web.de
            </p>
          </section>

          <section>
            <h2 className="font-700 text-base text-[var(--color-ink)] mb-2">
              6. Externe Links
            </h2>
            <p>
              Diese Website enthält Links zu externen Diensten wie YouTube, Spotify und LinkedIn.
              Beim Aufruf dieser Links gelten die Datenschutzbestimmungen der jeweiligen Anbieter.
              Auf die Datenverarbeitung durch diese Drittanbieter haben wir keinen Einfluss.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
