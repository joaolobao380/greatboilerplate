import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /Great Boilerplate!/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  //Testing styles
  it('should render the background color correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#19191c' });
  });
});
