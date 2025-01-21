import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AdminService } from "./admin.service";
import { Observable } from "rxjs";

export class RouterGuard implements CanActivate{
    
    constructor(private adminService: AdminService, private router: Router){}


    isAdmin(): boolean{
        const userData = this.adminService.getAllUserData();
        if(!userData){
            return false;
        }
        return true;
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            if(this.isAdmin()){
            return true;
            }
            return false;
        }
        
}