"use client";

export default function CookiesPolicy() {
  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">Pravidlá používania cookies</h1>
      <p className="mb-4">
        Táto stránka vysvetľuje, ako používame cookies na našej webovej stránke.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Čo sú cookies?</h2>
      <p className="mb-4">
        Cookies sú malé textové súbory, ktoré sa ukladajú do vášho prehliadača,
        keď navštívite webovú stránku. Pomáhajú nám zlepšovať vašu skúsenosť na
        našom webe.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Ako používame cookies?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Nepostrádateľné cookies na zabezpečenie funkčnosti webu.</li>
        <li>
          Analytické cookies na zber štatistík o tom, ako sa naša stránka
          používa.
        </li>
        <li>Funkčné cookies na zapamätanie vašich preferencií.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Ako spravovať cookies?</h2>
      <p className="mb-4">
        Môžete cookies zakázať alebo odstrániť v nastaveniach vášho
        prehliadača. Viac informácií nájdete v dokumentácii k vášmu
        prehliadaču.
      </p>
    </div>
  );
}
