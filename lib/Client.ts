import axios, { AxiosRequestConfig } from 'axios';
import { WaterbaseConfig } from './models/Config';

class Client {
  endpoint: String = '';

  headers: any = {
    'content-type': '',
  };

  constructor(config: WaterbaseConfig) {
    this.endpoint = config.endpoint;
    this.headers = config.defaultHeaders || {
      'content-type': '',
    };
    this.setKey(config.secretKey);
  }

  /**
   * Set Key
   *
   * Your secret API key
   *
   * @param string value
   *
   * @return self
   */
  setKey(value: string) {
    this.addHeader('x-waterbase-key', value);
    return this;
  }

  /**
   * Set Endpoint
   * @param endpoint
   *
   * @return this
   */
  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;

    return this;
  }

  /**
   * @param key string
   * @param value string
   */
  addHeader(key: string, value: string) {
    this.headers[key] = value;
    return this;
  }

  async call(method: string, path: string = '', headers: object = {}, params = {}) {
    this.headers = { ...this.headers, ...headers };
    const options = {
      method: method.toUpperCase(),
      url: this.endpoint + path,
      headers: this.headers,
      data: method.toUpperCase() === 'GET' ? null : params,
    } as AxiosRequestConfig;
    const response = await axios(options);

    return response.data;
  }
}

export default Client;
