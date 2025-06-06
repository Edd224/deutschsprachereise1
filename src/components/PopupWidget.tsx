"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  Disclosure,
  Transition,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";
import { ChatDots } from "phosphor-react";



export function PopupWidget() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data: any, e: any) => {
    console.log(data);
    await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: `${userName} poslal správu pre Deutschsprachereise`,
        message: data.message,
      }),
    })
      .then(async (response) => {
        const json = await response.json();
        if (response.ok) {
          setIsSuccess(true);
          setMessage("Message sent successfully!");
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.error || "Email sending failed");
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton className="fixed z-40 flex items-center justify-center transition duration-300 bg-[#015C75] rounded-full shadow-lg right-5 bottom-14 w-14 h-14 focus:outline-none hover:bg-[#050303] focus:bg-[#050303] ease">
              <span className="sr-only">Open Contact form Widget</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
              >
                <ChatDots size={28} color="#f9f5f5" />
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white"
                as={"div"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Transition>
            </DisclosureButton>
            <Transition
              className="fixed  z-50 bottom-[130px] top-0 right-0  left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
              as="div"
            >
              <DisclosurePanel className=" flex flex-col overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] rounded-bl-[80px]  shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
                <div className="flex flex-col items-center justify-center h-32 p-5 bg-[#015C75]">
                  <h3 className="text-lg text-white">Ako Vám môžeme pomôcť?</h3>
                </div>
                <div className="flex-grow h-full p-6 overflow-auto bg-[#015C75] ">
                  {!isSubmitSuccessful && (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <div className="mb-4">
                        <label
                          htmlFor="full_name"
                          className="block mb-2 text-sm text-gray-200 dark:text-gray-400"
                        >
                          Vaše meno
                        </label>
                        <input
                          type="text"
                          id="full_name"
                          placeholder="John Doe"
                          {...register("name", {
                            required: "Full name is required",
                            maxLength: 80,
                          })}
                          className={`w-full px-3 py-2 text-gray-400 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${errors.name
                            ? "border-red-600 focus:border-red-600 ring-red-100"
                            : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                            }`}
                        />
                        {errors.name && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.name.message as string}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-200 dark:text-gray-400"
                        >
                          Váš email
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email", {
                            required: "Enter your email",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Please enter a valid email",
                            },
                          })}
                          placeholder="you@company.com"
                          className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${errors.email
                            ? "border-red-600 focus:border-red-600 ring-red-100"
                            : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                            }`}
                        />

                        {errors.email && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.email.message as string}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm text-gray-200 dark:text-gray-400"
                        >
                          Vaša správa
                        </label>

                        <textarea
                          rows={4}
                          id="message"
                          {...register("message", {
                            required: "Enter your Message",
                          })}
                          placeholder="Your Message"
                          className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md h-28 focus:outline-none focus:ring   ${errors.message
                            ? "border-red-600 focus:border-red-600 ring-red-100"
                            : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                            }`}
                          required
                        ></textarea>

                        {errors.message && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.message.message as string}
                          </div>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w- px-4 py-3 text-sm font-medium text-white bg-[#09232b] border border-[#fff] rounded-full"
                      >
                        {isSubmitting ? (
                          <svg
                            className="w-5 h-5 mx-auto text-white animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            ></path>
                          </svg>
                        ) : (
                          "Odoslať správu"
                        )}
                      </button>
                    </form>
                  )}

                  {isSubmitSuccessful && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <h2 className="text-2xl font-semibold text-gray-600">
                        Ďakujeme!
                      </h2>
                      <p className="text-base text-gray-500">
                        {isSuccess
                          ? "Vaša správa bola odoslaná !"
                          : "Ak máte problém s odoslaním, skúste to znovu"}
                      </p>

                      <button
                        className="mt-6 text-indigo-600 focus:outline-none"
                        onClick={() => reset()}
                      >
                        Pošlite ďalšiu správu
                      </button>
                    </div>
                  )}
                </div>
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
