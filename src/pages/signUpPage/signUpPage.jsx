import React, { useState } from "react";
import "./signUpPage.css"; // Ensure the CSS file is correctly named
import { NavLink } from "react-router-dom";
import back from "../../assets/image/maxireg-bg.jpg";
import { Footer } from "../../components/template/footer/footer.jsx";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone_number: "",
    project_link: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.surname || !formData.phone_number || !formData.project_link) {
      setError("Все поля обязательны для заполнения!");
      return;
    }

    try {
      console.log("Sending data:", formData); // Log the data being sent
      const response = await fetch("http://217.151.230.35:200/register_mob/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => (window.location.href = "/"), 3000); // Redirect to the homepage after 3 seconds
      } else {
        const errorData = await response.json(); // Try to get additional error information
        setError(`Произошла ошибка при регистрации: ${errorData.message || response.statusText}`);
      }
    } catch (err) {
      console.error("Error during fetch:", err);
      setError("Произошла ошибка при регистрации");
    }
  };

  return (
      <div
          className="back"
          style={{
            backgroundImage: `url(${back})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
          }}
      >
        <div className="container-header">
          <header className="header">
            <div className="conteiner">
              <div className="header-wrapper">
                <div className="header-logo">
                  <NavLink
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                      }}
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-left"
                        viewBox="0 0 16 16"
                    >
                      <path
                          fillRule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                      />
                    </svg>
                    <span className="to-back">На главную</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div className="registration-container">
          <h1
              style={{
                justifyContent: "center",
                textAlign: "center",
                margin: "20px",
              }}
          >
            РЕГИСТРАЦИЯ
          </h1>
          <form className="registration-form" onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">Регистрация прошла успешно!</div>}
            <div className="regFrom_inpblock">
              <div>
                <p>Имя</p>
                <input
                    type="text"
                    name="name"
                    placeholder="Введите текст"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="regFrom_inp"
                />
              </div>
              <div>
                <p>Фамилия</p>
                <input
                    type="text"
                    name="surname"
                    placeholder="Введите текст"
                    value={formData.surname}
                    onChange={handleInputChange}
                    className="regFrom_inp"
                />
              </div>
              <div>
                <p>Номер телефона</p>
                <input
                    type="text"
                    name="phone_number"
                    placeholder="+996 999 777 999"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    className="regFrom_inp"
                />
              </div>
              <div>
                <p>Ссылка на видео</p>
                <input
                    type="text"
                    name="project_link"
                    placeholder="Введите ссылку"
                    value={formData.project_link}
                    onChange={handleInputChange}
                    className="regFrom_inp"
                />
              </div>
              <button type="submit">Отправить</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default RegistrationForm;
