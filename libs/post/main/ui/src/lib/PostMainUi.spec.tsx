import { render } from '@testing-library/react';

import PostMainUi from './PostMainUi';

describe('PostMainUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostMainUi />);
    expect(baseElement).toBeTruthy();
  });
});
