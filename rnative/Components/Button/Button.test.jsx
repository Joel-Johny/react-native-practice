import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button', () => {
  it('renders with the correct title', () => {
    const { getByText } = render(<Button title="Click Me" />);
    expect(getByText('Click Me')).toBeDefined();
  });

  it('calls the onPress function when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<Button title="Click Me" onPress={mockOnPress} />);

    fireEvent.press(getByTestId('pressed'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
