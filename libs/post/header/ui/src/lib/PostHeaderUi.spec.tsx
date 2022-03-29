import { render } from '@testing-library/react';

import PostHeaderUi from './PostHeaderUi';

describe('PostHeaderUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostHeaderUi />);
    expect(baseElement).toBeTruthy();
  });
});
