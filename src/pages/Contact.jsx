import React, { useState } from "react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsGeoAlt,
} from "react-icons/bs";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log("Form submitted:", formData);
    alert("Mensagem enviada! Entrarei em contato em breve.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-900 transition-colors duration-300">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estou sempre aberto a novas oportunidades e colaborações. Vamos
              conversar sobre seu próximo projeto!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-800 bg-opacity-80 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Informações de Contato
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-blue-600 p-3 rounded-full mr-4">
                      <BsEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-300">
                        delson_filho@protonmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-purple-600 p-3 rounded-full mr-4">
                      <BsGeoAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Localização</h3>
                      <p className="text-gray-300">Belo Horizonte, Brasil</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h3 className="text-white font-semibold mb-4">
                    Redes Sociais
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/delsinx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-300"
                    >
                      <BsGithub className="text-white text-xl" />
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
              <div className="bg-gray-800 bg-opacity-80 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Disponibilidade
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">
                      Disponível para projetos freelance
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">
                      Aberto a oportunidades full-time
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 bg-opacity-80 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Envie uma Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-semibold mb-2"
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
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-semibold mb-2"
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
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white font-semibold mb-2"
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
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-semibold mb-2"
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
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-vertical"
                    placeholder="Descreva seu projeto ou dúvida..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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
    </div>
  );
}
