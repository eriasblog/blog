import { render } from '@testing-library/react';

import PostMainAuthorUi from './PostMainAuthorUi';

describe('PostMainAuthorUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostMainAuthorUi />);
    expect(baseElement).toBeTruthy();
  });
});
