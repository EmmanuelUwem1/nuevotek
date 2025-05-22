"use client";
import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function PhoneNumberInput({ value, onChange }) {
  return (
    <input
      type="text"
      id="phone"
      name="number"
      value={value}
      onChange={onChange}
      placeholder="Phone Number"
      className="bg-[#F4F4F4] h-16 flex w-full rounded-sm px-4 focus:border-[1px] focus:border-[var(--primary-color)]"
      onKeyDown={(e) => {
        const allowedKeys = [
          "Backspace",
          "ArrowLeft",
          "ArrowRight",
          "Delete",
          "Tab",
          "Enter",
          "+",
          "-",
          "_",
        ];
        if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
          e.preventDefault();
        }
      }}
      onPaste={(e) => {
        const paste = (e.clipboardData || window.clipboardData).getData("text");
        if (!/^[0-9+\-_]*$/.test(paste)) {
          e.preventDefault();
        }
      }}
    />
  );
}

function Form() {
  const [userInput, setUserInput] = useState({
    name: "",
    company_name: "",
    email: "",
    message: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check
    if (
      !userInput.name ||
      !userInput.company_name ||
      !userInput.email ||
      !userInput.message ||
      !userInput.number
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service configuration is missing.");
      return;
    }

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        number: userInput.number,
        to_name: "Nuevotek Solutions Limited",
        company_name: userInput.company_name,
        message: userInput.message,
      };

      const res = await emailjs.send(
        serviceId,
        templateId,
        emailParams,
        publicKey
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          number: "",
          company_name: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  const form = useRef();

  return (
    <>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex justify-normal flex-col items-center w-full gap-4 pr-4 mt-8"
      >
        <div className="flex flex-wrap md:flex-nowrap w-full gap-4">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={userInput.name}
            id="name"
            placeholder="Enter your full name"
            className="bg-[#F4F4F4] h-16 flex w-full rounded-sm px-4 focus:border-[1px] focus:border-[var(--primary-color)]"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={userInput.email}
            onChange={handleChange}
            placeholder="Enter your E-mail"
            className="bg-[#F4F4F4] h-16 flex w-full rounded-sm px-4 focus:border-[1px] focus:border-[var(--primary-color)]"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap w-full gap-4">
          <PhoneNumberInput
            value={userInput.number}
            onChange={handleChange}
          />
          <input
            type="text"
            onChange={handleChange}
            name="company_name"
            value={userInput.company_name}
            id="company_name"
            placeholder="Enter your company’s name"
            className="bg-[#F4F4F4] h-16 flex w-full rounded-sm px-4 focus:border-[1px] focus:border-[var(--primary-color)]"
          />
        </div>
        <div className="flex w-full">
          <textarea
            name="message"
            id="message"
            value={userInput.message}
            onChange={handleChange}
            placeholder="Your message here"
            className="bg-[#F4F4F4] h-72 w-full rounded-sm p-4 focus:border-[1px] focus:border-[var(--primary-color)]"
          ></textarea>
        </div>
        <button
          name="user_first_name"
          className="font-styrene flex w-full justify-center items-center font-medium text-base bg-[var(--primary-color)] text-[#FFFFFF] px-8 py-3 transition-all hover:bg-black"
        >
          Send a Message
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default Form;
