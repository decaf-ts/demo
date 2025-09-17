import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { I18nResourceConfig } from '../engine/interfaces';
import { InjectionToken } from '@angular/core';
import { FunctionLike } from '../engine';
export declare class I18nLoader {
    static loadFromHttp(http: HttpClient): TranslateLoader;
}
export declare function getLocaleContext(clazz: FunctionLike | object | string, suffix?: string): string;
/**
 * @description Generates a localized string by combining locale and phrase
 * @summary This utility function creates a properly formatted locale string by combining
 * a locale identifier with a phrase. It handles edge cases such as empty phrases,
 * missing locales, and phrases that already include the locale prefix. This function
 * is useful for ensuring consistent formatting of localized strings throughout the application.
 *
 * @param {string} locale - The locale identifier (e.g., 'en', 'fr')
 * @param {string | undefined} phrase - The phrase to localize
 * @return {string} The formatted locale string, or empty string if phrase is undefined
 *
 * @function generateLocaleFromString
 * @memberOf module:for-angular
 */
export declare function getLocaleContextByKey(locale: string, phrase: string | undefined): string;
export declare const I18N_CONFIG_TOKEN: InjectionToken<{
    resources: I18nResourceConfig[];
    versionedSuffix: false;
}>;
export declare function I18nLoaderFactory(http: HttpClient): TranslateLoader;
export declare function getI18nLoaderFactoryProviderConfig(resources?: I18nResourceConfig | I18nResourceConfig[], versionedSuffix?: boolean): {
    provide: InjectionToken<{
        resources: I18nResourceConfig[];
        versionedSuffix: false;
    }>;
    useValue: {
        resources: I18nResourceConfig[];
        versionedSuffix: boolean;
    };
};
export declare class MultiI18nLoader implements I18nLoader {
    private http;
    private resources;
    private versionedSuffix;
    constructor(http: HttpClient, resources?: I18nResourceConfig[], versionedSuffix?: boolean);
    private getSuffix;
    getTranslation(lang: string): Observable<TranslationObject>;
}
//# sourceMappingURL=Loader.d.ts.map