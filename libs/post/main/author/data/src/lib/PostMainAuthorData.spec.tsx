import { render } from '@testing-library/react';

import PostMainAuthorData from './PostMainAuthorData';

describe('PostMainAuthorData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostMainAuthorData />);
    expect(baseElement).toBeTruthy();
  });
});
