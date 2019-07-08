/* eslint-env mocha */

import { describe, it } from 'mocha';
import assert from 'assert';
import nock from 'nock';

import postFeedback from "../../src/services/PostFeedbackService";

describe('PostFeedbackService', () => {
  describe('putFeedback', () => {
    it('makes a PUT request', async () => {

      const origin = 'https://example.org';
      const wnd = {
        location: {
          origin
        }
      };
      const postBody =  {
        name: 'Comment McCommentface',
        comment: 'A moose bit my sister'
      };

      const mockHttpApiEndpoint = nock(origin)
        .post('/api/feedbacks', postBody)
        .reply(200, { received: true });

      const result = await postFeedback(postBody, wnd);
      assert(mockHttpApiEndpoint.isDone());
      assert.deepStrictEqual(result, { received: true });
    });
  });
});
