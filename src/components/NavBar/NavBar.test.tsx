import NavBar from './NavBar';
import { renderWithProviders } from '../../utils/test';

describe('NavBar', () => {
  const defaultProps = {
    links: [
      { text: 'Link1', href: '/link1', 'data-testid': 'Link1'},
      { text: 'Link2', href: '/link2', 'data-testid': 'Link2' },
      { text: 'Link3', href: '/link3', 'data-testid': 'Link3' },
    ],
  };

  it('should render NavBar links', () => {
    const { getByText } = renderWithProviders(<NavBar {...defaultProps} />);

    expect(getByText('Link1')).toBeInTheDocument();
    expect(getByText('Link2')).toBeInTheDocument();
    expect(getByText('Link3')).toBeInTheDocument();
  });

  // TODO: Challenge 2
  it('should render an `href` attribute for each link', () => {
    const { container } = renderWithProviders(<NavBar {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  // Challenge 2 again.
  it('should render an `href` attribute for each link - non snapshot', () => {
    const { getByTestId } = renderWithProviders(<NavBar {...defaultProps} />);
    const link1 = defaultProps.links[0]
    expect(getByTestId(link1.text)).toHaveAttribute('href', link1.href)

    const link2= defaultProps.links[1]
    expect(getByTestId(link2.text)).toHaveAttribute('href', link2.href)
    
    const link3 = defaultProps.links[2]
    expect(getByTestId(link3.text)).toHaveAttribute('href', link3.href)
  })
});
