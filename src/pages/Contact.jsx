import React, { useState } from "react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsGeoAlt,
} from "react-icons/bs";

// Função para gerar captcha simples
function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b}`, answer: (a + b).toString() };
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showConfirmCard, setShowConfirmCard] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [popup, setPopup] = useState({ show: false, success: true, message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== "";

  // Ao enviar o formulário, abre o card de captcha
  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
    setShowConfirmCard(true);
  };

  // Confirma o envio após o captcha
  const handleConfirm = () => {
    if (captchaInput.trim() !== captcha.answer) {
      setShowConfirmCard(false);
      setCaptchaInput("");
      setPopup({
        show: true,
        success: false,
        message: "O email não foi enviado. Resolva o captcha corretamente para enviar.",
      });
      setTimeout(() => setPopup({ show: false, success: true, message: "" }), 4000);
      return;
    }
    // Aqui você pode implementar o envio real do formulário (Netlify, fetch, etc)
    setShowConfirmCard(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setCaptchaInput("");
    setPopup({
      show: true,
      success: true,
      message: "Mensagem enviada com sucesso!",
    });
    setTimeout(() => setPopup({ show: false, success: true, message: "" }), 4000);
  };

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* Video de background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Estou sempre aberto a novas oportunidades e colaborações. Vamos
              conversar sobre seu próximo projeto!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-100 dark:bg-black dark:bg-opacity-30 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Informações de Contato
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-blue-600 p-3 rounded-full mr-4">
                      <BsEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-gray-100 font-semibold">Email</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        delson_filho@protonmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-600 p-3 rounded-full mr-4">
                      <BsGeoAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-gray-100 font-semibold">Localização</h3>
                      <p className="text-gray-700 dark:text-gray-300">Belo Horizonte, Brasil</p>
                    </div>
                  </div>
                </div>
                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
                  <h3 className="text-gray-900 dark:text-gray-100 font-semibold mb-4">
                    Redes Sociais
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/delsinx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded-full transition-colors duration-300"
                    >
                      <BsGithub className="text-gray-900 dark:text-gray-100 text-xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/delsonaafilho/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300"
                    >
                      <BsLinkedin className="text-white text-xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gray-100 dark:bg-black dark:bg-opacity-30 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Disponibilidade
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Disponível para projetos freelance
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Aberto a oportunidades full-time
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-100 dark:bg-black dark:bg-opacity-30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Envie uma Mensagem
              </h2>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <input name="bot-field" />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-900 dark:text-gray-100 font-semibold mb-2"
                  >
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-900 dark:text-gray-100 font-semibold mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-900 dark:text-gray-100 font-semibold mb-2"
                  >
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-900 dark:text-gray-100 font-semibold mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-vertical"
                    placeholder="Descreva seu projeto ou dúvida..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  disabled={!isFormValid}
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          {/*  <div className="mt-16 bg-gray-800 bg-opacity-80 rounded-lg p-8"> </div> */}
        </div>
      </div>

      {/* Card de confirmação com captcha simples */}
      {showConfirmCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-sm w-full text-center relative">
            {/* Botão de fechar no canto superior direito */}
            <button
              onClick={() => { setShowConfirmCard(false); setCaptchaInput(""); }}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl font-bold focus:outline-none"
              aria-label="Fechar"
              type="button"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Confirme o envio
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Para enviar sua mensagem, confirme abaixo e resolva o captcha.
            </p>
            <div className="flex flex-col items-center mb-4">
              <label className="mb-2 text-gray-900 dark:text-gray-100 font-semibold">
                Quanto é {captcha.question}?
              </label>
              <input
                type="text"
                value={captchaInput}
                onChange={e => setCaptchaInput(e.target.value)}
                className="w-32 px-3 py-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Resposta"
                autoFocus
              />
            </div>
            <button
              onClick={handleConfirm}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow"
            >
              Confirmar envio
            </button>
          </div>
        </div>
      )}

      {/* Popup de feedback */}
      {popup.show && (
        <div
          className={`fixed right-6 bottom-6 z-50 px-6 py-4 rounded-lg shadow-lg text-white transition-all duration-300
            ${popup.success ? "bg-green-600" : "bg-red-600"}`}
        >
          {popup.message}
        </div>
      )}

      {/* Footer */}
      <footer className="w-full bg-black bg-opacity-30 text-gray-300 py-6 mt-12 border-t border-gray-800 z-20 relative">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm mb-2 md:mb-0">
            © {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.
          </span>
          <div className="flex flex-wrap gap-4 items-center text-sm">
            <span className="font-semibold text-white">Tecnologias:</span>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-40 rounded hover:bg-gray-900 transition-colors"
              title="React"
            >
              <svg width="18" height="18" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="20" rx="3" ry="3" fill="#61DAFB"/><ellipse cx="20" cy="20" rx="17" ry="7" stroke="#61DAFB" strokeWidth="2" fill="none"/><ellipse cx="20" cy="20" rx="7" ry="17" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="7" ry="17" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 20 20)"/></svg>
              React
            </a>
            <a
              href="https://developer.mozilla.org/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-40 rounded hover:bg-gray-900 transition-colors"
              title="JavaScript"
            >
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><path d="M21.5 23.5c.5.8 1.2 1.4 2.4 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.7-.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.3-3 1.4 0 2.4.5 3.1 1.7l-1.7 1.1c-.4-.7-.8-1-1.4-1-.6 0-1 .4-1 .9 0 .6.4.9 1.3 1.3l.6.3c2 .9 3.1 1.7 3.1 3.6 0 2.1-1.7 3.2-4 3.2-2.2 0-3.5-1.1-4.2-2.5l1.8-1zm-8.2.2c.3.6.6 1.1 1.3 1.1.7 0 1.1-.3 1.1-1.4v-6.2h2.1v6.3c0 2.2-1.3 3.2-3.1 3.2-1.7 0-2.7-.9-3.2-2l1.8-1z" fill="#222"/></svg>
              JavaScript
            </a>
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-40 rounded hover:bg-gray-900 transition-colors"
              title="Tailwind CSS"
            >
              <svg width="18" height="18" viewBox="0 0 48 48" fill="none"><path d="M13.5 23.5C15.5 18.5 19.5 16 25 16c7 0 10.5 4 10.5 12-2 5-6 7.5-12 7.5-7 0-10.5-4-10.5-12z" fill="#38BDF8"/><path d="M2.5 35.5C4.5 30.5 8.5 28 14 28c7 0 10.5 4 10.5 12-2 5-6 7.5-12 7.5-7 0-10.5-4-10.5-12z" fill="#38BDF8"/></svg>
              Tailwind CSS
            </a>
            <a
              href="https://reactrouter.com/en/main"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-40 rounded hover:bg-gray-900 transition-colors"
              title="React Router"
            >
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#CA4245"/><path d="M10 22c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#fff" strokeWidth="2" fill="none"/><circle cx="16" cy="22" r="2" fill="#fff"/></svg>
              React Router
            </a>
            <a
              href="https://developer.mozilla.org/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-40 rounded hover:bg-gray-900 transition-colors"
              title="HTML5"
            >
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><path d="M6 28L4 4h24l-2 24-10 4-10-4z" fill="#E44D26"/><path d="M16 27l8.1-2.9 1.7-19.1H16v22z" fill="#F16529"/><path d="M16 13h-4l.3 3h3.7v3h-3.3l.2 2h3.1v3.1l-2.7-.9-.2-2.2h-2.1l.4 4.1 6.6 2.3v-8.4zm0-5v3h7.1l-.2-2H16z" fill="#fff"/></svg>
              HTML5
            </a>
            <a
              href="https://developer.mozilla.org/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 bg-black bg-opacity-40 rounded hover:bg-gray-900 transition-colors"
              title="CSS3"
            >
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><path d="M6 28L4 4h24l-2 24-10 4-10-4z" fill="#1572B6"/><path d="M16 27l8.1-2.9 1.7-19.1H16v22z" fill="#33AADD"/><path d="M16 13h-4l.3 3h3.7v3h-3.3l.2 2h3.1v3.1l-2.7-.9-.2-2.2h-2.1l.4 4.1 6.6 2.3v-8.4zm0-5v3h7.1l-.2-2H16z" fill="#fff"/></svg>
              CSS3
            </a>
          </div>