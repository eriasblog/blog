import { render } from '@testing-library/react';

import PostLayoutUi from './PostLayoutUi';

describe('PostLayoutUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostLayoutUi />);
    expect(baseElement).toBeTruthy();
  });
});
