import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export class ErroHandler {
    static handleError(error: Response | any){
        let errorMessage: string;

        if(error instanceof Response){
            errorMessage = `Erro ${error.status} ao acessar a url ${error.url} - ${error.statusText}`;
        } else {
            errorMessage = error.toString();
        }

        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}     