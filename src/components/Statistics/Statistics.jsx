import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, List, Percentage, Title } from './Statistics.styled';

const Statistics = ({ stats, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </li>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
