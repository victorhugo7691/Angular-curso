import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export class ErroHandler {
    static handleError(error: Response | any){
        let errorMessage: string;

        if(errorMessage instanceof Response){
            errorMessage = `Erro${error.status} ao obter a url ${error.url}`;
        } else {
            errorMessage = error.toString();
        }

        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}