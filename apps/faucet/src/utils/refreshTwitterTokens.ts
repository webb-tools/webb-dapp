import { err, Result } from 'neverthrow';

import clientConfig from '../config/client';
import FaucetError from '../errors/FaucetError';
import FaucetErrorCode from '../errors/FaucetErrorCode';
import { TwitterLoginResponse, TwitterRefreshTokensBody } from '../types';
import parseTokensResponse from './parseTokensResponse';

const refreshTwitterTokens = async (
  refreshToken: string,
  abortSignal?: AbortSignal
): Promise<
  | Result<
      TwitterLoginResponse,
      | FaucetError<FaucetErrorCode.INVALID_RESPONSE>
      | FaucetError<FaucetErrorCode.REFRESH_TOKENS_FAILED>
      | FaucetError<FaucetErrorCode.JSON_PARSE_ERROR>
    >
  | undefined
> => {
  const body: TwitterRefreshTokensBody = {
    clientId: clientConfig.twitterClientId,
    refreshToken,
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const resp = await fetch('/api/auth/refresh/twitter', {
      body: JSON.stringify(body),
      headers,
      method: 'POST',
      signal: abortSignal,
    });

    if (!resp.ok) {
      let msg = '';

      try {
        const json = await resp.json();
        console.group('ERROR JSON');
        console.log(json);
        console.groupEnd();
        msg = json.message || resp.statusText;
      } catch (error) {
        msg = resp.statusText;
      }

      return err(
        FaucetError.from(FaucetErrorCode.REFRESH_TOKENS_FAILED, {
          message: msg,
          status: resp.status,
        })
      );
    }

    try {
      const json = await resp.json();
      return parseTokensResponse(json);
    } catch (error) {
      return err(
        FaucetError.from(FaucetErrorCode.JSON_PARSE_ERROR, {
          context: 'refreshTwitterTokens()',
        })
      );
    }
  } catch (error) {
    // Ignore abort errors
  }
};

export default refreshTwitterTokens;
