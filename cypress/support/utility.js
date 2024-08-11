export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV'); 
        if (envi == 'production') 
            return "https://www.facebook.com"; 
        else if (envi == 'staging')
            return "https://google.com";
        else if (envi == 'qa')
            return "http://shoping.com";
    }
}