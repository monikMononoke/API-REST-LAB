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

  @media (min-width: 600px) {
    flex-direction: row;
    padding: 20px;
  }
`;

export const image = css`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;
