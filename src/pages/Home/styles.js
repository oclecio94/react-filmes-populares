import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
`;

export const Movies = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Movie = styled.li`
  flex-direction: column;
  align-items: center;
  flex: 1 1 200px;
  margin: 10px;

  img {
    width: 100%;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }
`;
