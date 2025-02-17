import {expect} from '@loopback/testlab';
import sinon from 'sinon';
import {GooglePostVerifyProvider} from '../../providers';

describe('Google Oauth Post Verify Service', () => {
  let googlePostVerifyProvider: GooglePostVerifyProvider;

  afterEach(() => sinon.restore());
  beforeEach(setUp);

  const profile = {
    id: 'test_id',
    displayName: 'test_display_name',
    profileUrl: 'test_profile_url',
    _raw: 'test_raw',
    _json: 'test_json',
    provider: 'test_provider',
  };
  const user = null;

  describe('Post Verify Service', () => {
    it('checks if provider returns a function', async () => {
      const result = googlePostVerifyProvider.value();
      expect(result).to.be.Function();
    });

    it('checks if provider function returns a promise which returns the user', async () => {
      const func = googlePostVerifyProvider.value();
      const result = await func(profile, user);
      expect(result).to.be.eql(user);
    });
  });

  function setUp() {
    googlePostVerifyProvider = new GooglePostVerifyProvider();
  }
});
