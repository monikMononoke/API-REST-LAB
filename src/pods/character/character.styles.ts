import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  background-color: #282c34;
  border-radius: 20px;
  margin: 0 auto;
  color: white;
  padding: 16px;
  max-width: 760px;

  @media (min-width: 600px) {
    flex-direction: row;
    padding: 20px;
  }
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const button = css`
  padding: 8px 16px;
  background-color: #61dafb;
  border: none;
  border-radius: 4px;
  color: #282c34;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;

export const card = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  background-color: #20232a;
  border-radius: 20px;
  padding: 16px;
  max-width: 300px;

  @media (min-width: 600px) {
    padding: 20px;
  }
`;
