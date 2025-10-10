import { Injectable } from '@angular/core';
import { setOnWindow, KeyValue, getLogger } from '@decaf-ts/for-angular';
import { SessionKeys } from '../utils/constants';
import type { StorageEntry, ErrorLike } from '../utils/types';
import { IDecodedToken } from '../utils/interfaces';
import { Logger } from '@decaf-ts/logging';

/**
 * @fileoverview Session Storage Service for CMX Angular Library
 * @description This service provides a comprehensive interface for managing browser session storage
 * with automatic JSON serialization/deserialization, error handling, and specialized methods
 * for authentication token management. All data is stored only for the current browser session.
 *
 * @version 1.0.0
 * @since 1.0.0
 * @author Demerson Carvalho
 * @encoding UTF-8
 */

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  /**
   * @description Browser session storage instance.
   * @summary Direct reference to the browser's sessionStorage API for storing data
   * that persists only for the current browser session. Data is automatically
   * cleared when the browser tab is closed or the session ends.
   *
   * @private
   * @type {Storage}
   * @memberOf SessionService
   */
  private storage: Storage = sessionStorage;

  private logger: Logger = getLogger('SessionService');


  // async initialize(): Promise<AngularStorage> {
  //   return await this.storageService.initialize();
  // }

  /**
   * @description Creates a new entry in session storage.
   * @summary Alias method for setting values in session storage. This method
   * provides semantic clarity when the operation is conceptually creating
   * a new session entry rather than updating an existing one.
   *
   * @param {string} key - The storage key for the new entry
   * @param {KeyValue} value - The value to store (will be JSON serialized if object)
   * @returns {Promise<void>} Promise that resolves when the entry is created
   * @memberOf SessionService
   *
   * @example
   * ```typescript
   * // Create a new session entry
   * await sessionService.create('user-preferences', {
   *   theme: 'dark',
   *   language: 'en'
   * });
   * ```
   */
  async create(keys: string[], decodedToken: IDecodedToken): Promise<void> {
    if (!decodedToken)
      decodedToken = await this.getToken(true) as IDecodedToken;
    if (decodedToken) {
      for (const key of keys) {
        const value = (decodedToken as KeyValue)[key];
        if (value !== undefined)
          await this.set(key === 'sub' ? SessionKeys.loggedUser : key, value);
      }
      setOnWindow(SessionKeys.loggedUser, decodedToken?.sub);
    }
  }

  /**
   * @description Retrieves values from session storage with automatic parsing.
   * @summary Fetches data from session storage and automatically handles JSON parsing.
   * When no key is provided, returns all session storage entries as an object.
   * Gracefully handles JSON parsing errors by returning the raw string value.
   *
   * @param {string} key - The storage key to retrieve (optional for getting all entries)
   * @returns {Promise<StorageEntry>} Promise resolving to the stored value or object of all entries
   * @memberOf SessionService
   *
   * @example
   * ```typescript
   * // Get specific value
   * const userPrefs = await sessionService.get('user-preferences');
   *
   * // Get all session entries
   * const allData = await sessionService.get();
   *
   * // Handle different return types
   * if (typeof userPrefs === 'object') {
   *   console.log('Parsed object:', userPrefs);
   * } else {
   *   console.log('String value:', userPrefs);
   * }
   * ```
   */
  async get(key?: string): Promise<StorageEntry> {

    /**
     * @description Internal helper function for parsing stored values.
     * @summary Attempts to parse JSON data and falls back to returning the raw string
     * if parsing fails. This ensures robust handling of both JSON and plain string data.
     *
     * @param {string | null} data - The raw data from session storage
     * @returns {any} Parsed JSON object or original string value
     * @memberOf SessionService
     */
    const logger = this.logger;

    function parseResult(data: string | null): StorageEntry {
      let result;
      try {
        result = JSON.parse(data as string);
      } catch (error: unknown) {
        logger.error(error as ErrorLike);
        result = data;
      }
      return result;
    }

    if (key)
      return parseResult(this.storage.getItem(key))

    const result: KeyValue = {};
    for (let index = 0; index < sessionStorage.length; index++) {
      const key = sessionStorage.key(index);
      if (key)
        result[key] = parseResult(sessionStorage.getItem(key));
    }
    return result as StorageEntry;
  }

  /**
   * @description Stores values in session storage with automatic serialization.
   * @summary Saves data to session storage, automatically converting objects to JSON strings.
   * String values are stored directly without modification. All values persist only
   * for the current browser session.
   *
   * @param {string} key - The storage key for the entry
   * @param {StorageEntry} value - The value to store (string or object)
   * @returns {Promise<void>} Promise that resolves when the value is stored
   * @memberOf SessionService
   *
   * @example
   * ```typescript
   * // Store an object (automatically serialized)
   * await sessionService.set('user-data', {
   *   id: 123,
   *   name: 'John Doe'
   * });
   *
   * // Store a string value
   * await sessionService.set('theme', 'dark');
   *
   * // Store complex data
   * await sessionService.set('app-config', {
   *   features: ['feature1', 'feature2'],
   *   settings: { debug: true }
   * });
   * ```
   */
  async set(key: string, value: StorageEntry): Promise<void> {
    this.storage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
  }

  /**
   * @description Clears all session storage data.
   * @summary Alias method for clearing all session storage entries. This method
   * provides semantic clarity when the operation is conceptually destroying
   * the entire session rather than deleting specific entries.
   *
   * @returns {Promise<void>} Promise that resolves when all session data is cleared
   * @memberOf SessionService
   *
   * @example
   * ```typescript
   * // Clear all session data (e.g., on logout)
   * await sessionService.destroy();
   * ```
   */
  async destroy(): Promise<void> {
    await this.delete();
  }

  /**
   * @description Removes entries from session storage.
   * @summary Deletes specific entries by key, multiple entries by key array,
   * or all entries when no key is provided. This method provides flexible
   * deletion capabilities for managing session storage cleanup.
   *
   * @param {string | string[]} [key] - Single key, array of keys, or undefined for all entries
   * @returns {Promise<void>} Promise that resolves when deletion is complete
   * @memberOf SessionService
   *
   * @example
   * ```typescript
   * // Delete single entry
   * await sessionService.delete('user-preferences');
   *
   * // Delete multiple entries
   * await sessionService.delete(['key1', 'key2', 'key3']);
   *
   * // Delete all entries
   * await sessionService.delete();
   * ```
   */
  async delete(key?: string | string[]): Promise<void> {
    if (!key)
      return this.storage.clear();
    if (Array.isArray(key)) {
      key.forEach(k => this.storage.removeItem(k));
    } else {
      this.storage.removeItem(key);
    }
  }

  /**
   * @description Stores an authentication token in session storage.
   * @summary Convenience method for storing authentication tokens using the
   * predefined session key. This ensures consistent token storage across
   * the application and integrates with the authentication system.
   *
   * @param {string} token - The authentication token to store
   * @returns {Promise<void>} Promise that resolves when the token is stored
   * @memberOf SessionService
   *
   * @example
   * ```typescript
   * // Store JWT token after successful login
   * await sessionService.storeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...');
   *
   * // Store from login response
   * const loginResponse = await authService.login(credentials);
   * await sessionService.storeToken(loginResponse.token);
   * ```
   */
  async storeToken(token: string): Promise<void> {
    await this.set(SessionKeys.authToken, token);
  }

  /**
   * @description Retrieves and optionally decodes an authentication token.
   * @summary Fetches the stored authentication token from session storage.
   * When decode is true, automatically decodes JWT tokens and returns the payload.
   * Includes error handling and logging for missing or invalid tokens.
   *
   * @param {boolean} [decode=false] - Whether to decode JWT token payload
   * @returns {Promise<string | null>} Promise resolving to token string, decoded payload, or null
   * @memberOf SessionService
   *
   * @example
   * ```typescript
   * // Get raw token
   * const token = await sessionService.getToken();
   * if (token) {
   *   // Use token for API requests
   *   headers.Authorization = `Bearer ${token}`;
   * }
   *
   * // Get decoded JWT payload
   * const payload = await sessionService.getToken(true);
   * if (payload) {
   *   console.log('User ID:', payload.sub);
   *   console.log('Expires:', new Date(payload.exp * 1000));
   * }
   * ```
   */
  async getToken(decode: boolean = false): Promise<IDecodedToken | string | null> {
    const token = await this.get(SessionKeys.authToken) as string | null;
    if (!token) {
      this.logger.info('No auth token found in session storage');
      return null;
    }
    if (!decode)
      return token;
    return await this.getDecodedToken(token) as IDecodedToken;
  }

  async getDecodedToken(token: string): Promise<IDecodedToken | null> {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload) as IDecodedToken;
    } catch (error: unknown) {
      this.logger.error('Invalid token' + (error as Error)?.message || JSON.stringify(error) as string);
      return null;
    }
  }
}
