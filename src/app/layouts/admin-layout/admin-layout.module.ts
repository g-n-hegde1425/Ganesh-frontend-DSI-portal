import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserComponent } from "../../users/users.component";
// import { TableListComponent } from "../../table-list/table-list.component";
import { TimesheetsComponent } from "../../timesheets/timesheets.component";
// import { IconsComponent } from "../../icons/icons.component";
// import { MapsComponent } from "../../maps/maps.component";
// import { NotificationsComponent } from "../../notifications/notifications.component";
// import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { IncomeStatementsComponent } from "app/income-statements/income-statements.component";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TimesheetsComponent,
    IncomeStatementsComponent
  ],
})
export class AdminLayoutModule {}
