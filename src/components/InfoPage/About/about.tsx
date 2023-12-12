import React from "react";
import Voltar from "../../BackButton/BackButton";

export function About() {
  return (
    <div className="container">
      <Voltar />
      <h1>Contatos</h1>
      <table>
        <thead>
          <tr>
            <th>Desenvolvedor</th>
            <th>Redes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Breno Porfírio</strong>
            </td>
            <td>
              <li> <a href="https://www.instagram.com/_brennus/" target="_blank">Instagram</a></li>
              <li> <a href="https://github.com/BrenoPorfirio" target="_blank">Github</a></li>
              <li> <a href="https://www.linkedin.com/in/breno-porfírio-980a73245/" target="_blank">LinkedIn</a></li>
            </td>
          </tr>
          <tr>
          <td>
              <strong>Eric Madson</strong>
            </td>
            <td>
              <li> <a href="https://www.instagram.com/ericmadsonn/" target="_blank">Instagram</a></li>
              <li> <a href="https://github.com/ericmadson" target="_blank">Github</a></li>
              <li> <a href="https://www.linkedin.com/in/eric-madson/" target="_blank">LinkedIn</a></li>
            </td>
          </tr>
          <tr>
          <td>
              <strong>José Gabriel</strong>
            </td>
            <td>
              <li> <a href="https://www.instagram.com/igwbriel/" target="_blank">Instagram</a></li>
              <li> <a href="https://github.com/Igwbriel" target="_blank">Github</a></li>
              <li> <a href="https://www.linkedin.com/in/gabriel-dias-884481247" target="_blank">LinkedIn</a></li>
            </td>
          </tr>
        </tbody>
      </table>

      <style>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #f8f8f8;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          font-family: 'Arial', sans-serif;
        }

        .container {
          text-align: center;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
          background: #0385FD;
          color: #ffffff;
          border-radius: 4px;
          padding: 12px;
          margin-bottom: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th, td {
          border: 1px solid #0385FD;
          padding: 20px;
          text-align: left;
        }

        th {
          background-color: #0385FD;
          color: #ffffff;
        }

        a {
          text-decoration: none;
          color: #282726;
          font-weight: bold;
          transition: color 0.3s ease-in-out;
        }

        a:hover {
          color: #0385FD;
        }

      `}</style>
    </div>
  );
}