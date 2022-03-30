import { render } from '@testing-library/react';

import PostHeaderContext from './PostHeaderContext';

describe('PostHeaderContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostHeaderContext />);
    expect(baseElement).toBeTruthy();
  });
});
