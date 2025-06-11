import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { UserLayoutComponent } from './app/components/user-layout/user-layout.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter( [{path:'', component: UserLayoutComponent}])
  ]
})
