import React, { useRef, useState, useEffect } from "react";
import useVisibility from "../hooks/useVisibility";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { useDropzone } from "react-dropzone";
import { MdClose } from "react-icons/md";

const emailjsKey = import.meta.env.VITE_APP_EMAILJS_KEY;
const emailjsTemplateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID_FILES;
const emailjsServiceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;

export const JobApplication = () => {
  const [ref, isVisible] = useVisibility();
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [fileList, setFileList] = useState([]);
  const { t } = useTranslation();

  function formatBytes(bytes, decimals = 1) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat(bytes / Math.pow(k, i)).toFixed(dm) + " " + sizes[i];
  }

  function removeFile(filePath) {
    setFileList((prev) => prev.filter((file) => file.path !== filePath));
  }

  const onDropRejected = (fileRejections) => {
    // handle rejected files here
    console.log(fileRejections);
    setValue("files", []);
    setFileList([]);
  };

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: [
      "text/plain", //for .txt
      "application/msword", //for .doc
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", //for .docx
      "application/pdf", //for .pdf
    ].join(", "),
    maxSize: 5 * 1024 * 1024, // 5MB
    onDropRejected: onDropRejected,
  });

  const files = fileList.map((file) => (
    <li key={file.path} className="flex items-center justify-between">
      {file.path} - {formatBytes(file.size)}
      <button
        onClick={() => removeFile(file.path)}
        className="bg-red-900 rounded-full cursor-pointer flex items-center"
      >
        <MdClose size={20} />
      </button>
    </li>
  ));

  const fileSchema = z.object({
    path: z.string(), //File name
    size: z.number().max(5 * 1024 * 1024, t("form_message.file_too_large")), //Max 5MB
    type: z.string().refine(
      (value) =>
        [
          "text/plain", //for .txt
          "application/msword", //for .doc
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document", //for .docx
          "application/pdf", //for .pdf
        ].includes(value),
      t("form_message.invalid_file_type")
    ),
  });

  const schema = z.object({
    name: string().min(1, { message: t("form_message.name") }),
    email: string().email({ message: t("form_message.email") }),
    message: string().min(1, { message: t("form_message.message") }),
    files: z.array(fileSchema),
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: "",
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setFileList(acceptedFiles);
  }, [acceptedFiles]);

  useEffect(() => {
    if (isSubmitted) {
      alert(t("form_message.alert"));
      setIsSubmitted(false);
      reset();
    }
  }, [isSubmitted, reset]);

  useEffect(() => {
    //register the 'files' field with react-hook-form
    register("files");

    // If there are accepted files, set the value of 'files' to the acceptedFiles
    setValue("files", fileList);
  }, [fileList, register, setValue]);

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
          className={`border bg-primary w-full rounded-full px-4 py-2 outline-none focus:border-1 focus:border-b-makerGold`}
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
          className="border bg-primary w-full rounded-full px-4 py-2 outline-none focus:border-1 focus:border-b-makerGold"
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
          className="border bg-primary w-full rounded-2xl px-4 py-2 outline-none focus:border-1 focus:border-b-makerGold "
          id="message"
          {...register("message")}
          tabIndex="3"
          placeholder={t("form_message.placeholder_message")}
          aria-required="true"
          rows={1}
        ></textarea>
        <div className="text-red-500">{errors.message?.message}</div>

        <div
          {...getRootProps({
            className: `w-full py-4 px-2 text-primary bg-dimWhite cursor-pointer rounded-2xl border-dashed border-2 border-gray-300`,
          })}
        >
          <input id="file" {...getInputProps()} />
          <p className="text-center">
            Drag 'n' drop your files here, or click to select files
          </p>
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
        <div className="text-red-500">{errors.files?.message}</div>

        <button
          name="submit"
          type="submit"
          tabIndex="4"
          id="send-msg"
          className="tracking-wide border rounded-xl hover:shadow-sm hover:shadow-makerGold leading-9 hover:text-makerGold"
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
