import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./services/auth-gaurd.service";
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from "@auth0/angular-jwt";


export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7186"],
        disallowedRoutes: []
      }
  }),
  ToastrModule.forRoot()
  ],
  declarations: [AppComponent, LoginComponent, AdminLayoutComponent],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
