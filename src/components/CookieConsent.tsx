"use client";

import { getCookie, setCookie } from "@/cookies";
import React, { useEffect, useState } from "react";
import { Cookie, XCircle } from "phosphor-react"; // Ikona z Phosphor React

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Stav pre modálne okno

    useEffect(() => {
        const cookiesAccepted = getCookie("cookiesAccepted");
        if (!cookiesAccepted) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        setCookie("cookiesAccepted", "true", 365);
        setIsVisible(false);
    };

    const handleReject = () => {
        setCookie("cookiesAccepted", "false", 365); // Nastaví cookie, že používateľ odmietol
        setIsVisible(false); // Skryje banner
    };

    // test cookie resetuje banner 

    // const handleReset = () => {
    //     setCookie("cookiesAccepted", "", -1); // Vymaže cookie nastavením záporného trvania
    //     setIsVisible(true);
    // };

    const openModal = () => setIsModalOpen(true); // Otvorí modálne okno
    const closeModal = () => setIsModalOpen(false); // Zavrie modálne okno

    return (
        <>
            {/* Reset button when the consent is not visible */}
            {/* {!isVisible && (
                <button
                    onClick={handleReset}
                    className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg hover:bg-gray-700 transition z-50"
                >
                    Resetovať cookies
                </button>
            )} */}

            {/* Overlay and Cookie Consent */}
            {isVisible && (
                <>
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-black bg-opacity-70 z-40" />

                    {/* Cookie Consent Panel */}
                    <div className="fixed bottom-32 z-50 left-4 right-4 gap-4 max-w-xl mx-auto bg-white shadow-lg border rounded-lg p-6 flex flex-col items-center justify-between space-x-4 animate-fade-in">
                        <div className="flex items-center space-x-3">
                            <div className="p-3 bg-[#015C75] text-white rounded-full">
                                <Cookie size={34} weight="fill" />
                            </div>
                            <p className="text-lg text-black">
                                Tento web používa cookies na zlepšenie vášho zážitku. Viac informácií nájdete v našich{" "}
                                <button
                                    onClick={openModal}
                                    className="text-[#015C75] underline"
                                >
                                    pravidlách používania cookies
                                </button>
                                .
                            </p>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={handleAccept}
                                className="bg-[#015C75] hover:bg-[#237085] text-white px-4 py-2 rounded transition"
                            >
                                Súhlasím
                            </button>

                            <button
                                onClick={handleReject}
                                className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded transition"
                            >
                                Odmietam
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* Modal for cookies policy */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white text-black rounded-lg p-6 max-w-3xl w-full px-10 mx-5">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-bold rounded-md px-4 border-2 border-[#015C75] mb-6">Pravidlá používania cookies</h1>
                            <button
                                onClick={closeModal}
                                className="text-black"
                            >
                                <XCircle size={32} />
                            </button>
                        </div>

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
                </div>
            )}
        </>
    );
};

export default CookieConsent;
