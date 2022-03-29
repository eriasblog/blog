import { render } from '@testing-library/react';

import PostHeaderNav from './PostHeaderNav';

describe('PostHeaderNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostHeaderNav />);
    expect(baseElement).toBeTruthy();
  });
});
