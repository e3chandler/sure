import NavBar from './NavBar';
import { renderWithProviders } from '../../utils/test';

describe('NavBar', () => {
  const defaultProps = {
    links: [
      { text: 'Link1', href: '/link1' },
      { text: 'Link2', href: '/link2' },
      { text: 'Link3', href: '/link3' },
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
    const { getByText } = renderWithProviders(<NavBar {...defaultProps} />);
    const link1 = defaultProps.links[0]
    expect(getByText(link1.text).closest('a')).toHaveAttribute('href', link1.href)

    const link2= defaultProps.links[1]
    expect(getByText(link2.text).closest('a')).toHaveAttribute('href', link2.href)
    
    const link3 = defaultProps.links[2]
    expect(getByText(link3.text).closest('a')).toHaveAttribute('href', link3.href)
  })
});
