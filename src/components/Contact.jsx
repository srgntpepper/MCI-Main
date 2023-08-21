import React, { useRef, useState, useEffect } from "react";
import useVisibility from "../hooks/useVisibility";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const emailjsKey = import.meta.env.VITE_APP_EMAILJS_KEY;
const emailjsTemplateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const emailjsServiceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;

export const Contact = () => {
  const [ref, isVisible] = useVisibility();
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { t } = useTranslation();

  const schema = z.object({
    name: string().min(1, { message: t("form_message.name") }),
    email: string().email({ message: t("form_message.email") }),
    message: string().min(1, { message: t("form_message.message") }),
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: "",
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (isSubmitted) {
      alert(t("form_message.alert"));
      setIsSubmitted(false);
      reset();
    }
  }, [isSubmitted, reset]);

  const handleSave = (formValues) => {
    console.log(formValues);

    emailjs
      .sendForm(emailjsServiceId, emailjsTemplateId, form.current, emailjsKey)
      .then(
        (result) => {
          console.log(result.text);
          console.log(t("form_message.sent"));
          setSuccessMessage(t("form_message.send_success"));
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      ref={ref}
      className={`bg-primary rounded-lg text-white shadow-lg p-4 z-50 w-full xs:w-[480px]  h-[500px] ${
        isVisible ? "animate-fadeRight" : "animate-fadeOut"
      }`}
    >
      <form
        onSubmit={handleSubmit(handleSave)}
        ref={form}
        className="flex flex-col space-y-2"
      >
        <label className="text-sm">{t("form_message.your_name")}</label>
        <input
          className={`border-b bg-primary w-full rounded-md px-4 py-2 outline-none focus:border-b-2 focus:border-b-makerGold`}
          type="text"
          id="name"
          {...register("name")}
          tabIndex="1"
          placeholder={t("form_message.placeholder_name")}
          aria-required="true"
        />
        <div className="text-red-500">{errors.name?.message}</div>

        <label className="text-sm">{t("form_message.your_email")}</label>
        <input
          className="border-b bg-primary w-full rounded-md px-4 py-2 outline-none focus:border-b-2 focus:border-b-makerGold"
          type="email"
          id="email"
          {...register("email")}
          tabIndex="2"
          placeholder={t("form_message.placeholder_email")}
          aria-required="true"
        />
        <div className="text-red-500">{errors.email?.message}</div>

        <label className="text-sm">{t("form_message.your_message")}</label>
        <textarea
          className="border-b bg-primary w-full rounded-md px-4 py-2 outline-none focus:border-b-2 focus:border-b-makerGold "
          id="message"
          {...register("message")}
          tabIndex="3"
          placeholder={t("form_message.placeholder_message")}
          aria-required="true"
          rows={5}
        ></textarea>
        <div className="text-red-500">{errors.message?.message}</div>

        <button
          name="submit"
          type="submit"
          tabIndex="4"
          id="send-msg"
          className="tracking-wide hover:bg-gradient-to-r rounded-md hover:from-white hover:to-makerGold hover:tracking-widest transition ease-in-out hover:scale-105 duration-300 hover:text-black"
        >
          <span style={{ paddingLeft: 0 }}>
            {t("form_message.send_button")}
          </span>
        </button>
        <div
          className={`text-makerGold mt-4 text-center ${
            successMessage ? "opacity-100" : "opacity-0"
          } transition-all duration-300`}
        >
          {successMessage}
        </div>
      </form>
    </div>
  );
};
