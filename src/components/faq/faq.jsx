"use client";
import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "../shared/section-title";
import { arrow, plusIcon, quesMark, faqItems, XIcons } from "@/config/faq";

const PlusIcon = ({ className }) => (
    <Image
        src={plusIcon}
        alt="Plus Icon"
        width={24}
        height={24}
        className={className}
    />
);

const XIcon = ({ className }) => (
    <Image
        src={XIcons}
        alt="Close Icon"
        width={32}
        height={32}
        className={className}
    />
);

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
    if (isOpen) {
        return (
            <div className="faq-item mb-2 sm:mb-3 lg:mb-4 relative z-50">
                <div
                    className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border-2 border-black"
                    style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.9)" }}
                >
                    <div className="flex justify-between items-start mb-2 sm:mb-3 lg:mb-4">
                        <h3 className="font-semibold font-archivo text-gray-800 text-sm sm:text-base lg:text-xl pr-2 sm:pr-3 lg:pr-4 leading-tight">
                            {question}
                        </h3>
                        <button
                            onClick={onToggle}
                            className="flex-shrink-0 mt-0.5 sm:mt-1"
                        >
                            <XIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" />
                        </button>
                    </div>
                    <div className="">
                        <p className="text-gray-700 font-archivo leading-[1.5em] text-xs sm:text-sm lg:text-base bg-[linear-gradient(to_bottom,transparent_95%,black_95%)] bg-[length:100%_1.5em] bg-repeat-y">
                            {answer}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="faq-item mb-2 sm:mb-3 lg:mb-4 relative">
            <button
                className="w-full bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 text-left flex justify-between items-center hover:shadow-md transition-all duration-200 border-2 border-black relative"
                onClick={onToggle}
                style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.8)" }}
            >
                <span className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg pr-2 sm:pr-3 leading-tight">
                    {question}
                </span>
                <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600 flex-shrink-0" />
            </button>
        </div>
    );
};

function FaqSection() {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="w-full">
            <SectionTitle title="FAQS" lineGradient="white-purple" />
            <section className="relative w-full py-8 sm:py-12 lg:py-16 bg-purple-400 overflow-hidden min-h-fit sm:min-h-screen lg:min-h-[calc(100vh-4rem)]">
                <div className="absolute bottom-1/3 left-4 sm:bottom-1/3 sm:left-8">
                    <Image
                        src={quesMark}
                        alt="Question Mark"
                        width={94}
                        height={183}
                        className="w-[45.873px] h-[90.361px] sm:w-[60px] sm:h-[156px] lg:w-[94.073px] lg:h-[183.106px] transition-all duration-300"
                    />
                </div>

                <div className="absolute top-16 right-4 sm:top-20 sm:right-26">
                    <Image
                        src={arrow}
                        alt="Arrow pointing to FAQ"
                        width={80}
                        height={80}
                        className="
              w-[60px] h-[48px]
              xs:w-[72px] xs:h-[54px]
              sm:w-[64px] sm:h-[48px]
              md:w-[56px] md:h-[42px]
              lg:w-[80px] lg:h-[60px]
              xl:w-[80px] xl:h-[60px]
              transition-all duration-300 ease-in-out
            "
                    />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-4xl mt-5">
                    <div className="faq-container">
                        <style jsx>{`
                            @media (max-width: 400px) {
                                .faq-container .faq-item:not(:first-child) {
                                    margin-top: -12px;
                                }
                                .faq-container .faq-item:nth-child(1) {
                                    z-index: 20;
                                }
                                .faq-container .faq-item:nth-child(2) {
                                    z-index: 19;
                                }
                                .faq-container .faq-item:nth-child(3) {
                                    z-index: 18;
                                }
                                .faq-container .faq-item:nth-child(4) {
                                    z-index: 17;
                                }
                                .faq-container .faq-item:nth-child(5) {
                                    z-index: 16;
                                }
                                .faq-container .faq-item:nth-child(6) {
                                    z-index: 15;
                                }
                                .faq-container .faq-item:nth-child(7) {
                                    z-index: 14;
                                }
                                .faq-container .faq-item:nth-child(8) {
                                    z-index: 13;
                                }
                                .faq-container .faq-item:nth-child(9) {
                                    z-index: 12;
                                }
                            }
                            @media (min-width: 401px) {
                                .faq-container .faq-item {
                                    margin-bottom: 0.5rem;
                                }
                            }
                            @media (min-width: 640px) {
                                .faq-container .faq-item {
                                    margin-bottom: 0.75rem;
                                }
                            }
                            @media (min-width: 1024px) {
                                .faq-container .faq-item {
                                    margin-bottom: 1rem;
                                }
                            }
                        `}</style>
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openItems[index]}
                                onToggle={() => toggleItem(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FaqSection;
