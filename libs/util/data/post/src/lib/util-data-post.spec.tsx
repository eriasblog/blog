import { render } from '@testing-library/react';

import UtilDataPost from './util-data-post';

describe('UtilDataPost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilDataPost />);
    expect(baseElement).toBeTruthy();
  });
});
