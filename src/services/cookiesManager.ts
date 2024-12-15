// src/utils/cookieManager.ts
export interface ProductCounter {
    id: number
    cant: number
}

export class CookieManager {
    private cookieName: string = 'selectedProducts';
    private expirationDays: number = 1;

    setCookie(value: ProductCounter[]): void {
        const d = new Date();
        d.setTime(d.getTime() + (this.expirationDays * 24 * 60 * 60 * 1000));
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${this.cookieName}=${JSON.stringify(value)};${expires};path=/`;
    }

    getCookie(): ProductCounter[] {
        const name = `${this.cookieName}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        
        for (let cookie of cookieArray) {
            cookie = cookie.trim();
            if (cookie.indexOf(name) === 0) {
                const cookieValue = cookie.substring(name.length);
                try {
                    return JSON.parse(cookieValue);
                } catch {
                    return [];
                }
            }
        }
        return [];
    }

    clearCookie(): void {
        document.cookie = `${this.cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}

// Exportar una instancia única para usar en toda la aplicación
export const cookieManager = new CookieManager();