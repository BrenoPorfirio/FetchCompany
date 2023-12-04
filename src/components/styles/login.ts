import styled from "styled-components";
import { motion } from "framer-motion";

export const LoginContainer = styled(motion.div)`
  form {
    display: flex;
    flex-direction: column;
    gap: 11px;

    button {
      padding: 20px 0;
      color: var(--white);

      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;

      text-transform: uppercase;

      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

      &:hover {
        opacity: 0.8;
        transition: all 0.3s ease;
      }

      &:first-of-type {
        margin-top: 24px;
        background: var(--hub-blue);
      }

      &:last-of-type {
        background: var(--hub-green);
      }
    }
  }
`;
