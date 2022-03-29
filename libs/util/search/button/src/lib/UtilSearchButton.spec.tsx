import { render } from '@testing-library/react';

import UtilSearchButton from './UtilSearchButton';

describe('UtilSearchButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilSearchButton />);
    expect(baseElement).toBeTruthy();
  });
});
