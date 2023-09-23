import * as Cookie from "cookie";

/**
 * Decorator that checks if cookies are enabled in the browser before executing the decorated method.
 * If cookies are not available, a warning message is logged and the method is not executed.
 * @param target The target object.
 * @param propertyKey The name of the decorated method.
 * @param descriptor The method descriptor.
 * @returns The updated method descriptor.
 */
function CookiesEnabled(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: unknown[]) {
    const exists = typeof document === "object" && typeof document.cookie === "string";
    if (!exists) {
      console.warn("Cookies are not be available.");
      return;
    }
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

/**
 * @class CookieJar
 * A class representing a cookie jar, designed with a strong emphasis on security to safeguard
 * against potential security threats such as XSS (Cross-Site Scripting) and CSRF (Cross-Site
 * Request Forgery) attacks.
 *
 * @remarks
 * The `CookieJar` class provides a secure and flexible way to manage cookies in a web application.
 * It takes proactive measures to prevent security vulnerabilities by following best practices when
 * handling cookies.
 *
 * - **XSS (Cross-Site Scripting) Mitigation**: The `CookieJar` class ensures that cookies are set
 *   and retrieved in a secure manner, reducing the risk of XSS attacks. It escapes and sanitizes
 *   user input when necessary to prevent malicious script injection.
 *
 * - **CSRF (Cross-Site Request Forgery) Protection**: By carefully managing cookie attributes and
 *   implementing secure defaults, the `CookieJar` class helps protect against CSRF attacks. It
 *   allows you to specify options like "SameSite" to control when cookies are sent in cross-site
 *   requests, enhancing security.
 *
 * - **Flexible Configuration**: You can customize cookie settings and specify additional options
 *   to meet your application's security requirements. The class provides a convenient way to set
 *   and retrieve cookies with the desired attributes.
 *
 * - **Graceful Handling**: In situations where cookies are not available or disabled in the browser,
 *   the `CookieJar` class provides graceful handling. It allows you to choose whether to silently
 *   return or log warnings, ensuring a consistent user experience.
 *
 * When dealing with sensitive user data and authentication tokens, proper cookie management is
 * crucial for maintaining the integrity and security of your web application. The `CookieJar` class
 * empowers developers to implement robust cookie-based solutions while keeping security at the forefront.
 */
export class CookieJar {
  private defaultOptions: Cookie.CookieSerializeOptions;

  constructor(defaultOptions: Cookie.CookieSerializeOptions = {}) {
    this.defaultOptions = defaultOptions;
  }

  /**
   * Retrieves the value of the cookie with the specified key.
   * @param key - The key of the cookie to retrieve.
   * @returns The value of the cookie, or undefined if the cookie does not exist.
   */
  @CookiesEnabled
  public get(key: string): string | undefined {
    const parsed = Cookie.parse(document.cookie);
    return key in parsed ? parsed[key] : undefined;
  }

  /**
   * Sets a cookie with the specified key and value, optionally including additional configuration options.
   *
   * @param {string} key - The name of the cookie.
   * @param {string} value - The value to be stored in the cookie.
   * @param {Cookie.CookieSerializeOptions} [options] - Optional. A string containing additional configuration options
   *                            for the cookie, such as "expires", "secure", "HttpOnly", or "SameSite".
   *                            These options should be in a format compatible with the `document.cookie`
   *                            property. For example, "expires=Thu, 01 Jan 2025 00:00:00 GMT; secure; HttpOnly; SameSite=Strict".
   *
   * @example
   * // Set a basic cookie without additional options
   * const cookieJar = new CookieJar();
   * cookieJar.set("myCookie", "cookieValue");
   *
   * @example
   * // Set a cookie with additional options
   * const cookieJar = new CookieJar();
   * cookieJar.set("myCookie", "cookieValue", { maxAge: 3600, secure: true, SameSite: "Strict" });
   */
  @CookiesEnabled
  public set(key: string, value: string, options: Cookie.CookieSerializeOptions = {}): void {
    const valueStr = typeof value === "string" ? value : JSON.stringify(value);
    document.cookie = Cookie.serialize(key, valueStr, { ...this.defaultOptions, ...options });
  }

  /**
   * Removes a cookie with the specified key.
   *
   * @param {string} key - The name of the cookie to remove.
   *
   * @remarks
   * This method removes a cookie from the client-side browser. It sets the cookie's value to an empty string
   * and adjusts the expiration properties to effectively delete the cookie.
   *
   * @example
   * ```typescript
   * // Instantiate a CookieJar
   * const jar = new CookieJar();
   *
   * // Remove a cookie named "myCookie"
   * jar.remove("myCookie");
   * ```
   *
   * @throws {Error} If cookies are not available in the browser, a warning is logged, and the method does not execute.
   * Cookies may not be available if the browser does not support them or if they are disabled.
   */
  @CookiesEnabled
  public remove(key: string): void {
    const lastOptions = {
      expires: new Date(1970, 1, 1, 0, 0, 1),
      maxAge: 0,
    };
    document.cookie = Cookie.serialize(key, "", lastOptions);
  }
}
