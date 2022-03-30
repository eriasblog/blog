import { render } from '@testing-library/react';

import UtilSearchSearchCtx from './UtilSearchContext';

describe('UtilSearchSearchCtx', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilSearchSearchCtx />);
    expect(baseElement).toBeTruthy();
  });
});
