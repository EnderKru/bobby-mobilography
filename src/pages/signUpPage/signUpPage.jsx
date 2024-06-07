import React, { useState } from "react";
import "./signUpPage.css"; // Ensure the CSS file is correctly named
import { NavLink } from "react-router-dom";
import burger from "../../assets/image/burger-menu.svg";
import back from "../../assets/colabackground.svg";
import { Footer } from "../../components/template/footer/footer.jsx";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    video: null,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 134217728) {
      // 128 MB in bytes
      setFormData({ ...formData, video: file });
      setError("");
    } else {
      setError("Размер видео не должен превышать 128 МБ");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.video
    ) {
      setError("Все поля обязательны для заполнения!");
      return;
    }

    try {
      // Simulate sending data to the server
      const response = await fetch("https://example.com/api/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => (window.location.href = "/"), 3000); // Redirect to the homepage after 3 seconds
      } else {
        setError("Произошла ошибка при регистрации");
      }
    } catch (err) {
      setError("Произошла ошибка при регистрации");
    }
  };

  return (
    <div
      className="back"
      style={{
        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
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
          {success && (
            <div className="success">Регистрация прошла успешно!</div>
          )}
          <div className="regFrom_inpblock">
            <div>
              <p>Имя</p>
              <input
                type="text"
                name="firstName"
                placeholder="Введите текст"
                value={formData.firstName}
                onChange={handleInputChange}
                className="regFrom_inp"
              />
            </div>
            <div>
              <p>Фамилия</p>
              <input
                type="text"
                name="lastName"
                placeholder="Введите текст"
                value={formData.lastName}
                onChange={handleInputChange}
                className="regFrom_inp"
              />
            </div>
            <div>
              <p>Номер телефона</p>
              <input
                type="text"
                name="phone"
                placeholder="+996 999 777 999"
                value={formData.phone}
                onChange={handleInputChange}
                className="regFrom_inp"
              />
            </div>{" "}
            <div className="regFrom_inpblock2Mob">
              <input
                name="file"
                type="file"
                id="regFromInp_fileMob"
                className="input regFromInp_fileMob"
                accept="video/*"
                onChange={handleFileChange}
              />
              <label for="regFromInp_fileMob" className="regFromFile_buttonMob">
                <span className="regFromInpButton_textMob">
                  Выберите видеоролик
                </span>
              </label>
            </div>
            <button type="submit">Отправить</button>
          </div>
          <div className="regFrom_inpblock2">
            <input
              name="file"
              type="file"
              id="regFromInp_file"
              class="input regFromInp_file"
              accept="video/*"
              onChange={handleFileChange}
            />
            <label for="regFromInp_file" class="regFromFile_button">
              <span class="regFromInpButton_text">Выберите видеоролик</span>
            </label>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationForm;
